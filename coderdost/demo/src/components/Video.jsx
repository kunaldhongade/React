import './Video.css';

function Video({ title = "Video title", channel = "channel Name", views = "0", time = "0m", verified = false }) {
    return <>
        <div className='container'>
            <div className='pic'>
                <img src="https://picsum.photos/id/1/160/90" alt="mongo-img" srcset="" />
            </div>
            <div className="title">{title}</div>
            <div className="channel">{channel}
                {verified ? "✅" : null}
                {/* we cant write if else in jsx because it does not return anything so things that does not return anything are prohibited in jsx */}
                {verified && "✅"}
                {/* there is another thing in react called short circuit && */}
            </div>
            <div className="views">{views} views <span>.</span>{time}</div>
        </div>
    </>
}


export default Video;