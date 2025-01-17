import { Link } from "react-router-dom";


const WishlistCard = ({property}) => {
   
    const {propertyName,location,agentName,agentImage,propertyId,
        varifyStatus,maxPrice,minPrice,_id}=property || {}
        console.log(property)
    return (
        <div className="card glass  shadow-xl">
        
        <div className="card-body">
          <div className='flex gap-2 font-bold items-center'><img referrerPolicy='no-referrer' className='h-8 w-8 rounded-full' src={agentImage} alt="" /> <p>{agentName}</p></div>
          <div className="divider h-1 bg-green-200"></div>
         <div className="flex justify-between items-center"> <h2 className="card-title">{propertyName}</h2> <div className="inline px-2 py-1 rounded-badge border border-yellow-700">{varifyStatus}</div></div>
          <p>{location}</p>
          <p>${minPrice}-${maxPrice}</p>
          
          <div className="card-actions gap-3 items-center justify-end">
            <Link to={`/dashboard/wishlist/offer/${propertyId}`} className='btn bg-yellow-100'>Make an Offer</Link>
            <button className="btn bg-yellow-100">Remove</button>
          
          </div>
        </div>
      </div>
    );
};

export default WishlistCard;