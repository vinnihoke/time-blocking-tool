import React from 'react';
import { useEffect, useState } from 'react';
import Table from './components/Table';
import { Icon } from "semantic-ui-react"

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
    <main className="ui container">
      <div className="ui segment very padded">
        <h3>Timeblocking</h3>
        {
          darkmode === false ? <Icon name="moon" className="fab" onClick={toggleDarkmode} /> : <Icon name="sun" className="fab" onClick={toggleDarkmode} />
        }
        <Table title="📚 Study" timeframe="8:00 - 11:00" darkmode={darkmode} />
        <Table title="👩‍💻 Coding" timeframe="12:00 - 14:00" darkmode={darkmode} />
        <Table title="🤝 Client" timeframe="14:15 - 17:30" darkmode={darkmode} />
      </div>
    </main>
  );
}

export default App;
