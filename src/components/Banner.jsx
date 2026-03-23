import './Banner.css'

function Banner() {
    return(
        <div className="banner-wrap">
            <div className="banner-left">
                <p>Spotify 미리 듣기</p>
                <p>가끔 표시되는 광고와 함께 무제한 곡 및 팟캐스트를 이용하려면 가입하세요. 신용카드는 필요없습니다.</p>
            </div>
            <button>무료로 가입하기</button>
        </div>
    );
}

export default Banner;