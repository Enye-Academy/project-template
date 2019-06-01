const express = require('express');
const Topic = require('../../models/topics');

const router = express.Router();

router.post('/', async (req, res) => {
    // destructure req.body
    const {
        author, title, content, tags,
    } = req.body;

    // create new topic entry
    const topic = new Topic({
        author,
        content,
        tags,
        title,
    });

    // save topic to database
    try {
        const newTopic = await topic.save();
        return res.json({
            message: 'topic successfully created',
            topic: newTopic,
        });
    } catch (err) {
        return err;
    }
});

router.get('/', async (req, res) => {
    try {
        const topics = await Topic.find();

        if (!topics) {
            return res.json({
                message: 'no forum topic available',
            });
        }

        return res.json(topics);
    } catch (err) {
        return err;
    }
});

module.exports = router;
