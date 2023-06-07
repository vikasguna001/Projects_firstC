import React, { useEffect, useState } from 'react'

function Home() {
  const [Data, setData] = useState([])

  const callAPI = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/TableData`);
      const data = await res.json();
      console.log(data);
      setData(data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callAPI();
  }, [])
  return (
    <div>
      {
        Data.map((item, i) => {
          return (
            <>
              <p>{item.name}</p>
              <p>{item.age}</p>
              <p>{item.city}</p>
              <hr />
            </>
          )
        })
      }
    </div>
  )
}

export default Home
