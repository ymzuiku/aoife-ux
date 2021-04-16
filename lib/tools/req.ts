interface Response {
  code: number;
  msg: string;
  data?: any;
}

export const req = {
  post: async (
    url: string,
    body?: any,
    onError?: (err: string) => any
  ): Promise<Response> => {
    let out = await fetch(url, {
      method: "POST",
      body: body ? JSON.stringify(body) : void 0,
    })
      .then((v) => v.json())
      .catch((e) => {
        console.log(e);
        return {
          code: 400,
          msg: e.toString(),
          data: void 0,
        };
      });

    if (!out || !out.msg) {
      out = {
        code: 400,
        msg: "未知的请求错误",
        data: void 0,
      };
    }

    if ((out as Response).code !== 200 && onError) {
      onError(out.msg);
    }

    return out as Response;
  },
};
