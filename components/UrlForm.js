import React, { PropTypes } from 'react';
import isURL from 'validator/lib/isURL';

class UrlForm extends React.Component {
        state = {
        urlValue: '',
        invalidUrl: true
    };

    handleChange = e => {
        const inputUrl = e.target.value;

        this.setState({
            urlValue: inputUrl,
            invalidUrl: !isURL(inputUrl) || !inputUrl
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.invalidUrl) {
            console.warn('wrong url');

            return;
        }

        this.props.onSubmit(this.state.urlValue);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="url">URL:</label>
                <input
                    id="url"
                    type="text"
                    name="url"
                    value={this.state.urlValue}
                    onChange={this.handleChange}
                />
                <br />
                {this.state.invalidUrl ? 'not valid' : 'valid'}
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

UrlForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default UrlForm;
