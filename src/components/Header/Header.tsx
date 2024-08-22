import './Header.css'
import NavBar from './NavBar/NavBar';

const Header = () => {
    return (
        <div className="header">
            <div className="header-wrapper">
                <div className="header-logo">
                    <h1>MyTODO</h1>
                </div>
                <div className="header-navbar"><NavBar/></div>
                <div className="header-auth-btns">
                    <button>Войти</button>
                    <button>Регистрация</button>
                </div>
            </div>
        </div>
    );
}

export default Header