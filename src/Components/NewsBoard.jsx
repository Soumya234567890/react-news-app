import { useState, useEffect } from "react";

export const NewsBoard = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=3f4cd5b2ffd646caaf5d7911a571fdad`;

    fetch(url)
     .then(response => response.json())
     .then(data => {
        if (data.articles) {
          setArticles(data.articles);
        } else {
          setError("No articles found");
        }
      })
     .catch(error => {
        setError("Error fetching articles");
      });
  }, []);

  return (
    <div>
      <h2 className="text-center">Recent <span className="badge bg-danger">News</span></h2>

      {error? (
        <p>{error}</p>
      ) : (
        articles.map(news => (
          <div key={news.url}>
            <h3>{news.title}</h3>
            <p>{news.description}</p>
            <img src={news.urlToImage} alt={news.title} />
            <a href={news.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))
      )}
    </div>
  );
};