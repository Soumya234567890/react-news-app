import './App.css';
import {NavBar} from "./Components/NavBar";
import {NewsBoard} from "./Components/NewsBoard";
import {NewsItems} from "./Components/NewsItems"; 
const App = () => {
  return (
    <div>
      <NavBar/>
      <NewsBoard/>
      <NewsItems/>
      
    </div>
  )
}
export default App
