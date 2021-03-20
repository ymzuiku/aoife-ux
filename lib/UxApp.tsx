import { UxAppTabProps, UxAppTab } from "./UxAppTab";
import { getRender } from "./getRender";

export interface UxAppProps extends UxAppTabProps {}

export function UxApp({ children, className, data }: UxAppProps) {
  const childs = [] as HTMLElement[];

  async function changeDisplay(num: number) {
    if (!childs[num] && data[num].page) {
      childs[num] = await getRender(data[num].page);
      const last = page.children.item(num);
      if (last) {
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
    <div>
      {Array(data.length)
        .fill(0)
        .map(() => (
          <div></div>
        ))}
    </div>
  ) as HTMLElement;

  changeDisplay(0);

  return (
    <div>
      {page}
      <div class="w:1px h:100px"></div>
      <UxAppTab
        class="pos:fixed bottom:0px left:0px"
        data={data}
        onChange={(i) => {
          changeDisplay(i);
        }}
      />
    </div>
  );
}
