import { UxBackButton } from "./UxBackButton";

interface NavBarProps extends IProps {
  left?: any;
  right?: any;
}

export const UxNavBar = ({ title, left, right }: NavBarProps) => {
  return (
    <div class="p-safe-top">
      <nav class="px:--a1 h:--a5 bg:--light f-row ai:center shadow:0|3px|6px|--black-5 safe-top">
        <div class="flex:1">{left || <UxBackButton />}</div>
        <div class="flex:3 ta:center">{title}</div>
        <div class="flex:1">{right}</div>
      </nav>
    </div>
  );
};
