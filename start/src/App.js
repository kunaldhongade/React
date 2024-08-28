import "./App.css";
import Video from "./components/Video";

function App() {
  console.log("hello world");
  return (
    <div className="App">
      <Video
        title="React JS Tutorial"
        id="1"
        channel={"CoderDost"}
        time={1}
        views={12}
      />
      <Video
        title="Node JS Tutorial"
        id="13"
        channel={"CoderDost"}
        time={1}
        views={12}
      />
      <Video
        title="Mongo DB Tutorial"
        id="51"
        channel={"CoderDost"}
        time={1}
        views={12}
      />
    </div>
  );
}

export default App;
