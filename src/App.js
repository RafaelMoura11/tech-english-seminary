import { useState } from 'react';
import './App.css';

function App() {
  const colors = ["red", "blue", "green", "orange", "black", "purple"]
  const [selectedColor, setSelectedColor] = useState("white");
  const [colorOnSquare, setColorOnSquare] = useState("white");

  const handleClickOnCircle = (e) => {
    const { target: { id } } = e;
    setSelectedColor(id);
  }

  const handleClickOnSquare = () => {
    setColorOnSquare(selectedColor);
  }
  return (
    <div id="main">
      <div id="first-section">
        <img src="https://www.pe.senac.br/wp-content/uploads/2018/05/Professor_Saulo-Bernardo-1.jpg" alt="professor-saulo" id="saulo-image"/>
        <div id="hello-world">
          <h1>Hello World</h1>
          <p>With CSS you can make your page much more organized and prettier</p>
        </div>
      </div>

      <hr />

      <div id="second-section">
        <h1>You can choose your color!</h1>
        <div id="square" style={{"backgroundColor": colorOnSquare}} onClick={ handleClickOnSquare }></div>
        <div id="colors-board">
          {
            colors.map((color) => <div style={{"backgroundColor": color}} className="color-circle" key={ color } id={ color } onClick={ handleClickOnCircle }></div>)
          }
        </div>
      </div>

      <hr />

      <div id="third-section">
        <div className="animated-div" id="change-color-div">Changing the color!</div>
        <div className="animated-div" id="spinning-div">Spinning around!</div>
        <div className="animated-div" id="change-size-div">Put the mouse over me!</div>
      </div>

      <hr />
    </div>
  );
}

export default App;
