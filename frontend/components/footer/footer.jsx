import React from 'react';
import { faGithub, faAngellist, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = ({isDark}) => {
    return (
        <footer className="footer" id={isDark ? "footer-dark" : ""}>
            <button>
                <span>
                    <span >
                        <svg xmlns="http://www.w3.org/2000/svg"  xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <title>US</title>
                            <defs>
                                <path d="M9.68 20.004C4.3 19.834-.02 15.392 0 9.972.02 4.466 4.5.002 10 .002h.035C15.55.022 20.02 4.522 20 10.04c-.016 5.398-4.328 9.795-9.68 9.964h-.64z" id="a">
                                </path>
                                <path d="M9.68 20.004C4.3 19.834-.02 15.392 0 9.972.02 4.466 4.5.002 10 .002h.035C15.55.022 20.02 4.522 20 10.04c-.016 5.398-4.328 9.795-9.68 9.964h-.64z" id="d">
                                </path>
                                <filter x="-2.5%" y="-2.5%" width="105%" height="105%" filterUnits="objectBoundingBox" id="c">
                                    <feGaussianBlur stdDeviation=".5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
                                    <feOffset in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowInnerInner1"></feColorMatrix>
                                </filter>
                            </defs>
                            <g transform="translate(0 -.004)" fill="none" fillRule="evenodd">
                                <mask id="b" fill="#fff">
                                    <use href="#a"></use>
                                </mask>
                                <path fill="#FFF" mask="url(#b)" d="M-.004 4.506h20v-2.5h-20"></path>
                                <path fill="#B73C24" mask="url(#b)" d="M-.004 6.502h20v-2.5h-20m0-1.5h20v-2.5h-20"></path>
                                <path fill="#FFF" mask="url(#b)" d="M-.004 8.502h20v-2.5h-20"></path>
                                <path fill="#B73C24" mask="url(#b)" d="M-.004 10.498h20v-2.5h-20"></path>
                                <path fill="#FFF" mask="url(#b)" d="M-.004 12.506h20v-2.5h-20"></path>
                                <path fill="#B73C24" mask="url(#b)" d="M-.004 14.502h20v-2.5h-20"></path>
                                <path fill="#FFF" mask="url(#b)" d="M-.004 16.502h20v-2.5h-20m0 6.5h20v-2.5h-20"></path>
                                <path fill="#B73C24" mask="url(#b)" d="M-.004 18.498h20v-2.5h-20"></path>
                                <path fill="#00247F" mask="url(#b)" d="M-.004 10.002H10V.006H-.003"></path>
                                <path d="M8.996 1.007c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5m-2.646 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5m-2.646 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5m5.292 3.996c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5m-2.646 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5m-2.646 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5M7.65 7c0 .275-.224.5-.5.5s-.5-.225-.5-.5c0-.277.224-.5.5-.5s.5.223.5.5M5.005 7c0 .275-.224.5-.5.5s-.5-.225-.5-.5c0-.277.224-.5.5-.5s.5.223.5.5M2.36 7c0 .275-.225.5-.5.5-.277 0-.5-.225-.5-.5 0-.277.223-.5.5-.5.275 0 .5.223.5.5m5.29-3.997c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5m-2.645 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5m-2.645 0c0 .276-.225.5-.5.5-.277 0-.5-.224-.5-.5s.223-.5.5-.5c.275 0 .5.224.5.5m6.636 6.004c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5m-2.646 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5m-2.646 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5m-3 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5" fill="#FFF" mask="url(#b)"></path>
                                <use filter="url(#c)" href="#d" fill="#000"></use>
                            </g>
                        </svg>
                    </span>
                </span >
                &nbsp; United States &nbsp; | &nbsp; English(US) &nbsp; | &nbsp; $(USD)
            </button >
            <section className="footer-right" id={isDark ? "footer-white" : ""}>
                <div>
                    Created by <a href="https://handolekim.com" target="_blank"><u>Han Dole Kim</u></a>
                </div>
                <a href="https://github.com/kimhandole/itsy" target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/handolekim2020" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://angel.co/kimhandole" target="_blank">
                    <FontAwesomeIcon icon={faAngellist} size="2x" />
                </a>
            </section>
        </footer>
    );
}

export default Footer;