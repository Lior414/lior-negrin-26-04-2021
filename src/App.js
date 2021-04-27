import React from 'react';
import Header from './components/header/header.component';
import WeatheDetails from './components/pages/weather-details/weather-details.component';

class App extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <WeatheDetails/>
      </div>
    )
  };
}
export default App;
