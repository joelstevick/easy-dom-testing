import { mergeWith } from 'lodash';

export const mergeObjects = (a: any, b: any): any => {
  const customizer = (obj: any, src: any) => {
    if (Array.isArray(obj)) {
      return obj.concat(src);
    }
  };

  return mergeWith(a, b, customizer);
};
