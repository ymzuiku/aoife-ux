import { UxMessage, UxButton } from "../../../lib";
import { DemoView } from "./DemeView";

export default () => {
  let out: HTMLElement;

  return (
    <DemoView ref={(e: any) => (out = e)}>
      <div class="f-col gap:--a2">
        <UxButton
          onclick={(e) => {
            UxMessage.info("Hello info");
          }}
        >
          Info Message Click Me
        </UxButton>
        <UxButton
          onclick={(e) => {
            UxMessage.error("Hello error");
          }}
        >
          Error Message Click Me
        </UxButton>
        <UxButton
          onclick={(e) => {
            UxMessage.error(
              <div class="p:--a2|--a6 bg:--black-0">
                <h2>Hello Big</h2>
              </div>
            );
          }}
        >
          Customer Message Click Me
        </UxButton>
      </div>
    </DemoView>
  );
};
