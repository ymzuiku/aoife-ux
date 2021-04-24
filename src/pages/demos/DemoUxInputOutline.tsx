import { UxInputOutline } from "../../../lib";
import { DemoView } from "./DemeView";

export default () => {
  const state = {
    num: "",
  };

  let out: HTMLElement;

  return (
    <DemoView ref={(e: any) => (out = e)}>
      <h1>{() => state.num}</h1>
      <UxInputOutline
        oninput={(e) => {
          state.num = e.target.value;
          aoife.next(out);
        }}
      >
        Small Click Me
      </UxInputOutline>
    </DemoView>
  );
};
