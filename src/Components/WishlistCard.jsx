import { Link } from "react-router-dom";


const WishlistCard = ({property}) => {
   
    const {image,propertyName,location,agentName,agentImage,
        varifyStatus,maxPrice,minPrice,_id}=property || {}
        console.log(property)
    return (
        <div className="card glass  shadow-xl">
        
        <div className="card-body">
          <div className='flex gap-2 font-bold items-center'><img className='h-8 w-8 rounded-full' src={agentImage} alt="" /> <p>{agentName}</p></div>
          <div className="divider h-1 bg-green-200"></div>
          <h2 className="card-title">{propertyName}</h2>
          <p>{location}</p>
          <p>${minPrice}-${maxPrice}</p>
          
          <div className="card-actions gap-3 items-center justify-end">
            <Link to={`/dashboard/wishlist/offer/${_id}`} className='btn bg-yellow-100'>Make an Offer</Link>
            <button className="btn bg-yellow-100">Remove</button>
          
          </div>
        </div>
      </div>
    );
};

export default WishlistCard;