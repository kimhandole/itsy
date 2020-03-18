import React from 'react';
import { faGithub, faAngellist, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductIndexContainer from '../product/product_index_container';
import Footer from '../footer/footer';



class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const elements = document.getElementsByClassName("footer");
        const footer = elements[0];
        footer.classList.add(".footer-dark");

        // this.props.fetchAllProducts();
    }

    componentDidUpdate() {
        // this.props.fetchAllProducts();
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
                                Read our wonderfully weird readme
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
                        <a href="mailto:kimhandole@gmail.com" target="_blank">
                            Email to Creator
                        </a>
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
                        <picture className="picture">
                            <img className="left-content-img" src="https://i.etsystatic.com/ij/da9850/2128014396/ij_halfxhalf.2128014396_26rtgqsy.jpg?version=0" srcSet="https://i.etsystatic.com/ij/da9850/2128014396/ij_halfxhalf.2128014396_26rtgqsy.jpg?version=0 1x, https://i.etsystatic.com/ij/da9850/2128014396/ij_fullxfull.2128014396_26rtgqsy.jpg?version=0 2x" alt="" aria-hidden="true" role="presentation" />
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
                                <source srcSet="https://i.etsystatic.com/ij/08d5d6/2127946540/ij_halfxhalf.2127946540_evkun514.jpg?version=0 1x, https://i.etsystatic.com/ij/08d5d6/2127946540/ij_fullxfull.2127946540_evkun514.jpg?version=0 2x" >
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
                <ProductIndexContainer fetchAll={true} />
            </div>
        );
    }


    render() {
        return (
            <div className="homepage">
                {this.homepageBanner()}
                {this.homepageBannerText()}
                {this.homepageAllProducts()}
                {this.semiFooter()}
                <Footer isDark={true} />
            </div>
        );
    }
}

export default HomePage;