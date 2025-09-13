/**
 * Huggingface icon
 * This component contains the huggingface icon and its link
 * for the main landing page hero section.
 * It's really a PNG though... lol.
 * @returns JSX.Element
 */
export function HuggingfaceIcon() {
  return (
    <div className="size-7">
      <a
        href="https://huggingface.co/orchata-ai"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/huggingface.png" alt="Huggingface" />
      </a>
    </div>
  );
}
