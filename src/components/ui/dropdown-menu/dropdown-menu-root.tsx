import { Root } from "@radix-ui/react-dropdown-menu";
/**
 * Dropdown menu
 * This component contains the dropdown menu primitive
 * component.
 * @returns JSX.Element
 */
export function DropdownMenu({ ...props }: React.ComponentProps<typeof Root>) {
  return <Root data-slot="dropdown-menu" {...props} />;
}
