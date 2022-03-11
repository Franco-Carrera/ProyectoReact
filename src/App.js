import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  //ENVS
  //const clientID = "79325";
  //const clientSecret = "23592ec5c9f161f4e7f859ece3e9d9ce07b4281d";
  // const refreshToken = "c9f2ca6abc35b324a3c2201688c1e6f01a916fb1";
  const activities_link = `https://www.strava.com/api/v3/athlete/activities`;

  useEffect(() => {
    async function fetchData() {
      const stravaActivityResponse = await axios.get(
        `${activities_link}?access_token=291ca3cbfc67c6201a110ea995b5a41cc0a18154`
      );
      console.log(stravaActivityResponse);
    }

    fetchData();
  }, [activities_link]);

  return (
    <div className="App">
      <header className="App-header">Testing</header>
    </div>
  );
}
//
export default App;
