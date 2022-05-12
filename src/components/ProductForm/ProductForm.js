import styles from './ProductForm.module.scss';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';

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
      <OptionSize
        currentSize={props.currentSize}
        sizes={props.sizes}
        setCurrentSize={props.setCurrentSize} 
      />
      <OptionColor 
        currentColor={props.currentColor} 
        colors={props.colors} 
        setCurrentColor={props.setCurrentColor} 
      />
      <Button 
        className={styles.button}  
        onClick={(e) => {handleCartButton(e)}}>
        <span className="fa fa-shopping-cart" 
      />
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
  setCurrentColor: PropTypes.func.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
};

export default ProductForm;