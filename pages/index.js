import React from 'react';
import 'isomorphic-fetch';
import UrlCard from '../components/UrlCard';
import UrlForm from '../components/UrlForm';

const backendAddress = '45.32.152.155';

export default class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            urls: [],
            invalidUrl: true,
            submitted: false
        };
    }

    componentDidMount() {
        fetch(`http://${backendAddress}:8080`)
            .then(response => response.json())
            .then(urls => {
                this.setState({
                    urls
                });
            })
            .catch(console.error);
    }

    handleSubmit = url => {
        fetch(`http://${backendAddress}:8080/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url })
        })
            .then(response => response.json())
            .then(response => fetch(`http://${backendAddress}:8080`))
            .then(response => response.json())
            .then(urls => {
                this.setState({
                    urls
                });
            })
            .catch(console.error);
    };

    handleDelete = id => e => {
        e.preventDefault();

        fetch(`http://${backendAddress}:8080/${id}`, { method: 'DELETE' })
            .then(response => fetch(`http://${backendAddress}:8080`))
            .then(response => response.json())
            .then(urls => {
                this.setState({
                    urls
                });
            })
            .catch(console.error);
    };

    render() {
        const urls = this.state.urls;
        const renderUrls = urls.map(url =>
            <UrlCard
                key={url._id}
                url={url.url}
                onDelete={this.handleDelete(url._id)}
            />
        );

        return (
            <div className="container">
                <style jsx>
                    {`
                        .container {
                            max-width: 600px;
                            margin: 0 auto;
                        }
                    `}
                </style>
                <span>stage</span>
                <UrlForm onSubmit={this.handleSubmit} />
                {renderUrls}
            </div>
        );
    }
}
