const ua = navigator.userAgent.toLocaleLowerCase();
export const isAndroid = /(?:android)/.test(ua);
export const isIOS = /(?:iphone)/.test(ua);
export const isPc = !isIOS && !isAndroid;
export const isNeedSafeBottom = isIOS && window.screen.height >= 812;
export const isNeedSafeTop = window.location.href.indexOf("native") > -1;

export const setMobileCss = () => {
  if (isPc || (window as any).__setMobileCss) {
    return;
  }

  (window as any).__setCanNotScale = true;
  // touch-action: manipulation; 启用平移和捏合缩放手势，但禁用其他非标准手势
  const nextCss = `
    * {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      -moz-user-select:none; -webkit-user-select:none; -ms-user-select:none; user-select:none; 
      touch-action: manipulation;
    }
    .can-user-select, input, textarea {
      -moz-user-select:auto; -webkit-user-select:auto;-ms-user-select:auto; user-select:auto;
    }
  `;

  const styleEle = document.createElement("style");
  styleEle.textContent = nextCss;

  const mateEle = document.createElement("meta");
  mateEle.setAttribute("name", "viewport");
  mateEle.setAttribute(
    "content",
    "width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui, viewport-fit=cover"
  );

  document.head.append(styleEle, mateEle);

  /** 阻止双指放大; */
  document.addEventListener("gesturestart", function (event: any) {
    event.preventDefault();
  });
};

export const setKeyboardAutoHide = () => {
  if (isPc || (window as any).__setKeyboardAutoHide) {
    return;
  }

  (window as any).__setKeyboardAutoHide = true;
  // 处理ios移动端键盘自动收起，并且回到页面滚动位置
  let bodyScrollTop = 0;
  let windowScrollTop = 0;
  let keyboardFocusInput: any;
  let keyboardTimer = null as any;
  const bindBlurKeyboard = (e: any) => {
    if (keyboardFocusInput && keyboardFocusInput.blur) {
      keyboardFocusInput.blur();
    }
  };

  document.body.addEventListener("focusin", (e: any) => {
    if (keyboardTimer) {
      clearTimeout(keyboardTimer);
      keyboardTimer = null;
    }
    // 软键盘弹起事件
    keyboardFocusInput = e.target;

    keyboardTimer = setTimeout(() => {
      document.body.addEventListener("click", bindBlurKeyboard);
    }, 60);
  });
  document.body.addEventListener("focusout", () => {
    // 软键盘关闭事件
    keyboardFocusInput = void 0;
    document.body.removeEventListener("click", bindBlurKeyboard);
  });
};

export const setAutoScrollToFocusInput = () => {
  window.addEventListener("resize", () => {
    if (document.activeElement && document.activeElement.tagName === "INPUT") {
      document.activeElement.scrollIntoView();
    }
  });
};
