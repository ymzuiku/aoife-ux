export interface SwipeData {
  moveX: number;
  containerWidth: number;
  nowNum: number;
  length: number;
  kind: "touch" | "event";
}

export interface UxSwipeProps extends IProps {
  atChange?: (index: number, data: SwipeData) => any;
}

export interface UxSwipeElement extends HTMLDivElement {
  moveTo: (num: number) => void;
}

export function UxSwipe({
  atChange,
  children,
  className,
  ...rest
}: UxSwipeProps): UxSwipeElement {
  let lastX = 0;
  let x = 0;
  let w = -1;
  let num = 0;
  let t = 0;
  let len = children!.length;
  let lock = false;
  const out = (
    <div class={() => [`f-row will-change:transform`, className].join(' ')} {...rest}>
      {children!.map((v) => {
        return <div class="h:100% f:0|0|100%">{v}</div>;
      })}
    </div>
  ) as UxSwipeElement;

  window.addEventListener("scroll", () => {
    lock = true;
  });

  let isTouchStart = false;

  const touchstart = (e: any, isTouch?: boolean) => {
    isTouchStart = true;
    if (w < 0) {
      const ele = out.children.item(0) as HTMLDivElement;
      if (ele) {
        // console.log(ele.offsetWidth, ele.clientWidth);
        w = ele.offsetWidth;
      }
    }
    lock = false;
    t = Date.now();
    lastX = isTouch ? e.touches[0].clientX : e.clientX;
    out.style.transition = "0.2s transform var(--ease)";
    e.stopPropagation();
  };

  out.addEventListener("touchstart", (e) => touchstart(e, true));
  out.addEventListener("mousedown", (e) => touchstart(e, false));

  const touchmove = (e: any, isTouch?: boolean) => {
    if (!isTouchStart) {
      return;
    }
    const _x = isTouch ? e.touches[0].clientX : e.clientX;
    x = _x - lastX;
    if (lock) {
      if (x !== 0) {
        x = 0;
        out.style.transform = `translateX(${num * w + x}px)`;
        if (atChange) {
          atChange(-num, {
            moveX: x,
            containerWidth: w,
            nowNum: -num,
            length: len,
            kind: "touch",
          });
        }
      }
      return;
    }
    if (x < 80 && x > -80) {
      return;
    }
    out.style.transform = `translateX(${num * w + x}px)`;

    if (atChange) {
      atChange(-num, {
        moveX: x,
        containerWidth: w,
        nowNum: -num,
        length: len,
        kind: "touch",
      });
    }

    e.stopPropagation();
  };

  out.addEventListener("touchmove", (e) => touchmove(e, true));
  out.addEventListener("mousemove", (e) => touchmove(e, false));

  const touchend = (e: any, isTouch?: boolean) => {
    isTouchStart = false;
    if (lock) {
      return;
    }
    let add = 0;
    const useTime = Date.now() - t;
    let fix = 3;
    if (useTime < 800) {
      fix = 10;
    }
    if (x > 0 && x > w / fix) {
      add = 1;
    } else if (x < 0 && x < w / fix) {
      add = -1;
    }
    // const add = Math.round(x / w);
    e.stopPropagation();
    num += ~~(x / w) + add;
    x = 0;
    if (num < -len + 1) {
      num = -len + 1;
    } else if (num > 0) {
      num = 0;
    }

    out.style.transition = "0.5s transform var(--ease)";
    setTimeout(() => {
      out.style.transform = `translateX(${num * w}px)`;
    }, 30);

    if (atChange) {
      atChange(-num, {
        moveX: x,
        containerWidth: w,
        nowNum: -num,
        length: len,
        kind: "touch",
      });
    }
  };

  out.addEventListener("touchend", (e) => touchend(e, true));
  out.addEventListener("mouseup", (e) => touchend(e, false));
  out.addEventListener("mouseout", (e) => touchend(e, false));

  out.moveTo = (index: number) => {
    if (document.contains(out)) {
      num = index;

      out.style.transition = "0.5s transform var(--ease)";
      setTimeout(() => {
        out.style.transform = `translateX(${num * w}px)`;
      }, 30);

      if (atChange) {
        atChange(-num, {
          moveX: x,
          containerWidth: w,
          nowNum: -num,
          length: len,
          kind: "event",
        });
      }
    }
  };

  return (<div class="s:100% overflow:hidden">{out}</div>) as UxSwipeElement;
}
