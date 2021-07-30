import { UxSwipe } from "../../../lib";
import { DemoView } from "./DemeView";

export default () => {
  const state = {
    item: "0",
  };
  const h2 = <h2>{() => state.item}</h2>;
  return (
    <DemoView>
      {h2}
      <div class="b-px:gray-deep">
        <UxSwipe
          class="h:300px >*:br-px:--gray >*:g-col >*:s:100% >*>*:g-col >*>*:pc:center"
          onChange={(item) => {
            state.item = JSON.stringify(item);
            aoife.next(h2);
          }}
        >
          <div class="bg:--black-10">aaa</div>
          <div class="bg:--black-15">bbb</div>
          <div class="bg:--black-20">ccc</div>
          <div class="bg:--black-25">ddd</div>
        </UxSwipe>
      </div>
    </DemoView>
  );
};
