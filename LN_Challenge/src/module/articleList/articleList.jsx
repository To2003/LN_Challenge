// articleList.jsx
import React from 'react';
import articleCard from './articleCard';

const articleList = ({ articles }) => {
    return (
        <div className="article-list">
            {articles.map((article, index) => (
                <articleCard key={index} article={article} />
            ))}
        </div>
    );
};

export default articleList;
