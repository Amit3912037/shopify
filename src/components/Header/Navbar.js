import React,{ useContext }  from 'react'
import './Navbar.css'
import CartContext from '../../store/cart-context'
import { Link } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import { useHistory } from 'react-router-dom';


export default function Navbar() {
    const cartCtx=useContext(CartContext);
    const authCtx=useContext(AuthContext);
    const history=useHistory();

    const logoutHandler=()=>{
        authCtx.logout();
        history.push('/login');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand text-primary" href="/">MyShopify</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                    </ul>
                    {/* <p className="d-flex">Cart</p> */}
                    <div className="d-flex">
                        <p className='user_email'>Hey  {authCtx.userEmail}</p>
                    </div>
                    <div className="d-flex">
                        <button onClick={logoutHandler} type="button" class="btn btn-primary">Logout</button>
                    </div>
                    <div className="d-flex">
                    <Link to='/cart' style={{ textDecoration: 'none' }}>
                        <p className="cart">Cart ({cartCtx.totalItems})</p>
                        </Link>
                    </div>


                </div>

            </div>
        </nav>
    )
}
