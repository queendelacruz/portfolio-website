import React from 'react'
import ReactPlayer from 'react-player/lazy'


class VideoPlayer extends React.Component {
    render() {
        return (
            <ReactPlayer
                className='react-player'
                url= {this.props.url}
                width='50%'
                height='50%'
                controls = {true}
            />
        );
    }
}
export default VideoPlayer;