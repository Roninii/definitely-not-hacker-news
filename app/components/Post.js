import React from 'react';
import PropTypes from 'prop-types';

export default function Post({ title, url, author, comments }) {
  return (
    <li className="post">
      <a href={url} className="post__title">
        {title}
      </a>
      <p className="post__description">
        by {author}, with {comments} comments
      </p>
    </li>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
  url: PropTypes.string,
};
