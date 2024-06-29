import { CDN_URL } from "../utils/constants";
const ResturantCart = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, costForTwo, avgRating } = resData?.info;
    const {deliveryTime} = resData?.info.sla;
    return (
        <div className="res-wrap">
        <div className="res-main">
          <img className="res-img" 
          src={ CDN_URL + cloudinaryImageId} />
           <h3>{name}</h3>
           <h4 className="cuisines">{cuisines.join(",")}</h4>
           <h4>{costForTwo}</h4>
           <h4>{avgRating} Rating</h4>
           <h4>{deliveryTime} minutes</h4>
        </div>
        </div>
    )
}
export default ResturantCart;