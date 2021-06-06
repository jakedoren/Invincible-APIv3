// client/src/App.js

import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Widget from "./components/widget/Widget";
import Documentation from "./components/documentation/Documentation";
import Query from './components/querysection/Query'
import Footer from './components/footer/Footer'

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
      <Query />
      <Footer />
    </div>
  );
}

export default App;