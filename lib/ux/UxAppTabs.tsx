export interface AppTabItem {
  label: string;
  element: () => HTMLElement;
  selectedElement?: () => HTMLElement;
  page?: any;
}

export interface AppTabItemInstans {
  label: string;
  element: HTMLElement;
  selectedElement: HTMLElement;
  page?: any;
}

export interface UxAppTabProps extends IProps {
  data: AppTabItem[];
  atChange?: (num: number) => void;
}

export function UxAppTabs({
  data,
  atChange,
  className,
  children,
  ...rest
}: UxAppTabProps) {
  const state = {
    selectedNum: 0,
  };
  const items = data.map((v: any) => {
    const out = {
      label: v.label,
      element: v.element(),
      selectedElement: v.selectedElement ? v.selectedElement() : v.element(),
    };
    return out;
  }) as AppTabItemInstans[];

  const out = (
    <div
      class={[
        "pt:5px p-safe-bottom w:100% g-col pi:center bt:--divide bg:--plan",
        className,
      ].join(" ")}
      {...rest}
    >
      {items.map((item, i) => {
        [
          ["fill", "var(--app-tab)"],
          ["width", "20px"],
          ["height", "20px"],
        ].forEach((v) => {
          item.element.setAttribute(v[0], v[1]);
          item.selectedElement.setAttribute(v[0], v[1]);
        });

        return (
          <div
            class={() => {
              const isSelect = i === state.selectedNum;
              return [
                "g-row pc:center pointer",
                isSelect ? "--app-tab:--primary" : "--app-tab:--weak",
              ].join(" ");
            }}
            onclick={() => {
              state.selectedNum = i;
              atChange && atChange(i);
              aoife.next(out);
            }}
          >
            <div class="c:--disable place-self:center">
              {() =>
                i === state.selectedNum ? item.selectedElement : item.element
              }
            </div>
            <p
              class={() =>
                [
                  "fs:10px sm:fs:13px ta:center",
                  i === state.selectedNum ? "c:--primary-deep" : "c:--disable",
                ].join(" ")
              }
            >
              {item.label}
            </p>
          </div>
        );
      })}
    </div>
  );
  return out;
}
