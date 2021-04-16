export * from "./ux/UxButton";
export * from "./ux/UxTipInput";
export * from "./ux/UxApp";
export * from "./ux/UxSelect";
export * from "./ux/UxSendCode";
export * from "./ux/UxSelect";
export * from "./ux/UxModel";
export * from "./ux/UxAlert";
export * from "./ux/UxCell";
export * from "./ux/UxAppTab";
export * from "./ux/UxSwipe";
export * from "./ux/UxSimpleInput";
export * from "./ux/UxMessage";
export * from "./tools";

import "flavorcss";
import * as device from "./device";
import { useBaseFlavor } from "./useBaseFlavor";

useBaseFlavor();
device.setMobileNotScale();
device.setKeyboardAutoHide();

export { device };
