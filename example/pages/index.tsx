import Route from "aoife-route";
import { flavorcss } from "flavorcss";
import DemoList, { demoData } from "./DemoList";

if (flavorcss.os.desktop) {
  setTimeout(() => {
    Route.push(demoData[0].url);
  });
}

export const Pages = () => {
  return (
    <div class="s:100% o:hidden sm:g-cols:300px|1fr">
      <div class="d:none sm:d:block br-px:--gray-deep s:100% oy:auto">
        <DemoList />
      </div>
      <div class="dog s:100%">
        <Route
          url="/"
          keep
          render={() => {
            return (
              <div class="s:100% d:block sm:d:none">
                <DemoList />
              </div>
            );
          }}
        ></Route>

        {demoData.map((item) => {
          return <Route url={item.url} render={item.render}></Route>;
        })}
      </div>
    </div>
  );
};
