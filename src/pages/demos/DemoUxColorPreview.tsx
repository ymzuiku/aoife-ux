import { UxColorsPreview } from "../../../lib";
import { DemoView } from "./DemeView";

export default () => {
  const state = {
    num: 0,
  };

  let out: HTMLElement;

  return (
    <DemoView ref={(e: any) => (out = e)}>
      <div>
        <UxColorsPreview />
      </div>
    </DemoView>
  );
};
