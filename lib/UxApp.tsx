import { UxAppTabProps, UxAppTab } from "./UxAppTab";

export interface UxAppProps extends UxAppTabProps {}

function changeDisplay(children: any, num: number) {
  children.forEach((ch: HTMLElement, i: number) => {
    if (i === num) {
      ch.style.display = "grid";
    } else {
      ch.style.display = "none";
    }
  });
}

export function UxApp({ children, className, data }: UxAppProps) {
  const page = <div class="overflow-y:auto overflowy-x:">{children}</div>;
  changeDisplay(children, 0);
  return (
    <div class={["h:100% rows:1fr|auto", className]}>
      {page}
      <UxAppTab
        data={data}
        onchange={(i) => {
          changeDisplay(children, i);
          aoife.next(page);
        }}
      />
    </div>
  );
}
