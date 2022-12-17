import './App.css';
import Listing from './components/Listing';
import etsy from './data/etsy.json';

function App() {
  const data = etsy;
  return (
    <Listing items={data} />
  )
}



export default App;
