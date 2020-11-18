const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
      },
  exercises: [
    {
      type: { 
        type:String,
        required: true,
      },
       name: {
           type:String,
           required: true,
       },
       duration: {
           type: Number,
           required: true,
       },
       weight:{
           type:Number,
       },
       reps:{
           type:Number
       },
       sets:{
           type:Number
       },
       distance:{
           type:Number
       }
    }
  ]
});

workoutSchema.virtual("totalDuration").get(function(){
    //The exercises duration
    return this.exercises.reduce(
        (total, exercise) => total + exercise.duration, 0
    );
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;