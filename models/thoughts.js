const { Schema, model, Types } = require('mongoose');
const { required } = require('nodemon/lib/config');
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            minlength: [1, `Add a thought in!`],
            maxlength: [280, `Too long! Please shorten the thought to 280 characters.`],
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    }
)

const reactionSchema = new Schema(
    {
        //custom id to make 
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            maxlength: [280, `Please shorten the length of your reaction to under 280 characters.`],
            required: true
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    }
)

const Thought = model('Thought', thoughtSchema);

module.exports = Thought