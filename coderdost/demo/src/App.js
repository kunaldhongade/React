import "./App.css";
import Video from "./components/Video";

let DataObj = {
  title: "React Js tutorial",
  views: "10k",
  time: "1 years ago",
  channel: "coder Dost",
  verified: true,
};

let videos = [
  { ...DataObj },
  {
    title: "React Js tutorial",
    views: "10k",
    time: "1 years ago",
    channel: "React Dost",
    verified: false,
  },
  {
    title: "Node Js tutorial",
    views: "100k",
    time: "4 years ago",
    channel: "Mongo Dost",
    verified: true,
  },
  {
    title: "MongoDb tutorial",
    views: "10M",
    time: "1 years ago",
    channel: "coder Dost",
    verified: true,
  },
  {
    title: "internet tutorial",
    views: "1B",
    time: "19 years ago",
    channel: "youtube",
    verified: true,
  },
];

function App() {
  return (
    <div className="App">

      {
        videos.map((video) => {
          return <Video
            title={video.title}
            views={video.views}
            verified={video.verified}
            channel={video.channel}
            time={video.time}
          />
        })
      }


      {/* <Video {...DataObj}></Video>
      <Video
        title={"Youtube MO"}
        channel={"Joy Boy"}
        views={"12M"}
        time={"1 year ago"}
        verified={true}
      />
      <Video
        title={"Github Tutorial"}
        channel={"King of Pirates"}
        views={"1B"}
        verified={false}
        time={"1 year ago"}
      />
      <Video
        title={"MongoDB"}
        channel={"Gear 5"}
        views={"2M"}
        verified={true}
        time={"1 year ago"}
      /> */}
    </div>
  );
}

export default App;
