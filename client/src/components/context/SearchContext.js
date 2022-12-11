import { useReducer, createContext } from "react";

const INITIATE= {
  city: undefined,
  dates: [],
  options: {
    children: undefined,
    adult: undefined,
    room: undefined
  }
}

export const SearchContext = createContext(INITIATE);

const SearchReducer = (state=INITIATE,action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload
    case "RESET":
      return INITIATE
    default:
      return state;
  }
}

export const SearchContextProvider = ({children}) => {

 const [state, dispatch] = useReducer(SearchReducer, INITIATE)

 return (
    <SearchContext.Provider
    value={{city: state.city, dates: state.dates, options: state.options,dispatch}}
    >
      {children}
    </SearchContext.Provider>
 )
}