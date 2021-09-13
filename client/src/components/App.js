import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

const AboutMe = () => { return (<div> About me </div>) };
const Apps = () => { return (<div> Apps </div>) };
const Landing = () => { return (<div> Landing </div>) }


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Landing} />
        <Route path="/Apps" component={Apps} />
        <Route path="/AboutMe" component={AboutMe} />
      </BrowserRouter>
    </div>
  )
}

export default App;