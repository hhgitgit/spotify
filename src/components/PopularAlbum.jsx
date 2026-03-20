import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './PopularAlbum.css'

function PopularAlbum() {
    const [albums, setAlbums] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const res = await fetch('/deezer/chart/0/albums?limit=20');
                const data = await res.json();
                setAlbums(data.data);
            } catch(error) {
                setError('에러가 발생했습니다');
            } finally {
                setLoading(false);
            }
        }

        fetchAlbums();
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    console.log(albums)

    return(
        <div>
            <h2 style={{marginTop: '50px', marginBottom: '20px'}}>인기 앨범 및 싱글</h2>
            <ul className="album-list">
                {albums.map((album) => (
                    <li key={album.id}>
                        <Link to={`/albumdetail/${album.id}`}>
                            <img src={album.cover_big} alt={album.title} />
                            <h3>{album.title}</h3>
                        </Link>
                        <Link to={`/artistdetail/${album.artist.id}`}>
                            <h4>{album.artist.name}</h4>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PopularAlbum;