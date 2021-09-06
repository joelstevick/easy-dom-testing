import { mergeConfig } from './merge-config';

describe('mergeConfig', () => {
  it('should handle more than two config objects', () => {
    const a = { a: 'a' };
    const b = { a: 'b.a', b: 'b' };
    const c = { c: 'c', b: 'c.b' };

    expect(mergeConfig(a, b, c)).toEqual(
      expect.objectContaining({
        a: 'b.a',
        b: 'c.b',
        c: 'c',
      }),
    );
  });
});
