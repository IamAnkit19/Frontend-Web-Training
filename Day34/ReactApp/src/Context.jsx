// import { createContext } from "react";

// let Context = createContext();

// export default Context;

import { createContext, useEffect, useReducer } from "react";

let Context = createContext();

export default Context;

const ContextP = ({children})=>{
    let data = {
        apiData:[],
        cart:[]
    }
    let [state, dispatch] = useReducer(reducer, data);
    function reducer(state, action){
        if(action.type == "FETCH_DATA"){
            return{
                ...state,apiData:action.payload
            }
        }
        else if(action.type == "ADD_TO_CART"){
            return{
                ...state,cart:[action.payload]
            }
        }
    }
    useEffect(()=>{
        fetch("https://dummyjson.com/recipes").then((res)=>{
            return res.json();
        }).then((data)=>{
            dispatch({type:"FETCH_DATA", payload:data.recipes});
        })
    })

    return (
        <>
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
        </>
    )
}

export {ContextP}