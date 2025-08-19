import React, { useState, useEffect } from 'react';
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Appel API pour récupérer les articles
    fetch('/api/articles')
      .then(res => res.json())
      .then(data => setArticles(data));
  }, []);

  const handleDelete = (id) => {
    // Appel API pour supprimer un article
    fetch(`/api/articles/${id}`, { method: 'DELETE' })
      .then(() => setArticles(articles.filter(article => article.id !== id)));
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gestion des articles</h1>
        <button
          onClick={() => navigate('/articles/new')}
          className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          <FiPlus className="mr-2" /> Nouveau
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left py-2 px-4">Titre</th>
            <th className="text-left py-2 px-4">Auteur</th>
            <th className="text-left py-2 px-4">Date</th>
            <th className="text-left py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map(article => (
            <tr key={article.id} className="border-b">
              <td className="py-3 px-4">{article.title}</td>
              <td className="py-3 px-4">{article.author}</td>
              <td className="py-3 px-4">{article.date}</td>
              <td className="py-3 px-4">
                <button onClick={() => navigate(`/articles/edit/${article.id}`)} className="text-blue-500 mr-2">
                  <FiEdit2 />
                </button>
                <button onClick={() => handleDelete(article.id)} className="text-red-500">
                  <FiTrash2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Articles;
