export * from "./UxButton";
export * from "./UxTipInput";
export * from "./UxApp";
export * from "./UxSelect";
export * from "./UxSendCode";
export * from "./UxSelect";
export * from "./UxModel";
export * from "./UxAlert";
export * from "./UxLayout";
export * from "./UxCell";
export * from "./UxAppTab";
export * from "./UxSwipe";

import "flavorcss";
import * as device from "./device";
import { useBaseFlavor } from "./useBaseFlavor";

useBaseFlavor();
device.setMobileNotScale();
device.setKeyboardAutoHide();

export { device };
