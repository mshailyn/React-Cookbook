import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button 
        color= {showAdd ? 'white': 'orange' }
        text={showAdd ? 'Close' : 'Add'} 
        textColor={showAdd ? 'orange' : 'white'}
        onClick={onAdd}
        />
    </header>
  )
}

Header.defaultProps = {
    title: 'Recipe Book'
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header