const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('This was a success? Status code: 200');
});

module.exports = router;
