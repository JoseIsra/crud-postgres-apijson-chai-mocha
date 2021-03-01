const router = require('express').Router();
const { whereNotExists } = require('../db/dbconfig');
const knex = require('../db/dbconfig');
//(dropdb -U postgres --if-exists testcrudjson && createdb -U postgres testcrudjson) && cross-env NODE_ENV=test 

function isValidId(req, res , next){
    if(!isNaN(req.params.id)) return next();
    next(new Error('ID IS NOT CORRECT!!'));
}

router.get('/', (req, res )=> {

    res.json({
        message:'hola qué hace '
    })
})

//get stickers
router.get('/stickers', async(req, res)=> {
    try {
        const result = await knex.select().from('sticker');
        res.json(result);
        
    } catch (error) {
        next(error)
    }
})  


router.post('/sticker', async (req, res)=> {
try {
    await knex('sticker').insert(req.body);
    res.json({
        message:'new sticker is in the house'
    })
    res.end();
    
} catch (error) {
    next(error);
}
})
router.get('/sticker/:id', isValidId, async(req ,res)=> {
    try {
        const result = await knex('sticker').where('id', req.params.id).first();
        if(!result)  next();
        res.send(result);
        
    } catch (error) {
        next(new Error(error))
    }
    })


router.route('/sticker/:id')
.put(async (req,res) => {
    try {
        await knex('sticker')
        .where({id:req.params.id})
        .update(req.body)
        res.json({
            message:'record on day 😁😁'
        })
    } catch (error) {
        next(error)
    }
})
.delete(async(req, res)=> {
    try {
        await knex('sticker')
            .where('id',req.params.id)
            .del();
        res.json({
            message:'registro borrado'
        })  
        
    } catch (error) {
        next(error)
    }
})




module.exports = router;


