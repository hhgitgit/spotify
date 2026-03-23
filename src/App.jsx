import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import AlbumDetail from "./pages/AlbumDetail";
import ArtistDetail from "./pages/ArtistDetail";
import SongDetail from "./pages/SongDetail";

function App() {
  return(
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="albumdetail/:id" element={<AlbumDetail />} />
        <Route path="artistdetail/:id" element={<ArtistDetail />} />
        <Route path="songdetail/:id" element={<SongDetail />} />
      </Route>
    </Routes>
  );
}

export default App;