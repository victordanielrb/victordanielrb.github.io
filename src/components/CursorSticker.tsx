import { useEffect, useRef } from 'react'

const INTERACTIVE = 'a, button, [role="button"]'

export default function CursorSticker() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let frame = 0
    let x = 0
    let y = 0

    // One style write per frame, no matter how many mousemove events land.
    const paint = () => {
      frame = 0
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`
      if (el.dataset.placed !== 'true') {
        // Let this first position land un-transitioned; enabling the trailing
        // lag any earlier sends the sticker flying in from the top-left corner.
        requestAnimationFrame(() => {
          el.dataset.placed = 'true'
        })
      }
    }

    const onMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
      const target = e.target
      el.dataset.interactive =
        target instanceof Element && target.closest(INTERACTIVE) ? 'true' : 'false'
      el.dataset.visible = 'true'
      if (!frame) frame = requestAnimationFrame(paint)
    }

    const onPress = () => {
      el.dataset.press = 'true'
    }
    const onRelease = () => {
      el.dataset.press = 'false'
    }
    const onExit = () => {
      el.dataset.visible = 'false'
      el.dataset.press = 'false'
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mousedown', onPress)
    window.addEventListener('mouseup', onRelease)
    document.addEventListener('mouseleave', onExit)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onPress)
      window.removeEventListener('mouseup', onRelease)
      document.removeEventListener('mouseleave', onExit)
    }
  }, [])

  return (
    <div ref={ref} className="cursor-sticker" aria-hidden="true">
      <span className="cursor-sticker__body">
        <span className="cursor-sticker__mark" />
      </span>
    </div>
  )
}
