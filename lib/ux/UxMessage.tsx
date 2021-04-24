import VanillaMessage from "vanilla-message";

export const UxMessage = {
  info: (text: string) => {
    return VanillaMessage.black(text, {
      style: { fontFamily: "var(--sans)", borderRadius: "var(--r)" },
    });
  },
  error: (text: string) => {
    VanillaMessage.error(text, {
      style: { fontFamily: "var(--sans)", borderRadius: "var(--r)" },
    });
  },
};
