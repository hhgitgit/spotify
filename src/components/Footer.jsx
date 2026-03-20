import instagram from '../assets/sns-instagram.png';
import twitter from '../assets/sns-twitter.png';
import facebook from '../assets/sns-facebook.png';

function Footer() {
    return(
        <div className="footer-wrap">
            <hr />
            <ul className="footer-nav">
                <li>
                    <p>회사</p>
                    <ul>
                        <li><a href="https://www.spotify.com/kr-ko/about-us/contact/">상세정보</a></li>
                        <li><a href="https://www.lifeatspotify.com/">채용 정보</a></li>
                        <li><a href="https://newsroom.spotify.com/">For the Records</a></li>
                    </ul>
                </li>
                <li>
                    <p>커뮤니티</p>
                    <ul>
                        <li><a href="https://artists.spotify.com/home">아티스트</a></li>
                        <li><a href="https://developer.spotify.com/">개발자</a></li>
                        <li><a href="https://ads.spotify.com/en-US/">광고</a></li>
                        <li><a href="https://investors.spotify.com/home/default.aspx">투자자</a></li>
                        <li><a href="https://spotifyforvendors.com/">공급업체</a></li>
                    </ul>
                </li>
                <li>
                    <p>유용한 링크</p>
                    <ul>
                        <li><a href="https://support.spotify.com/kr-ko/">지원</a></li>
                        <li><a href="https://www.spotify.com/kr-ko/free/">무료 모바일 맵</a></li>
                        <li><a href="https://open.spotify.com/popular-in/kr">국가별 인기 콘텐츠</a></li>
                        <li><a href="https://www.spotify.com/kr-ko/import-music/">내 음악 가져오기</a></li>
                    </ul>
                </li>
                <li>
                    <p>Spotify 요금제</p>
                    <ul>
                        <li><a href="https://www.spotify.com/kr-ko/premium/#ref=spotifycom_footer_premium_individual">Premium 개인</a></li>
                        <li><a href="https://www.spotify.com/kr-ko/duo/#ref=spotifycom_footer_premium_duo">Premium 듀오</a></li>
                        <li><a href="https://www.spotify.com/kr-ko/student/#ref=spotifycom_footer_premium_student">Premium 학생</a></li>
                    </ul>
                </li>
                <li className="sns">
                    <span>
                        <a href="https://www.instagram.com/spotify">
                            <img src={instagram} alt="인스타그램" />
                        </a>
                    </span>
                    <span>
                        <a href="https://x.com/spotify">
                            <img src={twitter} alt="트위터" />
                        </a>
                    </span>
                    <span>
                        <a href="https://www.facebook.com/Spotify">
                            <img src={facebook} alt="페이스북" />
                        </a>
                    </span>
                </li>
            </ul>
            <hr />
            <p className="copyright">© 2026 Spotify AB</p>
            <ul className="footer-menu">
                <li>스포티파이 에이비, Regeringsgatan 19, 111 53 Stockholm, Sweden</li>
                <li>대표: 다니엘 에크</li>
                <li>사업자등록번호: 556703-7485 (스웨덴)</li>
                <li>통신판매업 신고번호: 2024-공정-0007 (사업자정보)</li>
                <li>고객지원문의 +82 1533 6552 및 support@spotify.com</li>
                <li>호스팅서비스제공자: Google LLC</li>
            </ul>
        </div>
    );
}

export default Footer;