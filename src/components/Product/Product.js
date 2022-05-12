import styles from './Product.module.scss';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import PropTypes from 'prop-types';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const handleSizeChange = size => {
    setCurrentSize(props.sizes[props.sizes.indexOf(size)].name);
  }

  const handleColorChange = color => {
    setCurrentColor(props.colors[props.colors.indexOf(color)]);
  }

  const getPrice = currentSize => {
    const currentSizeObj = props.sizes.find(size => size.name === currentSize)
    return props.basePrice + currentSizeObj.additionalPrice;
  }


  return (
    <article className={styles.product}>
      <ProductImage name={props.name} currentColor={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice(currentSize)}$</span>
        </header>
        <ProductForm 
          name={props.name} 
          title={props.title} 
          colors={props.colors} 
          sizes={props.sizes} 
          currentColor={currentColor} 
          currentSize={currentSize}
          handleSizeChange={handleSizeChange}
          handleColorChange={handleColorChange}
          getPrice={getPrice}/>
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  basePrice: PropTypes.number.isRequired,
}

export default Product;