import { useEffect } from "react";
import { HeroGrid } from "./hero-grid";
import { HeroCornerElements } from "./hero-corner-elements";
import { HeroFloatingElements } from "./hero-floating-elements";
import { HeroContent } from "./hero-content";
import { HeroMouseGradient } from "./hero-mouse-gradient";

/**
 * Hero
 * This component contains the hero and its components
 * for the main landing page hero section.
 * @returns JSX.Element
 */
export function Hero() {

  useEffect(() => {
    const words = document.querySelectorAll<HTMLElement>(".word");
    words.forEach((word) => {
      const delay = parseInt(word.getAttribute("data-delay") || "0", 10);
      setTimeout(() => {
        word.style.animation =
          "word-appear 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards";
      }, delay);
    });

    words.forEach((word) => {
      word.addEventListener("mouseenter", () => {
        word.style.textShadow = "0 0 20px rgba(200, 180, 160, 0.5)";
      });
      word.addEventListener("mouseleave", () => {
        word.style.textShadow = "none";
      });
    });

    function onClick(e: MouseEvent) {
      const ripple = document.createElement("div");
      ripple.style.position = "fixed";
      ripple.style.left = e.clientX + "px";
      ripple.style.top = e.clientY + "px";
      ripple.style.width = "4px";
      ripple.style.height = "4px";
      ripple.style.background = "rgba(200, 180, 160, 0.6)";
      ripple.style.borderRadius = "50%";
      ripple.style.transform = "translate(-50%, -50%)";
      ripple.style.pointerEvents = "none";
      ripple.style.animation = "pulse-glow 1s ease-out forwards";
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1000);
    }
    document.addEventListener("click", onClick);

    let scrolled = false;
    function onScroll() {
      if (!scrolled) {
        scrolled = true;
        document
          .querySelectorAll<HTMLElement>(".floating-element")
          .forEach((el, index) => {
            setTimeout(() => {
              el.style.animationPlayState = "running";
            }, index * 200);
          });
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div className="h-[calc(100vh-84px)] bg-gradient-to-br from-background via-background to-muted text-foreground font-sans overflow-hidden relative w-full">
        <HeroGrid />
        <HeroCornerElements />
        <HeroFloatingElements />
        <HeroContent />
        <HeroMouseGradient />
      </div>
    </>
  );
}
