import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features_todo/todo_slics';

export const store = configureStore({
    reducer:todoReducer
})