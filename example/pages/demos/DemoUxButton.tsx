import { UxButton } from "../../../lib";
import { DemoView } from "./DemeView";

export default () => {
  const state = {
    num: 0,
  };

  let out: HTMLElement;

  return (
    <DemoView ref={(e: any) => (out = e)}>
      <h1>{() => state.num}</h1>

      <UxButton
        class="h:--a3 m:--a1"
        onclick={(e) => {
          state.num += 1;
          aoife.next(out);
        }}
      >
        Small Click Me
      </UxButton>

      <UxButton
        onclick={(e) => {
          state.num += 1;
          aoife.next(out);
        }}
      >
        Normal Click Me
      </UxButton>

      <UxButton
        class="h:--a6 m:--a1"
        onclick={(e) => {
          state.num += 1;
          aoife.next(out);
        }}
      >
        Big Click Me
      </UxButton>
    </DemoView>
  );
};
