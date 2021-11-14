import React from 'react';

const Card = ({title, subtitle, text, tags, likes}) => {
    return (
      <div className="card">
        <div className="card-body">
          <h5 data-testid='card-title' className="card-title">{title}</h5>
          {subtitle && (
            <h6 data-testid='card-subtitle' className="card-subtitle mb-2 text-muted">{subtitle}</h6>
          )}
          <p data-testid='card-text' className="card-text">{text}</p>
          <div className='footer'>
            {tags && <div className='tags-container'>{ tags.map((tag) => <small key={tag} data-testid='card-tags' className="text-muted">{tag}</small>)}</div>}
            {likes && <div className='votes'><span data-testid='card-votes'>{likes}</span></div>
            }  
          </div>
        </div>
      </div>
    );
}
export default Card;