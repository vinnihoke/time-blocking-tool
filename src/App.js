import React from 'react';
import { useEffect, useState } from 'react';
import { Icon, Sidebar, Segment, Menu } from "semantic-ui-react"
import TimeblockList from './views/TimeblockList.js';
import Auth from './views/Auth.js'
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';

function App() {

  const [darkmode, setDarkmode] = useState(false)
  const [sidebar, setSidebar] = useState(false)

  const toggleDarkmode = () => {
    setDarkmode(!darkmode)
  }

  // const toggleSidebar = () => {
  //   if (sidebar === true) {
  //     document.querySelector(".ui.sidebar.inverted").classList.add('visible')
  //   } else {
  //     document.querySelector(".ui.sidebar.inverted").classList.remove('visible')
  //   }
  // }

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
    // toggleSidebar()
  }, [darkmode, sidebar])

  return (
    <Router>
      <Sidebar.Pushable>
        <Sidebar as={Menu}
          animation='push'
          icon='labeled'
          direction="right"
          onHide={() => setSidebar(false)}
          vertical
          visible={sidebar}
          width='very wide'
        >
          <div className="ui form">
            <div className="field">
              <label>Title</label>
              <input type="text"></input>
            </div>
            <div className="field">
              <label>Description</label>
              <textarea rows="2"></textarea>
            </div>
            <div class="ui submit button">Submit</div>
          </div>
        </Sidebar>
        <Sidebar.Pusher dimmed={sidebar}>
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
            <div className="ui grid">
              <div className="right floated column">
                <div className="ui animated blue button right floated" tabIndex="0" onClick={() => setSidebar(!sidebar)}>
                  <div className="visible content">Add new timeblock</div>
                  <div className="hidden content">
                    <i className="right  plus icon"></i>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Router >
  );
}

export default App;
