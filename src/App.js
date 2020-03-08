import React from 'react';
import { useEffect, useState } from 'react';
import Table from './components/Table';
import { Icon } from "semantic-ui-react"

function App() {

  const [status, setStatus] = useState('')
  const [darkmode, setDarkmode] = useState(false)

  const handleChange = (e) => {
    setStatus(e.target.value)
  }

  const toggleDarkmode = () => {
    setDarkmode(!darkmode)
    if (darkmode === true) {
      document.querySelector(".ui.segment").classList.add('inverted')
      document.querySelectorAll(".ui.small.striped.table").classList.add('inverted')
    } else {
      document.querySelector(".ui.segment").classList.remove('inverted')
      document.querySelectorAll(".ui.small.striped.table").classList.remove('inverted')
    }
  }

  return (
    <main className="ui container">
      <div className="ui segment">
        <h3>Timeblocking</h3>
        {
          darkmode == false ? <Icon name="moon" onClick={toggleDarkmode} /> : <Icon name="sun" onClick={toggleDarkmode} />
        }

        <Table title="📚 Study" timeframe="8:00 - 11:00" darkmode={darkmode} />
        <Table title="👩‍💻 Coding" timeframe="12:00 - 14:00" darkmode={darkmode} />
        <Table title="🤝 Client" timeframe="14:15 - 17:30" darkmode={darkmode} />
      </div>
    </main>
  );
}

export default App;
