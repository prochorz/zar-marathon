import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req<T>(endpoint: string, query?: object): Promise<T> {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));
  const response = await fetch(uri);

  return response.json();
}

export default req;
