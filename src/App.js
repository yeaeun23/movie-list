//import Button from "./Button";
//import styles from "./App.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return <Router>
    <Switch>
      <Route path="/movie/:id">
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>;
}



// function App() {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([])

//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//       .then((response) => response.json())
//       .then((json) => {
//         setCoins(json);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>The Coins! ({coins.length})</h1>
//       {loading ? <strong>Loading...</strong> :
//         <select>
//           {coins.map((coin) => (
//             <option>
//               {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USC
//             </option>
//           ))}
//         </select>
//       }
//     </div>
//   );
// }



// function App() {
//   const [toDo, setToDo] = useState("");
//   const [toDos, setToDos] = useState([]);
//   const onChange = (event) => setToDo(event.target.value);
//   const onSubmit = (event) => {
//     event.preventDefault();
//     if (toDo === ""){
//       return;
//     }    
//     setToDos(currentArray=>[toDo, ...currentArray]);
//     setToDo("");
//   };

//   return (
//     <div>
//       <h1>My To Dos ({toDos.length})</h1>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange}
//           value={toDo}
//           type="text"
//           placeholder="Write to-do.." />
//         <button>Add</button>
//       </form>
//       <hr />
//       <ul>
//         {toDos.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }



// function App() {
//   const [showing, setShowing] = useState(false);
//   const onClick = () => setShowing((prev) => !prev)

//   return (
//     <div>
//       {showing ? <Hello /> : null}
//       <button onClick={onClick}>{showing? "Hide" : "Show"}</button>
//     </div>
//   );

//   function Hello() {
//     useEffect(()=>{
//       console.log("created");
//       return () => console.log("destroyed");
//     }, []);

//     return <h1>Hello</h1>;
//   }



// const [counter, setValue] = useState(0);
// const [keyword, setKeyword] = useState("");
// const onClick = () => setValue((prev) => prev+1);
// const onChange = (event) => setKeyword(event.target.value);

// console.log("always");
// useEffect(()=>{
//   console.log("once");
// }, []);
// useEffect(()=>{
//   if(keyword !== "" && keyword.length > 5){
//     console.log("search for: ", keyword);
//   }    
// }, [keyword]);

// return (
//   <div>
//     <input value={keyword} 
//     onChange={onChange} 
//     type="text" 
//     placeholder="Search.." />
//     <h1>{counter}</h1>
//     <button onClick={onClick}>Click me</button>
//   </div>
// );
// }

export default App;
