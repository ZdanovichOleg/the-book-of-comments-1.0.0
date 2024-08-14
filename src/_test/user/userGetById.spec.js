const  {    expect}  = require("chai");
const {userGetByIdQ} = require('./queries');
const { user } = require('./data');
const  gqlRequest   = require('../gqlRequest');

let respData = null;
let postData = null
describe('USER GET BY ID', () => {
    describe('USER GET BY ID - POSITIVE TESTS', () => {
        it('user get by id', (done) => {
            postData = {
                query: userGetByIdQ,
                variables: {
                    userId: '66bbc89ffced0603edcf18ff'
                }
            }
            gqlRequest(postData)
            .expect(200)
            .end((err, res) => {
                if(err) return done(err);
                respData = res.body.data.userGetById;
                console.log(respData);
                 expect(respData['_id']).to.equal('66bbc89ffced0603edcf18ff')
                 expect(respData.firstName).to.equal(user.userInput.firstName);
                 expect(respData.lastName).to.equal(user.userInput.lastName);
                done()
            })
        })
    })
    // describe('USER GET BY ID - NEGATIVE TESTS', () => {})
})