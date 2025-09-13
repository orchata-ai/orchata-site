import { cn } from "@/lib/utils";
import { SubContent } from "@radix-ui/react-dropdown-menu";

/**
 * Dropdown menu sub content
 * This component contains the dropdown menu sub content
 * for the site.
 * @returns JSX.Element
 */
export function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof SubContent>) {
  return (
    <SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )}
      {...props}
    />
  );
}
