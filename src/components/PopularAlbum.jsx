import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import './PopularAlbum.css'

function PopularAlbum() {
    const [albums, setAlbums] = useState([]);
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
        const fetchAlbums = async () => {
            try {
                const res = await fetch('https://corsproxy.io/?https://api.deezer.com/chart/0/albums?limit=20');
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

    

    return(
        <div>
            <h2 style={{marginTop: '70px', marginBottom: '20px'}}>인기 앨범 및 싱글</h2>
            <div className="album-wrap">
                <ul className="album-list" ref={listRef}>
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
                <div className="album-prev-btn" onClick={scrollLeft}>&lt;</div>
                <div className="album-next-btn" onClick={scrollRight}>&gt;</div>
            </div>
        </div>
    );
}

export default PopularAlbum;