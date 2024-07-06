import { asyncHandler } from '../utils/asyncHandler.js';
import { User } from '../models/user.model.js';
import bcrypt from 'bcrypt';
import { ApiError } from '../utils/apiError.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';

const generateAccessRefreshToken = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new ApiError(404, 'User not found');
  }
  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();
  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });
  return { accessToken, refreshToken };
};

const SignUp = asyncHandler(async (req, res) => {
  try {
    const { email, password, userName } = req.body;

    if (!email || !password || !userName) {
      return res.status(401).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(200).json({ message: "User already exists" });
    }

    const avatarLocalPath = req.files?.avatar?.[0]?.path;

    if (!avatarLocalPath) {
      throw new ApiError(400, "Avatar file is required");
    }

    let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
      coverImageLocalPath = req.files.coverImage[0].path;
    }

    if (!coverImageLocalPath) {
      throw new ApiError(400, "Cover image file is required");
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    const user = await User.create({
      userName,
      avatar: avatar.url,
      coverImage: coverImage?.url || '',
      email,
      password,
    });

    const createdUser = await User.findById(user.id).select("-password -refreshToken");

    if (!createdUser) {
      throw new ApiError(500, "Something went wrong");
    }

    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
});

const signIN = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(401, "User not found");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    return res.status(401).json(new ApiResponse(401, {}, "Invalid password"));
  }

  const { accessToken, refreshToken } = await generateAccessRefreshToken(user._id);

  const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res.status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(new ApiResponse(200, { user: loggedInUser, accessToken, refreshToken }, "User logged in successfully"));
});

export { SignUp, signIN };
