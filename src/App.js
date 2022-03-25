import React from 'react';

const importantConcepts = [
  {
    title: "Functions are first-class citizens in JavaScript",
    url_description: "MDN Docs",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
  },
  {
    title: "bind(), apply(), and call()",
    url_description: "Better Programming",
    url: "https://betterprogramming.pub/when-to-use-bind-call-and-apply-in-javascript-1ae9d7fa66d5",
  },
  {
    title: "scopes and closures",
    url_description: "CSS Tricks",
    url: "https://css-tricks.com/javascript-scope-closures/",
  },
  {
    title: "this keyword",
    url_description: "MDN Docs",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this",
  },
  {
    title: "Object Methods",
    url_description: "MDN Docs",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",
  },
  {
    title: "Array Methods",
    url_description: "MDN Docs",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
  },
  {
    title: "Prototypical Inheritance -> ES6 Class",
    url_description: "MDN Docs",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain",
  },
  {
    title: "Callbacks and Promises",
    url_description: "Login Radius",
    url: "https://www.loginradius.com/blog/async/callback-vs-promises-vs-async-await/",
  },
  {
    title: "Event Loop",
    url_description: "MDN Docs",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop",
  },
  {
    title: "Event Bubbling",
    url_description: "Geeks for Geeks",
    url: "https://www.geeksforgeeks.org/event-bubbling-in-javascript/",
  },
  {
    title: "Regular Expressions",
    url_description: "MDN Docs",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions",
  },
  {
    title: "Error Handling",
    url_description: "MDN Docs",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling",
  },
  {
    title: "JavaScript ES6 and beyond",
    url_description: "Medium",
    url: "https://madasamy.medium.com/javascript-brief-history-and-ecmascript-es6-es7-es8-features-673973394df4",
  },
  {
    title: "Hoisting, Memoization",
    url_description: "Geshan",
    url: "https://geshan.com.np/blog/2021/02/javascript-memoization/",
  },
  {
    title: "Declarative vs imperative programming",
    url_description: "Geeks for Geeks",
    url: "https://www.geeksforgeeks.org/difference-between-imperative-and-declarative-programming/",
  },
  {
    title: "Functional vs object-oriented programming",
    url_description: "Imaginary Cloud",
    url: "https://www.imaginarycloud.com/blog/functional-programming-vs-oop/",
  },
]

function App() {
  const conceptsMap = importantConcepts.map(function (concept) {
    return (
      <li>
        <h3>{concept.title}</h3>
        <a href={concept.url}>{concept.url_description}</a>
      </li>
    );
  });
  return (
    <div>
      <h1>Important JavaScript Concepts</h1>
      <h2><em>What to know about JS before learning React</em></h2>
      <ul>
        {conceptsMap}
      </ul>
    </div>
  );
}

export default App;
