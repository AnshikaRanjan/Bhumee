import './header.css';
import './button.css';  

const Header = () => {
	return (
		<div>
			<nav className='header'>
				<div className='header__logo'>
					{/* <img src='https://i.pinimg.com/originals/c5/02/41/c50241b86ec5c0ad82480b16591489a3.jpg' alt='logo'></img>  */}
					<h4> Bhumee </h4>
				</div>
				<nav className='header__menu'>
					<a href='/home'> Home </a> 
					<a href='/about'> About Us </a>
                    <a href='/portfolio'> Portfolio </a>
				</nav>
				<div className='header__buttons'>
				<button className="button"> Sign In </button>
				</div>
			</nav>
		</div>
	);
};

export default Header;