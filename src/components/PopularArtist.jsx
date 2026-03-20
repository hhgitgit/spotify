import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './PopularArtist.css'

function PopularArtist() {
    const [artists, setartists] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

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
            <ul className="artist-list">
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
        </div>
    );
}

export default PopularArtist;