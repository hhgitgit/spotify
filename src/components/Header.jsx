import './common.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-spotify.png';
import home from '../assets/icon-home.png';
import search from '../assets/icon-search.png';
import eye from '../assets/icon-eye.png';
import download from '../assets/icon-download.png'

function Header() {
    return(
        <div className="header-wrap">
            <Link to="/">
                <h1 className="logo"><img src={logo} alt="스포티파이 로고" /></h1>
            </Link>
            <div className="header-center">
                <Link to="/">
                    <a href="#" className="home">
                        <img src={home} alt="홈 아이콘" />
                    </a>
                </Link>
                <div className="search-wrap">
                    <img src={search} alt="검색 아이콘" className="search" />
                    <input type="text" placeholder='어떤 콘텐츠를 감상하고 싶으세요?' />
                    {/* <img src={eye} alt="둘러보기 아이콘" className="eye" /> */}
                </div>
            </div>
            <div className="header-right">
                <ul className="menu-left">
                    <li>Premium</li>
                    <li>지원</li>
                    <li>다운로드하기</li>
                </ul>
                <ul className="menu-right">
                    <li>
                        <img src={download} alt="설치 아이콘" />
                        <span>앱 설치하기</span>
                    </li>
                    <li>가입하기</li>
                    <li>로그인하기</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;