import React, { createContext, useContext, useReducer } from 'react'

const cartstatecontext = createContext();
const cartdispatchcontext = createContext();

const reducer = (state,action) => {

}

 export const Cartprovider= ({children}) => {
   const[state,dispatch]=useReducer(reducer,[])
  return (
       <cartdispatchcontext.Provider value ={dispatch}>
        <cartstatecontext.Provider value={state}>
            {children}
        </cartstatecontext.Provider>

       </cartdispatchcontext.Provider >
    
  )
}

export const usecart = () => useContext(cartstatecontext);
export const usedispatchcart = ( )=> useContext(cartdispatchcontext);
