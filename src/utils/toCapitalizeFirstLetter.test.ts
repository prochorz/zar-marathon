import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('just should work in right way', () => {
    const value = 'sdfgFsdfFSDFDFsdf df';
    const expectedValue = 'Sdfgfsdffsdfdfsdf df';
    const url = toCapitalizeFirstLetter(value);

    expect(url).toEqual(expectedValue);
  });
});
