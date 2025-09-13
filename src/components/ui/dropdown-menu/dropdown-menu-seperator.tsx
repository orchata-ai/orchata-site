import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-dropdown-menu";

/**
 * Dropdown menu separator
 * This component contains the dropdown menu separator
 * component.
 * @returns JSX.Element
 */
export function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="dropdown-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}
