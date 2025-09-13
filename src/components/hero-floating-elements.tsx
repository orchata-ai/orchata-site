/**
 * Hero floating elements
 * This component contains the floating elements and their animations
 * for the main landing page hero section.
 * @returns JSX.Element
 */
export function HeroFloatingElements() {
  return (
    <>
      <div
        className="floating-element"
        style={{ top: "25%", left: "15%", animationDelay: "3s" }}
      ></div>
      <div
        className="floating-element"
        style={{ top: "60%", left: "85%", animationDelay: "3.5s" }}
      ></div>
      <div
        className="floating-element"
        style={{ top: "40%", left: "10%", animationDelay: "4s" }}
      ></div>
      <div
        className="floating-element"
        style={{ top: "75%", left: "90%", animationDelay: "4.5s" }}
      ></div>
    </>
  );
}
