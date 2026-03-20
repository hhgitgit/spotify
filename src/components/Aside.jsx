import earth from '../assets/icon-earth.png'

function Aside() {
    return(
        <div className="aside-wrap">
            <div className="aside-top">
                <p>내 라이브러리</p>
                <p>+ &nbsp;만들기</p>
            </div>
            <div className="box-wrap">
                <div className="aside-box">
                    <p>첫 번째 플레이리스트를 만드세요.</p>
                    <p>어렵지 않아요. 저희가 도와드릴게요.</p>
                    <p>플레이리스트 만들기</p>
                </div>
                <div className="aside-box">
                    <p>팔로우할 팟캐스트를 찾아보세요</p>
                    <p>새로운 에피소드에 대한 소식을 알려드릴게요.</p>
                    <p>팟캐스트 둘러보기</p>
                </div>
            </div>
            <div className="aside-bot">
                <ul>
                    <li>법률 정보</li>
                    <li>안전 및 개인정보 보호 센터</li>
                    <li>개인정보 처리방침</li>
                    <li>광고 상세정보</li>
                    <li>접근성</li>
                    <li>쿠키</li>
                </ul>
                <div className="language">
                    <img src={earth} alt="지구 이미지" />
                    <p>한국어</p>
                </div>
            </div>
        </div>
    );


    
}

export default Aside;