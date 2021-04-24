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
    <div class="s:100% sm:g-cols:300px|1fr">
      <div class="d:none sm:d:block br-px:--gray-deep">
        <DemoList />
      </div>
      <div>
        <div class="s:100% d:block sm:d:none">
          <Route url="/" render={DemoList}></Route>
        </div>
        {demoData.map((item) => {
          return <Route url={item.url} render={item.render}></Route>;
        })}
      </div>
    </div>
  );
};
