import React from 'react';
import './App.css';
import {Header} from "./components/header";
import {Footer} from "./components/footer";
import {Content} from "./components/content";
import {countContext, useCountContext} from "./context/countContext";
import {dataContext, useDataContext} from "./context/dataContext";

function App() {
  const countValue = useCountContext()
  const dataValue = useDataContext()
  return (
    <div className="App">
      <dataContext.Provider value={dataValue}>
        <countContext.Provider value={countValue}>
          <Header />
          <Content />
          <Footer />
        </countContext.Provider>
      </dataContext.Provider>
    </div>
  );
}

export default App;
