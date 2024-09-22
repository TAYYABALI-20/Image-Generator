import React, { useState, useEffect } from 'react';

//CSS File
import './style.css';

const Character = () => {

    const [loading, setLoading] = useState(false);
    const [showImages, setShowImages] = useState(false);
    const [moveEyes, setMoveEyes] = useState(false);
    const [hoverTimer, setHoverTimer] = useState(null);
    const [hideTimer, setHideTimer] = useState(null);
    const [showTimer, setShowTimer] = useState(null);

    const handleMouseEnter = () => {

        const hover = setTimeout(() => {

            setLoading(true);

            const hide = setTimeout(() => {

                setLoading(false);

                const show = setTimeout(() => {

                    setShowImages(true);

                    const move = setTimeout(() => {

                        setMoveEyes(true);

                    }, 1000);

                    setShowTimer(move)

                }, 1000);

                setShowTimer(show);

            }, 3000);

            setHideTimer(hide);

        }, 3000);

        setHoverTimer(hover);

    };

    const handleMouseLeave = () => {

        clearTimeout(hoverTimer);

        if (!showImages) {
            clearTimeout(hideTimer);
            setLoading(false);
        };

    };

    useEffect(() => {
        return () => {
            clearTimeout(hoverTimer);
            clearTimeout(hideTimer);
            clearTimeout(showTimer);
        };

    }, [hoverTimer, hideTimer, showTimer]);

    return (

        <>

            <header>
                <ul>
                    <li>
                        <input type="checkbox" />
                        <div>I</div>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <div>M</div>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <div>A</div>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <div>G</div>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <div>E</div>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <div>G</div>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <div>E</div>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <div>N</div>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <div>E</div>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <div>R</div>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <div>A</div>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <div>T</div>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <div>O</div>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <div>R</div>
                    </li>
                </ul>
            </header>

            <div className='text-prompt'>
                <textarea cols="100" rows="5" placeholder='Enter a prompt.'></textarea>
                <button
                    id='button'
                    type='submit'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                ></button>
            </div>

            <div id="loading" className={loading ? "loading active" : ""}>

                <p>l</p>
                <p>o</p>
                <p>a</p>
                <p>d</p>
                <p>i</p>
                <p>n</p>
                <p>g</p>

            </div>

            <div className='character-room'>

                <div className={`character-album-1 ${showImages ? 'show' : ''}`}></div>

                <div className={`character-album-2 ${showImages ? 'show' : ''}`}>

                    <div className='character'>

                        <div className='character-hat'></div>

                        <div className='character-face'>

                            <div className="character-eyebrow-left"></div>
                            <div className="character-eyebrow-right"></div>

                            <div className='character-eyebrow-middle-line-1'></div>
                            <div className='character-eyebrow-middle-line-2'></div>
                            <div className='character-eyebrow-middle-line-3'></div>

                            <div className={`character-eye-left ${moveEyes ? 'move' : ''}`}>
                                <div className={`character-eye-left-pupil ${moveEyes ? 'move' : ''}`}></div>
                            </div>

                            <div className={`character-eye-right ${moveEyes ? 'move' : ''}`}>
                                <div className={`character-eye-right-pupil ${moveEyes ? 'move' : ''}`}></div>
                            </div>

                            <div className='character-nose-line-left'></div>
                            <div className='character-nose'></div>
                            <div className='character-nose-line-right'></div>

                            <div className='character-mustache'></div>

                            <div className='character-mouth'></div>

                        </div>

                        <div className='character-jaw'></div>

                        <div className='character-beard'></div>

                        <div className='character-ear-left'></div>

                        <div className='character-ear-right'></div>
                        <div className='character-ear-right-ear-ring'></div>

                        <div className='character-neck'></div>

                        <div className='character-shirt'></div>

                        <div className="character-hat-first-top"></div>
                        <div className="character-hat-second-top"></div>
                        <div className="character-hat-third-top"></div>
                        <div className="character-hat-fourth-top"></div>
                        <div className="character-hat-fifth-top"></div>
                        <div className="character-hat-sixth-top"></div>

                        <div className='character-jacket-hole-left'>
                            <div className='character-jacket-hole-left-rope'></div>
                        </div>
                        <div className='character-jacket-hole-right'>
                            <div className='character-jacket-hole-right-rope'></div>
                        </div>

                        <div className="character-left-hand">
                            <div className="character-left-hand-palm">
                                <div className="character-left-hand-thumb"></div>
                                <div className="character-left-hand-finger-1"></div>
                                <div className="character-left-hand-finger-2"></div>
                                <div className="character-left-hand-finger-3"></div>
                                <div className="character-left-hand-finger-4"></div>
                            </div>
                        </div>

                        <div className="character-right-hand">
                            <div className="character-right-hand-palm">
                                <div className="character-right-hand-thumb"></div>
                                <div className="character-right-hand-finger-1"></div>
                                <div className="character-right-hand-finger-2"></div>
                                <div className="character-right-hand-finger-3"></div>
                                <div className="character-right-hand-finger-4"></div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </>

    )

}

export default Character;