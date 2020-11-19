const mongoose = require("mongoose");

const {
    Schema
} = mongoose;

const WorkoutSchema = new Schema({
            day: {
                type: Date,
                default: Date.now
            },
            exercises: [{
                type: {
                    type: String,
                    required: true,
                },
                name: {
                    type: String,
                    required: true,
                },
                duration: {
                    type: Number,
                    required: true,
                },
                weight: {
                    type: Number,
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }]
        }, {
            toJSON: {

                virtuals: true,
            },  
        });

        workoutSchema.virtual("totalDuration").get(function () {
            //The exercises duration
            return this.exercises.reduce(
                (total, exercise) => total + exercise.duration, 0
            );
        });

        const Workout = mongoose.model("Workout", workoutSchema);

        module.exports = Workout;