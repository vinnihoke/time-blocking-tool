import React from 'react';
import { useEffect, useState } from 'react';
import TimeblockList from './views/TimeblockList.js';
import Auth from './views/Auth.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useLocalStorage } from './helpers/useLocalStorage.js'
import TimeblockForm from './components/utils/TimeblockForm.js';
import { GlobalProvider } from './context/globalContext.js';
import Landing from './views/Landing.js';

function App() {

  // const [darkmode, setDarkmode] = useLocalStorage('darkmode', "false")


  // const toggleDarkmode = () => {
  //   setDarkmode(!darkmode)
  // }

  // const toggleSidebar = () => {
  //   if (sidebar === true) {
  //     document.querySelector(".ui.sidebar.inverted").classList.add('visible')
  //   } else {
  //     document.querySelector(".ui.sidebar.inverted").classList.remove('visible')
  //   }
  // }

  // useEffect(() => {
  //   if (window.localStorage.getItem('darkmode') === "true") {
  //     document.querySelector(".ui.segment").classList.add('inverted')
  //     const tables = document.querySelectorAll(".ui.small.striped.table")
  //     tables.forEach(table => table.classList.add('inverted'))
  //     document.querySelector('body').classList.add('darkmodeBG')
  //     const buttons = document.querySelectorAll('.ui.buttons')
  //     buttons.forEach(button => button.classList.add('black'))
  //   } else {
  //     document.querySelector(".ui.segment").classList.remove('inverted')
  //     const tables = document.querySelectorAll(".ui.small.striped.table")
  //     tables.forEach(table => table.classList.remove('inverted'))
  //     document.querySelector('body').classList.remove('darkmodeBG')
  //     const buttons = document.querySelectorAll('.ui.buttons')
  //     buttons.forEach(button => button.classList.remove('black'))
  //   }
  // }, [darkmode])

  return (
    <Router>
      <GlobalProvider>
        <main className="ui container">
          <h3>Timeblocking</h3>
          {/* {
                darkmode === false ? <Icon name="moon" className="fab" onClick={toggleDarkmode} /> : <Icon name="sun" className="fab" onClick={toggleDarkmode} />
              } */}

          <Switch>
            <Route exact path="/welcome">
              <Landing />
            </Route>
            <Route exact path="/auth/:token">
              <Auth />
            </Route>
            <Route exact path="/dashboard/:userid">
              <TimeblockList />
            </Route>
          </Switch>
        </main>
      </GlobalProvider>
    </Router >
  );
}

export default App;
