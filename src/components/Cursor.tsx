import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dot.current) {
        dot.current.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
      }
    };
    const hoverOn = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-magnetic]")) setHover(true);
    };
    const hoverOff = () => setHover(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", hoverOn);
    window.addEventListener("mouseout", hoverOff);

    let raf = 0;
    const loop = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.15;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", hoverOn);
      window.removeEventListener("mouseout", hoverOff);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Hide on touch
  const [touch, setTouch] = useState(false);
  useEffect(() => {
    const t = matchMedia("(pointer: coarse)").matches;
    setTouch(t);
  }, []);
  if (touch) return null;

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-gold mix-blend-difference"
      />
      <div
        ref={ring}
        className={`pointer-events-none fixed left-0 top-0 z-[100] h-10 w-10 rounded-full border border-gold/60 transition-[width,height,opacity,background] duration-300 ${
          hover ? "scale-150 bg-gold/10" : ""
        }`}
        style={{ boxShadow: "0 0 30px oklch(0.78 0.13 82 / 40%)" }}
      />
    </>
  );
}
