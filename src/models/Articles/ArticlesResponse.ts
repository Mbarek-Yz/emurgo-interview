import {SourceResponse} from '_models/Source/SourceResponse';

export type ArticlesResponse = {
  author: String;
  title: String;
  description: String;
  content: String;
  url: String;
  urlToImage: String;
  publishedAt: String;
  source: SourceResponse;
};
