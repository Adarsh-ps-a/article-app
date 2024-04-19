import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ErrorPage from '../ErrorPage';
import { apiUrl } from '../../utils/constants';
import './index.css'; 


const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`${apiUrl}/articles/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch article');
        }
        const data = await response.json();
        setArticle(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchArticle();
  }, [id]);

  if (error) {
    return <ErrorPage/>;
  }

  if (!article) {
    return <div className='loader-container'><div className='loader'></div></div>;
  }

  return (
    <div className="article-detail-container">
      <h2 className="article-title">{article.title}</h2>
      <p className="article-summary">{article.summary}</p>
      <p className="article-full-text">{article.fullText}</p>
    </div>
  );
};

export default ArticleDetail;
