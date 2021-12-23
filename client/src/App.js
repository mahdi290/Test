import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Route , link} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import BookingScreen from './screens/BookingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Route path="/home" exact component={HomeScreen}/>
      <Route path ='/book/:roomid/:fromdate/:todate'exact component={BookingScreen}/>
      <Route path="/register" exact component={RegisterScreen}/>
      <Route path="/login" exact component={LoginScreen}/>
      </BrowserRouter>
       
    </div>
  );
}

export default App;