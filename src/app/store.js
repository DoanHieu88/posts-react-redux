import {configureStore} from '@reduxjs/toolkit';
import postReduce from '../feature/postsSlice';
import userReduce from '../feature/usersSlice'

export const store = configureStore({
    reducer:{
        posts: postReduce,
        users: userReduce
    }
})