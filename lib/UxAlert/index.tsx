import css from "template-css";
import { UxModel, IModel } from "../UxModel";

interface IAlertProps extends IModel {
  events?: {
    close: Function;
  };
  ok?: any;
  cancel?: any;
  oncancel?: (close: unknown) => any;
  onok?: (close: unknown) => any;
}

function _Button(children: any, onclick: any, events: any, isCancel?: boolean) {
  return (
    <div
      class={["ux-alert-btn", isCancel && "ux-alert-btn-cancel"]}
      onclick={() => {
        if (onclick) {
          onclick(events.close);
        } else {
          events.close();
        }
      }}
    >
      {children}
    </div>
  );
}

function AlertElement({
  events,
  title,
  ok,
  oncancel,
  onok,
  cancel = "Cancel",
  children,
}: IAlertProps) {
  return (
    <form
      onsubmit={() => {
        onok && onok((events as any).close);
      }}
      class="ux-alert-form"
    >
      {title && <div class="ux-alert-form-title">{title}</div>}
      <div class="ux-alert-content">{children}</div>
      <div class="ux-alert-btns">
        {ok &&
          aoife(_Button([ok], onok, events), {
            style: { borderBotton: "1px solid var(--gray-300)" },
          })}
        {_Button([cancel], oncancel, events, true)}
      </div>
    </form>
  );
}

export function UxAlert({ global, children, ...rest }: IAlertProps = {}) {
  const events = { close: () => {} };
  return (
    <UxModel
      global={global}
      direction="center"
      getClose={(close: any) => {
        if (rest.getClose) {
          rest.getClose(close);
        }
        events.close = close;
      }}
    >
      <AlertElement events={events} {...rest}>
        {children}
      </AlertElement>
    </UxModel>
  );
}

css`
  .ux-alert-btns {
    display: grid;
    grid-auto-flow: row;
  }
  @media (min-width: 640px) {
    .ux-alert-btns {
      display: grid;
      grid-auto-flow: column;
    }
  }
  .ux-alert-btn {
    font-weight: 500;
    border-left: 1px solid var(--gray-300);
    border-top: 1px solid var(--gray-300);
    text-align: center;
    padding: 14px;
    cursor: pointer;
    color: var(--primary-600);
    background: var(--white);
  }
  @media (min-width: 640px) {
    .ux-alert-btn:hover {
      background: var(--gray-200);
    }
  }
  .ux-alert-btn-cancel {
    color: var(--gray-600) !important;
  }
  .ux-alert-form {
    width: 400px;
    background: var(--white);
    border-radius: 6px;
    box-shadow: 0px 4px 10px var(--black-2);
    overflow: hidden;
  }
  @media (min-width: 640px) {
    .ux-alert-form {
      width: 70vw;
      max-width: 1024px;
    }
  }
  .ux-alert-title {
    font-size: 20px;
    font-weight: 500;
    padding: 20px;
    padding-bottom: 0px;
    background: var(--white);
  }
  .ux-alert-content {
    padding: 20px;
    background: var(--white);
  }
`;
