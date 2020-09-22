import { init } from "snabbdom/build/package/init";
import { eventListenersModule } from "snabbdom/build/package/modules/eventlisteners";
import { classModule } from "snabbdom/build/package/modules/class";
import { propsModule } from "snabbdom/build/package/modules/props";
import { datasetModule } from "snabbdom/build/package/modules/dataset";
import { attributesModule } from "snabbdom/build/package/modules/attributes";

import { App } from "./app";

const patch = init([
  classModule,
  propsModule,
  eventListenersModule,
  datasetModule,
  attributesModule,
]);

let vdom = null;

const app = new App(() => {
  const new_vdom = app.render();
  // const new_route = app.get_route();

  apply_new_vdom(new_vdom);
  // apply_new_route(new_route);
});

window.addEventListener("load", () => {
  app.init(get_route_from_location());
});
//window.addEventListener("hashchange", () => {
//  const new_route = get_route_from_location();
//
//  if (app.get_route() !== new_route) {
//    app.handle_route_change(new_route);
//  }
//});

function apply_new_vdom(new_vdom) {
  vdom = patch(
    vdom !== null ? vdom : document.getElementById("snabbdom-container"),
    new_vdom
  );
}

// function apply_new_route(new_route) {
//  const current_route = get_route_from_location();
//  const new_location = new_route === "" ? "./" : "./?" + new_route;
//  if (window.history.state === null) {
//    console.log("replaceState", location);
//    window.history.replaceState(true, "", new_location);
//  } else if (current_route !== new_route) {
//    console.log("pushState", location.href, window.history.state);
//    window.history.pushState(true, "", new_location);
//  }
// }

function get_route_from_location() {
  return location.search.slice(1);
}
