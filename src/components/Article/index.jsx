import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ErrorPage from '../ErrorPage';
import { apiUrl } from '../../utils/constants';
import './index.css'; 

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`${apiUrl}/articles`);
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchArticles();
  }, []);

  if (error) {
    return <ErrorPage/>;
  }

  return (
    <div className="articles-container">
      <h1>Articles</h1>
      <div className="articles-grid">
        {articles.map(article => (
          <div key={article.id} className="article-card">
            <h3>{article.title}</h3>
            <p>{article.summary}</p>
            <Link to={`/article/${article.id}`}>Read more</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
