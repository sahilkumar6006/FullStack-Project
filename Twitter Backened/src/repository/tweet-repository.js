import Tweet from '../models/tweet.js';

// Function to create a tweet
const createTweet = async (data) => {
    try {
        const tweet = await Tweet.create(data);
        return tweet;
    } catch (error) {
        throw error;
    }
};

// Function to get a tweet with comments
const getTweetWithComments = async (id) => {
    try {
        const tweet = await Tweet.findById(id).populate({
            path: 'comments',
            populate: {
                path: 'comments'
            }
        }).lean();
        return tweet;
    } catch (error) {
        console.error(error);
    }
};

// Function to get all tweets with pagination
const getAllTweets = async (offset, limit) => {
    try {
        const tweets = await Tweet.find().skip(offset).limit(limit);
        return tweets;
    } catch (error) {
        console.error(error);
    }
};

// Function to find a tweet by ID
const findTweetById = async (id) => {
    try {
        const tweet = await Tweet.findById(id).populate({ path: 'likes' });
        return tweet;
    } catch (error) {
        console.error(error);
    }
};

export {
    createTweet,
    getTweetWithComments,
    getAllTweets,
    findTweetById
};
