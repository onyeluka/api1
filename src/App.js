import NewsFeed from "./components/NewsFeed";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import CurrencyConverter from "./components/CurrencyConverter";

const App = () => {
  return (
    <div className='section'>
      <Header/>
      <div className='app'>
      <CurrencyConverter/>
<NewsFeed/>
</div>
<Footer/>
    </div>
  );
}

export default App;
