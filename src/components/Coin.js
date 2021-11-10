import react from "react"; 
import {Link} from "react-router-dom"; 

function Coin({coin}){

    return(
        <Link to ="/coindetail">
            <li className ="coinList-item list-group-item list-group-item-light list-group-item-action d-flex justify-content-between align-items-center text-dark  ">
                <img className="coinList-image" src={coin.image} alt =""/>
                <span className ="text-decoration-none">{coin.current_price}</span>
                    <span className={coin.price_change_percentage_24h < 0 ? "text-danger mr-2" : "text-success mr-2"}>
                                {coin.price_change_percentage_24h}
                    </span>
                </li>
            </Link>
    );
}

export default Coin;