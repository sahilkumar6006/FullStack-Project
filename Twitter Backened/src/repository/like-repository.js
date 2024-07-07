// like-repository.js

import Like from '../models/like.js';
import { create, destroy, get, getAll, update } from './crud-repository.js';

const createLike = async (data) => {
    return await create(Like, data);
};

const destroyLike = async (id) => {
    return await destroy(Like, id);
};

const getLike = async (id) => {
    return await get(Like, id);
};

const getAllLikes = async () => {
    return await getAll(Like);
};

const updateLike = async (id, data) => {
    return await update(Like, id, data);
};

const findByUserAndLikeable = async (data) => {
    try {
        const like = await Like.findOne(data);
        return like;
    } catch (error) {
        throw error;
    }
};

export { createLike, destroyLike, getLike, getAllLikes, updateLike, findByUserAndLikeable };
