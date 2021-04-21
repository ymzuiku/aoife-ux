export const UxColorsDebug = () => {
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
      {["light", "dark"].map((theme) => {
        return (
          <div class={theme}>
            <div class="bg:--bg g-cols:repeat(6,auto) p:40px">
              <h2 class="c:--title-deep">{theme}</h2>
              {colors.map((c) => {
                return (
                  <div class="m:--a1 g-row pi:center grid-gap:--a1">
                    <div
                      class={`bg:${c} wh:100px r:--r b:1px|solid|rgba(0,0,0,0.01) as:center`}
                    ></div>
                    <p class="bg:--bg c:--text ta:center">{c}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      <div class="bg:#888 g-cols:repeat(6,auto) p:40px">
        <h2>White And Black</h2>
        {alpha.map((c) => {
          return (
            <div class="m:--a1 g-row pi:center grid-gap:--a1">
              <div
                class={`bg:${c} wh:100px r:--r b:1px|solid|rgba(0,0,0,0.01) as:center`}
              ></div>
              <p class="bg:--bg c:--title-deep ta:center bg:--black-0">{c}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
