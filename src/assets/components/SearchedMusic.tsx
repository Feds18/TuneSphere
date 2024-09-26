import { useEffect, useState } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle"; // Assicurati di avere l'import

interface SearchedMusicProps {
  query: string;
}

interface Track {
  name: string;
  album: {
    images: { url: string }[];
  };
  artists: { name: string }[];
}

const SearchedMusic: React.FC<SearchedMusicProps> = ({ query }) => {
  const [musicData, setMusicData] = useState<Track[]>([]);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  // Funzione per ottenere un nuovo access token
  const getAccessToken = async () => {
    const clientId = '0b838af3820942c28ce0e316a7f5b0c0';
    const clientSecret = '977a91041d444f09aae61423a878d7b9';

    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(`${clientId}:${clientSecret}`),
      },
      body: 'grant_type=client_credentials',
    });

    const data = await response.json();
    setAccessToken(data.access_token);
  };

  useEffect(() => {
    // Chiama la funzione per ottenere il token all'avvio
    if (!accessToken) {
      getAccessToken();
    }
  }, [accessToken]);

  useEffect(() => {
    if (query && accessToken) {
      const fetchMusicData = async () => {
        const response = await fetch(
          `https://api.spotify.com/v1/search?q=${encodeURIComponent(
            query
          )}&type=track&limit=5`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const data = await response.json();
        setMusicData(data.tracks.items);
      };
      fetchMusicData();
    }
  }, [query, accessToken]);

  if (musicData.length === 0) return null;

  return (
    <div className="searched-music">
      <div className="main-track">
        <h1>Risultato più rilevante</h1>
        <div className="main-track-info">
          {musicData.length > 0 && (
            <>
              <img
                src={musicData[0].album.images[0].url}
                alt={musicData[0].name}
                className="album-img"
              />
              <div className="track-info">
                <div className="track-info-song">
                  <h1>{musicData[0].name}</h1>
                  <h5>
                    {musicData[0].artists
                      .map((artist) => artist.name)
                      .join(", ")}
                  </h5>
                </div>
                <div className="track-info-play">
                  <button
                    className="play-button"
                    onClick={() => alert("Playing...")}
                  >
                    <PlayCircleIcon
                      style={{ fontSize: "40px", color: "white" }}
                    />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="other-tracks">
        <h1>Brani</h1>
       
          {musicData.slice(1).map((track) => (
            <div key={track.name} className="track">
              <img
                src={track.album.images[0].url}
                alt={track.name}
                className="album-img2"
              />
              <div className="track-info">
                <h2>{track.name}</h2>
                <h5>{track.artists.map((artist) => artist.name).join(", ")}</h5>
              </div>
            </div>
          ))}
        
      </div>
    </div>
  );
};

export default SearchedMusic;
