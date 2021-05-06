import css from "template-css";
import { UxInputTip } from "./UxInputTip";
import { NanoStorage } from "nano-storage";

interface UxSendCodeProps extends IProps {
  localKey?: string;
  waitTime?: number;
  /* 返回 bool，用于判断是否开始倒计时 */
  onSend?: (event: Event) => Promise<boolean>;
}

export function UxInputSendCode({
  localKey = "ux-send-code",
  onSend,
  waitTime = 10,
  children,
  version,
  ...rest
}: UxSendCodeProps) {
  const local = NanoStorage(localKey, { now: 0 }, { version });
  const isWaiting = () => {
    return local.now + waitTime * 1000 > Date.now();
  };
  const getTime = () => {
    return ~~((local.now + waitTime * 1000 - Date.now()) / 1000);
  };
  let timer: any;
  // 计算倒计时
  const resetTime = () => {
    if (isWaiting()) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(resetTime, 1000);
    } else {
      local.reinit();
    }
    aoife.next(button);
  };

  const _onSend = async (e: Event) => {
    // 倒计时结束之前不可点击
    if (isWaiting()) {
      return;
    }
    if (onSend) {
      const isNeedSend = await Promise.resolve(onSend(e));
      if (!isNeedSend || (isNeedSend as any).error) {
        return;
      }
    }
    const input = out.querySelector("input");
    if (input) {
      input.focus();
    }
    local.set({ now: Date.now() });
    resetTime();
  };
  const button = (
    <button
      type="button"
      tabIndex={1}
      debounce="onclick"
      onclick={_onSend}
      class={() => ["ux-send-code", isWaiting() && "js-loading"].join(' ')}
    >
      {() => (isWaiting() ? getTime() : children![1] || "发送验证码")}
    </button>
  );

  if (isWaiting()) {
    aoife(button, {onAppend: resetTime});
  }

  const out = (
    <UxInputTip right={button} {...rest}></UxInputTip>
  ) as HTMLElement;
  return out;
}

css`
  .ux-send-code {
    color: var(--light);
    background: var(--primary);
    font-weight: 500;
    margin: 6px;
    font-size: 16px;
    padding: 0 20px;
    min-width: 80px;
    border-radius: var(--r);
  }
  .ux-send-code * {
    cursor: pointer;
  }
  @media (pointer: fine) {
    .ux-send-code:hover {
      background: var(--primary-deep);
    }
  }
  .ux-send-code.js-loading {
    font-size: 20px;
    font-weight: 400;
    color: var(--light);
    background: var(--disable);
  }
`;
