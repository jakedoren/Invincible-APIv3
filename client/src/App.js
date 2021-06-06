// client/src/App.js

import React from "react";
import axios from 'axios'
import Heading from './components/header/Header'
import "./App.css";
import Header from "./components/header/Header";
import Widget from "./components/widget/Widget";
import Documentation from "./components/documentation/Documentation";

function App() {
  const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   axios.get("/api/characters")
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <div className="App">
      <Header />
      <Widget />
      <Documentation />
    </div>
  );
}

export default App;