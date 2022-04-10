const express = require('express');
const router = express.Router()

router.get('/sum.html', (req, res) => {
    res.render('sum.html');
})

module.exports = router;