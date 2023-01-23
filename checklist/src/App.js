import React from "react";
import Main from "./components/Main";
import showResults from "./components/showResults";
function App() {
  return (
    <div className="App">
      <Main onSubmit={showResults} />
    </div>
  );
}

export default App;
