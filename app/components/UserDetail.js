import React from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

import { fetchUser, fetchPosts } from '../utils/api';
import { formatDate } from '../utils/helpers';
import Post from './Post';
import Loading from './Loading';

export default class UserDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      karma: null,
      posts: [],
      joined: null,
    };
  }

  componentDidMount() {
    const user = queryString.parse(this.props.location.search);
    fetchUser(user.user)
      .then(res => {
        this.setState({
          response: res,
          username: res.id,
          karma: res.karma,
          joined: res.created,
        });
        fetchPosts(res.submitted).then(userPosts => this.setState({ posts: userPosts }));
      })
      .catch(err => {
        this.setState({ error: `There was a problem fetching ${username}'s posts` });
        console.log(err);
      });
  }

  render() {
    const { username, karma, posts, joined } = this.state;
    return (
      <div className="container">
        <div className="nav">
          <Link to="/" className="nav-link">
            Go back
          </Link>
        </div>
        {username && <h2 className="accent">{username}</h2>}
        {joined && <p>joined {formatDate(joined)}</p>}
        {karma && <p>{karma} karma</p>}
        <hr />
        {posts.length > 0 ? (
          <ul>
            {posts.length > 0 &&
              posts.map(post => (
                <Post
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  url={post.url}
                  author={post.by}
                  comments={post.descendants}
                />
              ))}
          </ul>
        ) : (
          <Loading text="Fetching user posts" />
        )}
      </div>
    );
  }
}
