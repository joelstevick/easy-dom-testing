import { mergeObjects } from "../util/merge-objects";

export const mergeConfig = (...config: Array<any>) => {
   let mergedConfig: any = {};

   config.forEach(config => {
       mergedConfig = mergeObjects(mergedConfig, config);
   })

   return mergedConfig;
}