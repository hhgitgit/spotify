import PopularSong from "../components/PopularSong";
import PopularArtist from "../components/PopularArtist";
import PopularAlbum from "../components/PopularAlbum";

function Home() {
    return(
        <div style={{
            padding: '20px 30px'
        }}>
            <PopularSong />
            <PopularArtist />
            <PopularAlbum/>
        </div>
    );
}

export default Home;