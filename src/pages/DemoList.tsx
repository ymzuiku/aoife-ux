import Route from "aoife-route";
import { UxCell } from "../../lib";

export const demoData = [
  {
    title: "UxNavBar",
    info: "用于移动端的导航条，兼容 iOS 安全区",
    url: "/demos/DemoUxNavBar",
    render: () => import("./demos/DemoUxNavBar"),
  },
  {
    title: "UxBackButton",
    info: "用于移动端的导航条的返回按钮",
    url: "/demos/DemoUxBackButton",
    render: () => import("./demos/DemoUxBackButton"),
  },
];

export default () => {
  return (
    <div>
      <h2 class="fs:30px p:--a2">UX List</h2>
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
