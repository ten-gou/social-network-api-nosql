const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    //parameters for the userSchema
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/^.+@.+\..+$/, `Please enter a valid email address!`]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    }
)

// returns the number of friends
userSchema.virtual('friendslist')
    .get(function() {return `${this.friends}`})
    .set(function(v) {
        const friendslist = v.length
        this.set({ friendslist })
    })

const User = model('User', userSchema);

module.exports = User