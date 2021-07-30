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
        <div class="pe:none">
          <h2 class="c:--title-deep">Welcome use aoife-ux</h2>
          <label class="c:--label">
            aoife-ux 是一款每个组件都兼容移动端和桌面端的组件库，使用 aoife-ux
            你可以使用一套代码完成桌面端和移动端的开发。
          </label>
        </div>
      </UxCell>
      <UxCell>
        <div class="g-cols:auto|1fr gap:--a2">
          <div class="s:80px bg:--gray-deep r:--r"></div>
          <div class="pe:none">
            <h2 class="c:--title-deep">Cell</h2>
            <label class="c:--label">带图片的Cell</label>
          </div>
        </div>
      </UxCell>
    </DemoView>
  );
};
