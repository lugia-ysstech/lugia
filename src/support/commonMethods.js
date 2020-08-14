import { go } from "@lugia/lugiax-router";

export const linkToUrl = (target: string) => {
  target && go({ url: target });
};
