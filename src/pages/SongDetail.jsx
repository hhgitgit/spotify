import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import './SongDetail.css'

function SongDetail() {

    const { id } = useParams();
    const [song, setSong] = useState(null);
    const [year, setYear] = useState(null);
    const [artistTracks, setArtistTracks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const audioRef = useRef(null);

    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res1 = await fetch(`https://corsproxy.io/?https://api.deezer.com/track/${id}`);
                const data1 = await res1.json();
                setSong(data1);

                const res2 = await fetch(`https://corsproxy.io/?https://api.deezer.com/album/${data1.album.id}`);
                const data2 = await res2.json();
                setYear(data2.release_date?.slice(0,4));

                const res3 = await fetch(`https://corsproxy.io/?${data1.artist.tracklist}`);
                const data3 = await res3.json();
                setArtistTracks(data3.data.slice(0,10));

            } catch {
                setError('에러가 발생했습니다');
            } finally {
                setLoading(false);
            }
        }
        fetchData();

    }, [id])

    const togglePlay = () => {
        if(!audioRef.current) return;
        if(playing){
            audioRef.current.pause();
        }else{
            audioRef.current.play();
        }
        setPlaying(!playing);
    }

    const updateProgress = () => {
        const current = audioRef.current.currentTime;
        const total = audioRef.current.duration;
        setProgress((current / total) * 100);
    }

    const setAudioData = () => {
        setDuration(audioRef.current.duration);
    }

    const formatTime = (time) => {
        const min = Math.floor(time / 60);
        const sec = Math.floor(time % 60);
        return `${min}:${sec < 10 ? '0'+sec : sec}`;
    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return(
        <div className="song-detail">
            <div className="song-header">
                <img src={song.album.cover_big} alt={song.title} className="cover"/>
                <div className="song-info">
                    <h1>{song.title}</h1>
                    <p className="artist">{song.artist.name}</p>
                    <p className="album">
                        {song.album.title} · {year}
                    </p>
                    <div className="player">
                        <audio
                            ref={audioRef}
                            src={song.preview}
                            onTimeUpdate={updateProgress}
                            onLoadedMetadata={setAudioData}
                        />
                        <button onClick={togglePlay} className="play-btn">
                            {playing ? "⏸" : "▶"}
                        </button>
                        <div className="progress-bar">
                            <div
                                className="progress"
                                style={{width: `${progress}%`}}
                            ></div>
                        </div>
                        <div className="time">
                            {audioRef.current ? formatTime(audioRef.current.currentTime) : "0:00"}
                            /
                            {formatTime(duration)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="artist-tracks">
                <h2>{song.artist.name}의 인기곡</h2>
                <ul>
                    {artistTracks.map(track => (
                        <li key={track.id}>
                            <img src={track.album.cover_small} alt={track.title} />
                            <Link to={`/songdetail/${track.id}`}>
                                <span className="title">{track.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SongDetail;