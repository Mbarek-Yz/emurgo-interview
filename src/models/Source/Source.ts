import {SourceResponse} from './SourceResponse';

export type Source = {
  name: String;
  url: String;
};

export const decodeSource = (response: SourceResponse): Source => {
  return {
    name: response.name,
    url: response.url,
  };
};
