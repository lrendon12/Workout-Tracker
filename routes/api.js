    const router = require("express").Router();
    const db = require("../models/");
   
    router.post("/api/workout", ({ body }, res) => {
   db.Workout.create(body)
        .then(dbWorkout => {
        res.json(dbWorkout);
        })
        .catch(err => {
        res.status(400).json(err);
        });
    });

    router.post("/api/workout/bulk", ({ body }, res) => {
   db.Workout.insertMany(body)
        .then(dbWorkout => {
        res.json(dbWorkout);
        })
        .catch(err => {
        res.status(400).json(err);
        });
    });

    router.get("/api/workout", (req, res) => {
    db.Workout.find({})
        .sort({ date: -1 })
        .then(dbWorkout => {
        res.json(dbWorkout);
        })
        .catch(err => {
        res.status(400).json(err);
        });
    });
        router.get('/api/workouts/workout', (req, res) => {
            db.Workout.find({})
            .sort({ _id: -1 })
            .limit(5)
            .then(dbWorkout => {
                console.log(dbWorkout);
                res.json(dbWorkout);
                console.log(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
            // Adding the new workout
    router.post("/api/workouts", ({ body }, res) => {
        db.Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });

    });

    module.exports = router;
