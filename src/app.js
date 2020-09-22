import { DataSource } from "./data-source";
import { BlogList } from "./list";
import { ArticleDetail } from "./detail";
import { ReferenceView } from "./reference";

export class App {
  constructor(notify) {
    this.notify = notify;
    this.dataSource = new DataSource();

    this.blogList = new BlogList(this.dataSource);
    this.articleDetail = new ArticleDetail(this.notify, this.dataSource);
    this.referenceView = new ReferenceView(this.notify, this.dataSource);
  }

  init(route) {
    this.handle_route_change(route);
  }

  render() {
    return this.getActiveView().render();
  }

  // get_route() {
  //   return this.getActiveView().get_route();
  // }

  handle_route_change(new_route) {
    this.route = new_route;
    if (this.getActiveView() === this.articleDetail) {
      this.articleDetail.handleRouteChange(this.route.slice(8));
    } else if (this.getActiveView() === this.referenceView) {
      this.referenceView.handleRouteChange(this.route.slice(10));
    }
    this.notify();
  }

  getActiveView() {
    if (this.route.startsWith("article/")) {
      return this.articleDetail;
    } else if (this.route.startsWith("reference/")) {
      return this.referenceView;
    } else {
      return this.blogList;
    }
  }
}
