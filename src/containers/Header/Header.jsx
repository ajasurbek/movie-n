import { Link } from 'react-router-dom'

import './Header.scss'

const Header = () => {
    return (
        <>
        <div className="header">
        <div className="container">
        <Link to='/' className="header__logo links">
        <img src='./Без названия.png' alt="logo" width='40' className="logo__img"/>
        </Link>
        <div className="header__links">
        <Link to='/movies' className="movies__link links">Movies</Link>
        <Link to='/tvshows' className="tv-shows__link links">Tv Shows</Link>
        <Link to='/latestMovies' className="top-rated__link links">Top Rated Movie</Link>
        <Link to='/upcoming' className="up-coming__link links">Up coming</Link>
        </div>
        
        
        <div className="container__item">
		<form className="form">
			<input type="search" className="form__field" placeholder="Search" />
			<button type="submit" className="btn btn--primary btn--inside uppercase">Search</button>
		</form>
	</div>
        
        </div>
        </div>
        </>
        )
    }
    export default Header