1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ANSWER: 
getElementById()

This method selects an element by its ID.
It returns only one element.
It is the fastest method.

getElementsByClassName()

This method selects elements by class name.
It returns an HTMLCollection .

querySelector()

This method uses a CSS selector.
It returns the first matching element.

querySelectorAll()

This method also uses a CSS selector.
It returns a NodeList.

2. How do you create and insert a new element into the DOM?

ANSWER: 

follow three steps:

1. Create the element using document.createElement().

2. Configure it by adding text, class, or attributes.

3. Insert it into the document using appendChild() or prepend().


3. What is Event Bubbling? And how does it work?

ANSWER: 

Event Bubbling is a process where an event starts from the target element and then moves up to its parent elements in the DOM tree.

For example, if we click a button inside a div.First, the event occurs on the button.Then it moves to the div.Finally, it reaches the document.

4. What is Event Delegation in JavaScript? Why is it useful?

ANSWER: 

Event Delegation is a technique where we add a single event listener to a parent element instead of adding multiple listeners to child elements.

It is useful because.It improves performance.It works for dynamically added elements.

5. What is the difference between preventDefault() and stopPropagation() methods?

ANSWER: 

preventDefault()
This method prevents the default browser behavior.

stopPropagation()
This method stops the event from bubbling up the DOM tree.