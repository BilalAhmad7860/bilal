import React, { useContext } from 'react'
import { ShopContext } from '../contest/ShopContext';
import Breadcrum from '../components/Breadcrum/Breadcrum';

 const product = () => {
  const {all_product} = useContext(ShopContext);
  const{productId} = useParams();
  const product =all_product.find((e)=>e.id === Number(productId));
  return (
    <div>
  <Breadcrum product={product}/>

    </div>
  )
}

export default product;