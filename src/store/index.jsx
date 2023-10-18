import {configureStore,createSlice} from "@redux/toolkit";
const counterSlice =createSlice({
    name:"couter",
    initState:{counte:0},
    reducers:{
        increment(state,action){
            state.couner++
        }, 
        decrement(state,action){
            state.couner--
        },
        addBy(state,action){
            state.couner =+ action.payload
        }
    }

})

export const actions=counterSlice.actions;
const store  =configureStore({
    reducer:counterSlice.reducers
})
export default store;