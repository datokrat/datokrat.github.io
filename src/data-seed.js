import { Article } from "./data-source";

import articleShallowLIAndLinearCodes from "./article-sh-linear-independence-linear-codes.txt";

export function getSeed() {
  return {
    articles: [
      new Article({
        id: "sh-linear-independence-linear-codes",
        title:
          "The connection between shallow linear independence and linear codes",
        text: articleShallowLIAndLinearCodes,
      }),
    ],

    references: [],
  };
}
