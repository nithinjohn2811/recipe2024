import './Navbar.css'
import {Link} from "react-router-dom";


const Navbar = () => {
  return (
    <div className='navbar'>
        <nav>
            <Link to ='/'>
            <h1>Cooking Recipe</h1>
            </Link>
            <Link to ='/create'>
            <button>Create a new Recipe</button>
            </Link>

        </nav>
    </div>
  )
}

export default Navbar