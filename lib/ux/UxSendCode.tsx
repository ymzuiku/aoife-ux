import css from "template-css";
import { UxInputTip } from "./UxInputTip";
import { NanoStorage } from "nano-storage";

interface UxSendCodeProps extends IProps {
  localKey?: string;
  waitTime?: number;
  /* 返回 bool，用于判断是否开始倒计时 */
  onSend?: (event: IInputEvnet) => Promise<boolean>;
}

export function UxSendCode({
  localKey = "ux-send-code",
  onSend,
  waitTime = 10,
  children,
  version,
  ...rest
}: UxSendCodeProps) {
  const local = NanoStorage(localKey, { now: 0 }, { version });
  const isWaiting = () => {
    return local.now > Date.now();
  };
  const getTime = () => {
    return ~~((local.now - Date.now()) / 1000);
  };
  // 计算倒计时
  const resetTime = () => {
    local.set({ now: local.now - 1000 });
    if (isWaiting()) {
      setTimeout(resetTime, 1000);
    } else {
      local.reinit();
    }
    aoife.next(button);
  };

  const _onSend = async (e: IInputEvnet) => {
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
    local.set({ now: waitTime * 1000 + Date.now() });
    resetTime();
  };
  const button = (
    <button
      type="button"
      tabIndex={1}
      debounce="onclick"
      onclick={_onSend}
      class={() => ["ux-send-code", isWaiting() && "js-loading"]}
    >
      {() => (isWaiting() ? getTime() : children![1] || "发送验证码")}
    </button>
  );

  if (isWaiting()) {
    aoife.waitAppend(button).then(() => {
      resetTime();
    });
  }

  const out = (
    <UxInputTip {...rest}>
      {children![0]}
      {button}
    </UxInputTip>
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
  .ux-send-code.js-loading {
    font-size: 20px;
    font-weight: 400;
    color: var(--light);
    background: var(--line);
  }
  @media (pointer: fine) {
    .ux-send-code:hover {
      background: var(--primary-deep);
    }
  }
`;
