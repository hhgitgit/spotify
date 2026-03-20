import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import './ArtistDetail.css'

function ArtistDetail() {
    const { id } = useParams();
    const [artist, setArtist] = useState(null);
    const [artistTracks, setArtistTracks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [bgOpacity, setBgOpacity] = useState(0);
    

    const handleScroll = (e) => {
        const scrollTop = e.target.scrollTop;

        console.log(scrollTop)

        if (scrollTop > 300) {
            setBgOpacity(1);
        } else if (scrollTop > 200) {
            setBgOpacity(0.75)
        } else if (scrollTop > 100) {
            setBgOpacity(0.5)
        } else {
            setBgOpacity(0);
        }
}

    useEffect(() => {
        const mainRight = document.querySelector(".main-right");

        mainRight.addEventListener("scroll", handleScroll);

        return () => {
            mainRight.removeEventListener("scroll", handleScroll);
        }
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res1 = await fetch(`https://corsproxy.io/?https://api.deezer.com/artist/${id}`);
                const data1 = await res1.json();

                const res2 = await fetch(`https://corsproxy.io/?https://api.deezer.com/artist/${id}/top?limit=10`);
                const data2 = await res2.json();

                setArtist(data1);
                setArtistTracks(data2.data);

            } catch {
                setError('에러가 발생했습니다');
            } finally {
                setLoading(false);
            }
        }

        fetchData();

    }, [id])

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return(
        <div>
            <div 
                className="detail-top"
                style={{backgroundImage: `url(${artist.picture_big})`}}
            >
                <h3>{artist.name}</h3>
                <p>팬 {artist.nb_fan.toLocaleString()}명</p>
                <div className="black-bg" style={{opacity: bgOpacity}}></div>
            </div>
            <div className="detail-bot">
                <h3 className="popular">{artist.name}의 인기곡</h3>
                <ul className="chart">
                    {artistTracks.map((track, index) => (
                        <li key={track.id}>
                            <p>{index + 1}</p>
                            <img src={track.album.cover_small} alt={track.album.title} />
                            <Link to={`/songdetail/${track.id}`} className="title">
                                <p>{track.title}</p>
                            </Link>
                            <p>{Math.floor((track.duration) / 60)} : {String(track.duration % 60).padStart(2,"0")}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ArtistDetail;