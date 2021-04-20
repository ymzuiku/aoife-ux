import { isPc } from "./device";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export const useMobileScroll = () => {
  if (!isPc) {
    disableBodyScroll(document.body);
  }

  aoife.use((ele, props) => {
    if (props["scroll-y"]) {
      ele.style.overflowY = "auto";
      ele.style.maxHeight = "100vh";
      (ele.style as any).webkitOverflowScrolling = "touch";
      enableBodyScroll(ele);
    } else if (props["scroll-x"]) {
      ele.style.overflowX = "auto";
      ele.style.maxWidth = "100vw";
      (ele.style as any).webkitOverflowScrolling = "touch";
      enableBodyScroll(ele);
    }
  });
};
