import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Post({ id, title, url, author, comments }) {
  return (
    <li className="post">
      <a href={url} className="post__title">
        {title}
      </a>
      <p className="post__description">
        by{' '}
        <Link to={`/user-detail?user=${author}`} className="accent accent-link">
          {author}
        </Link>
        , with{' '}
        <Link to={`/post?id=${id}`} className="accent accent-link">
          {comments}
        </Link>{' '}
        comments
      </p>
    </li>
  );
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
  url: PropTypes.string,
};
