import React from 'react';

import { fetchMainPosts } from '../utils/api';
import Post from './Post';
import Loading from './Loading';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showing: 'top',
      posts: [],
      error: null,
    };
  }

  componentDidMount() {
    fetchMainPosts(this.state.showing)
      .then(res => {
        this.setState({ posts: res });
      })
      .catch(err => {
        this.setState({ error: `There was a problem fetching ${this.state.showing} posts` });
        console.log(err);
      });
  }

  handleToggle = id => {
    this.setState({ showing: id, posts: [] });

    fetchMainPosts(this.state.showing)
      .then(res => {
        this.setState({ posts: res });
      })
      .catch(err => {
        this.setState({
          error: `There was a problem fetching ${this.state.showing} posts`,
        });
        console.log(err);
      });
  };

  render() {
    const { showing, posts, error } = this.state;

    if (error) return <h1>{error}</h1>;

    return (
      <section className="container">
        <div className="home-toggle">
          <button
            className={`home-toggle__btn ${showing === 'top' && 'active'}`}
            onClick={() => this.handleToggle('top')}>
            Top
          </button>
          <button
            className={`home-toggle__btn ${showing === 'new' && 'active'}`}
            onClick={() => this.handleToggle('new')}>
            New
          </button>
        </div>
        <ul>
          {posts.length > 0 ? (
            posts.map(post => (
              <Post
                key={post.id}
                id={post.id}
                title={post.title}
                url={post.url}
                author={post.by}
                comments={post.descendants}
              />
            ))
          ) : (
            <Loading />
          )}
        </ul>
      </section>
    );
  }
}
