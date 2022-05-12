import styles from './OptionSize.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const OptionSize = props => {

  return (
    <div className={styles.sizes}>
    <h3 className={styles.optionLabel}>Sizes</h3>
    <ul className={styles.choices}>
      {props.sizes.map(size => 
        <li key={props.sizes[props.sizes.indexOf(size)].name}><button 
        type="button" 
        onClick={() => {props.setCurrentSize(props.sizes[props.sizes.indexOf(size)].name)}} 
        className={clsx(size.name === props.currentSize && styles.active)}>{props.sizes[props.sizes.indexOf(size)].name}</button>
        </li>)}
    </ul>
  </div>
  )
};

OptionSize.propTypes = {
  currentSize: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  setCurrentSize: PropTypes.func.isRequired
};

export default OptionSize;