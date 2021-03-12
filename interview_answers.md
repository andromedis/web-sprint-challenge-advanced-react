# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

Stateful components, or class-based components, are made by creating a class that extends the React component class, whereas functional components are normal Javascript functions that create component output and return it. A class-based component inherently has a state variable that can hold an object containing any number of slices of state, or none at all. A class-based component also inherits methods to control what happens around mounting and updating of the component. A functional component needs to use hooks in order to get these features, a useState() hook call must be made for each slice of state declared, and a useEffect() call must be made to handle any side effects around mounting, updating state, or making API calls.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

A componentWillMount function is called just before a component mounts to the DOM, and a componentWillUpdate() functon is called just before state or props within the component are changed.

3. Define stateful logic.

Stateful logic is code that defines the existence and behavior of data stored in state within a React component, and does not affect the presentation of data within the component.

4. What are the three step of creating a successful test? What is done in each phase?

THe three steps of creating a successful test are arrange, act, and assert. In the arrange phase, necessary components are rendered to the DOM to be setup for the rest of the test. In the act phase, the DOM is queried for elements that are expected to be (or not be) in the DOM, and any userEvent calls are made to simulate user interactions with the element, such as clicking or typing input. In the assert phase, expect() calls are made to assert that the correct elements have been rendered or changed as a result, and the test fails if an expect() call returns false.