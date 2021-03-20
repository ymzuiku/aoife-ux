export interface SwipeData {
  moveX: number;
  containerWidth: number;
  nowNum: number;
  length: number;
  kind: "touch" | "event";
}

export interface UxSwipeProps extends IProps {
  onChange?: (data: SwipeData) => any;
}

export interface UxSwipeElement extends HTMLDivElement {
  moveTo: (num: number) => void;
}

export function UxSwipe({ onChange, children }: UxSwipeProps): UxSwipeElement {
  let lastX = 0;
  let x = 0;
  let w = -1;
  let num = 0;
  let t = 0;
  let len = children!.length;
  let lock = false;
  const out = (
    <div class={`h:300px col w:100% will-change:transform`}>
      {children!.map((v) => {
        return <div class="w:100% h:100%">{v}</div>;
      })}
    </div>
  ) as UxSwipeElement;

  window.addEventListener("scroll", () => {
    lock = true;
  });

  out.addEventListener("touchstart", (e) => {
    if (w < 0) {
      const ele = out.children.item(0) as HTMLDivElement;
      if (ele) {
        // console.log(ele.offsetWidth, ele.clientWidth);
        w = ele.offsetWidth;
      }
    }
    lock = false;
    t = Date.now();
    lastX = e.touches[0].clientX;
    out.style.transition = "0.2s transform var(--ease)";
    // e.preventDefault();
    e.stopPropagation();
  });

  out.addEventListener("touchmove", (e) => {
    x = e.touches[0].clientX - lastX;
    if (lock) {
      if (x !== 0) {
        x = 0;
        out.style.transform = `translateX(${num * w + x}px)`;
        if (onChange) {
          onChange({
            moveX: x,
            containerWidth: w,
            nowNum: num,
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

    if (onChange) {
      onChange({
        moveX: x,
        containerWidth: w,
        nowNum: num,
        length: len,
        kind: "touch",
      });
    }

    e.stopPropagation();
  });

  out.addEventListener("touchend", (e) => {
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

    if (onChange) {
      onChange({
        moveX: x,
        containerWidth: w,
        nowNum: num,
        length: len,
        kind: "touch",
      });
    }
  });

  out.moveTo = (index: number) => {
    if (document.contains(out)) {
      num = index;

      out.style.transition = "0.5s transform var(--ease)";
      setTimeout(() => {
        out.style.transform = `translateX(${num * w}px)`;
      }, 30);

      if (onChange) {
        onChange({
          moveX: x,
          containerWidth: w,
          nowNum: num,
          length: len,
          kind: "event",
        });
      }
    }
  };

  return out as UxSwipeElement;
}
