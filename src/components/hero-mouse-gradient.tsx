import { useEffect, useRef } from "react";

/**
 * Hero mouse gradient
 * This component contains the mouse gradient and its animations
 * for the main landing page hero section.
 * @returns JSX.Element
 */
export function HeroMouseGradient() {
  const gradientRef = useRef<HTMLDivElement>(null);

  function onMouseMove(e: MouseEvent) {
    const gradient = gradientRef.current;
    if (gradient) {
      gradient.style.left = e.clientX - 192 + "px";
      gradient.style.top = e.clientY - 192 + "px";
      gradient.style.opacity = "1";
    }
  }

  function onMouseLeave() {
    const gradient = gradientRef.current;
    if (gradient) gradient.style.opacity = "0";
  }

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div
      id="mouse-gradient"
      ref={gradientRef}
      className="fixed pointer-events-none w-96 h-96 rounded-full blur-3xl transition-all duration-500 ease-out opacity-0"
      style={{
        background: `radial-gradient(circle, oklch(0.74 0.15 36.42 / 0.05) 0%, transparent 100%)`,
      }}
    ></div>
  );
}
