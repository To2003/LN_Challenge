// articleCard.jsx
import React from 'react';
import infoContent from '../content/infoContent/infoContent';
import mediaContent from '../content/mediaContent/mediaContent';

const articleCard = ({ article }) => {
    return (
        <div className="article-card">
            <mediaContent article={article} />
            <infoContent article={article} />
        </div>
    );
};

export default articleCard;
