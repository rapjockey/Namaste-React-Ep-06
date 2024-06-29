import ResturantCart from "./ResturantCart";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () =>{
    //Hook
    const [listOfResturant, setlistOfResturant] = useState ([]);

    const[FilteredRestaurant, setFilteredRestaurant] = useState([]);

   const [SearchText, setSearchText] = useState("");

    useEffect(() => {
        fetchdata();
    }, [])

    fetchdata = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9974533&lng=73.78980229999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        console.log(json);
        setlistOfResturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return listOfResturant.length === 0 ? <Shimmer/> :  (<div className="search">
        <div className="filter">
            <input type="text" className="search-btn" 
            value={SearchText} 
            onChange={(e) => {
                setSearchText(e.target.value)
            }}/>
            <button className="serach-btn" onClick={() => {
             const FilteredRes = listOfResturant.filter((res) =>
                res.info.name.toLowerCase().includes(SearchText.toLowerCase())
            );
             setSearchText(FilteredRes);
            }}
            
            >Search</button>
            <button className="filter-btn"
                onClick={ () => {
                    const Filterlist = listOfResturant.filter (
                        (res) => res.info.avgRating > 4.4
                    );
                    setFilteredRestaurant(Filterlist);
                 } }
            >
            Top Rated Resturants</button>
        </div>
        <div className="res-cart">
             {FilteredRestaurant.map((info, index) => (
                <ResturantCart key={index} resData={info} />
             ))}
        </div>
    </div>
)}

export default Body;