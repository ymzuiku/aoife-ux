import { UxNavBar } from "../../../lib";
import { demoData } from "../DemoList";

export const DemoView = ({ title, children }: IProps) => {
  const p = location.pathname;
  const item = demoData.find((item) => item.url === p);
  const out = (
    <div class="s:100%">
      <UxNavBar onlyMobile />
      <div class="p:--a2">
        <h2 class="mb:--a2">{item.title} Example:</h2>
        <p class="mb:--a2">{item.info}</p>
        {children}
      </div>
    </div>
  );
  return out;
};
