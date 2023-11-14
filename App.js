// Creating an Single HTML-Structured React Element Object
/**
 * {id: 'heading'} - Here we can set an attribute of Object in React
 * Basically when we say create elements it creates a heading Object, and inside these we have
 * properties called type, props. Inside props we have something called id which is an
 *  attribute to what we passed and children which hold the value what pass for the element
 */
const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello World from React");

console.log(heading);

// Here we are calling the root id what is available inside DOM as div tag.
const parentData = document.getElementById('root');

/**
 * Here we are creating an root
 * ReactDOM.createRoot is used to create a root for a React tree, taking the parent DOM element as an argument.
 * root represents the root of your React application, allowing React to efficiently manage updates within this part of the DOM.
 */
const root = ReactDOM.createRoot(parentData);

/**
 * root.render is where React takes the previously created React element (heading) and renders it into the specified root.
 * React will convert the virtual representation of the <h1> element into actual DOM elements and insert them into the DOM under the 'root' element.
 * this Render function basically takes the heading object and converts the heading h1 tag and put it on to the DOM
 */
root.render(heading);

/**
 *
 * // Creating Nested HTML-Structured React Element Object
 *
 * const heading = React.createElement("div", {id: "parent"},
 *     React.createElement('h1', {id: "child"}, "I am from h1 tag"));
 *
 * const root = ReactDOM.createRoot(document.getElementById("root"));
 *
 * root.render(heading);
 */

/**
 *
 * // Creating Nested HTML-Structured React Element Object(multiple div with array)
 *
 * const heading = React.createElement(
 *     "div",
 *     { id: "parent" },
 *     [
 *         React.createElement(
 *             'div',
 *             { key: "child1", id: "child1" },
 *             React.createElement('h1', { key: "h1TagChild", id: "h1TagChild" }, "I am from h1 tag")
 *         ),
 *         React.createElement(
 *             'div',
 *             { key: "child2", id: "child2" },
 *             React.createElement('h2', { key: "h2TagChild", id: "h2TagChild" }, "I am from h2 tag")
 *         )
 *     ]
 * );
 *
 * // parameters are tagName and Props where you can find the set attributes and values
 * console.log(heading);
 *
 * const root = ReactDOM.createRoot(document.getElementById("root"));
 *
 * root.render(heading);
 */


/*// Creating Nested HTML-Structured React Element Object(multiple div with array)

const heading = React.createElement(
    "div",
    {id: "parent"},
    [
        React.createElement(
            'div', {id: "child1"},
            [
                React.createElement('h1', {}, "I am from h1 tag"),
                React.createElement('h2', {}, "I am from h2 tag")
            ]
        ),
        React.createElement(
            'div', {id: "child2"}, [
                React.createElement('h1', {}, "I am from h1 tag"),
                React.createElement('h2', {}, "I am from h2 tag")
            ]
        )
    ]
);

// parameters are tagName and Props where you can find the set attributes and values
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);*/


