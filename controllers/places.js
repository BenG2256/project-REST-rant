const router = require('express').Router()

//more code to come!
router.get('/', (req,res) => {
    res.send('GET /places')
})

module.exports = router