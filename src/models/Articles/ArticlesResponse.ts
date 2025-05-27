import {SourceResponse} from '_models/Source/SourceResponse';

export type ArticlesResponse = {
  title: String;
  description: String;
  content: String;
  url: String;
  image: String;
  publishedAt: String;
  source: SourceResponse;
};
