import { mergeObjects } from '../util/merge-objects';

export const mergeConfig = (...configs: any[]) => {
  let mergedConfig: any = {};

  configs.forEach((config) => {
    mergedConfig = mergeObjects(mergedConfig, config);
  });

  return mergedConfig;
};
