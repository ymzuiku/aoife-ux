import { UxNavBar } from "../../../lib";
import { demoData } from "../DemoList";

export const DemoView = ({ title, children, ...rest }: IProps) => {
  const p = location.pathname;
  const item = demoData.find((item) => item.url === p)!;
  console.log(item, 'aaaa');
  const out = (
    <div class="s:100% g-rows:auto|1fr" {...rest}>
      <UxNavBar onlyMobile />
      <div class="p:--a2 oy:auto">
        <h2 class="mb:--a2">{item.title} Example:</h2>
        <p class="mb:--a2">{item.info}</p>
        {children}
      </div>
    </div>
  );
  return out;
};
