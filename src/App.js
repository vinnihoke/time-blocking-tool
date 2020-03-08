import React from 'react';
import { useEffect, useState } from 'react';
import Table from './components/Table';

function App() {

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setStatus(e.target.value)
  }

  return (
    <main className="ui grid container">
      <div className="column">
        <h3>Timeblocking</h3>
        <Table title="📚 Study" timeframe="8:00 - 11:00" />
        <Table title="👩‍💻 Coding" timeframe="12:00 - 14:00" />
        <Table title="🤝 Client" timeframe="14:15 - 17:00" />
      </div>
    </main>
  );
}

export default App;
