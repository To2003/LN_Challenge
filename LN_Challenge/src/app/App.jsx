// App.js
import React from 'react';
import articleList from '../module/articleList/articleList';
import articleData from 'ejercicio/data.json';
import articleData from '../data.json'
import './styles/styles.css'; // Asegúrate de tener los estilos CSS importados

const App = () => {
    return (
        <div className="app">
            <h1>Articles</h1>
            <articleList articles={articleData} />
        </div>
    );
};

export default App;
