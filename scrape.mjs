import { chromium } from 'playwright';
import { writeFileSync } from 'fs';

const browser = await chromium.launch();
const page = await browser.newPage();

await page.goto('https://portfolio-gilt-eight-4wuuxe9yql.vercel.app/', { waitUntil: 'networkidle' });
await page.waitForTimeout(3000);

// Get full HTML
const html = await page.content();
writeFileSync('scraped.html', html);

// Get all text content per section
const data = await page.evaluate(() => {
  const result = {
    title: document.title,
    meta: {},
    sections: [],
    styles: [],
    fonts: [],
    colors: new Set(),
    allText: document.body.innerText,
  };

  // Meta tags
  document.querySelectorAll('meta').forEach(m => {
    if (m.name) result.meta[m.name] = m.content;
  });

  // Sections / main structural elements
  const sectionSelectors = ['header', 'nav', 'section', 'footer', 'main', '[id]', '[class*="section"]', '[class*="hero"]', '[class*="about"]', '[class*="skill"]', '[class*="project"]', '[class*="contact"]', '[class*="work"]'];

  sectionSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      const text = el.innerText?.trim();
      if (text && text.length > 0) {
        result.sections.push({
          tag: el.tagName,
          id: el.id,
          classes: el.className,
          text: text.substring(0, 2000),
          children: el.children.length,
        });
      }
    });
  });

  // All computed styles from key elements
  const keyEls = document.querySelectorAll('body, h1, h2, h3, p, a, button, nav, header, footer, section');
  keyEls.forEach(el => {
    const cs = window.getComputedStyle(el);
    result.styles.push({
      tag: el.tagName,
      id: el.id,
      class: el.className?.toString().substring(0, 100),
      color: cs.color,
      bg: cs.backgroundColor,
      font: cs.fontFamily,
      fontSize: cs.fontSize,
      fontWeight: cs.fontWeight,
    });
  });

  // Google Fonts links
  document.querySelectorAll('link[href*="fonts.google"]').forEach(l => {
    result.fonts.push(l.href);
  });

  return result;
});

writeFileSync('scraped_data.json', JSON.stringify(data, null, 2));
console.log('Title:', data.title);
console.log('All text:\n', data.allText);

// Screenshot
await page.screenshot({ path: 'screenshot.png', fullPage: true });

// Get all CSS
const cssHandles = await page.$$('style, link[rel="stylesheet"]');
let allCSS = '';
for (const h of cssHandles) {
  const tag = await h.evaluate(el => el.tagName);
  if (tag === 'STYLE') {
    const css = await h.evaluate(el => el.textContent);
    allCSS += css + '\n';
  }
}
writeFileSync('scraped_styles.css', allCSS);

await browser.close();
console.log('Done!');
