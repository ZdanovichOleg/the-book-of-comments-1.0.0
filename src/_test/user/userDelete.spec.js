const { expect } = require('chai');
const { userDeleteQ, userCreateQ } = require('./queries');
const { user } = require('./data');
const gqlRequest = require('../gqlRequest')

let postData, respData, userId;

describe('USER DELETE BY ID', () => {
    before((done) => {
        postData = {
            query: userCreateQ,
            variables: user
        }
        gqlRequest(postData)
            .expect(200)
            .end((err, res) => {
                if(err) return done(err)
                userId = res.body.data.userCreate._id;
                done()
            })
    })
    describe('USER DELETE BY ID - POSITIVE TESTS', () => {
        it('user delete by id', (done) => {
            postData = {
                query: userDeleteQ,
                variables: {
                    userId: userId
                }
            }
            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if(err) return done(err)
                    respData = res.body.data.userDeleteById;
                    //console.log(respData)
                    expect(respData).to.be.true;
                    expect(typeof(respData)).to.eq('boolean');
                    done()
                })
        })
    })
    //describe('USER DELETE BY ID - NEGATIVE TESTS', () => {})
})