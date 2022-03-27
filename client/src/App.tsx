import React from 'react';

function App() {
  const fetchData = async () => {
    const response = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  };

  fetchData();

  return (
    <div className="App">
      <p>Hello world from App</p>
    </div>
  );
}

export default App;
