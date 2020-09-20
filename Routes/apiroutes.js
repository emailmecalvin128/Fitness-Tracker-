const workout = require("../models/workouts")

module.exports = function (app) {
    app.get("/api/workouts", function (req, res) {
        workout.find()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    });

    app.post("/api/workouts", function (req, res) {
        workout.create({})
            .then(data => res.json(data))
            .catch(err => {
                res.json(err)
            })
    });

    app.get("/api/workouts/range", function (req, res) {
        workout.find()
            .then(data => {
                res.json(data)
            })
    });

    app.put("/api/workouts/:id", ({ body, params }, res) => {
        workout.findbyidandupdate(
            params.id,
            { $push: { excercises: body } },
            { new: true, runvalidators: true }
        )
            .then(data => res.json(data))
            .catch(err => {
                res.json(err)
            })
    });
}