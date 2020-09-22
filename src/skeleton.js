import { h } from "snabbdom/build/package/h";

export function renderNavigation() {
  return h(
    "nav",
    {
      class: {
        navbar: true,
        "navbar-expand-sm": true,
        "navbar-dark": true,
        "bg-dark": true,
      },
    },
    [
      h("div.navbar-brand", ["Crosscutt"]),
      h("div#navbar-content", [
        h("ul.navbar-nav", [
          h("li.nav-item", [
            h(
              "a.nav-link",
              {
                props: {
                  href: "./?list",
                },
              },
              ["Blog Articles"]
            ),
          ]),
          h("li.nav-item", [
            h("a.nav-link", { props: { href: "./?article/lorem-ipsum" } }, [
              "Impressum",
            ]),
          ]),
        ]),
      ]),
    ]
  );
}
