/* 
HTML structure that will be created with React.createElement:
<div id="parent">
  <div id="child">
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
  </div>
  <div id="child2">
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
  </div>
</div>

Note: ReactElement(Object) => HTML(Browser Understands)
*/

// Create a parent React element containing child elements
const parent = React.createElement('div', { id: 'parent' }, [
    // First child with h1 and h2 tags
    React.createElement('div', { id: 'child' }, [
      React.createElement('h1', {}, "I'm h1 Tag"),
      React.createElement('h2', {}, "I'm h2 Tag"),
    ]),
    // Second child with h1 and h2 tags
    React.createElement('div', { id: 'child2' }, [
      React.createElement('h1', {}, "I'm h1 Tag"),
      React.createElement('h2', {}, "I'm h2 Tag"),
    ]),
  ]);
  
  // Log the created React element to the console
  console.log(parent);
  
  // Uncomment the following to create another heading element
  // const heading = React.createElement(
  //   'h1',
  //   { id: 'heading', className: 'head' },
  //   'Hello World from React!'
  // ); 
  // console.log(heading); // This will log the heading object
  
  // Create a root for the React application using ReactDOM
  const root = ReactDOM.createRoot(document.getElementById('root')); 
  // The root is a DOM element where the React app will be rendered
  
  // Render the parent element into the root
  root.render(parent);
  
  // Render is a technique in React that allows you to define what should be displayed in the UI.
  // It helps display views based on certain logic defined in the render function and returns the output.
  