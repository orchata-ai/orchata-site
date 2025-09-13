import { SubTrigger } from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";

/**
 * Dropdown menu sub trigger
 * This component contains the dropdown menu sub trigger component.
 * @returns JSX.Element
 */
export function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof SubTrigger> & {
  inset?: boolean;
}) {
  return (
    <SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </SubTrigger>
  );
}
