export const UxColorsPreview = () => {
  const colors = `
  --bg-weak
  --bg
  --bg-deep
  
  --light-weak
  --light
  --light-deep
  
  --dark-weak
  --dark
  --dark-deep
  
  --title-weak
  --title
  --title-deep
  
  --text-weak
  --text
  --text-deep
  
  --label-weak
  --label
  --label-deep
  
  --primary-weak
  --primary
  --primary-deep
  
  --secondary-weak
  --secondary
  --secondary-deep
  
  --active-weak
  --active
  --active-deep
  
  --warn-weak
  --warn
  --warn-deep
  
  --error-weak
  --error
  --error-deep
  
  --info-weak
  --info
  --info-deep
  
  --disable-weak
  --disable
  --disable-deep

  --gray-weak
  --gray
  --gray-deep
  `
    .split("\n")
    .map((v) => v.trim())
    .filter(Boolean);

  const alpha = [] as string[];
  ["black", "white"].forEach(function (k) {
    for (var a = 0; a <= 99; a += 5) {
      alpha.push(`--${k}-${a}`);
    }
    alpha.push(`--${k}`);
  });

  return (
    <section scroll-y class="oy:auto">
      <div class="g-col">
        {["light", "dark"].map((theme) => {
          return (
            <div class={theme}>
              <div class="bg:--bg g-row p:--a4 r:--r">
                <h2 class="c:--title-deep">{theme}</h2>
                {colors.map((c) => {
                  return (
                    <div class="m:--a1 g-row pi:center grid-gap:--a1">
                      <div
                        class={`bg:${c} s:60px r:--r b:4px|solid|--black-10 as:center`}
                      ></div>
                      <p class="bg:--bg c:--text ta:center">{c}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <h2 class="p:--a3">White And Black</h2>
      <p>黑白色各20个透明度阶梯，不随dark变化，一般用在投影，遮罩等区域</p>
      <div class="bg:#888 r:--r g-row">
        <div class="g-row">
          {alpha.map((c) => {
            return (
              <div class="m:--a1 g-col pi:center grid-gap:--a1">
                <div
                  class={`bg:${c} s:60px r:--r b:4px|solid|--black-10 as:center`}
                ></div>
                <p class="bg:--bg c:--title-deep ta:center bg:--black-0">{c}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
