import Route from "aoife-route";
import { demoData } from "./DemoList";

export const Pages = () => {
  return (
    <div>
      <Route url="/" render={() => import("./DemoList")}></Route>
      {demoData.map((item) => {
        return <Route url={item.url} render={item.render}></Route>;
      })}
    </div>
  );
};
