import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => 
                dispatch({ // dispatch = payload'ı store'a sevk etmek
                    type: FETCH_POSTS,
                    payload: posts
            })
    );
};

export const createPost = postData => dispatch => {

    fetch('http://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(post => 
            dispatch({
            type: NEW_POST,
            payload: post
            })
        );
};