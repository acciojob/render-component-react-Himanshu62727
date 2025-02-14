import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";


before(() => {
  cy.visit('http://localhost:8080'); // Ensure this URL is correct
});

it('should check if p tag is rendered', () => {
  cy.get('p').should('contain.text', 'I am learning React. My life is getting better.');
});



ReactDOM.render(<App />, document.getElementById("root"));
