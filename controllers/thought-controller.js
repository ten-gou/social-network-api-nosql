const { Thought } = require('../models');

const thoughtController = {
    // getAllThoughts
    getAllThoughts(req, res) {
        Thought.find({})
        .select({ _id: -1 })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });        
    },

    // getThoughtById
    getThoughtById({params}, res) {
        Thought.findOne({_id:params.id})
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            
            res.json(dbThoughtData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // createThought
    createThought({ body }, res) {
        Thought.create(body)
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // updateThoughtById
    updateThoughtById({ params, body}, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true})
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }

            res.json(dbThoughtData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },

    // deleteThoughtById
    deleteThoughtById({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            
            res.json(dbThoughtData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });                
    },
/*
    // createReaction

    // deleteReactionById
    deleteReactionById({ params }, res) {
        Thought.findOneAndRemove
    }
*/
};

module.exports = thoughtController;