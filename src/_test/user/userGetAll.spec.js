const { expect } = require('chai');
const { userGetAllQ, userCreateQ } = require('./queries');
const { user } = require('./data');
const gqlRequest = require('../gqlRequest')

let postData, respData;

describe('USER GET ALL', () => {
    before((done) => {
        postData = {
            query: userCreateQ,
            variables: user
        }
        gqlRequest(postData)
            .expect(200)
            .end((err, res) => {
                if(err) return done(err)
                done()
            })
    })
    describe('USER GET ALL - POSITIVE TESTS', () => {
        it('user get all', (done) => {
        postData = {
            query: userGetAllQ,
            variables: {
                amount: null
            }
        }
        gqlRequest(postData)
            .expect(200)
            .end((err, res) => {
                if(err) return done(err)
                respData = res.body.data.usersGetAll;
                //console.log(respData)
                expect(respData).to.not.be.empty;
                expect(respData).to.be.an.instanceOf(Array);
                done()
            })
        })
    })
    //describe('USER GET ALL - NEGATIVE TESTS', () => {})
})