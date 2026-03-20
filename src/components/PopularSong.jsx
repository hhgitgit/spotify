import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './PopularSong.css'

function PopularSong() {
    const [songs, setSongs] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const res = await fetch('https://corsproxy.io/?https://api.deezer.com/chart/0/tracks?limit=20');
                const data = await res.json();
                setSongs(data.data);
            } catch(error) {
                setError('에러가 발생했습니다');
            } finally {
                setLoading(false);
            }
        }

        fetchSongs();
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return(
        <div>
            <h2 style={{marginBottom: '20px'}}>인기 상승 곡</h2>
            <ul className="song-list">
                {songs.map((song) => (
                    <li key={song.id}>
                        <Link to={`/albumdetail/${song.album.id}`}>
                            <img src={song.album.cover_big} alt={song.title} />
                            <h3>{song.title}</h3>
                            <Link to={`/artistdetail/${song.artist.id}`}>
                                <h4>{song.artist.name}</h4>
                            </Link>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PopularSong;