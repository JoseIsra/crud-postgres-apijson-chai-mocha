const router = require('express').Router();
const knex = require('../db/dbconfig');



router.get('/', (req, res )=> {

    res.json({
        message:'hola qué hace '
    })
})

//get stickers
router.get('/stickers', async(req, res)=> {
    const result = await knex.select().from('sticker');
    res.json(result);
})  



module.exports = router;


