export * from "./UxButton";
export * from "./UxInput";
export * from "./UxApp";
export * from "./UxSelect";
export * from "./UxSendCode";
export * from "./UxItem";
export * from "./UxSelect";
export * from "./UxModel";
export * from "./UxAlert";
export * from "./UxRedBox";
export * from "./UxLayout";
export * from "./UxCell";
export * from "./UxAppTab";
export * from "./UxSwipe";

import * as device from "./device";
import { useBaseCss } from "./useBaseCss";

useBaseCss();
device.setMobileCss();
device.setKeyboardAutoHide();

export { device };
// setAutoScrollToFocusInput();
