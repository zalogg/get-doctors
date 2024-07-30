const express = require('express');
const router = express.Router();
const connection = require('../../modules/dbconect');

router.get('/', async (req, res) => {
    const { item_valueid } = req.params;
    connection.query('SELECT * FROM users WHERE role = ?', "doctor", async (err, results) => {
        if (err) {
            console.log("ERROR " + err.message);
            return res.status(500).json({ err: err.message });
        }else{
            res.status(200).json(results);
            
        }
    });
});

module.exports = router;
