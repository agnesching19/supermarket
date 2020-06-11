import React from 'react';
import PropTypes from 'prop-types';
import { useCountValue, useActions } from '../../features/basket';
import Styled from './styled';

const Product = ({ name, priceByItem, priceByWeight, unitPrice, url, discount }) => {
  const { addItem, removeItem } = useActions();
  const count = useCountValue();
  
  return (
    <Styled>
      <h4>
        {name}
      </h4>
      <img src={url} alt={name} />

      <div className='middle-div'>
        {discount && (
          <p className='discount'>{discount.text}</p>
        )}
      </div>
      
      {priceByItem && (
        <p className='unitPrice'>£{unitPrice}/each</p>
      )}

      {priceByWeight && (
        <p className='unitPrice'>£{unitPrice}/kg</p>
      )}

      <button
        type="button"
        onClick={addItem}
      >
        +1
      </button>

      <button
        type="button"
        onClick={removeItem}
      >
        -1
      </button>

      <div>
        Total value: <strong>{count}</strong>
      </div>
      
    </Styled>
  );
};

Product.propTypes = {
  name: PropTypes.string,
  priceByItem: PropTypes.bool,
  priceByWeight: PropTypes.bool,
  unitPrice: PropTypes.number,
  url: PropTypes.string,
  discount: PropTypes.objectOf(PropTypes.object),
};

Product.defaultProps = {
  name: '',
  priceByItem: false,
  priceByWeight: false,
  unitPrice: 0,
  url: '',
  discount: null,
};

export default Product;