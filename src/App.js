import React, { useState } from 'react';
import './AppMain.css';

function App() {

  // Posts: list variable containing Post component objects for every post in the case study, most likely to be imported through a different file
  //const [Posts, setPosts] = useState([]);

  // dropdownOpen: boolean variable for whether the dropdown menu is open or closed
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // dropdownHandler: arrow function that switches dropdownOpen value whenever the button is toggled
  const dropdownHandler = () => {
    if (dropdownOpen === false) {
      setDropdownOpen(true);
    } else {
      setDropdownOpen(false);
    }
  }

  // dropdownArea: arrow function that returns the apporpriate button (and dropdown menu if applicable) depending on whether dropdownOpen is true/false
  const dropdownArea = () => {
    if (dropdownOpen === false) {
      return (
        <button onClick={dropdownHandler}>
          <div className="triangle"></div>
        </button>
      );
    } else {
      return (
        <button onClick={dropdownHandler}>
          <div className="triangle up"></div>
          {/* below is a sample Dropdown Menu placeholder -- this is where the actual component will go */}
          <div id='dropdownPlaceholder'>dropdown menu</div>
        </button>
        
      );
    }
  }

  return (
    <div className='App'>

      <div className='NavBar'>
        {/* the TeachLA logo will be a link to ACM TeachLA's website*/ }
        <a href='https://teachla.uclaacm.com'><img src='assets/TeachLA.PNG' alt='TeachLA icon' id='TeachLA'/></a>
        {/* 'Bias by Us' will be a link -- clicking on it will go to the introduction page of our learning lab */}
        <h1 id='BiasByUs'>Bias by Us</h1>
        <h2 id='currentCaseStudy'>Case Study #2: Facebook Ads</h2>
        {dropdownArea()}
      </div>

      {/* below are Progress Bar and Direction Buttons placeholders*/}
      <div className='ProgressBar'>progress bar</div>
      <div className='DirectionButtons'>direction buttons</div>

      <div className='Posts'>
        {/* below are sample Post placeholders */}
        <p>post 1</p>
        <p>post 2</p>
        <p>post 3</p>
        {/* this mapping function will render the actual list of Posts */}
        {
          /*
          Posts.map((post, index) => {
            return <Post content={post} key={index} />
          })
          */
        }
      </div>

    </div>
  );
}

export default App;
