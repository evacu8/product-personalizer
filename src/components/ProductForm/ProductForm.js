import styles from './ProductForm.module.scss';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import clsx from 'clsx';
import OptionColor from '../OptionColor/OptionColor';

const ProductForm = props => {

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
      <OptionColor 
        currentColor={props.currentColor} 
        colors={props.colors} 
        handleColorChange={props.handleColorChange} 
        choicesStyles={styles.choices} 
        optionLabelStyles={styles.optionLabel}/>
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