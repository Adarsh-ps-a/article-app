import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Articles from './components/Article';
import ArticleDetail from './components/ArticleDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </Router>
  );
};

export default App;