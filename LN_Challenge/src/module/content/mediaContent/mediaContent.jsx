// mediaContent.jsx
import React from 'react';

const mediaContent = ({ article }) => {
    return (
        <div className="media-content">
            <img src={article.img} alt="Article" />
        </div>
    );
};

export default mediaContent;
