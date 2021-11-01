import {createContext,useState,react} from "react"; 

export const WatchListContext = createContext(); 

export const WatchListContextProvider= props => {

    const [watchList,SetWatchList] = useState(["bitcoin,ethereum,ripple"]); 

    return (
        <WatchListContext.Provider value ={{watchList}}> 
            {props.children}
        </WatchListContext.Provider>
    ); 
}