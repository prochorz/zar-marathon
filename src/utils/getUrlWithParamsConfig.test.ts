import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('should get 2 arguments "getPokemons" & empty object, should return object with keys "pathname", "protocol", "host" and empty "query"', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {},
    });
  });

  test('should get 2 arguments "getPokemons" & empty object, should return object with keys "pathname", "protocol", "host" and "query" with name="Pikachu"', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'pikachu' });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: { name: 'pikachu' },
    });
  });

  test('should get 2 arguments "getPokemon" & { id: 25  }, should return object with keys "pathname", "protocol", "host" and empty "query"', () => {
    const url = getUrlWithParamsConfig('getPokemon', { id: 25 });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemon/25',
      query: {},
    });
  });
});
