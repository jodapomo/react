import React, { Component } from 'react';
import Posts from './Posts/Posts'; 
// import NewPost from './NewPost/NewPost';
import './Blog.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true,
    }

    render () {
        return (

            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts" exact>Posts</NavLink></li>
                            <li><NavLink to="/new-post" exact>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                    <Switch>
                        {this.state.auth ? <Route path="/new-post" exact component={AsyncNewPost} /> : null}
                        <Route path="/posts" component={Posts} />
                        <Route render={() => <h1>Not Found</h1>} />
                        {/* <Redirect from="/" to="/posts" /> */}
                        {/* <Route path="/" component={Posts} /> */}
                    </Switch>
            </div>
        );
    }
}

export default Blog;