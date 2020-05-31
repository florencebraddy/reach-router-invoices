import React from "react";
import { render } from "react-dom";
import { Router, Link, navigate } from "@reach/router";

const App = () => (
  <div>
    <h1>Invoice Finder</h1>
    <nav>
      <Link to="/">Home</Link>
      {""}
      <Link to="dashboard">Dashboard</Link>
      {""}
      <Link to="invoices">Invoices</Link>
    </nav>

    <Router>
      <Home path="/" />
      <NotFound default />
      <Dashboard path="/dashboard" />
      <Invoices path="invoices">
        <Invoice path=":invoiceId" />
        <InvoicesIndex path="/" />
      </Invoices>
    </Router>
  </div>
);

const Home = () => (
  <div>
    <h1>Welcome!</h1>
  </div>
);

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
  </div>
);

const Invoice = props => (
  <div>
    <h2>Invoice {props.invoiceId}</h2>
  </div>
);

const Invoices = props => (
  <div>
    <h2>Invoices</h2>
    <ul>
      <li>
        <Link to="123">Invoice 123</Link>
      </li>
      <li>
        <Link to="ABC">Invoice ABC</Link>
      </li>
    </ul>

    <form
      onSubmit={event => {
        event.preventDefault();
        const id = event.target.elements[0].value;
        event.target.reset();
        props.navigate(id);
      }}
    >
      <p>
        <label>
          New Invoice ID: <input type="text" />
        </label>
        <button type="submit">create</button>
      </p>
    </form>
    {props.children}
  </div>
);

const InvoicesIndex = () => (
  <div>
    <p>Invoices will go here</p>
  </div>
);

const NotFound = () => <p>Oops...looks like there's nothing here!</p>;

render(<App />, document.getElementById("root"));
