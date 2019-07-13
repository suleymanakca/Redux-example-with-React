import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { fetchPosts} from '../actions/postActions'


class Posts extends Component {
    componentDidMount(){
        this.props.fetchPosts();
    }
    

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.postsToComponent.unshift(nextProps.newPost); 
            // add to the beginning
        }
    }
    render() {
        const postItems = this.props.postsToComponent.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    mewPost: PropTypes.object
}
 const mapStateToProps = state => ({
    //mapStateToProps map’leme işlemi yaparak state’imizde o anda ne varsa
    //onu component’iniz içerisinde props olarak kullanmamızı sağlar
     postsToComponent: state.posts.items, //'posts' of root reducer
     newPost: state.posts.item
 });
export default connect(mapStateToProps, { fetchPosts })(Posts);