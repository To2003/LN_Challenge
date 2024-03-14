// infoContent.jsx
import React from 'react';

const infoContent = ({ article }) => {
    return (
        <div className="info-content">
            <h2>{article.title}</h2>
            <p>{article.subtitle}</p>
            <strong>{article.lead}</strong>
            <p>Author: {article.author}</p>
            <img src={article.authorImg} alt="Author" />
        </div>
    );
};

export default infoContent;
