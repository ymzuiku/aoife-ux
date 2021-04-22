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
export * from "./ux/UxInputCodes";
export * from "./tools";
export * from "./ux/UxNavBar";
export * from "./ux/UxBackButton";
import * as device from "./device";
import { setMobileNotScale } from "./setMobiles";
import { useBaseFlavor } from "./useBaseFlavor";

// setMobileScroll();
setMobileNotScale();
useBaseFlavor();

export { device };
