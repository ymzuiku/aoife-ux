export const bindEventListen = function (
  target: any,
  type: string,
  middleware?: (...args: any[]) => any[]
) {
  const orig = target[type];
  target[type] = function (this: any, ..._args: any[]) {
    let args = _args;
    if (middleware) {
      args = middleware(..._args);
    }
    const rv = orig.apply(this, args);
    const e = new Event(type);

    (e as any).arguments = args;
    window.dispatchEvent(e);
    return rv;
  };
};
