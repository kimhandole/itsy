import  React from 'react';
import {withRouter} from 'react-router-dom';


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
                <section className="thank-you-border">
                <h2 id="thank-you-greeting">Thanks for coming to </h2>
                <h1 className="itsy-logo">Itsy</h1>
                <button onClick={this.handleClick} id="thank-you-return">Return to Home Page</button>
                </section>
            </section>
        )
    }
}

export default withRouter(ThankYou);