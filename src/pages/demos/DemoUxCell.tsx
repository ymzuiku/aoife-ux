import { UxCell } from "../../../lib";
import { DemoView } from "./DemeView";

export default () => {
  return (
    <DemoView>
      <UxCell topCell>
        <div>hello</div>
      </UxCell>
      <UxCell>
        <div>world</div>
      </UxCell>
      <UxCell>
        <h2 class="c:--title-deep">Welcome use aoife-ux</h2>
        <label class="c:--label">
          aoife-ux 是一款每个组件都兼容移动端和桌面端的组件库，使用 aoife-ux
          你可以使用一套代码完成桌面端和移动端的开发。
        </label>
      </UxCell>
      <UxCell>
        <div class=""></div>
        <div>
          <h2 class="c:--title-deep">Welcome use aoife-ux</h2>
          <label class="c:--label">
            aoife-ux 是一款每个组件都兼容移动端和桌面端的组件库，使用 aoife-ux
            你可以使用一套代码完成桌面端和移动端的开发。
          </label>
        </div>
      </UxCell>
    </DemoView>
  );
};
