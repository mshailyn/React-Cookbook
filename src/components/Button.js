import PropTypes from 'prop-types'

const Button = ({ color, text, onClick, textColor}) => {
  return (
        <button 
        className='btn' 
        style={{backgroundColor: color, color: textColor}}  
        onClick={onClick}>
            {text}
        </button>
  )
}

Button.defaultProps = {
    color: 'black',
    textColor: 'white'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    textColor: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button