import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <p>
            Copyright:  <a href="https://www.shailynmoore.com/" target="_blank" >ShaiTech</a>  , 2022
        </p>
        <br></br>
        <Link to="/about">About</Link>
    </footer>
  )
}

export default Footer