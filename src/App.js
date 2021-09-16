import React, { useState } from "react";

const MAX_TYPED_KEYS = 30;

const App = () => {

  const[typedKeys, setTypedKeys] = useState([]);

  const handleKeyDown = (e) => {
    e.preventDefault();
    const{key} = e;
    setTypedKeys((prev)=>[...prev, key].slice(MAX_TYPED_KEYS * -1));
    console.log('key',key);
  }

  return (
    <div className="container" tabIndex="0" onKeyDown={handleKeyDown}>
      <div className="valid-keys">
        <span className="matched">bata</span>
        <span className="remainder">ta</span>
      </div>
      <div className="typed-keys">{typedKeys ? typedKeys.join('') : null}</div>
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