import config from '../config';

function getUrlWithParamsConfig(endpointConfig: string, query?: object) {
  const url = {
    ...config.client.server,
    ...(config.client.endpoint as any)[endpointConfig].uri,
    query,
  };

  return url;
}

export default getUrlWithParamsConfig;
