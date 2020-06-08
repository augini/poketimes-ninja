import React, { Component } from "react";
import { connect } from "react-redux";

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/')
  };
  render() {
    const post = this.props.post ? (
      <div className="post-detail">
        <h4 className="center"> {this.props.post.title} </h4>
        <p> {this.props.post.body} </p>
        <div className="center">
            <button className="btn grey" onClick={this.handleClick}>
              Delete
            </button>
          
        </div>
      </div>
    ) : (
      <div className="container">
        <p className="center">Loading post ....</p>
      </div>
    );
    return (
      <div className="container">
        <div className="center">{post}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find((post) => post.id === id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch({ type: "DELETE_POST", id: id });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
