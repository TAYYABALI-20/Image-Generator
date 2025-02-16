import React, { useState, useEffect } from 'react';

//CSS File
import './style.css';

//Images
import volume1 from '../assets/keyboard-icons/volume-1.png';
import volume2 from '../assets/keyboard-icons/volume-2.png';
import windows from '../assets/keyboard-icons/windows.png';
import logo from '../assets/hp/hp-logo.png';
import admin from '../assets/admin/admin-image.jpg';

//Desktop Icons
import fileExplorer from '../assets/desktop-icons/file-explorer.png';
import thisPc from '../assets/desktop-icons/this-pc.png';
import recycleBin from '../assets/desktop-icons/recycle-bin.png';
import controlPanel from '../assets/desktop-icons/control-panel.png';
import chrome from '../assets/desktop-icons/chrome.png';
import vlcMediaPlayer from '../assets/desktop-icons/vlc-media-player.png';
import obsStudio from '../assets/desktop-icons/obs-studio.png';
import vsCode from '../assets/desktop-icons/vs-code.png';

//TASKBAR LEFT ICONS
import search from '../assets/taskbar-left-side/search.png';
import taskView from '../assets/taskbar-left-side/task-view.png';
import taskViewAfter from '../assets/taskbar-left-side/task-view-after.png';

//TASKBAR LEFT ICONS
import showHiddenIcons from '../assets/taskbar-right-side/show-hidden-icons.png';
import googleDrive from '../assets/taskbar-right-side/google-drive.png';
import oneDrive from '../assets/taskbar-right-side/one-drive.png';
import synapticsPointingDevice from '../assets/taskbar-right-side/synaptics-pointing-device.png';
import windowsSecurity from '../assets/taskbar-right-side/windows-security.png';
import audioControl from '../assets/taskbar-right-side/audio-control-panel.png';
import meetNow from '../assets/taskbar-right-side/meet-now.png';
import charging from '../assets/taskbar-right-side/charging.png';
import wifi from '../assets/taskbar-right-side/wifi.png';
import volume from '../assets/taskbar-right-side/volume.png';

//3D MODELS
import nissanGtrR32 from '../assets/3d models/nissan-gtr-r32.png';
import bugatti from '../assets/3d models/bugatti.png';
import harleyDavidson from '../assets/3d models/harley-davidson.png';
import teslCyberTruck from '../assets/3d models/tesla-cybertruck.png';

//START IMAGES
import calculator from '../assets/start-images/calculator.jpg';
import clock from '../assets/start-images/clock.png';
import photos from '../assets/start-images/photos.png';
import paint from '../assets/start-images/paint.png';
import todo from '../assets/start-images/todo.png';

//Explore Creativity
import textAnimation from '../assets/start-images/text-animation.png';
import jacketAnimation from '../assets/start-images/jacket-animation.png';
import television from '../assets/start-images/television.png';
import coffeeMug from '../assets/start-images/coffee-mug.png';
import character from '../assets/start-images/character.png';
import prisoner from '../assets/start-images/prisoner.png';

// Games
import snooker from '../assets/start-images/snooker.png';

//Components
import Chrome from './clones/chrome/Chrome';
import MediaPlayer from './clones/vlcmediaplayer/MediaPlayer';

const CodingGuy = () => {

    //CHROME CLONE
    const [isChromeOpen, setIsChromeOpen] = useState(false);
    const handleChromeClick = () => {
        setIsChromeOpen(true);
    };

    //CHROME CLONE
    const [isMediaPlayerOpen, setIsMediaPlayerOpen] = useState(false);
    const handleMediaPlayerClick = () => {
        setIsMediaPlayerOpen(true);
    };

    const [isDesktopClick, setIsDesktopClick] = useState(false);

    const [isAsideToggle, setIsAsideToggle] = useState(false);

    const [isStartButtonClick, setIsStartButtonClick] = useState(false);

    const handleAsideToggle = () => {
        setIsDesktopClick(false);
        setIsAsideToggle(toggle => !toggle);
    };

    const [isPowerButtonClick, setIsPowerButtonClick] = useState(false);

    const [isFlightButtonClick, setIsFlightButtonClick] = useState(false);

    const [isVolumeButtonClick, setIsVolumeButtonClick] = useState(false);

    const [isTaskViewHover, setIsTaskViewHover] = useState(false);

    const [currentTimeDate, setCurrentTimeDate] = useState({
        time: '',
        dayDate: '',
        taskbarDate: ''
    });

    const [password, setPassword] = useState('');

    const [isPasswordInCorrect, setIsPasswordInCorrect] = useState(false);

    const [isOkButtonClick, setIsOkButtonClick] = useState(false);

    const [isSubmitButtonClick, setIsSubmitButtonClick] = useState(false);

    const [isCapsLockOn, setIsCapsLockOn] = useState(false);

    const [isSubmitFailed, setIsSubmitFailed] = useState(false);

    const correctPassword = 'tayyabALI123';

    const numbers = [4, 5, 6, 7, 8, 9];

    const [currentNumber, setCurrentNumber] = useState(numbers[0]);

    const dots = Array(595).fill(null);

    const handlePowerButtonClick = () => {
        setIsPowerButtonClick(on => !on);
        setIsPasswordInCorrect(false);
        setIsSubmitButtonClick(false);
        setIsCapsLockOn(false);
    };

    const handleFlightButtonClick = () => {
        setIsFlightButtonClick(on => !on);
    };

    const handleVolumeButtonClick = () => {
        setIsVolumeButtonClick(on => !on);
    };

    const handleTaskViewMouseOver = () => {
        setIsDesktopClick(false);
        setIsTaskViewHover(true);
    };

    const handleTaskViewMouseOut = () => {
        setIsTaskViewHover(false);
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            month: 'numeric',
            day: 'numeric',
            year: 'numeric'
        });
    };

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            let hours = now.getHours();
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';

            hours = hours % 12 || 12;

            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const day = days[now.getDay()];
            const date = now.toLocaleString('en-US', { month: 'long', day: 'numeric' });

            const formattedDate = formatDate(now);

            setCurrentTimeDate({
                time: `${hours}:${minutes} ${ampm}`,
                dayDate: `${day}, ${date}`,
                taskbarDate: `${formattedDate}`
            });
        };

        const timer = setInterval(updateTime, 1000);

        updateTime();
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {

        let index = 0;

        const intervalId = setInterval(() => {
            if (index < numbers.length) {
                setCurrentNumber(numbers[index]);
                index++;
            } else {
                clearInterval(intervalId);
            }
        }, 7000);

        return () => clearInterval(intervalId);
    }, []);

    const handleSubmitPassword = () => {
        setIsSubmitButtonClick(true);
        if (password === correctPassword) {
            setIsPasswordInCorrect(false);
            setIsSubmitFailed(false); // Reset failure flag on success
            setTimeout(() => {
                setPassword('');
            }, 1500);
            setIsOkButtonClick(false);
        } else {
            setIsPasswordInCorrect(true);
            setIsSubmitFailed(true); // Set flag to indicate submission failure
        }
    };

    const handleOkClick = () => {
        setIsOkButtonClick(true);
        setIsPasswordInCorrect(false);
        setPassword('');
        setIsSubmitButtonClick(false);
        setIsSubmitFailed(false); // Reset submission failure flag
    };

    const handleCapsLockOn = () => {
        setIsCapsLockOn(on => !on);
    };

    const handleKeyboardKeyClick = (value) => {

        if (value === 'backspace') {
            setPassword(password.slice(0, -1));

        } else if (value === 'enter') {

            if (isPasswordInCorrect) {
                handleOkClick();
            } else {
                handleSubmitPassword();
            };

        } else {
            handleCharactersOnCapsLockOnAndOff(value);
        };

    };

    const handleCharactersOnCapsLockOnAndOff = (value) => {

        if (value.length === 1) {

            if (value.match(/[A-Za-z]/)) {
                setPassword(prevPassword => prevPassword + (isCapsLockOn ? value.toUpperCase() : value.toLowerCase()));
            } else {
                setPassword(prevPassword => prevPassword + value);
            };

        };
    };

    useEffect(() => {

        const handlePhysicalKeyboard = (event) => {

            if (event.key === 'CapsLock') {
                setIsCapsLockOn(!isCapsLockOn);

            } else if (event.key === 'Backspace') {
                setPassword(password.slice(0, -1));

            } else if (event.key === 'Enter') {

                if (isPasswordInCorrect) {
                    handleOkClick();
                } else {
                    handleSubmitPassword();
                };

            } else {
                handleCharactersOnCapsLockOnAndOff(event.key);
            };

        };

        window.addEventListener('keydown', handlePhysicalKeyboard);

        return () => {
            window.removeEventListener('keydown', handlePhysicalKeyboard);
        };
    }, [password, isCapsLockOn, isPasswordInCorrect]);

    useEffect(() => {

        const handleClickOutside = (event) => {
            if (!event.target.closest('.start-section') && !event.target.closest('.start-button')) {
                setIsStartButtonClick(false);
            };
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };

    }, []);

    const handleStartButtonClick = (event) => {
        event.stopPropagation();
        setIsStartButtonClick(click => !click);
    };

    const desktopClick = () => {
        setIsDesktopClick(true);
    };

    return (

        <div className='work-station'>

            {/* JSX FOR Laptop */}

            <div className='laptop'>

                <div
                    className={
                        `
                                ${isPowerButtonClick ? "laptop-screen open" : "laptop-screen off"}
                            `
                    }
                >

                    {/* JSX FOR Laptop Lock Screen */}

                    <div className={`
                                ${isPowerButtonClick ?
                            'lock-screen lock-screen-display' : 'lock-screen'}
                                ${isPowerButtonClick && !isPasswordInCorrect && isSubmitButtonClick ?
                            'lock-screen lock-screen-disappear' : 'lock-screen'}
                        `}>

                        {/* JSX FOR Laptop Lock Screen Time */}

                        <div className={isPowerButtonClick ?
                            'current-time-date current-time-date-top' : 'current-time-date'}>

                            <div className='time'>{currentTimeDate.time}</div>

                            <div className='date'>{currentTimeDate.dayDate}</div>

                        </div>

                        {/* JSX FOR Laptop Lock Screen Time */}

                    </div>

                    {/* JSX FOR Laptop Lock Screen */}

                    {/* JSX FOR START SCREEN LOADER */}

                    <div className="wrapper">

                        <div className={isPowerButtonClick ? "loader loading" : "loader"}>

                            <span className="pip-0"></span>
                            <span className="pip-1"></span>
                            <span className="pip-2"></span>
                            <span className="pip-3"></span>
                            <span className="pip-4"></span>
                            <span className="pip-5"></span>

                        </div>

                    </div>

                    {/* JSX FOR START SCREEN LOADER */}

                    {/* JSX FOR Laptop Screen */}

                    <div className="laptop-screen-front" />
                    <div className="laptop-screen-topIn" />
                    <div className="laptop-screen-topOut" />
                    <div className="laptop-screen-bottomIn" />
                    <div className="laptop-screen-bottomOut" />
                    <div className="laptop-screen-leftIn" />
                    <div className="laptop-screen-leftOut" />
                    <div className="laptop-screen-rightOut" />
                    <div className="laptop-screen-rightIn" />

                    {/* JSX FOR Laptop Screen */}

                </div>

                <div className={`
                        ${isPowerButtonClick ?
                        'admin-profile admin-profile-display' : 'admin-profile'}
                        ${isPowerButtonClick && !isPasswordInCorrect && isSubmitButtonClick ?
                        'admin-profile admin-profile-disappear' : 'admin-profile'}
                `}>

                    <img src={admin} alt="Admin" />

                    <div className='admin-name'>Tayyab Ali</div>

                    {!isPasswordInCorrect && (
                        <div className='admin-password'>
                            <input type="text" value={password} readOnly />
                            <i className="bi bi-arrow-right" onClick={handleSubmitPassword}></i>
                        </div>
                    )}

                    {isPasswordInCorrect && (
                        <>
                            <span className='password-incorrect'>Your password is incorrect. Try again.</span>
                            <button type='button' onClick={handleOkClick}>OK</button>
                        </>
                    )}

                    {!isPasswordInCorrect && (<small className='password-forgot'>I forgot my PIN</small>)}

                </div>

                <div onClick={desktopClick}
                    className={
                        isPowerButtonClick && !isPasswordInCorrect && !isOkButtonClick && isSubmitButtonClick ?
                            'desktop desktop-display' : 'desktop'
                    }>

                    {/* JSX FOR CHROME CLONE */}

                    {isChromeOpen && <Chrome isChromeOpen={isChromeOpen} setIsChromeOpen={setIsChromeOpen} />}

                    {/* JSX FOR CHROME CLONE */}

                    {/* JSX FOR VLC MEDIA PLAYER CLONE */}

                    {isMediaPlayerOpen && <MediaPlayer isMediaPlayerOpen={isMediaPlayerOpen} setIsMediaPlayerOpen={setIsMediaPlayerOpen} />}

                    {/* JSX FOR VLC MEDIA PLAYER CLONE */}

                    {/* JSX FOR DESKTOP ICONS */}

                    <div className='desktop-icons'>

                        <div className='desktop-icon'>
                            <img src={fileExplorer} alt="File Explorer" />
                            <div className="desktop-icon-text">Tayyab Ali</div>
                        </div>

                        <div className='desktop-icon'>
                            <img src={controlPanel} alt="Control Panel" />
                            <div className="desktop-icon-text">Control Panel</div>
                        </div>

                        <div onDoubleClick={handleMediaPlayerClick} className='desktop-icon'>
                            <img src={vlcMediaPlayer} alt="VLC Media Player" />
                            <div className="desktop-icon-text">VLC Media <br />Player</div>
                        </div>

                        <div className='desktop-icon'>
                            <img src={thisPc} alt="This PC" />
                            <div className="desktop-icon-text">This PC</div>
                        </div>

                        <div onDoubleClick={handleChromeClick} className='desktop-icon'>
                            <img  src={chrome} alt="Google Chrome" />
                            <div className="desktop-icon-text">Google <br />Chrome</div>
                        </div>

                        <div className='desktop-icon'>
                            <img src={vsCode} alt="Visual Studio Code" />
                            <div className="desktop-icon-text">Visual Studio <br />Code</div>
                        </div>

                        <div className='desktop-icon'>
                            <img src={recycleBin} alt="Recycle Bin" />
                            <div className="desktop-icon-text">Recycle Bin</div>
                        </div>

                        <div className='desktop-icon'>
                            <img src={obsStudio} alt="OBS Studio" />
                            <div className="desktop-icon-text">OBS Studio</div>
                        </div>

                    </div>

                    {/* JSX FOR DESKTOP ICONS */}

                    {/* JSX FOR START */}

                    <section className={isStartButtonClick ? 'start-section fade-up' : 'start-section'}>

                        <div className='recently-added'>

                            <h4>Recently added</h4>

                            <div className='recently-added-project drive'>
                                <img src={googleDrive} alt="Google Drive" />
                                <div className='recently-added-project-text'>Google Drive</div>
                            </div>

                            <h4 className='suggested'>Suggested</h4>

                            <div className='recently-added-project nissan'>
                                <img src={nissanGtrR32} alt="Nissan GTR R32" />
                                <div className='recently-added-project-text'>Nissan GTR</div>
                            </div>

                            <div className='recently-added-project harley-davidson'>
                                <img src={harleyDavidson} alt="Harley Davidson" />
                                <div className='recently-added-project-text'>Harley Davidson</div>
                            </div>

                            <div className='recently-added-project tesla'>
                                <img src={teslCyberTruck} alt="Tesla Cyber Truck" />
                                <div className='recently-added-project-text'>Tesla CyberTruck</div>
                            </div>

                            <div className='recently-added-project bugatti'>
                                <img src={bugatti} alt="Bugatti" />
                                <div className='recently-added-project-text'>Bugatti Veyron</div>
                            </div>

                            <h4 className='sort-c'>C</h4>

                            <div className='recently-added-project calculator'>
                                <img src={calculator} alt="Calculator" />
                                <div className='recently-added-project-text'>Calculator</div>
                            </div>

                            <div className='recently-added-project clock'>
                                <img src={clock} alt="Clock" />
                                <div className='recently-added-project-text'>Clock</div>
                            </div>

                            <h4 className='sort-g'>G</h4>

                            <div className='recently-added-project google-chrome'>
                                <img src={chrome} alt="Google Chrome" />
                                <div className='recently-added-project-text'>Google Chrome</div>
                            </div>

                            <h4 className='sort-p'>P</h4>

                            <div className='recently-added-project photos'>
                                <img src={photos} alt="Photos" />
                                <div className='recently-added-project-text'>Photos</div>
                            </div>

                            <div className='recently-added-project paint'>
                                <img src={paint} alt="Paint" />
                                <div className='recently-added-project-text'>Paint</div>
                            </div>

                            <h4 className='sort-t'>T</h4>

                            <div className='recently-added-project todo'>
                                <img src={todo} alt="Todo List" />
                                <div className='recently-added-project-text'>Todo List</div>
                            </div>

                        </div>

                        <div className='productivity'>

                            <h4>Explore Creativity</h4>

                            <div className='productivity-boxes'>
                                <div className='productivity-box textAnimation'>
                                    <img src={textAnimation} alt="Text Animation" />
                                    <div className='productivity-box-text'>Text <br />Animation</div>
                                </div>
                                <div className='productivity-box jacketAnimation'>
                                    <img src={jacketAnimation} alt="Jacket Animation" />
                                    <div className='productivity-box-text'>Jacket <br />Animation</div>
                                </div>
                                <div className='productivity-box television'>
                                    <img src={television} alt="Television" />
                                    <div className='productivity-box-text'>The <br />Television</div>
                                </div>
                                <div className='productivity-box coffeeMug'>
                                    <img src={coffeeMug} alt="Coffee Mug" />
                                    <div className='productivity-box-text'>Coffee <br /> Mug</div>
                                </div>
                                <div className='productivity-box character'>
                                    <img src={character} alt="Character" />
                                    <div className='productivity-box-text'>The <br /> Gentleman</div>
                                </div>
                                <div className='productivity-box prisoner'>
                                    <img src={prisoner} alt="Prisoner" />
                                    <div className='productivity-box-text'>The <br /> Prisoner</div>
                                </div>
                            </div>

                            <h4 className='games'>Games</h4>

                            <div className='productivity-boxes games-boxes'>
                                <div className='productivity-box textAnimation'>
                                    <img src={snooker} alt="Snooker Strike 3D" />
                                    <div className='productivity-box-text'>Snooker <br />Strike 3D</div>
                                </div>
                            </div>

                        </div>

                        <aside className={isAsideToggle ? 'start-aside' : 'start-aside close'}>

                            <div className='aside-toggle'>
                                <i className='bi bi-list' onClick={handleAsideToggle} />
                                <span>START</span>
                            </div>

                            <div className='admin-toggle'>
                                <img src={admin} alt="Admin" />
                                <span>Tayyab Ali</span>
                            </div>

                            <div className='file-toggle'>
                                <i className='bi bi-file-earmark start-file' />
                                <span>Documents</span>
                            </div>

                            <div className='image-toggle'>
                                <i className='bi bi-file-image start-image' />
                                <span>Pictures</span>
                            </div>

                            <div className='setting-toggle'>
                                <i className='bi bi-gear start-gear' />
                                <span>Settings</span>
                            </div>

                            <div className='power-toggle'>
                                <i className='bi bi-power start-power' />
                                <span>Power</span>
                            </div>

                        </aside>

                    </section>

                    {/* JSX FOR START */}

                    {/* JSX FOR TASKBAR */}

                    <div className='taskbar'>

                        <div className='taskbar-left-side'>

                            <i onClick={handleStartButtonClick} className='start-button bi bi-windows taskbar-icon start-icon' />
                            <div className='start-icon-text'>Start</div>

                            <div className='taskbar-search-area'>
                                <img className='taskbar-icon' src={search} alt='Search' />
                                <input type="text" placeholder="Type here to search" />
                            </div>

                            <img
                                onMouseOver={handleTaskViewMouseOver}
                                onMouseOut={handleTaskViewMouseOut}
                                src={isTaskViewHover ? taskViewAfter : taskView}
                                alt="Task View" />
                            <div className='task-view-text'>Task View</div>

                        </div>

                        <div className='taskbar-right-side'>

                            {/* <img className='show-hidden-icons' src={showHiddenIcons} alt="Show Hidden Icons" />
                            <div className='show-hidden-icons-text'>Show hidden icons</div>
                            <img className='google-drive' src={googleDrive} alt="Google Drive" />
                            <div className='google-drive-text'>Google Drive</div>
                            <img className='one-drive' src={oneDrive} alt="One Drive" />
                            <div className='one-drive-text'>OneDrive - Personal <br />Online</div> */}
                            {/* <img className='synaptics-pointing-device' src={synapticsPointingDevice} alt="Synaptics Pointing Device" /> */}
                            {/* <div className='synaptics-pointing-device-text'>Synaptics Pointing Device</div> */}
                            {/* <img className='windows-security' src={windowsSecurity} alt="Windows Security" /> */}
                            {/* <div className='windows-security-text'>Windows Security - Actions recommended</div> */}
                            {/* <img className='audio-control' src={audioControl} alt="Audio Control" /> */}
                            {/* <div className='audio-control-text'>OTS Audio Control Panel</div> */}
                            {/* <img className='meet-now' src={meetNow} alt="Meet Now" /> */}
                            {/* <div className='meet-now-text'>Meet Now</div> */}
                            <img className='charging' src={charging} alt="Charging" />
                            <div className='charging-text'>1hr 50 min (75%) remaining</div>
                            <img className='wifi' src={wifi} alt="Wifi" />
                            <div className='wifi-text'>TP-Link_F4BE <br />Internet access</div>
                            <img className='volume' src={volume} alt="Volume" />
                            <div className='volume-text'>Headphones 50%</div>

                            <div className='task-bar-time-date'>

                                <div className='task-bar-time'>{currentTimeDate.time}</div>

                                <div className='task-bar-date'>{currentTimeDate.taskbarDate}</div>

                            </div>

                            <i className="bi bi-chat-square-text-fill taskbar-icon messages"></i>
                            <div className='messages-text'>
                                {currentNumber !== null && <span>{currentNumber}</span>}
                            </div>
                            <div className='messages-notification-text'>{currentNumber} new notifications</div>

                        </div>

                    </div>

                    {/* JSX FOR TASKBAR */}

                </div>

                {/* JSX FOR hp Cameras */}

                <div className='top-cameras'>
                    <div className="top-camera-1" />
                    <div className="top-camera-2" />
                    <div className="top-camera-3" />
                    <div className="top-camera-4" />
                </div>

                {/* JSX FOR hp Cameras */}

                {/* JSX FOR hp logo */}

                <div className='hp-logo'>
                    <img src={logo} alt="hp" />
                </div>

                {/* JSX FOR hp logo */}

                <div className={isPowerButtonClick ? 'start-text text-appear' : 'start-text'}>
                    Press the ESC key for Startup Menu</div>

                {/* JSX FOR hp lock fold */}

                <div className='laptop-screen-locks-top'>
                    <div className="laptop-screen-lock-top" />
                    <div className="laptop-screen-lock-top" />
                </div>

                <div className='laptop-screen-locks-below'>
                    <div className="laptop-screen-lock-below" />
                    <div className="laptop-screen-lock-below" />
                </div>

                {/* JSX FOR hp lock fold */}

                <div className='laptop-body-top'></div>

                <div className='laptop-body-top-border'></div>

                {/* JSX FOR hp body */}

                <div className='laptop-body'>

                    <div className='laptop-main-buttons'>

                        <div
                            onClick={handlePowerButtonClick}
                            className='laptop-power-button button'>

                            <i className={isPowerButtonClick ? "bi bi-power icon pressed" : "bi bi-power icon"}></i>

                        </div>

                        <div className='buttons-right'>

                            <div
                                onClick={handleFlightButtonClick}
                                className='laptop-sleep-button button'>

                                <i className={isFlightButtonClick ? "bi bi-airplane icon pressed" : "bi bi-airplane icon"}></i>

                            </div>

                            <div
                                onClick={handleVolumeButtonClick}
                                className='laptop-mute-button button'>

                                <i className={isVolumeButtonClick ? "bi bi-volume-mute icon pressed" : "bi bi-volume-mute icon"}></i>

                            </div>

                        </div>

                    </div>

                    <div className='laptop-top-dots'>
                        {dots.map((_, index) => (
                            <span key={index} className="dot">•</span>
                        ))}
                    </div>

                    <div className="keyboard">
                        <div className="key esc">esc</div>
                        <div className="key f">f</div>
                        <div className="key f">f</div>
                        <div className="key f">f</div>
                        <div className="key f">f</div>
                        <div className="key f">f</div>
                        <div className="key f">f</div>
                        <div className="key f">f</div>
                        <div className="key f">f
                            <i className='bi bi-volume-down key-volume' />
                        </div>
                        <div className="key f">f
                            <i className='bi bi-volume-up key-volume' />
                        </div>
                        <div className="key f">f</div>
                        <div className="key f">f</div>
                        <div className="key f">f</div>
                        <div className="key f">insert</div>
                        <div className="key f">delete</div>
                        <div className="key f space">home</div>
                        <div className="key f">end</div>
                        <div className="key f">pg up</div>
                        <div className="key dn">pg dn</div>
                        <div className="key bc" onClick={() => handleKeyboardKeyClick('~')}>-</div>
                        <div className="key c" onClick={() => handleKeyboardKeyClick('1')}>1</div>
                        <div className="key c" onClick={() => handleKeyboardKeyClick('2')}>2</div>
                        <div className="key c" onClick={() => handleKeyboardKeyClick('3')}>3</div>
                        <div className="key c" onClick={() => handleKeyboardKeyClick('4')}>4</div>
                        <div className="key c" onClick={() => handleKeyboardKeyClick('5')}>5</div>
                        <div className="key c" onClick={() => handleKeyboardKeyClick('6')}>6</div>
                        <div className="key c" onClick={() => handleKeyboardKeyClick('7')}>7</div>
                        <div className="key c" onClick={() => handleKeyboardKeyClick('8')}>8</div>
                        <div className="key c" onClick={() => handleKeyboardKeyClick('9')}>9</div>
                        <div className="key c" onClick={() => handleKeyboardKeyClick('0')}>0</div>
                        <div className="key h" onClick={() => handleKeyboardKeyClick('-')}>-</div>
                        <div className="key pe" onClick={() => handleKeyboardKeyClick('+')}>+</div>
                        <div className="key backspace" onClick={() => handleKeyboardKeyClick('backspace')}>backspace</div>
                        <div className="key n space">num</div>
                        <div className="key s" onClick={() => handleKeyboardKeyClick('/')}>/</div>
                        <div className="key st" onClick={() => handleKeyboardKeyClick('*')}>*</div>
                        <div className="key m" onClick={() => handleKeyboardKeyClick('-')}>-</div>
                        <div className="key tab">tab</div>
                        <div className="key abc" onClick={() => handleKeyboardKeyClick('Q')}>Q</div>
                        <div className="key abc" onClick={() => handleKeyboardKeyClick('W')}>W</div>
                        <div className="key abc" onClick={() => handleKeyboardKeyClick('E')}>E</div>
                        <div className="key abc" onClick={() => handleKeyboardKeyClick('R')}>R</div>
                        <div className="key abc" onClick={() => handleKeyboardKeyClick('T')}>T</div>
                        <div className="key abc" onClick={() => handleKeyboardKeyClick('Y')}>Y</div>
                        <div className="key abc" onClick={() => handleKeyboardKeyClick('U')}>U</div>
                        <div className="key abc" onClick={() => handleKeyboardKeyClick('I')}>I</div>
                        <div className="key abc" onClick={() => handleKeyboardKeyClick('0')}>O</div>
                        <div className="key abc" onClick={() => handleKeyboardKeyClick('P')}>P</div>
                        <div className="key co" onClick={() => handleKeyboardKeyClick('{')}>{'{'}</div>
                        <div className="key cc" onClick={() => handleKeyboardKeyClick('}')}>{'}'}</div>
                        <div className="key pi" onClick={() => handleKeyboardKeyClick('|')}>|</div>
                        <div className="key c space" onClick={() => handleKeyboardKeyClick('7')}>7</div>
                        <div className="key c" onClick={() => handleKeyboardKeyClick('8')}>8</div>
                        <div className="key c" onClick={() => handleKeyboardKeyClick('9')}>9</div>
                        <div className="key pl" onClick={() => handleKeyboardKeyClick('+')}>+</div>
                        <div className="key capslock" onClick={handleCapsLockOn}>caps lock
                            <div className={isCapsLockOn ? 'capslock-light capslock-light-on' : 'capslock-light'}></div>
                        </div>
                        <div className="key abc" onClick={() => handleKeyboardKeyClick('A')}>A</div>
                        <div className="key abc" onClick={() => handleKeyboardKeyClick('S')}>S</div>
                        <div className="key abc" onClick={() => handleKeyboardKeyClick('D')}>D</div>
                        <div className="key abc" onClick={() => handleKeyboardKeyClick('F')}>F</div>
                        <div className="key abc" onClick={() => handleKeyboardKeyClick('G')}>G</div>
                        <div className="key abc" onClick={() => handleKeyboardKeyClick('H')}>H</div>
                        <div className="key abc" onClick={() => handleKeyboardKeyClick('J')}>J</div>
                        <div className="key abc" onClick={() => handleKeyboardKeyClick('K')}>K</div>
                        <div className="key abc" onClick={() => handleKeyboardKeyClick('L')}>L</div>
                        <div className="key dc" onClick={() => handleKeyboardKeyClick(';')}>:</div>
                        <div className="key sq" onClick={() => handleKeyboardKeyClick("'")}>''</div>
                        <div className="key enter" onClick={() => handleKeyboardKeyClick('enter')}>enter</div>
                        <div className="key c space" onClick={() => handleKeyboardKeyClick('4')}>4</div>
                        <div className="key c" onClick={() => handleKeyboardKeyClick('5')}>5</div>
                        <div className="key c" onClick={() => handleKeyboardKeyClick('6')}>6</div>
                        <div className="key shift">shift</div>
                        <div className="key abc" onClick={() => handleKeyboardKeyClick('Z')}>Z</div>
                        <div className="key abc" onClick={() => handleKeyboardKeyClick('X')}>X</div>
                        <div className="key abc" onClick={() => handleKeyboardKeyClick('C')}>C</div>
                        <div className="key abc" onClick={() => handleKeyboardKeyClick('V')}>V</div>
                        <div className="key abc" onClick={() => handleKeyboardKeyClick('B')}>B</div>
                        <div className="key abc" onClick={() => handleKeyboardKeyClick('N')}>N</div>
                        <div className="key abc" onClick={() => handleKeyboardKeyClick('M')}>M</div>
                        <div className="key lt" onClick={() => handleKeyboardKeyClick('<')}>&lt;</div>
                        <div className="key gt" onClick={() => handleKeyboardKeyClick('>')}>&gt;</div>
                        <div className="key q" onClick={() => handleKeyboardKeyClick('?')}>?</div>
                        <div className="key shift-2">shift</div>
                        <div className="key c space" onClick={() => handleKeyboardKeyClick('1')}>1</div>
                        <div className="key c" onClick={() => handleKeyboardKeyClick('2')}>2</div>
                        <div className="key c" onClick={() => handleKeyboardKeyClick('3')}>3</div>
                        <div className="key el" onClick={() => handleKeyboardKeyClick('enter')}>enter</div>
                        <div className="key ctrl-1">ctrl</div>
                        <div className="key fn">fn</div>
                        <div className="key window">
                            <img src={windows} alt="Window" />
                        </div>
                        <div className="key alt">alt</div>
                        <div className="key spacebar" />
                        <div className="key alt">alt</div>
                        <div className="key ctrl-2">ctrl</div>
                        <div className="key arrow-left">←</div>
                        <div className="arrow-up-down">
                            <div className="key arrow-up">↑</div>
                            <div className="key arrow-down">↓</div>
                        </div>
                        <div className="key arrow-right">→</div>
                        <div className="key insert space" onClick={() => handleKeyboardKeyClick('0')}>0</div>
                        <div className="key dot" onClick={() => handleKeyboardKeyClick('.')}>.</div>
                    </div>

                    {/* JSX FOR hp Model Information */}

                    <div className='laptop-model'>ProBook</div>

                    <div className='laptop-mouse-pad'>
                        <div className="laptop-mouse-pad-button" />
                        <div className="laptop-mouse-pad-button" />
                    </div>

                    <div className='laptop-model-information'>
                        <span className='company'>intel</span>
                        <span className='model'>CORE i5</span>
                        <small>inside</small>
                    </div>

                    <div className='button-bottom'></div>

                    {/* JSX FOR hp Model Information */}

                </div>

                {/* JSX FOR hp body */}

            </div>

            {/* JSX FOR Laptop */}

        </div>

    )

}

export default CodingGuy;