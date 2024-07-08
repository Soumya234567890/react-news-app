export const NewsItems = ({ title, description, src, url }) => {
    return (
      <div className="card bg-dark text-light mb-3 d-inline block ">
        <img src={src} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    );
  };