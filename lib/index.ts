export * from "./UxButton";
export * from "./UxTipInput";
export * from "./UxApp";
export * from "./UxSelect";
export * from "./UxSendCode";
export * from "./UxSelect";
export * from "./UxModel";
export * from "./UxAlert";
export * from "./UxCell";
export * from "./UxAppTab";
export * from "./UxSwipe";
export * from "./UxSimpleInput";
export * from "./UxMessage";
export * from "./tools";

import "flavorcss";
import * as device from "./device";
import { useBaseFlavor } from "./useBaseFlavor";

useBaseFlavor();
device.setMobileNotScale();
device.setKeyboardAutoHide();

export { device };
