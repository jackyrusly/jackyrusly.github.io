import React from 'react';
import PropTypes from 'prop-types';

const PortfolioItem = ({ title, description, icons, links }) => (
    <div className="portfolio-item">
        <div className="portfolio-item-title">{title}</div>
        <div className="portfolio-item-description">{description}</div>
        <div className="portfolio-item-icons">
            {icons.map((p, i) => <i key={i} className={p}></i>)}
        </div>
        <div className="portfolio-item-links">
            {links.map((p, i) => <a key={i} href={p.link} rel="noreferrer noopener" target="_blank">{p.text}</a>)}
        </div>
    </div>
);

PortfolioItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    icons: PropTypes.array,
    links: PropTypes.array,
};

export default PortfolioItem;
