import { mergeObjects } from './merge-objects';

describe('mergeObjects', () => {
  it('should merge level-1 keys', () => {
    const A = { a: 1 };
    const B = { b: 1 };

    expect(mergeObjects(A, B)).toEqual(expect.objectContaining(A));
    expect(mergeObjects(A, B)).toEqual(expect.objectContaining(B));
  });

  it('should merge level-2 keys', () => {
    const A = { a: { a: 1 } };
    const B = { b: { b: 1 } };

    expect(mergeObjects(A, B)).toEqual(expect.objectContaining(A));
    expect(mergeObjects(A, B)).toEqual(expect.objectContaining(B));
  });

  it('should merge arrays', () => {
    const A = { a: { c: [1, 2, 3] } };
    const B = { a: { c: [4, 5, 6] } };

    expect(mergeObjects(A, B)).toEqual(expect.objectContaining({ a: { c: [1, 2, 3, 4, 5, 6] } }));
  });
});
