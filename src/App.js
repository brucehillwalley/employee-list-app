import React, { useState } from "react";
import List from "./components/List";
import data from "./helper/data";

function App() {
  const [index, setIndex] = useState(0);
  const indexPrev = () => {
    setIndex((index - 5 + data.length) % data.length);
  };
  const indexNext = () => {
    setIndex((index + 5) % data.length);
  };

  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>
          (Employees {index + 1} to {index + 5})
        </h5>
        <List data={data.slice(index, index + 5)} />
        <div className="btns">
          <button onClick={indexPrev}>Prev</button>
          <button onClick={indexNext}>Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
