import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const BoughtCard = ({property}) => {
    const {propertyName,location,agentName,agentImage,image,
        buyingStatus,maxPrice,minPrice,offerRange,_id}=property || {}
        console.log(property)
    return (
        <div className="card glass shadow-xl">
        <figure className="relative">
          <img referrerPolicy='no-referrer'
            src={image}
            alt={propertyName}
            className="h-60 w-full"/>
            <div className="inline rounded-badge px-2 py-1 top-1 right-2 bg-slate-50 absolute">
              {buyingStatus}
            </div>
        </figure>
        <div className="card-body">
          <div className='flex gap-2 font-bold items-center'> <p>{agentName}</p></div>
          <h2 className="card-title">{propertyName}</h2>
          <p>{location}</p>
          <p>${offerRange}</p>
          
          <div className="card-actions justify-end">
           
           {
            buyingStatus==="accepted"? <Link to={`/dashboard/payBil/${_id}`} className='btn bg-yellow-100'>Pay</Link>:''
           }
          </div>
        </div>
      </div>
    );
};
BoughtCard.propTypes={
    property:PropTypes.object
}
export default BoughtCard;