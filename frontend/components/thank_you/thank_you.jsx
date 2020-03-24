import  React from 'react';
import {withRouter} from 'react-router-dom';
import { faGithub, faAngellist, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ThankYou extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.closeModal();
        this.props.history.push("/")
    }

    render() {
        return(
            <section className="thank-you">
                <p>Thank you for coming to Itsy!</p>
                <button onClick={this.handleClick} >Return to Home Page</button>
                <span>or</span>
                <p>Please check out creator's website, github, linkedin, angelist below 👇🏼</p>
                <section className="footer-right">
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
            </section>
        )
    }
}

export default withRouter(ThankYou);