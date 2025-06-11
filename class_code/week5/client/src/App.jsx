
import './App.css'

function App() {
  const fetchData = async () => {
    const response = await fetch(`http://localhost:8000/data`);

    const data = await response.json();
    console.log(data);
  };

  return (
    <button onClick={fetchData}>Click me to fetch data</button>
  )
}

export default App
