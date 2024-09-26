import TimeSlider from "./TimeSlider";
import VolumeSlider from "./VolumeSlider";
import Slider from "./VolumeSlider";

export default function ControlArea() {
  return (
    <div className="player-controls">
      <div className="track-info-controls">
        <img
          src="/path-to-album-cover.jpg"
          alt="Album cover"
          className="album-cover"
        />
        <div className="track-details">
          <span className="track-name">Lato A Lato B</span>
          <span className="artist-name">Giuse The Lizia</span>
        </div>
      </div>
      <div className="playback-controls">
        <div className="control-buttons">
          <button className="control-btn shuffle"></button>
          <button className="control-btn previous"></button>
          <button className="control-btn play"></button>
          <button className="control-btn next"></button>
          <button className="control-btn repeat"></button>
        </div>
        <div className="progress-bar">
          <TimeSlider />
        </div>
      </div>
      <div className="additional-controls">
        <VolumeSlider />
      </div>
    </div>
  );
}
