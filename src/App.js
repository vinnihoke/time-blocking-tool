import React from 'react';
import { useEffect, useState } from 'react';
import { Icon } from "semantic-ui-react"
import TimeblockList from './views/TimeblockList.js';
import Auth from './views/Auth.js'
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';

function App() {

  const [darkmode, setDarkmode] = useState(false)

  const toggleDarkmode = () => {
    setDarkmode(!darkmode)
  }

  useEffect(() => {
    if (darkmode === true) {
      document.querySelector(".ui.segment").classList.add('inverted')
      const tables = document.querySelectorAll(".ui.small.striped.table")
      tables.forEach(table => table.classList.add('inverted'))
      document.querySelector('body').classList.add('darkmodeBG')
      const buttons = document.querySelectorAll('.ui.buttons')
      buttons.forEach(button => button.classList.add('black'))
    } else {
      document.querySelector(".ui.segment").classList.remove('inverted')
      const tables = document.querySelectorAll(".ui.small.striped.table")
      tables.forEach(table => table.classList.remove('inverted'))
      document.querySelector('body').classList.remove('darkmodeBG')
      const buttons = document.querySelectorAll('.ui.buttons')
      buttons.forEach(button => button.classList.remove('black'))
    }
  }, [darkmode])

  return (
    <Router>
      <main className="ui container">
        <div className="ui segment">
          <h3>Timeblocking</h3>
          {
            darkmode === false ? <Icon name="moon" className="fab" onClick={toggleDarkmode} /> : <Icon name="sun" className="fab" onClick={toggleDarkmode} />
          }

          <Switch>
            <Route exact path={`/dashboard/auth/:token`}>
              <Auth darkmode={darkmode} />
            </Route>
            <Route exact path={`/dashboard`}>
              <TimeblockList darkmode={darkmode} />
            </Route>
          </Switch>
        </div>
      </main>
    </Router>
  );
}

export default App;
