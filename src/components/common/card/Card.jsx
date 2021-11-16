import React from 'react';
import './Card.styles.scss';
import { AiOutlineLike } from 'react-icons/ai';

const Card = ({title, subtitle, description, tags, likes}) => {
    return (
      <div className="card border-0">
        <div className="card-body">
          <h5 data-testid='card-title' className="card-title">{title}</h5>
          {subtitle && (
            <h6 data-testid='card-subtitle' className="card-subtitle mb-2 text-muted">{subtitle}</h6>
          )}
          <p data-testid='card-text' className="card-text">{description}</p>
          <div className='footer d-flex justify-content-between'>
            {tags && <div className='tags-container'>{ tags.map((tag) => <div key={tag} data-testid='card-tags' className="card-tags badge rounded-pill">{tag}</div>)}</div>}
            <div className='votes d-flex justify-content-between align-items-center'><button><AiOutlineLike/></button><span className='rounded-circle' data-testid='card-votes'>{likes}</span></div>  
          </div>
        </div>
      </div>
    );
}
export default Card;