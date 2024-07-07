import { createTweet, getTweetWithComments } from '../repositories/tweet-repository.js';
import { findByName, bulkCreate } from '../repositories/hashtag-repository.js';


const createTweetService = async (data) => {
    console.log(data);
    const content = data.content;
    const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substring(1).toLowerCase());
    
    const tweet = await createTweet(data);
    
    let alreadyPresentTags = await findByName(tags);
    let titleOfPresentTags = alreadyPresentTags.map(tag => tag.title);
    
    let newTags = tags.filter(tag => !titleOfPresentTags.includes(tag));
    newTags = newTags.map(tag => {
        return { title: tag, tweets: [tweet._id] }
    });
    
    await bulkCreate(newTags);
    
    alreadyPresentTags.forEach(async (tag) => {
        tag.tweets.push(tweet._id);
        await tag.save();
    });
    
    return tweet;
};

// Function to get a tweet with comments
const getTweetService = async (tweetId) => {
    const tweet = await getTweetWithComments(tweetId);
    return tweet;
};

export {
    createTweetService,
    getTweetService
};
