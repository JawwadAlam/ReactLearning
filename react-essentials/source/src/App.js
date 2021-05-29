import './App.css';
import logo from './restaurant.jpg'

const dishes = [
  "Pasta",
   "Lasgnia",
   "Apple Pie",
   "Pastery"
]

const dishesObj = dishes.map((dish, i) => ({id: i, title: dish}))

const checklist = ["boots", "tent", "torch"];
const [firstArrayItem, , thirdItem] = checklist;
console.log(checklist)

console.log(firstArrayItem);
console.log(thirdItem);


class Person {
  constructor(){
    this.firstName = "";
    this.lastName = "";
  }
}

let objPerson = new Person();
objPerson.firstName = "Mike";
objPerson.lastName = "Bloom";

const {lastName} = objPerson;
console.log(lastName);

function Header(props){
  return (
    <h1>{props.name}'s Kitchen</h1>
  );
}

function SecretHeader(props){
  return <Header name={props.name + '-Secret'}/>
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

function App(props) {
  return (
    <div className="App">
      <> {
          props.authorized ? <SecretHeader name="Hell"/> : <Header name="Hell"/> 
          }
        </>
      <Main adjective="yummy" dishes={dishesObj}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
