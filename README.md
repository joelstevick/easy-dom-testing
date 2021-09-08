# Introduction
The purpose of this module is to provide features that compliment Angular Testbed.  We recommended that you utilize one of the available tools that wrap Angular Testbed: [Spectator](https://netbasal.com/spectator-v4-a-powerful-tool-to-simplify-your-angular-tests-bd65a0bf317e) or [Testing-Library](https://testing-library.com/docs/angular-testing-library/intro/)

1. mergeConfig(...args) - this function accepts a list of configuration objects that should be merged.  Precedence follows the es6 implementation of Object.assign().  The merge operation is "deep."  Arrays are not replaced -- the entries are concatenated.   For example,

        
        console.log(mergeConfig({ imports: [ReactiveFormsModule]}, { imports: [MaterialModule]}))
        // {providers: [ReactiveFormsModule, MaterialModule]}
