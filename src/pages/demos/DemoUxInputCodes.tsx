import { UxInputCodes } from "../../../lib";
import { DemoView } from "./DemeView";

export default () => {
  const state = {
    num: "",
  };

  let out: HTMLElement;

  return (
    <DemoView ref={(e: any) => (out = e)}>
      <h1>{() => state.num}</h1>
      <UxInputCodes
        oninput={(e) => {
          state.num = e;
          aoife.next(out);
        }}
      ></UxInputCodes>
    </DemoView>
  );
};
