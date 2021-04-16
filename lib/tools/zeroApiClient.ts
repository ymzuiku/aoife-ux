import { req } from "./req";

export const zeroApiClient = <T>(
  preUrl: string,
  onError?: (err: string) => any
): T => {
  let obj = new Proxy({} as any, {
    get(target, name) {
      if (!target[name]) {
        target[name] = (body: any) => {
          return req.post(preUrl + "/" + (name as string), body, onError);
        };
      }
      return target[name];
    },
  });

  return obj as any;
};
