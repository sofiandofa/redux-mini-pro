import { actions } from "./store";
import {useSelector,useDispatch}from 'react-redux';


function App(){
    const counter=useSelector(state=>state.counter)
    const dispatch=useDispatch();
    const increment=()=>{
        dispatch(actions.increment())
    }
    const decrement=()=>{
        dispatch(actions.decrement())

    }
    const addBy=()=>{
        dispatch(actions.addBy(10))

    }
    return(
        <div>
            <h1>{counter}</h1>
            <button
            onClick={increment}
            >
                +
            </button>
            <button
            onClick={decrement}
            >
                -
            </button>
            <button
            onClick={addBy}
            >
                add by 10
            </button>
        </div>
    )
}

export default App