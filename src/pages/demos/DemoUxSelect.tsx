import { UxCell, UxSelect } from "../../../lib";
import { DemoView } from "./DemeView";

export default () => {
  return (
    <DemoView>
      <div class="f-col gap:--a2">
        <UxSelect>
          <option>请选择</option>
          <option>Dog</option>
          <option>Cat</option>
        </UxSelect>
        <UxSelect class="w:80% b-px:none bg:--gray-weak :hover:bg:--gray">
          <option>请选择</option>
          <option>Dog</option>
          <option>Cat</option>
        </UxSelect>
        <UxSelect class="w:50% h:--a6 b-px:--disable-weak r:--r">
          <option>请选择</option>
          <option>Dog</option>
          <option>Cat</option>
        </UxSelect>
      </div>
    </DemoView>
  );
};
