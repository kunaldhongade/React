import './Video.css';

function Video({ title, channel, views, time }) {

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