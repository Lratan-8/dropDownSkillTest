import './App.css';
import Dropdown from './Dropdown';

function App() {

  let itemsArr = ["Name","age","occupation","qualification","designation"];  //pass items in the array to show in the list and it will be passed as props

  return (
    <div className="App">
      <Dropdown itemsList={itemsArr} />
      
    </div>
  );
}

export default App;
