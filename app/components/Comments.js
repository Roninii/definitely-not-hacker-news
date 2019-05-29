import React from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

import { fetchComments, fetchItem } from '../utils/api';
import { formatDate } from '../utils/helpers';
import Loading from './Loading';

export default class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postTitle: '',
      postDate: null,
      postAuthor: '',
      comments: [],
    };
  }

  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search);

    fetchItem(id).then(res => {
      this.setState({
        postTitle: res.title,
        postDate: res.time,
        postAuthor: res.by,
      });
      fetchComments(res.kids).then(comments => this.setState({ comments: comments }));
    });
  }

  render() {
    const { postTitle, postDate, postAuthor, comments } = this.state;

    return (
      <div className="container">
        <div className="nav">
          <Link to="/" className="btn nav-link">
            Home
          </Link>
          <button className="btn nav-link" onClick={() => this.props.history.goBack()}>
            Back
          </button>
        </div>
        <div>
          {postTitle && <h2>{postTitle}</h2>}
          {postAuthor && <h3>{postAuthor}</h3>}
          {postDate && <h3>{formatDate(postDate)}</h3>}
        </div>
        {comments.length > 0 ? (
          <ul>
            {comments.map(comment => (
              <li key={comment.id} className="content-card">
                <h3>
                  <Link to={`/user-detail?user=${comment.by}`} className="accent link">
                    {comment.by}
                  </Link>{' '}
                  on {formatDate(comment.time)}
                </h3>
                <p>{comment.text}</p>
              </li>
            ))}
          </ul>
        ) : (
          <Loading text="Fetching comments" />
        )}
      </div>
    );
  }
}
