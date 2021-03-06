/* eslint-disable react-hooks/exhaustive-deps */
import styles from './Product.module.scss';
import { useState, useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import PropTypes from 'prop-types';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrice = useMemo(() => {
    return currentSize => {
      const currentSizeObj = props.sizes.find(size => size.name === currentSize)
      return props.basePrice + currentSizeObj.additionalPrice;
    }
  }, [currentSize]);

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
          setCurrentSize={setCurrentSize}
          setCurrentColor={setCurrentColor}
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