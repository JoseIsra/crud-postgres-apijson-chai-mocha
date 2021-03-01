const knex = require('../db/dbconfig');


describe('CRUD stickers', function() {
    
before(function(done){
    //migrations
    
    knex.migrate.latest()
    .then(()=>{
        //seeds database
        return knex.seed.run();
    }).then(()=>{ done()})
        
    })


it('NO ENTIENDO...',function(){
    
    console.log("algo ocurre?");

    })


})