import { UxBackButton } from "./UxBackButton";

interface NavBarProps extends IProps {
  left?: any;
  right?: any;
  backLabel?: string | (() => string);
  onlyMobile?: boolean;
}

export const UxNavBar = ({
  backLabel,
  title,
  left,
  right,
  onlyMobile,
  className,
  ...rest
}: NavBarProps) => {
  return (
    <div
      class={["p-safe-top z:100", onlyMobile && "d:black sm:d:none", className].join(' ')}
      {...rest}
    >
      <nav class="px:--a1 h:--a5 bg:--light f-row ai:center shadow:0|2px|6px|--black-5">
        <div>{left || <UxBackButton label={backLabel} />}</div>
        <div class="flex:1 ta:center">{title}</div>
        <div>{right}</div>
      </nav>
    </div>
  );
};
