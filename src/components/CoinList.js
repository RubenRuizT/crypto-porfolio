import React, { useEffect,useState,useContext } from 'react';
import axios from "axios"; 
import coinGecko from '../apis/coinGecko';
import { WatchListContext } from '../context/watchListContext';
import CoinDetailPage from '../pages/CoinDetailPage';
import Coin from "../components/Coin";

function CoinList() {
    const [coins,setCoins]= useState([]); 
    const {watchList} = useContext(WatchListContext);  
    const [isLoading,setIsLoading] = useState(false); 

    useEffect(()=>{
        const fetchData=async () =>{
            setIsLoading(true); 

            const response = await coinGecko.get("/coins/markets",{
                params:{
                    vs_currency:"usd",
                    ids:watchList.join(","),
                },
            });   

            setCoins(response.data);  
            setIsLoading(false); 
            console.log(coins);
            
        }; 

        fetchData(); 

    },[]);

    const renderCoins=() => {
        if(isLoading){
        return (<div>
                <p>Loading...</p>
            </div>) 
        }

            return(
                <ul className ="coinList list-group mt-2"> 
                    {coins.map(coin => {
                      return <Coin key ={coin.id} coin ={coin}/>
                    })}
                </ul>
            )
    }

    return (
        <div>
            {renderCoins()}
        </div> 
    );
}

export default CoinList; 