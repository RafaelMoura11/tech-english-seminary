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
        <img src="https://i1.wp.com/blog.alexdevero.com/wp-content/uploads/2015/02/css-code-e1517469545230.jpeg?zoom=2&resize=1008%2C672&ssl=1" alt="css-image" id="css-image"/>
        <div id="hello-world">
          <h1>Hello World</h1>
          <p>With CSS you can make your page much more organized and prettier. You can do anything you want with your HTML tags.</p>
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
        <div className="animated-div" id="change-size-div">I want to be bigger!!</div>
      </div>

      <hr />

      <div id="last-section">
        <div>
          <img src="https://media-for1-1.cdn.whatsapp.net/v/t61.24694-24/322101539_209088515188259_6663516498777055739_n.jpg?ccb=11-4&oh=01_AdRJL_b_Fk8E43uy70EaCzbn6f1laF-3BufRJ21l5ktstA&oe=656F5995&_nc_sid=e6ed6c&_nc_cat=101" alt="klara" />
          <p>Klara</p>
        </div>
        <div>
          <img src="https://media-for1-1.cdn.whatsapp.net/v/t61.24694-24/352989230_781288370130028_7065883434391183806_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQdNzon6XuQzIn7bbTyzndJxt6_INOOy7OG5SI6mQrQmw&oe=6575AA41&_nc_sid=e6ed6c&_nc_cat=104" alt="rafael" />
          <p>Rafael</p>
        </div>
        <div>
          <img src="https://media-for1-1.cdn.whatsapp.net/v/t61.24694-24/348531552_201729159441975_9151658873640286015_n.jpg?ccb=11-4&oh=01_AdRww5MxW79PFAau1fxEzFL-woF4724RIxWTZlGFVyUTRQ&oe=656C9CC7&_nc_sid=e6ed6c&_nc_cat=101" alt="carlos-soares" />
          <p>Carlos 1</p>
        </div>
        <div>
          <img src="https://media-for1-1.cdn.whatsapp.net/v/t61.24694-24/402488652_365782826020165_2625997548177862065_n.jpg?ccb=11-4&oh=01_AdTtPvX6GEHfyq-QD4Yh2MCqbt0tFFlbnfzQszv6FO31bA&oe=6573A710&_nc_sid=e6ed6c&_nc_cat=108" alt="carlos-jr" />
          <p>Carlos 2</p>
        </div>
        <div>
          <img src="https://i.imgur.com/xzgJYG9.png" alt="helder" />
          <p>Helder</p>
        </div>
      </div>
    </div>
  );
}

export default App;
