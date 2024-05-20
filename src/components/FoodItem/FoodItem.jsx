import React, { useContext } from 'react'
import './FoodItem.css'
import { images } from '../../images/images'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {

    const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext)

  return (
    <div className='food-item'>
        <div className='food-item-img-container'>
            <img className='food-item-image' src={url+"/images/"+ image} alt=""/>
            {!cartItems[id]
                ?<img className='add' onClick={()=>addToCart(id)} src={images.add_icon} alt="" />
                :<div className='food-item-counter'>
                    <img className='remove-red' onClick={()=>removeFromCart(id)} src={images.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img className='add-green' onClick={()=>addToCart(id)} src={images.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={images.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">₹{price}</p>
        </div>
    </div>
  )
}

export default FoodItem