
import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Main from './Components/Pages/Main';
import LeafletMap from './Components/LeafletMap';



function App() {


  return (
    <div className="App">
  
    <Nav></Nav>
    <Main></Main>
 <LeafletMap></LeafletMap>
    <Footer></Footer>
    </div>
  );
}

export default App;
