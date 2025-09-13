import { RadioGroup } from "@radix-ui/react-dropdown-menu";

/**
 * Dropdown menu radio group
 * This component contains the dropdown menu radio group component.
 * @returns JSX.Element
 */
export function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof RadioGroup>) {
  return <RadioGroup data-slot="dropdown-menu-radio-group" {...props} />;
}
