import React from 'react';
import './Project.css';

const tagInfo = {
  Dev: { icon: '💻', className: 'tag-dev' },
  Design: { icon: '📝', className: 'tag-design' },
  Art: { icon: '🎨', className: 'tag-art' },
};

const Project = ({ name, imageSrc, description, link, tags }) => {
  return (
    // The entire component is a link
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        <div className="project-card">
            <h2 className="project-name">{name}</h2>
            <div className="project-content">
                <img src={imageSrc} alt={`${name} screenshot`} className="project-image" />

                <div className="project-tag-and-desc-container">
                  <p className="project-description">{description}</p>
                  
                  {/* {tags && tags.length > 0 && (
                    <div className="project-tags-container">
                      {tags.map((tag) => (
                        <div key={tag} className={`project-tag ${tagInfo[tag]?.className || ''}`}>
                          <span className="tag-icon">{tagInfo[tag]?.icon || ''}</span>
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>
                  )} */}
                </div>
                
            </div>

            
        </div>
    </a>
  );
};

export default Project;

