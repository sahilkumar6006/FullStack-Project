import Tweet from "../models/tweet.js";

const create = async (model, data) => {
    try {
        console.log(data);
        const result = await model.create(data);
        return result;
    } catch (error) {
        console.log("Something went wrong in the create function");
        throw error;
    }
};

const destroy = async (model, id) => {
    try {
        const result = await model.findByIdAndDelete(id);
        return result;
    } catch (error) {
        console.log("Something went wrong in the destroy function");
        throw error;
    }
};

const get = async (model, id) => {
    try {
        const result = await model.findById(id);
        return result;
    } catch (error) {
        console.log("Something went wrong in the get function");
        throw error;
    }
};

const getAll = async (model) => {
    try {
        const result = await model.find({});
        return result;
    } catch (error) {
        console.log("Something went wrong in the getAll function");
        throw error;
    }
};

const update = async (model, id, data) => {
    try {
        const result = await model.findByIdAndUpdate(id, data, { new: true });
        return result;
    } catch (error) {
        console.log("Something went wrong in the update function");
        throw error;
    }
};

export { create, destroy, get, getAll, update };
