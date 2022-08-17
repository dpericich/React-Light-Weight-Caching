import React, { useState, useEffect } from 'react';
import pizzaData, { prices } from './pizzaData';
import PizzaTable from './PizzaTable';

const cacheExpirationSeconds = 900;
const NO_PRICE = "no price selected"

const App = () => {
  const [originalRecords, setOriginalRecords] = useState([]);
  const [displayRecords, setDisplayRecords] = useState([]);
  const [lastHTTPCall, setLastHTTPCall] = useState(Date.now());

  useEffect(() => {
    // Simulate our inital call to the server for records
    const serverRecords = pizzaData;
    setOriginalRecords(serverRecords);
    setDisplayRecords(serverRecords);
  }, [])

  const checkCacheExpiration = () => {
    if (Date.now() > lastHTTPCall + cacheExpirationSeconds ) {
      // Make new call to the server for updated records
      const serverResponse = pizzaData;
      setOriginalRecords(pizzaData);
      setLastHTTPCall(Date.now());
    }
  }

  const filterByPrice = (e) => {
    let price = e.target.value;
    checkCacheExpiration();

    if (price === NO_PRICE) {
      setDisplayRecords(originalRecords);
      return
    };

    let newRecords = originalRecords.filter((restaurant) => restaurant.price === price);
    setDisplayRecords(newRecords);
  }

  return(
    <div className="container">
      <h1>Pizza Store Directory Page</h1>
      <div>
        <select onChange={(e) => filterByPrice(e)}>
          <option value={NO_PRICE}>Any Price</option>
          { prices.map(price => <option value={price}>{price}</option>) }
        </select>
      </div>
      <PizzaTable data={displayRecords}/>
    </div>
  )
};

export default App;
