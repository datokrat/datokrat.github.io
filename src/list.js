import { renderNavigation } from "./skeleton";
import { h } from "snabbdom/build/package/h";

export class BlogList {
  constructor(dataSource) {
    this.dataSource = dataSource;
  }

  render() {
    return h("div", [
      renderNavigation(),
      this.renderArticlePreviews(this.dataSource.loadArticlePreviews()),
    ]);
  }

  get_route() {
    return "list";
  }

  renderArticlePreviews(previews) {
    const list = h(
      "ul",
      previews.map((preview) => this.renderArticlePreview(preview))
    );

    return h("div.container", [
      h("div.article-previews", [h("h1.my-3", ["Articles"]), list]),
    ]);
  }

  renderArticlePreview(preview) {
    return h("li", [
      h("h4", [
        h(
          "a",
          {
            props: {
              href: "./?article/" + preview.getId(),
            },
          },
          [preview.getTitle()]
        ),
      ]),
      h("p", [preview.getDescription()]),
    ]);
  }
}
