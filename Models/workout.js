// Using Node.js `require()`//Importing
const mongoose = require("mongoose");

const schema = mongoose.Schema;

const workoutschema = new schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        excercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "enter exercise type"
                },
                name: {
                    type: String,
                    trim: true, 
                    Required: "enter excercise name"
                },
                duration: {
                    type: Number,
                    required: "enter an excercise duration in minutes"
                },
                weight: {
                    type: Number
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
            }
        ]
    },
{
    toJSON: {
        //virtual properties when data is requested 
        virtuals: true
    }
}
);
// adds property to schema 
workoutschema.virtual("totalDuration").get(Function() {
    //"reduce" array of excercises down to just the sum of their durations
    return this.excercises.reduce ((total,exercise)=> {
        return total + excercise.duration; 

    }, 0);
});
   
const Workout = mongoose.model ("Workout, workoutSchema);

module.exports = Workout; 
