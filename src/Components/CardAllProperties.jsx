import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PropTypes from 'prop-types'


const CardAllProperties = ({property}) => {
    
        const {user}=useAuth()
    const {image,propertyName,location,agentName,
        varifyStatus,maxPrice,minPrice,_id}=property || {}
        console.log(property)
    return (
        <div className="card glass  shadow-xl">
  <figure className="relative">
    <img
      src={image}
      alt="Shoes" 
      className="h-60 w-full"/>
      <div className="inline rounded-badge px-2 py-1 top-1 right-2 bg-slate-50 absolute">
        {varifyStatus}
      </div>
  </figure>
  <div className="card-body">
    <div className='flex gap-2 font-bold items-center'><img className='h-8 w-8 rounded-full' src={user?.photoURL} alt="" /> <p>{agentName}</p></div>
    <h2 className="card-title">{propertyName}</h2>
    <p>{location}</p>
    <p>${minPrice}-${maxPrice}</p>
    
    <div className="card-actions justify-end">
      <Link to={`/allProperties/${_id}`} className='btn bg-yellow-100'>Detials</Link>
    
    </div>
  </div>
</div>
    );
    
};
CardAllProperties.propTypes={
    property:PropTypes.object
}
export default CardAllProperties;