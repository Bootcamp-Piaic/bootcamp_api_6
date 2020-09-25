import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [mydata, setMydata] = useState()
  const [isData, setData] = useState(false)
  const [Fetching, setFetching] = useState(false)
  useEffect(() => {

    async function FetchData() {
      setFetching(true)
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/101')
      console.log("Response = ", response)
      let res = await response.json();
      setMydata(res)
      setFetching(false)
    }

    FetchData()
  }, [isData])

  if (Fetching) {
    return (
      <div className="App">
        <h1>Loading Data ...</h1></div>
    )
  }
  return (
    <div className="App">
      <h1>Hello Work</h1>
      <h1>Title :{mydata == null ? "Fetching Data" : mydata.title}</h1>
      <h3>{JSON.stringify(mydata)}</h3>
    </div>
  );
}

export default App;
