import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import './PopularArtist.css'

function PopularArtist() {
    const [artists, setartists] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const listRef = useRef(null);

    const scrollLeft = () => {
        listRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }

    const scrollRight = () => {
        listRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }

    useEffect(() => {
        const fetchArtists = async () => {
            try{
                const res = await fetch('https://corsproxy.io/?https://api.deezer.com/chart/0/artists?limit=20');
                const data = await res.json();
                setartists(data.data)
            } catch {
                setError('에러가 발생했습니다');
            } finally {
                setLoading(false);
            }
        }

        fetchArtists();

    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return(
        <div>
            <h2 style={{marginTop: '50px', marginBottom: '20px'}}>인기 아티스트</h2>
            <div className="artist-wrap">
                <ul className="artist-list" ref={listRef}>
                    {artists.map((artist) => (
                        <li key={artist.id}>
                            <Link to={`/artistdetail/${artist.id}`}>
                                <img src={artist.picture_big} alt={artist.name} />
                                <h4>{artist.name}</h4>
                                <p>아티스트</p>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="artist-prev-btn" onClick={scrollLeft}>&lt;</div>
                <div className="artist-next-btn" onClick={scrollRight}>&gt;</div>
            </div>
        </div>
    );
}

export default PopularArtist;