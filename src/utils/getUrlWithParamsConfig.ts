import config from '../config';

interface IQuery {
  [key: string]: unknown;
}

function getUrlWithParamsConfig(endpointConfig: string, query: IQuery = {}) {
  const url = {
    ...config.client.server,
    ...(config.client.endpoint as any)[endpointConfig].uri,
  };

  const pathname = Object.keys(query).reduce((acc, val) => {
    const regexp = RegExp(`{${val}}`);

    if (regexp.test(acc)) {
      const result = acc.replace(regexp, query[val]);
      // eslint-disable-next-line no-param-reassign
      delete query[val];
      return result;
    }
    return acc;
  }, url.pathname);

  url.pathname = pathname;
  url.query = query;

  return url;
}

export default getUrlWithParamsConfig;
