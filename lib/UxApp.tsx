import { UxAppTabProps, UxAppTab } from "./UxAppTab";
import { getRender } from "./tools";

export interface UxAppProps extends UxAppTabProps {}

export function UxApp({ children, className, data }: UxAppProps) {
  const childs = [] as HTMLElement[];

  async function changeDisplay(num: number) {
    if (!childs[num] && data[num].page) {
      childs[num] = await getRender(data[num].page);
      const last = page.children.item(num);
      if (last) {
        console.log(childs[num]);
        last.replaceWith(childs[num]);
      }
    }

    for (let i = 0; i < data.length; i++) {
      const ele = page.children.item(i) as HTMLElement;
      if (i === num) {
        ele.style.display = "grid";
      } else {
        ele.style.display = "none";
      }
    }
  }

  const page = (
    <div class="overflow-y:auto overflowy-x:">
      {Array(data.length)
        .fill(0)
        .map(() => (
          <div></div>
        ))}
    </div>
  ) as HTMLElement;

  changeDisplay(0);

  return (
    <div class={["h:100% rows:1fr|auto", className]}>
      {page}
      <UxAppTab
        data={data}
        onChange={(i) => {
          changeDisplay(i);
        }}
      />
    </div>
  );
}
