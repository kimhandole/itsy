import React from 'react';

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
                <div className="semi-footer-shapes">
                    <span className="semi-footer-shapes-first">
                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" svgjs="http://svgjs.com/svgjs" width="200" height="300" version="1.1" viewBox="0 0 200 300" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
                            <defs id="what-is-etsy-left-blue-light-Defs1002">
                                <clipPath id="what-is-etsy-left-blue-light-ClipPath1019">
                                    <path id="what-is-etsy-left-blue-light-Path1009" d="M0.9,94.3c0,0-5.7-39.7,39.7-59.5c18.7-4.6,78.4-14,124.4,26.8c37.4,32.9,41.7,44.7,24.9,78.4     c-6.6,11.4-24.8,29.7-81.8,29.7c-33.2-0.6-64.8-12.9-78.5-25.8C10.2,129.4,2.9,113.4,0.9,94.3" fill="blue"></path>
                                </clipPath>
                            </defs>
                            <g id="what-is-etsy-left-blue-light-G1008" transform="matrix(1,0,0,1,-99,100)">
                                <image id="what-is-etsy-left-blue-light-Image1010" width="200" height="200" alt="" transform="matrix(1.0606601717798214,1.0606601717798212,-1.0606601717798212,1.0606601717798214,0,0)" clipPath="url(&quot;#what-is-etsy-left-blue-light-ClipPath1019&quot;)" href="https://img0.etsystatic.com/site-assets/brand-refresh/textures/custom/what_is_etsy_blue_light2.jpg"></image>
                            </g>
                        </svg>
                    </span>
                    <span className="semi-footer-shapes-second">
                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" svgjs="http://svgjs.com/svgjs" width="200" height="200" version="1.1" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
                            <defs id="what-is-etsy-left-blue-dark-Defs1047">
                                <clipPath id="what-is-etsy-left-blue-dark-ClipPath1059">
                                    <path id="what-is-etsy-left-blue-dark-Path1049" d="M192.9,74.8c-2.1-5.3-3.9-10.8-5.3-16.4c-3.8-16.9-24.3-38.6-33.2-46.7     c-8.9-8.1-26.8-9.5-38.6-7.5C93.6,7.8,71.4,9,51.9,21.2C47.3,24.1,27.7,39,22.7,43.3C10.7,53.7,2.5,66.1,2.2,83.6     c-1,8.3,3.3,17.4,2.7,26.4c-1.6,26.1,13.6,45.1,26.8,65c7.5,11.3,60.8,22.8,70.8,21.6c14.7-1.8,29.1-5.4,42.8-10.9     c11.2-4.2,20.5-12.4,26.1-23.1c1.8-3,3.8-5.9,6.2-8.5c19.6-23.7,25.8-49.9,15.5-79.3" fill="#232347"></path>
                                </clipPath>
                            </defs>
                            <g id="what-is-etsy-left-blue-dark-G1048" transform="matrix(1,0,0,1,50,20)">
                                <image id="what-is-etsy-left-blue-dark-Image1050" width="200" height="200" alt="" transform="matrix(0.3,0,0,0.3,0,0)" clipPath="url(&quot;#what-is-etsy-left-blue-dark-ClipPath1059&quot;)" href="https://img0.etsystatic.com/site-assets/brand-refresh/textures/custom/what_is_etsy_blue2.jpg"></image>
                            </g>
                        </svg >
                    </span >
                    <span className="semi-footer-shapes-third">
                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" svgjs="http://svgjs.com/svgjs" width="300" height="200" version="1.1" viewBox="0 0 300 200" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
                            <defs id="what-is-etsy-right-bottom-Defs1033">
                                <clipPath id="what-is-etsy-right-bottom-ClipPath1045">
                                    <path id="what-is-etsy-right-bottom-Path1035" d="M-1,46.5l8.6,52.6l9.9,59.8l72.9-6l106.4-7.3l4.1-47L201,41l-106,2L-1,46.5z" fill="#f1641e"></path>
                                </clipPath>
                            </defs>
                            <g id="what-is-etsy-right-bottom-G1034" transform="matrix(1,0,0,1,100,100)">
                                <image id="what-is-etsy-right-bottom-Image1036" width="200" height="200" alt="" transform="matrix(1.378730854217091,-0.24310744873370377,0.24310744873370377,1.378730854217091,0,0)" clipPath="url(&quot;#what-is-etsy-right-bottom-ClipPath1045&quot;)" href="https://img0.etsystatic.com/site-assets/brand-refresh/textures/custom/what_is_etsy_orange2.jpg"></image>
                            </g>
                        </svg >
                    </span >
                    <span className="semi-footer-shapes-forth">
                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" svgjs="http://svgjs.com/svgjs" width="200" height="200" version="1.1" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
                            <defs id="what-is-etsy-right-top-Defs1021">
                                <clipPath id="what-is-etsy-right-top-ClipPath1033">
                                    <path id="what-is-etsy-right-top-Path1023" d="M126.4,161c-3-3.7-9-12.5-9-12.5L114,141c0,0-4-12.4-4.3-17.1c-0.6-9.3,1.9-16,5.6-24.5     c7.2-16.3,21.8-27.1,40.5-31.8l3.8-1.5l1.2-1.4l-14.5-48.9l-4.9-12.1c-2.9,0.5-8.4,2.9-11.1,3.6c-12.1,3.2-22,8.6-32.1,13.9     C87,27.8,69.3,45.2,69.3,45.2S52.8,62.3,47.8,74.8c-1.6,4.7-3,9.5-4,14.3C42,96,40.7,111.6,39.4,119c-1.4,8,2.8,27.8,2.8,27.8     s3,11.6,5.7,18.7c4.4,11.3,10.8,21.8,18.9,30.9c0,0,24.3-12.4,26.2-13.9s16.4-9,17.6-9.6c1.2-0.6,12.6-4.4,12.6-4.4l6-2.8     c0.2-0.3,0.3-0.7,0.4-1.1C129.6,164.4,126.5,161,126.4,161" fill="#faa129"></path>
                                </clipPath>
                            </defs>
                            <g id="what-is-etsy-right-top-G1022" transform="matrix(1,0,0,1,0,0)">
                                <image id="what-is-etsy-right-top-Image1024" width="200" height="200" alt="" transform="matrix(1,0,0,1,0,0)" clipPath="url(&quot;#what-is-etsy-right-top-ClipPath1033&quot;)" href="https://img0.etsystatic.com/site-assets/brand-refresh/textures/custom/what_is_etsy_yellow.jpg"></image>
                            </g>
                        </svg >
                    </span >
                </div>
                <div className="semi-footer-text">
                    <div className="semi-footer-top">
                        <div>

                        </div>
                        <div className="semi-footer-top-mid">
                            <h2>
                                What is Itsy?
                        </h2>
                            <a href="#">
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
                    All products
                </h2>
            </div>
        );
    }

    footer() {
        return (
            <footer className="footer" id="footer-dark">
                <button aria-label="Update your settings United States English (US) $ (USD)" aria-controls="wt-locale-picker-overlay">
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