import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-dropdown-menu";

/**
 * Dropdown menu label
 * This component contains the dropdown menu label component.
 * @returns JSX.Element
 */
export function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof Label> & {
  inset?: boolean;
}) {
  return (
    <Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  );
}
