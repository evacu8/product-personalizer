import styles from './ProductForm.module.scss';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import clsx from 'clsx';

const ProductForm = props => {

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  const prepareSummary = props => {
    console.log(
      `SUMMARY
      =======
      NAME: ${props.title}
      PRICE: ${props.getPrice(props.currentSize)}
      SIZE: ${props.currentSize}
      COLOR: ${props.currentColor}`);
  }

  const handleCartButton = e => {
    e.preventDefault();
    prepareSummary(props);
  }

  return (
    <form>
      <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
          {props.sizes.map(size => 
            <li key={props.sizes[props.sizes.indexOf(size)].name}><button 
            type="button" 
            onClick={() => {props.handleSizeChange(size)}} 
            className={clsx(size.name === props.currentSize && styles.active)}>{props.sizes[props.sizes.indexOf(size)].name}</button>
            </li>)}
        </ul>
      </div>
      <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
          {props.colors.map(color => 
            <li key={props.colors[props.colors.indexOf(color)]}><button 
            type="button"
            onClick={() => {props.handleColorChange(color)}}  
            className={clsx(prepareColorClassName(color), color === props.currentColor && styles.active)} />
            </li>)}
        </ul>
      </div>
      <Button 
        className={styles.button} 
        onClick={(e) => {handleCartButton(e)}}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  )
};

ProductForm.propTypes = {
  currentColor: PropTypes.string.isRequired,
  currentSize: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  handleColorChange: PropTypes.func.isRequired,
  handleSizeChange: PropTypes.func.isRequired,
};

export default ProductForm;