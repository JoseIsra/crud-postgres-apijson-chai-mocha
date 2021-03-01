const knex = require('../db/dbconfig');
let expect = require('chai').expect;
const request = require('supertest');
const app  = require('../app');

const fixtures = require('./fixture');

// chai.should();
// chai.use(chaihttp);

describe('CRUD stickers', ()=> {
    
// before(function(done){
//     //migrations
//     knex.migrate.latest()
//     .then(()=>{
//         //seeds database
//         return knex.seed.run();
//     }).then(()=>{
//         done()
//     }  ).catch(err => console.log(err))
    
//     })


// it('NO ENTIENDO...',function(){
    
//     console.log("algo ocurre?");

//     })

    // the get route
    
        it("List all records", (done)=> {
            request(app)
            .get('/api/stickers')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response)=> {
                expect(response.body).to.be.a('array')
                done();
            }).catch(done)
        })

        it("List a unique record by id", (done)=> {
            request(app)
            .get('/api/sticker/2')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response)=> {
                expect(response.body).to.be.a('object')
                done();
            }).catch(done)
        })

        it("CREATE A NEW RECORD", (done)=> {
            request(app)
            .post('/api/sticker')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response)=> {
                expect(response.body).to.be.a('object')
                done();
            }).catch(done)
        })



    


})