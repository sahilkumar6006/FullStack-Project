import Hashtag from '../models/hashtag.js';

const findByName = async (tags) => {
    try {
        const hashtags = await Hashtag.find({ title: { $in: tags } });
        return hashtags;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const bulkCreate = async (newTags) => {
    try {
        const hashtags = await Hashtag.insertMany(newTags);
        return hashtags;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export {
    findByName,
    bulkCreate
};