import styles from './OptionColor.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const OptionColor = props => {

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {props.colors.map(color => 
          <li key={props.colors[props.colors.indexOf(color)]}><button 
          type="button"
          onClick={() => {props.setCurrentColor(props.colors[props.colors.indexOf(color)])}}  
          className={clsx(prepareColorClassName(color), color === props.currentColor && styles.active)} />
          </li>)}
      </ul>
    </div>
  )
};

OptionColor.propTypes = {
  currentColor: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
};

export default OptionColor;