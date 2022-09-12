import './App.css';
import { Carousel } from './Carousel';

function App() {
  return (
    <div className="App">
      <Carousel slides={1}/>
      <Carousel slides={2}/>
      <Carousel slides={3}/>
    </div>
  );
}

export default App;
