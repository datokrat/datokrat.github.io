import { getSeed } from "./data-seed";

export class DataSource {
  constructor() {
    this.data = getSeed();
  }

  loadArticlePreviews() {
    return this.data.articles.map((article) => article.getPreview());
  }

  loadArticle(id) {
    const foundArticle = this.data.articles.find(
      (article) => article.getId() === id
    );
    return foundArticle !== undefined ? foundArticle : null;
  }

  loadReference(id) {
    const foundReference = this.data.references.find(
      (reference) => reference.getId() === id
    );
    return foundReference !== undefined ? foundReference : null;
  }
}

export class Article {
  constructor({ id, title, text }) {
    this.id = id;
    this.title = title;
    this.text = text;
  }

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  getText() {
    return this.text;
  }

  getPreview() {
    return new ArticlePreview({
      id: this.id,
      title: this.title,
      description: this.text.slice(0, 200),
    });
  }
}

export class ArticlePreview {
  constructor({ id, title, description }) {
    this.id = id;
    this.title = title;
    this.description = description;
  }

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }
}

export class EpubReference {
  constructor({ id, title, filename, position }) {
    this.id = id;
    this.title = title;
    this.filename = filename;
  }

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  getFilename() {
    return this.filename;
  }
}
