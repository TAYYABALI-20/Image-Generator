import React, { useState, useRef } from 'react';

//CSS File
import './chrome.css';

//INPUT BOX SVGS
import mic from '../../../assets/clones/chrome/mic.svg';
import camera from '../../../assets/clones/chrome/camera.svg';

//Admin Image
import admin from '../../../assets/admin/admin-image.jpg';

const Chrome = ({isChromeOpen, setIsChromeOpen}) => {

    const [isExitButtonClick, setIsExitButtonClick] = useState(false);

    const searchInputRef = useRef(null);

    const handleExitButton = () => {
        setIsChromeOpen(false);
        setIsExitButtonClick(true);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            search();
        }
    };

    const search = () => {
        const input = searchInputRef.current.value;
        window.location.href = `https://www.google.com/search?q=${input}&rlz=1C5CHFA_enNZ948NZ948&oq=${input}&aqs=chrome.0.69i59l2j46i175i199i433j46i199i291i433j46j0i433j0j69i60.875j0j9&sourceid=chrome&ie=UTF-8`;
    };

    return (

        <div 
            className={`chrome 
                ${isChromeOpen ? 'chrome-open' : 'chrome-exit'}
                ${isExitButtonClick ? 'chrome-exit' : ''}
            `}>

            <div className="chrome_tab_container">
                <div className='search-tabs'>
                    <i className='bi bi-arrow-down' />
                </div>
                <div className="chrome_tab_list">
                    <div className="chrome_tab active_tab">
                        <div className="inner">
                            <span className="border_left" />
                            <span className="border_right" />
                            <div className="icon"><i className="fas fa-globe-asia" /></div>
                            <div className="text">My Page - Something</div>
                            <div className="remove_tab" />
                        </div>
                    </div>
                </div>
                <div className="chrome_tab_settings">
                    <div className="add_tab" title="New Tab" />
                    <div onClick={handleExitButton} className="exit" />
                    <div className="maximize" />
                    <div className="minimize" />
                </div>
            </div>

            <header>
                <nav className="navbar">
                    <ul>
                        <li>
                            <a className="link" href>Gmail</a>
                        </li>
                        <li>
                            <a className="link" href>Images</a>
                        </li>
                        <li>
                            <div className="circle-shadow">
                                <svg className="google-apps-dots" focusable="false" viewBox="0 0 24 24">
                                    <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z" />
                                    <image src="https://ssl.gstatic.com/gb/images/bar/al-icon.png" alt height={2} width={2} /></svg>
                            </div>
                        </li>
                        <li>
                            <div className="circle-shadow">
                                <img className='admin-img' src={admin} alt="Tayyab Ali" />
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>

            <section className="content-section">

                <div className="content-wrapper">

                    <h6>
                        <strong>
                            <span className="g-blue">G</span>
                            <span className="o-red">o</span>
                            <span className="o-yellow">o</span>
                            <span className="g-blue">g</span>
                            <span className="l-green">l</span>
                            <span className="o-red e-red">e</span>
                        </strong>
                    </h6>


                    <div className="search-bar">

                        <i className="bi bi-search" />

                        <input
                            ref={searchInputRef}
                            onKeyDown={handleKeyDown}
                            id="search-input"
                            className="search-input"
                            type="text"
                            placeholder='Search Google or type a URL' />

                        <img className='mic' src={mic} alt="Search by voice" />
                        <img className='camera' src={camera} alt="Search by image" />

                    </div>

                    <div className='add-shortcut'>
                        <i className="bi bi-plus" />
                        <p>Add shortcut</p>
                    </div>

                </div>

            </section>

            {/* <footer>
                <div className="footer-content upper-footer">
                    <p>New Zealand</p>
                </div>
                <div className="footer-content lower-footer">
                    <ul className="lower-left-footer">
                        <li>
                            <a href>About</a>
                        </li>
                        <li>
                            <a href>Advertising</a>
                        </li>
                        <li>
                            <a href>Business</a>
                        </li>
                        <li>
                            <a href>How Search Works</a>
                        </li>
                    </ul>
                    <ul className="lower-right-footer">
                        <li>
                            <a href>Privacy</a>
                        </li>
                        <li>
                            <a href>Terms</a>
                        </li>
                        <li>
                            <a href>Settings</a>
                        </li>
                    </ul>
                </div>
            </footer> */}


        </div>

    )

}

export default Chrome;