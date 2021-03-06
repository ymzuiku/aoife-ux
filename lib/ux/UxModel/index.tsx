import css from "template-css";

export interface IModel extends IProps {
  maskClickClose?: boolean;
  animeTime?: number;
  opacity?: number;
  mask?: boolean;
  getClose?: Function;
  closeTimeout?: number;
  maskColor?: string;
  direction?: "left" | "top" | "right" | "bottom" | "center";
}

const positionList = {
  bottom: "ux-model-bottom",
  top: "ux-model-top",
  left: "ux-model-left",
  right: "ux-model-right",
  center: "ux-model-center",
};

const moveOutList = {
  bottom: {
    transform: "translate(0, 100vh)",
  },
  top: {
    transform: "translate(0, -100vh)",
  },
  left: {
    transform: "translate(-100vw, 0)",
  },
  right: {
    transform: "translate(100vw, 0)",
  },
  center: {
    transform: "scale(0.7)",
  },
};

const moveInList = {
  bottom: {
    transform: "translate(0, 0px)",
  },
  top: {
    transform: "translate(0, 0px)",
  },
  left: {
    transform: "translate(0px, 0)",
  },
  right: {
    transform: "translate(0px, 0)",
  },
  center: {
    transform: "scale(1)",
  },
};

const setStyle = (obj: HTMLElement, sty: any) => {
  Object.keys(sty).forEach((k) => {
    (obj as any).style[k] = sty[k];
  });
};

export function _Model(
  {
    getClose,
    maskClickClose = false,
    animeTime = 300,
    direction = "bottom",
    opacity = 0.4,
    mask = true,
    maskColor = "bg-black",
    closeTimeout,
    ...rest
  }: IModel,
  ...child: any[]
) {
  const pos = positionList[direction];
  const MaskEl = <div class={["ux-model", pos].join(' ')}></div>;
  const Content = <div />;
  const moveOut = moveOutList[direction] as any;
  const moveIn = moveInList[direction] as any;

  setTimeout(() => {
    MaskEl.style.background = "var(--black-50)";
    setStyle(Content, moveIn);
  });

  const close = () => {
    MaskEl.style.background = "var(--black-0)";

    if (direction === "center") {
      setStyle(Content, { ...moveOut, opacity: 0 });
    } else {
      setStyle(Content, { ...moveOut, opacity: 1 });
    }

    setTimeout(() => {
      setStyle(MaskEl, { pointerEvents: "none" });
      setStyle(Content, { pointerEvents: "none" });
    }, animeTime / 2);

    setTimeout(() => {
      MaskEl.remove();
    }, animeTime);
  };

  if (getClose) {
    getClose(close);
  }

  if (closeTimeout) {
    setTimeout(close, closeTimeout);
  }

  const oldMaskLen = document.body.querySelectorAll("[mask-plan]").length;
  if (oldMaskLen > 0) {
    opacity = opacity / oldMaskLen / 2;
  }

  return (
    <MaskEl
      mask-plan
      style={{
        transition: `all ${animeTime}ms var(--ease)`,
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: "0px",
        left: "0px",
        background: "var(--black-0)",
        pointerEvents: mask ? void 0 : "none",
        zIndex: 1100,
        overflow: "hidden",
      }}
      onclick={() => {
        if (maskClickClose && mask) {
          close();
        }
      }}
      {...rest}
    >
      <Content
        style={{
          transition: `all ${animeTime}ms var(--ease)`,
          ...moveOut,
        }}
        onclick={(e: any) => {
          e.stopPropagation();
        }}
      >
        {child}
      </Content>
    </MaskEl>
  );
}

export function UxModel({ children, ...rest }: IModel) {
  const ele = _Model(rest, children);
  // document.body.append(ele);
  return ele;
}

css`
  .ux-model {
    font-family: var(--sans);
    display: grid;
  }
  .ux-model-bottom {
    place-content: end center;
  }
  .ux-model-top {
    place-content: start center;
  }
  .ux-model-left {
    place-content: center start;
  }
  .ux-model-right {
    place-content: center end;
  }
  .ux-model-center {
    place-content: center;
  }
`;
