const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema(
    {
        thoughtText: {

        },
        createdAt: {

        },
        username: {

        },
        reactions: [
            //array of replies
        ]
    }
)

const Thought = model('Thought', thoughtSchema);

module.exports = Thought