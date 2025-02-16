import React, {useState} from 'react';

//Images
import vlcMediaPLayer from '../../../assets/desktop-icons/vlc-media-player.png';

//CSS File
import './mediaplayer.css';

const MediaPlayer = ({isMediaPlayerOpen, setIsMediaPlayerOpen}) => {

    const [isPlayButtonClick, setIsPlayButtonClick] = useState(false);

    const [isExitButtonClick, setIsExitButtonClick] = useState(false);

    const handlePlayButtonClick = () => {
        setIsPlayButtonClick(play => !play);
    };

    const handleExitButton = () => {
        setIsMediaPlayerOpen(false);
        setIsExitButtonClick(true);
    };

    return (

        <div 
        className={`media-player 
            ${isMediaPlayerOpen ? 'media-player-open' : 'media-player-exit'}
            ${isExitButtonClick ? 'media-player-exit' : ''}
        `}
        >

            <header className='top-header'>

                <div className='player-first-row'>

                    <div className='left-side'>
                        <img src={vlcMediaPLayer} alt='VLC Media Player' />
                        <div className='player-title'>
                            <span className='song-name'>Music</span> -
                            VLC Media Player
                        </div>
                    </div>

                    <div className="right-side">
                        <div className="minimize" />
                        <div className="maximize" />
                        <div onClick={handleExitButton} className="exit" />
                    </div>

                </div>

                <div className='player-second-row'>
                    <button type='button'>Media</button>
                    <button type='button'>Playback</button>
                    <button type='button'>Audio</button>
                    <button type='button'>Video</button>
                    <button type='button'>Subtitle</button>
                    <button type='button'>Tools</button>
                    <button type='button'>View</button>
                    <button type='button'>Help</button>
                </div>

            </header>

            <div className='player-body'>
                <img src={vlcMediaPLayer} alt="VLC Media Player" />
            </div>

            <div className='player-footer'>

                <div className='controls-first-row'>
                    <span className='song-time'>00:05</span>
                    <input type="range" />
                    <span className='song-duration'>05:45</span>
                </div>

                <div className='controls-second-row'>
                
                    <button 
                        onClick={handlePlayButtonClick} 
                        className={isPlayButtonClick ? 'pause'  : 'play' }
                        type='button'>
                            <i className={isPlayButtonClick ? 'bi bi-pause-fill' : 'bi bi-play-fill'} />
                        </button>
                
                    <button className='previous' type='button'><i className='bi bi-skip-backward-fill' /></button>
                    <button className='stop' type='button'><i className='bi bi-stop-fill' /></button>
                    <button className='next' type='button'><i className='bi bi-skip-forward-fill' /></button>
                
                </div>

            </div>

        </div>

    )

}

export default MediaPlayer;