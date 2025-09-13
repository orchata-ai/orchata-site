/**
 * Hero corner elements
 * This component contains the corner elements and their animations
 * for the main landing page hero section.
 * @returns JSX.Element
 */
export function HeroCornerElements() {
  return (
    <>
      <div
        className="corner-element top-8 left-8"
        style={{ animationDelay: "3s" }}
      >
        <div className="absolute top-0 left-0 w-2 h-2 opacity-30 bg-primary"></div>
      </div>
      <div
        className="corner-element top-8 right-8"
        style={{ animationDelay: "3.2s" }}
      >
        <div className="absolute top-0 right-0 w-2 h-2 opacity-30 bg-primary"></div>
      </div>
      <div
        className="corner-element bottom-8 left-8"
        style={{ animationDelay: "3.4s" }}
      >
        <div className="absolute bottom-0 left-0 w-2 h-2 opacity-30 bg-primary"></div>
      </div>
      <div
        className="corner-element bottom-8 right-8"
        style={{ animationDelay: "3.6s" }}
      >
        <div className="absolute bottom-0 right-0 w-2 h-2 opacity-30 bg-primary"></div>
      </div>
    </>
  );
}
