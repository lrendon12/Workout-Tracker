const router = require("express").Router();
const Transaction = require("../models/transaction.js");

router.post("/api/transaction", ({ body }, res) => {
  Transaction.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/transaction/bulk", ({ body }, res) => {
  Transaction.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/transaction", (req, res) => {
  Transaction.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
    router.get('/api/workouts/transaction', (req, res) => {
        db.Transaction.find({})
          .sort({ _id: -1 })
          .limit(5)
          .then(dbTransaction => {
            console.log(dbTransaction);
            res.json(dbTransaction);
            console.log(dbTransaction);
          })
          .catch(err => {
            res.json(err);
        });

});

module.exports = router;
