# front-dev-meta
## Notes
### JS Functional Programming (FP)
- FP is a paradigm of coding, using functions and variables
- It keeps data and functionality separate 
- Passes data into functions only when we want something computed
* Const, let, var
1) const - use by default. Enforces immutability and limits unintended state changes
2) let - need to reassign varaibles scoped within a block (e.g. for loops or local state within function)
3) var - function-level scope -> can lead to issues like hoisting

### JS Object-Oriented Programming (OOP)
- OOP groups data and functionality as properties and methods inside objects
- Methods update properties stored in object instead of generating new return values
- Models real-life objects
* Principles: Inheritance, Encapsulation, Abstraction, and Polymorphism
1) Inheritance: allows a class to inherit properties and methods from another class, promoting code reuse (done using 'extend' keyword)
2) Encapsulation: restricts direct access to object's internal data, promoting controlled interaction through methods
3) Abstraction: hides complex details and shows only essential features of object
- Note: abstraction extracts concept, rather than dealing with specific manifestation of that concept, encapsulation is about not having access to/not being concerned with, how implementation works internally
4) Polymorphism: allows objects of different classes to be treated the same based on shared methods

### Unit Testing 
- Process of testing individual units/components of code in isolation to ensure they work as expected
- One way to do this is with a test framework Jest:
1) Code coverage - measure of what percentage of code is covered by test
2) Mocking - separate code you're testing from it's related dependencies (avoid bottlenecking)
3) Snapshot testing - verify no regressions in DOM of apps after some changes to code base are made

- TDD (Test-Drive Development) - Red, Green, Refactor
1) Read new requirement
2) Write failing test
3) Update source code
4) Run test that passes
5) Refactor implementation