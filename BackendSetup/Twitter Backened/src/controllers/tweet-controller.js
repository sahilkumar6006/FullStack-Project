import upload from '../config/file-upload-s3-config.js';
import { createTweetService,getTweetService  } from '../services/TweetService.js';

const singleUploader = upload.single('image');

// Function to handle creating a tweet with an image upload
const createTweet = async (req, res) => {
    singleUploader(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ error: err });
        }

        try {
            console.log('Image url is', req.file);
            const payload = { ...req.body, image: req.file.location };
            const response = await createTweetService(payload);
            return res.status(201).json({
                success: true,
                message: 'Successfully created a new tweet',
                data: response,
                err: {}
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Something went wrong',
                data: {},
                err: error
            });
        }
    });
};

// Function to handle fetching a tweet by ID
const getTweet = async (req, res) => {
    try {
        const response = await getTweetService(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'Successfully fetched a tweet from service',
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
            data: {},
            err: error
        });
    }
};

export { createTweet, getTweet };
        