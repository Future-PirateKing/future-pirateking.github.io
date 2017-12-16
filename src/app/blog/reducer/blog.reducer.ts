
import { BlogPost } from './../models/blog.models';
import * as BlogActions from './../actions/blog.actions';

export type Action = BlogActions.ALL;

const defaultState: BlogPost[] = [{
    id: 1,
    text: 'Hello I am default',
    likes: 0,
    timestamp: new Date()
}];

export function blogReducer(state: BlogPost[] = defaultState, action: Action) {

    switch (action.type) {

        case BlogActions.ADD:
            const blog: BlogPost = Object.assign({}, {
                id: state.length + 1,
                text: action.payload,
                timestamp: new Date(),
                likes: 0
            });
            return state.concat(blog);

        case BlogActions.UPVOTE:
            state[state.indexOf(action.payload)] = Object.assign({}, state[state.indexOf(action.payload)],
             {likes: state[state.indexOf(action.payload)].likes + 1}
            );

            return state;

        case BlogActions.DOWNVOTE:
            state[state.indexOf(action.payload)] = Object.assign({}, state[state.indexOf(action.payload)],
            {likes: state[state.indexOf(action.payload)].likes - 1}
            );

            return state;

        default:
            return state;
    }
}
