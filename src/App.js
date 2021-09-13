import React from "react";

const App = () => {
  return (
    <div className="container">
      <div className="valid-keys">
        <span className="matched">bata</span>
        <span className="remainder">ta</span>
      </div>
      <div className="typed-keys">asdsdbatasdsds</div>
      <div className="completed-words">
        <ol>
          <li>time</li>
          <li>casada</li>
          <li>vida</li>
          <li>bar</li>
        </ol>
      </div>
    </div>
  );
};

export default App;