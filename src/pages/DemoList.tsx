import Route from "aoife-route";
import { UxCell } from "../../lib";

export const demoData = [
  {
    title: "UxCell",
    info: "用在列表中的行",
    url: "/demos/DemoUxCell",
    render: () => import("./demos/DemoUxCell"),
  },
  {
    title: "UxAlert",
    info: "内容自定义的弹框",
    url: "/demos/DemoUxAlert",
    render: () => import("./demos/DemoUxAlert"),
  },
  {
    title: "UxBackButton",
    info: "用于移动端的导航条的返回按钮",
    url: "/demos/DemoUxBackButton",
    render: () => import("./demos/DemoUxBackButton"),
  },
  {
    title: "UxNavBar",
    info: "用于移动端的导航条，兼容 iOS 安全区",
    url: "/demos/DemoUxNavBar",
    render: () => import("./demos/DemoUxNavBar"),
  },
];

export default () => {
  return (
    <div>
      <h2 class="fs:30px p:--a2">Aoife UX Example</h2>
      {demoData.map((item, i) => {
        return (
          <UxCell
            onclick={() => {
              Route.push(item.url);
            }}
            topCell={i === 0}
          >
            <div>
              <div class="fs:1em c:--text-deep">{item.title}</div>
              <div class="fs:0.8em c:--label">{item.info}</div>
            </div>
          </UxCell>
        );
      })}
    </div>
  );
};
