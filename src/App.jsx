import Chat from "../components/Chat";
import User from "../components/User";
import Video from "../components/Video";
import "./App.css";

function App() {
  const youtubeVideoUrl = "https://www.youtube.com/embed/7vln2DtkaU8";

  return (
    <div className="App">
      <User />
      <Chat />
      <Video videoUrl={youtubeVideoUrl} />
    </div>
  );
}

export default App;
