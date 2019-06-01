const express = require('express');

const router = express.Router();

const secured = require('../../lib/middleware/secure');
// const mongoose = require("mongoose");

const Post = require('../../models/Post');
const Profile = require('../../models/profile.model');
// Load Validation
const validatePostInput = require('../../validation/post');

// GET all Posts
// Route: api/post
// Access: Not Protected route
router.get('/', async (req, res) => {
    try {
        const postFound = await Post.find().sort({ date: -1 });
        return res.json(postFound);
    } catch (err) {
        // Return empty list
        return res.status(404).json({ nopost: 'No posts found!' });
    }
});

// =================================================================================
// GET a particular Post
// Route: api/post/:id
// Access: Not Protected route
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const postFound = await Post.findById(id);
        return res.json(postFound);
    } catch (err) {
        return res.status(404).json({ nopost: 'No posts found for this user' });
    }
});

// ===================================================================================

// POST Create Posts
// Route: api/post
// Access: Protected route
router.post('/', secured(), async (req, res, next) => {
    const { text, name, avatar } = req.body;
    const { id } = req.user;
    try {
        const { errors, isValid } = validatePostInput(req.body);

        // Check Validation
        if (!isValid) {
            // Return any errors with 400 status if not valid
            return res.status(400).json(errors);
        }

        const newPost = new Post({
            // This will be pulled from the Redux state as far as user is logged in
            avatar,
            name,
            text,
            user: id,
        });
        const postCreated = await newPost.save();
        return res.json(postCreated);
    } catch (err) {
        return next(err);
    }
});
// ===============================================================================

// DELETE a Posts if you are the owner
// Route: api/post/:id
// Access: Protected route
router.delete('/:id', secured(), async (req, res) => {
    const { id } = req.user;
    try {
        // Find the current login user
        await Profile.findOne({ user: id });
        const postFound = await Post.findById(req.params.id);

        // Check for post owner
        if (postFound.user.toString() !== id) {
            return res.status(401).json({ notauthorized: 'User not authorized' });
        }
        // Else Delete
        await postFound.remove();
        return res.json({ success: true });
    } catch (err) {
        return res.status(404).json({ nopostfound: 'No post found!' });
    }
});
// ====================================================================================

// POST: Like a particular post
// Route: api/post/like/:id
// Access: Protected route
router.post('/like/:id', secured(), async (req, res) => {
    try {
        // Find the current login user
        await Profile.findOne({ user: req.user.id });
        const postFound = await Post.findById(req.params.id);

        // Check if user already like the post
        if (postFound.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
            return res.status(400).json({ alreadyliked: 'User already liked this post' });
        }

        // Add user id to likes array
        postFound.likes.unshift({ user: req.user.id });
        const postSaved = await postFound.save();
        return res.json(postSaved);
    } catch (err) {
        return res.status(404).json({ nopostfound: 'No post found!' });
    }
});

// ======================================================================================

// POST: UnLike a particular post
// Route: api/post/unlike/:id
// Access: Protected route
router.post('/unlike/:id', secured(), async (req, res) => {
    try {
        // Find the current login user
        await Profile.findOne({ user: req.user.id });
        const postFound = await Post.findById(req.params.id);

        // Check if user have not yet like the post
        if (postFound.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
            return res.status(400).json({ notliked: 'You need to like this post first!' });
        }

        // Get Index to be removed
        const indexToBeRemoved = postFound.likes
            .map(item => item.user.toString())
            .indexOf(req.user.id);

        // Spilce out of array
        postFound.likes.splice(indexToBeRemoved, 1);
        const postSaved = await postFound.save();
        return res.json(postSaved);
    } catch (err) {
        return res.status(404).json({ nopostfound: 'No post found!' });
    }
});

// ====================================================================================
// POST: Add comments to a particular post(post_id)
// Route: api/post/comment/:id
// Access: Protected route
router.post('/comment/:id', secured(), async (req, res) => {
    const { text, name, avatar } = req.body;
    const { id } = req.user;
    try {
        const { errors, isValid } = validatePostInput(req.body);

        // Check Validation
        if (!isValid) {
            // Return any errors with 400 status if not valid
            return res.status(400).json(errors);
        }

        // Find a particular post and add comments to it
        const postFound = await Post.findById(req.params.id);

        const newComment = {
            avatar,
            name,
            text,
            user: id,
        };

        // Add to comments array
        postFound.comments.unshift(newComment);
        // Save to db
        const postSaved = await postFound.save();
        return res.json(postSaved);
    } catch (err) {
        return res.status(404).json({ nopostfound: 'No post found!' });
    }
});

// ====================================================================================
// POST: Delete a particular comment from a particular post(post_id)
// Route: api/post/comment/:id/comment_id
// Access: Protected route
router.delete('/comment/:id/:comment_id', secured(), async (req, res) => {
    try {
        // Find a particular post and delete comments from it
        const postFound = await Post.findById(req.params.id);

        // Check to see if comment exists
        if (
            postFound.comments.filter(comment => comment.id.toString() === req.params.comment_id)
                .length === 0
        ) {
            return res.status(404).json({ commentnotexists: 'Comment does not exist' });
        }

        // Get Index to be removed
        const indexToBeRemoved = postFound.comments
            .map(item => item.id.toString())
            .indexOf(req.params.comment_id);

        // Spilce out of array
        postFound.comments.splice(indexToBeRemoved, 1);
        const postSaved = await postFound.save();
        return res.json(postSaved);
    } catch (err) {
        return res.status(404).json({ nopostfound: 'No post found!' });
    }
});

module.exports = router;
