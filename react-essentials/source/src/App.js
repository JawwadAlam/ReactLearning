import './App.css';
import logo from './restaurant.jpg'

const dishes = [
  "Pasta",
   "Lasgnia",
   "Apple Pie",
   "Pastery"
]

const dishesObj = dishes.map((dish, i) => ({id: i, title: dish}))

function Header(props){
  return (
    <h1>{props.name}'s Kitchen</h1>
  );
}

function Main(props){
  return (
    <section>
      <p>We serve the {props.adjective} food in town!</p>
      <img src={logo} height={200} alt="a restaurant with many tables with a window view of city" />
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props){
  return (
    <p>Copyright&copy; {props.year}</p>
  );
}

function App() {
  return (
    <div className="App">
      <Header name="Hell"/>
      <Main adjective="yummy" dishes={dishesObj}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
