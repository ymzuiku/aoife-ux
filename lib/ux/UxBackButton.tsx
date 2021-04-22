const back = () => `<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.25 12.2743L19.25 12.2743" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M10.2998 18.2987L4.2498 12.2747L10.2998 6.24969" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>`;

export const UxBackButton = ({ onclick }: IProps) => {
  return (
    <div
      class="pr:6px f-row ai:center :active:bg:--gray r:--r"
      onclick={(e) => {
        if (onclick) {
          onclick(e);
        }
      }}
    >
      <i class={["s:36px g-col pc:center fs:20px"]} innerHTML={back()}></i>
      <span>返回</span>
    </div>
  );
};
