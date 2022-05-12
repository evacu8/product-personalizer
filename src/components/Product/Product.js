import styles from './Product.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

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

  const prepareSummary = props => {
    console.log(
      `SUMMARY
      =======
      NAME: ${props.title}
      PRICE: ${getPrice(currentSize)}
      SIZE: ${currentSize}
      COLOR: ${currentColor}`);
  }

  const handleCartButton = e => {
    e.preventDefault();
    prepareSummary(props);
  }

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
      <img
        className={styles.image}
        alt={`${props.name} shirt`}
        src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice(currentSize)}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => 
                <li key={props.sizes[props.sizes.indexOf(size)].name}><button 
                type="button" 
                onClick={() => {handleSizeChange(size)}} 
                className={clsx(size.name === currentSize && styles.active)}>{props.sizes[props.sizes.indexOf(size)].name}</button>
                </li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(color => 
                <li key={props.colors[props.colors.indexOf(color)]}><button 
                type="button"
                onClick={() => {handleColorChange(color)}}  
                className={clsx(prepareColorClassName(color), color === currentColor && styles.active)} />
                </li>)}
            </ul>
          </div>
          <Button 
            className={styles.button} 
            onClick={(e) => {handleCartButton(e)}}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
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