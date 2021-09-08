# Introduction
This module compliments *Angular Testbed*.  We suggest that you use one of the available helper-libraries that wrap Angular Testbed: [Spectator](https://netbasal.com/spectator-v4-a-powerful-tool-to-simplify-your-angular-tests-bd65a0bf317e) or [Testing-Library](https://testing-library.com/docs/angular-testing-library/intro/)

1. **mergeConfig()** - accepts a list of configuration objects.  Precedence follows the es6 implementation of Object.assign().  The merge operation is "deep."  Arrays are not replaced -- the entries are concatenated. 


        console.log(
            mergeConfig(
                { imports: [ReactiveFormsModule]}, 
                { imports: [MaterialModule]}
            )
        )

        // {imports: [ReactiveFormsModule, MaterialModule]}

2. **POM** - implements the [page-object-model pattern](https://martinfowler.com/bliki/PageObject.html). 
    
    const pom = new POM({})...// this section is under construction