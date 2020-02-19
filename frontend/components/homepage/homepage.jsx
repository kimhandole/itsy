import React from 'react';
import { faGithub, faAngellist, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class HomePage extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        const elements = document.getElementsByClassName("footer");
        const footer = elements[0];
        footer.classList.add(".footer-dark");
    }

    semiFooter() {
        return (
            <div className="semi-footer">
                <div className="semi-footer-text">
                    <div className="semi-footer-top">
                        <div>

                        </div>
                        <div className="semi-footer-top-mid">
                            <h2>
                                What is Itsy?
                        </h2>
                        <a href="https://github.com/kimhandole/itsy" target="_blank">
                            Read our wonderfully weird story
                        </a>
                        </div>
                        <div className="semi-footer-top-right">

                        </div>
                    </div>
                    <div className="semi-footer-mid">
                        <div className="semi-footer-mid-first">
                            <h3>
                                A one-of-a-kind
                        </h3>
                            <p>
                                Itsy is a global online marketplace, where people come together to make, sell, buy, and collect unique items.
                        </p>
                        </div>
                        <div className="semi-footer-mid-second">
                            <h3>
                                Support independent creators
                        </h3>
                            <p>
                                There’s no Itsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.
                        </p>
                        </div>
                        <div className="semi-footer-mid-third">
                            <h3>
                                Peace of mind
                        </h3>
                            <p>
                                Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.
                        </p>
                        </div>
                    </div>
                    <div className="semi-footer-bot">
                        <div className="semi-footer-bot-left">

                        </div>
                        <div className="semi-footer-bot-mid">
                            <h4>
                                Have a question? Well, we’ve got some answers.
                        </h4>
                        <button>
                                Go to Help Center
                        </button>
                        </div>
                        <div className="semi-footer-bot-right">

                        </div>
                    </div>
                </div>
            </div>
        );
    }

    homepageBanner() {
        return (
            <div id="homepage-banner">
                <h1 id="homepage-header">
                    <span>If it's handcrafted, vintage, custom, or unique, it's on Itsy.</span>
                </h1>
                <div className="homepage-content">
                    <div id="left-content">
                        <div id="left-banner">
                            <p id="left-banner-text1">
                                <span>
                                    Shower your little ones with love.
                                </span>
                            </p>
                            <p id="left-banner-text2">
                                Shop Valentine's&nbsp;
                                <span className="left-content-day">
                                    Day
                                    <span className="itsy-icon-smaller">
                                        <span className="content-day-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                                <path d="M10,17a1,1,0,0,1-.707-1.707L12.586,12,9.293,8.707a1,1,0,0,1,1.414-1.414L15.414,12l-4.707,4.707A1,1,0,0,1,10,17Z"></path>
                                            </svg>
                                        </span>
                                    </span>
                                </span>
                            </p>
                        </div>
                        <picture>
                            <img id="left-content-img" src="https://i.etsystatic.com/ij/da9850/2128014396/ij_halfxhalf.2128014396_26rtgqsy.jpg?version=0" srcSet="https://i.etsystatic.com/ij/da9850/2128014396/ij_halfxhalf.2128014396_26rtgqsy.jpg?version=0 1x, https://i.etsystatic.com/ij/da9850/2128014396/ij_fullxfull.2128014396_26rtgqsy.jpg?version=0 2x" alt="" aria-hidden="true" role="presentation" />
                        </picture>
                    </div>

                    <div id="right-content">
                        <div id="right-content-top">
                            <div id="right-content-top-text">
                                <p>
                                    Congrats to the couple!
                                </p>
                                <p id="shop-engagement">
                                    Shop engagement&nbsp;
                                    <span className="right-content-day">
                                            gifts
                                        <span className="itsy-icon-smaller">
                                            <span className="content-day-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                                    <path d="M10,17a1,1,0,0,1-.707-1.707L12.586,12,9.293,8.707a1,1,0,0,1,1.414-1.414L15.414,12l-4.707,4.707A1,1,0,0,1,10,17Z"></path>
                                                </svg>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </div>
                            <picture className="right-banner-picture">
                                <source srcSet="https://i.etsystatic.com/ij/08d5d6/2127946540/ij_halfxhalf.2127946540_evkun514.jpg?version=0 1x, https://i.etsystatic.com/ij/08d5d6/2127946540/ij_fullxfull.2127946540_evkun514.jpg?version=0 2x" media="(max-width: 899px)">
                                </source>
                                <img src="https://i.etsystatic.com/ij/eb4705/2127948056/ij_halfxhalf.2127948056_1tka5hfv.jpg?version=0" srcSet="https://i.etsystatic.com/ij/eb4705/2127948056/ij_halfxhalf.2127948056_1tka5hfv.jpg?version=0 1x, https://i.etsystatic.com/ij/eb4705/2127948056/ij_fullxfull.2127948056_1tka5hfv.jpg?version=0 2x" className="" alt="" aria-hidden="true" role="presentation" >
                                </img>
                            </picture>
                        </div>
                        <div id="right-content-bottom">
                            <p id="ships-free">
                                Ships for free?&nbsp;
                                    <span className="right-content-day">
                                    Yes!
                                        <span className="itsy-icon-smaller">
                                        <span className="content-day-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                                <path d="M10,17a1,1,0,0,1-.707-1.707L12.586,12,9.293,8.707a1,1,0,0,1,1.414-1.414L15.414,12l-4.707,4.707A1,1,0,0,1,10,17Z"></path>
                                            </svg>
                                        </span>
                                    </span>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    homepageBannerText() {
        return (
            <div id="banner-text-container">
                <div className="banner-text">
                    <p className="banner-title">
                        <span className="banner-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <path d="M9.057,20.471L2.293,13.707a1,1,0,0,1,1.414-1.414l5.236,5.236,11.3-13.18a1,1,0,1,1,1.518,1.3Z"></path>
                            </svg>
                        </span>
                        <span className="banner-title-text">
                            Unique everything
                        </span>
                    </p>
                    <p className="banner-description">
                        <span>
                            We have millions of one-of-a-kind items, so you can find whatever you need (or really, really want).
                        </span>
                    </p>
                </div>
                <div className="banner-text">
                    <p className="banner-title">
                        <span className="banner-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <path d="M9.057,20.471L2.293,13.707a1,1,0,0,1,1.414-1.414l5.236,5.236,11.3-13.18a1,1,0,1,1,1.518,1.3Z"></path>
                            </svg>
                        </span>
                        <span className="banner-title-text">
                            Independent sellers
                        </span>
                    </p>
                    <p className="banner-description">
                        <span>
                            Buy directly from someone who put their heart and soul into making something special.
                        </span>
                    </p>
                </div>
                <div className="banner-text">
                    <p className="banner-title">
                        <span className="banner-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <path d="M9.057,20.471L2.293,13.707a1,1,0,0,1,1.414-1.414l5.236,5.236,11.3-13.18a1,1,0,1,1,1.518,1.3Z"></path>
                            </svg>
                        </span>
                        <span className="banner-title-text">
                            Secure shopping
                        </span>
                    </p>
                    <p className="banner-description">
                        <span>
                            We use best-in-class technology to protect your transactions.
                        </span>
                    </p>
                </div>
            </div>
        );
    }

    homepageAllProducts() {
        return (
            <div id="all-products">
                <h2>
                    <b>Popular right now</b>
                </h2>
            </div>
        );
    }

    footer() {
        return (
            <footer className="footer" id="footer-dark">
                <button>
                    <span>
                        <span >
                            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
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
                <section className="footer-right footer-white">
                    <div>
                        Created by <a href="https://handolekim.com" target="_blank"><u>Han Dole Kim</u></a>
                    </div>
                    <a href="https://github.com/kimhandole/itsy" target="_blank">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/han-dole-kim-76979996" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://angel.co/kimhandole" target="_blank">
                        <FontAwesomeIcon icon={faAngellist} size="2x" />
                    </a>
                </section>
            </footer>
        );
    }

    render() {
        return (
            <div className="homepage">
                {this.homepageBanner()}
                {this.homepageBannerText()}
                {this.homepageAllProducts()}
                {this.semiFooter()}
                {this.footer()}
            </div>
        );
    }
}

export default HomePage;