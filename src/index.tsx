import ReactDOM from "react-dom";
import { GuestList } from "./component/GuestList";
// import Parent from "./component/Parent";



const App = () => {
    return (
        <GuestList/>
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'));