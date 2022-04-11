const express = require('express');
const router = express.Router();

router.get('/getData', (req, res) => {
    const { number } = req.query;

    if ( isNaN(number) && number ) {
        res.send("Wrong Parameter")
    } 
    // else if (number == 5) {
    //     let sum = 0;
    //     for (let i = 0; i < number; i++) {
    //         sum += i + 1;
    //     };
    //     res.send(`${sum}`);
    // }
     else if (Number.isInteger(Number(number)) && number >= 0) {
        let sum = 0;
        for (let i = 0; i < number; i++) {
            sum += i + 1;
        };
        res.send(`${sum}`);
    } 
    // else if (!Number.isInteger(Number(number)) || !number >= 0) { 
    //     res.send("Please use a positive integer parameter")
    // }
    else {
        res.send("Lack of Parameter");
    }
})



module.exports = router;