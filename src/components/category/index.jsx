import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';

const Category = ({data, bg}) => {

  const navigate = useNavigate();

  const showProductPage = name => {
    navigate(`/product/${name}`);
  };

  return <div className='category'>
    <div className='header' style={{background: `url(${bg}) no-repeat center/cover`}} />
    <div className='content'>
    {/* <div className='title'>{title}</div> */}
      <div className='card-block'>
        {data.map((element, index) => (
        <div className='card' key={index} onClick={() => showProductPage(element.name)}>
          <img className='card-pic' src={require(`../../${element.pic}`)} alt={element.pic} />
          <div className='text'>
            {element.title}
          </div>
        </div>
        ))}
      </div>
    </div>
  </div>
};

export default Category;