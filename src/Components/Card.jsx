
import PropTypes from 'prop-types';

const Card = ({property}) => {
   
    const {image,propertyName,location,agentName,agentImage,
        varifyStatus,maxPrice,minPrice}=property || {}
        console.log(property)
    return (
        <div className="card glass shadow-xl">
  <figure className="relative">
    <img
      src={image} referrerPolicy='no-referrer'
      alt="Shoes" 
      className="h-60 w-full"/>
      <div className="inline rounded-badge px-2 py-1 top-1 right-2 bg-slate-50 absolute">
        {varifyStatus}
      </div>
  </figure>
  <div className="card-body">
    <div className='flex gap-2 font-bold items-center'><img referrerPolicy='no-referrer' className='h-8 w-8 rounded-full' src={agentImage} alt="" /> <p>{agentName}</p></div>
    <h2 className="card-title">{propertyName}</h2>
    <p>{location}</p>
    <p>${minPrice}-${maxPrice}</p>
    
    <div className="card-actions justify-end">
      <button className='btn bg-yellow-100'>Update</button>
      <button className="btn bg-red-200">Delete</button>
    </div>
  </div>
</div>
    );
};
Card.propTypes={
    property:PropTypes.object
}
export default Card;