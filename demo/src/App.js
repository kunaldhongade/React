import './App.css';
import Video from "./components/Video";

let DataObj = {
  title: "React Js tutorial",
  views: '10k',
  time: '1 years ago',
  channel: "coder Dost"
}

function App() {

  return <div className="App">
    <Video {...DataObj}></Video>
    <Video title={"Youtube MO"} channel={"Joy Boy"} views={"12M"} time={"1 year ago"} />
    <Video title={"Github Tutorial"} channel={"King of Pirates"} views={"1B"} time={"1 year ago"} />
    <Video title={"MongoDB"} channel={"Gear 5"} views={"2M"} time={"1 year ago"} />
  </div>
}

export default App;