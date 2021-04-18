export * from "./ux/UxButton";
export * from "./ux/UxApp";
export * from "./ux/UxSelect";
export * from "./ux/UxSendCode";
export * from "./ux/UxSelect";
export * from "./ux/UxModel";
export * from "./ux/UxAlert";
export * from "./ux/UxCell";
export * from "./ux/UxAppTab";
export * from "./ux/UxSwipe";
export * from "./ux/UxInputTip";
export * from "./ux/UxInputWeak";
export * from "./ux/UxInputOut";
export * from "./ux/UxMessage";
export * from "./tools";

import * as device from "./device";
import { useBaseFlavor } from "./useBaseFlavor";

useBaseFlavor();
device.setMobileNotScale();
device.setKeyboardAutoHide();

export { device };
