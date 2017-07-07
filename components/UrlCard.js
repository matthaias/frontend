import React, { PropTypes } from 'react';

function UrlCard({ date, url, onDelete }) {
    return (
        <div className="container">
            <style jsx>
                {`
                    .container {
                        display: flex;
                        justify-content: space-between;
                        font-family: sans-serif;
                        align-items: center;
                        padding: 15px;
                        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
                            0 1px 2px rgba(0, 0, 0, 0.24);
                        margin-bottom: 10px;
                    }

                    .card-left {
                        display: inline-flex;
                        flex-direction: column;
                    }

                    .date {
                        font-size: 12px;
                        color: grey;
                    }

                    .button {
                        border-radius: 4px;
                        border: none;
                        background-color: darkred;
                        color: white;
                        font-size: 14px;
                        padding: 4px 8px;
                        cursor: pointer;
                    }
                `}
            </style>
            <div className="card-left">
                <a href={url} target="_blank" rel="noopener noreferrer">
                    {url}
                </a>
            </div>
            <div className="card-actions">
                <button className="button" onClick={onDelete}>
                    delete
                </button>
            </div>
        </div>
    );
}

UrlCard.propTypes = {
    date: PropTypes.string,
    url: PropTypes.string,
    onDelete: PropTypes.func.isRequired
};

export default UrlCard;
