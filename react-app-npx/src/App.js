// bấm nút, đếm số lần click
import {useState} from 'react';
function App() {
  //đếm bắt đầu từ số  1
  const [counter, setCounter] = useState(1);
  const handleIncrease = () => {
    setCounter(counter+1)
  }
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
