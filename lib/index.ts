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
export * from "./ux/UxColorsDebug";
export * from "./tools";
import * as device from "./device";
import { useMobileScroll } from "./useMobileScroll";
import { useBaseFlavor } from "./useBaseFlavor";

useMobileScroll();

useBaseFlavor();
device.setMobileNotScale();
// device.setKeyboardAutoHide();

export { device };
