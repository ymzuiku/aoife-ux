import { UxSwipe } from "../../../lib";
import { DemoView } from "./DemeView";

export default () => {
  return (
    <DemoView>
      <UxSwipe class="h:300px bg:--gray">
        <div class="h:100% oy:auto">
          {Array(200)
            .fill(0)
            .map((v, i) => {
              return <div>aaaaa {i}</div>;
            })}
        </div>
        <div>bbb</div>
        <div>ccc</div>
        <div>ddd</div>
      </UxSwipe>
      <div class="ox:auto h:400px f-row w:100% scroll-snap-type:x|mandatory >*:scroll-snap-align:start >*:f:0|0|100%">
        <div class="bg:--warn">aaaa</div>
        <div class="bg:--info">bbb</div>
        <div class="bg:--error">ccc</div>
      </div>
    </DemoView>
  );
};
