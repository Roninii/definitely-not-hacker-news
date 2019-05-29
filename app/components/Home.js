import React from 'react';

import { fetchMainPosts } from '../utils/api';
import Post from './Post';

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

  render() {
    const { showing, posts, error } = this.state;

    if (error) return <h1>{error}</h1>;

    return (
      <section>
        <h1>Showing {showing} posts</h1>
        <ul>
          {posts.length &&
            posts.map(post => (
              <Post
                key={post.id}
                title={post.title}
                url={post.url}
                author={post.by}
                comments={post.descendants}
              />
            ))}
        </ul>
      </section>
    );
  }
}
