import {Source, decodeSource} from '_models/Source/Source';
import {ArticlesResponse} from './ArticlesResponse';

export type Articles = {
  title: String;
  description: String;
  content: String;
  url: String;
  image: String;
  publishedAt: String;
  source: Source;
};

export const decodeArticle = (response: ArticlesResponse): Articles => {
  return {
    title: response.title,
    description: response.description,
    content: response.content,
    url: response.url,
    image: response.urlToImage,
    publishedAt: response.publishedAt,
    source: decodeSource(response.source),
  };
};

export const decodeArticles = (response: ArticlesResponse[]): Articles[] => {
  return response.map(singleArticleResponse =>
    decodeArticle(singleArticleResponse),
  );
};
