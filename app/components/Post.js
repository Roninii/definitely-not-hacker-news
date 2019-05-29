import React from 'react';
import PropTypes from 'prop-types';

export default function Post({ title, url, author, comments }) {
  return (
    <li>
      <a href={url}>{title}</a>
      <p>
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
