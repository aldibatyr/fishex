import { products, background } from 'constants/data';
import React from 'react';
import { useParams } from 'react-router-dom';
import './index.scss'

const ProductPage = () => {

  const { productName } = useParams();
  const productData = products.filter(x => x.name === productName)[0];
  const bg = background.filter(x => x.company === productData.company)[0].pic;

  return <div className='product-block'>
    <div className='header' style={{ background: `url(${require(`../../${bg}`)}) no-repeat center/cover` }} />
    <div className='content'>
      <div className='card-wrapper'>
        <div className='pic'><img src={require(`../../${productData.pic}`)} alt={productData.name} /></div>
        <div className='info'>
          <div className='title'>{productData.title}</div>
          <div className='description' dangerouslySetInnerHTML={{ __html: productData.description }} />
        </div>
      </div>
      <div className='additional-info'>
        {productData.additionalInfo.map((element, index) => (
          <div className='item' key={index}>
            <div className='text'>{element.text}</div>
            <div className='number'>{element.number}</div>
          </div>
        ))}
      </div>
    </div>
  </div>;
};

export default ProductPage;