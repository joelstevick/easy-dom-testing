# Introduction
This module compliments *Angular Testbed*.  We suggest that you also use one of the available helper-libraries that wrap Angular Testbed: [Testing-Library](https://testing-library.com/docs/angular-testing-library/intro/) or [Spectator](https://netbasal.com/spectator-v4-a-powerful-tool-to-simplify-your-angular-tests-bd65a0bf317e).

*ng-pom-testing* provides a utility function *mergeConfig* for re-using Angular Testbed configuration objects, and a utility class *POM* for implementing the [page-object-model pattern](https://martinfowler.com/bliki/PageObject.html).  A POM instance runs a *finite state machine* that is defined by a configuration object that you pass to the constructor.  The constructor to the POM also accepts a *context* object that is passed as the first argument to the validation and action functions.  Normally, the context will include objects that were generated as part of the Angular Testbed setup -- fixtures, a dom api, and other functions.

**The POM abstracts an underlying testing library** (testing-library, spectator, or angular testbed -- directly) similar to how a [test harness](https://en.wikipedia.org/wiki/Test_harness) implements an api for interacting with a component instance.  For example, you may want to define a single action in a test that interacts with more than a single component, or multiple components in succession like launching a modal that solicits user input -- this capability is out-of-scope for test harnesses.

The POM is particurily useful for [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development).
    

![Tools](assets/tools.png)

1. **mergeConfig()** - accepts a list of configuration objects.  Precedence follows the es6 implementation of Object.assign().  The merge operation is "deep."  Arrays are not replaced -- the entries are concatenated. 


        console.log(
            mergeConfig(
                { imports: [ReactiveFormsModule]}, 
                { imports: [MaterialModule]}
            )
        )

        // {imports: [ReactiveFormsModule, MaterialModule]}

2. **POM** - a class for generating a configured POM implementation

    const pom = new POM({ container, detectChanges}, pomConfig);
    
The POM configuration object specifies the various states that your component can enter and how to validate those states.  The POM configuration object also defines the actions that can be taken: the steps to be performed and the new state for the component after each action is completed.  

When your test invokes an action, the POM automatically applies your configured validation logic for the new state.

[This example (tbd)]() illustrates how to use *mergeConfig* and *POM*. 

## Notes
- in the example, a common configuration object is used when setting up testing-library (the call to *render()*); only those declarations and providers that are specific to the tested component are included *in* the describe block.  You should adopt this pattern for you own project to reduce boilerplate.
  

***This page is under construction...*** 😁