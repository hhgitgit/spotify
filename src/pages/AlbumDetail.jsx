import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import './AlbumDetail.css'

function AlbumDetail() {
    const { id } = useParams();
    const [album, setAlbum] = useState(null);
    const [trackList, setTrackList] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAlbum = async () => {
            try {
                const res = await fetch(`https://corsproxy.io/?https://api.deezer.com/album/${id}`);
                const data = await res.json();
                setAlbum(data);
                setTrackList(data.tracks.data);
            } catch(error) {
                setError('에러가 발생했습니다');
            } finally {
                setLoading(false);
            }
        }

        fetchAlbum();
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>


    return(
        <div style={{
            padding: '40px'
        }}>
            <div className="album-detail-top">
                <div className="top-left">
                    <img src={album.cover_big} alt={album.title} /> 
                </div>
                <div className="top-right">
                    <h2>{album.title}</h2>
                    <div className="info">
                        <img src={album.artist.picture_big} alt={album.artist.name} />
                        <Link to={`/artistdetail/${album.artist.id}`}>
                            <span className="artist-name">{album.artist.name}</span>
                        </Link>
                        <span>&nbsp;• {album.release_date.slice(0, 4)} •</span>
                        <span>{trackList.length}곡,&nbsp;</span>
                        <span>{Math.floor((album.duration)/60)}분 {(album.duration)%60}초</span>
                    </div>
                </div>
            </div>
            <ul className="track-list">
                <li>
                    <p>#</p>
                    <p>제목</p>
                    <p>길이</p>
                </li>
                {trackList.map((track, index) => (
                    <li key={track.id}>
                        <p>{index + 1}</p>
                        <p>
                            <Link to={`/songdetail/${track.id}`} className="title">
                                {track.title}
                            </Link> 
                            <br/>
                            <Link to={`/artistdetail/${track.artist.id}`} className="artist">
                                <span>{track.artist.name}</span>
                            </Link>
                        </p>
                        <p>{Math.floor((track.duration) / 60)}:{(String((track.duration) % 60)).padStart(2, '0')}</p>
                    </li>
                ))}
            </ul>
            <p className="date">{album.release_date.slice(0, 4)}년 {album.release_date.slice(5, 7)}월 {album.release_date.slice(8, 10)}일</p>
        </div>
    );
}

export default AlbumDetail;