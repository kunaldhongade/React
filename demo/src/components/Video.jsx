import './Video.css';

function Video({ title = "Video title", channel = "channel Name", views = "0", time = "0m" }) {

    return <>
        <div className='container'>
            <div className='pic'>
                <img src="https://picsum.photos/id/1/160/90" alt="mongo-img" srcset="" />
            </div>
            <div className="title">{title}</div>
            <div className="channel">{channel}</div>
            <div className="views">{views} views <span>.</span>{time}</div>
        </div>
    </>
}


export default Video;