import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [arr, setArr] = useState([])
  const details = async () => {
    try {
      const result = await axios.get("http://localhost:8080/")
      setArr(result.data);
      console.log(JSON.stringify(result.data))
      
    } catch (err) {
document.write("page not found");
      console.log(err)
    }
  }

  
  useEffect(() => {
    details()
  }, [])
  return (
   <React.Fragment>
    <table cellPadding={10} cellSpacing={10} border={1}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Image</th>
        </tr>
      </thead>

      {

        arr.map((element, index) => {
          return (
            <tbody>
              <tr key={index}>
                <td>{element.fullname}</td>
                <td>{element.username}</td>
                <td><img width="100px" height="100px" src={element.image}></img></td>


              </tr>
            </tbody>
          )
        })
      }
    </table>

  </React.Fragment>
  );
}

export default App;
