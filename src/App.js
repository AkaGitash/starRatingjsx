import './App.css';
import RandomColor from './components/randomcolorgenerator';
import StarRater from './components/star-rater';

function App() {
  return (
    <div className="App">
      {/* {Accordian Component} */}
      {/* <Accordian/> */}
      {/* Random Color Component */}
      {/* <RandomColor/> */}
      {/* Star Maker components */}
      <StarRater noOfStars={12}/>
    </div>
  );
}

export default App;
