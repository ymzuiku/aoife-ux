export const getRender = async (render: any) => {
  let ele = render();
  if (ele.then) {
    ele = await ele.then((v: any) => v.default());
  }
  return ele;
};
