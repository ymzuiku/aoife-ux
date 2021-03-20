export interface SwipeData {
  moveX: number;
  containerWidth: number;
  nowNum: number;
}

export interface UxSwipeProps extends IProps {
  onChange?: (data: SwipeData) => any;
}

export function UxSwipe({ onChange, children }: UxSwipeProps) {
  let lastX = 0;
  let x = 0;
  let w = -1;
  let num = 0;
  let t = 0;
  let len = children!.length;
  let lock = false;
  const out = (
    <div class={`h:300px col w:${len}00% will-change:transform`}>
      {children!.map((v) => {
        return <div class="w:100% h:100% touch-action：pan-x">page-{v}</div>;
      })}
    </div>
  ) as HTMLElement;

  window.addEventListener("scroll", () => {
    lock = true;
  });

  out.addEventListener("touchstart", (e) => {
    lock = false;
    t = Date.now();
    lastX = e.touches[0].clientX;
    out.style.transition = "0.2s transform var(--ease)";
    // e.preventDefault();
    e.stopPropagation();
  });

  out.addEventListener("touchmove", (e) => {
    if (lock) {
      if (x !== 0) {
        x = 0;
        out.style.transform = `translateX(${num * w + x}px)`;
        if (onChange) {
          onChange({ moveX: x, containerWidth: w, nowNum: num });
        }
      }
      return;
    }
    if (w < 0) {
      const ele = e.target as HTMLDivElement;
      w = ele.offsetWidth;
    }
    x = e.touches[0].clientX - lastX;
    out.style.transform = `translateX(${num * w + x}px)`;

    if (onChange) {
      onChange({ moveX: x, containerWidth: w, nowNum: num });
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
      onChange({ moveX: x, containerWidth: w, nowNum: num });
    }
  });

  return out;
}
