import React from 'react';
import ReactDOM from 'react-dom';

// Create the React component
function App() {
  return (
    <div>
      <h1>Welcome to My React App</h1>
      <p>I am learning React. My life is getting better.</p>
    </div>
  );
}

// Render the component into the 'root' div
ReactDOM.render(<App />, document.getElementById('root'));
