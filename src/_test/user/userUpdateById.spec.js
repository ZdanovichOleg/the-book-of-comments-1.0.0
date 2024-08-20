const { expect } = require('chai');
const { userUpdateQ, userCreateQ } = require('./queries');
const { user } = require('./data');
const gqlRequest = require('../gqlRequest')

let postData, respData, userId;

describe('USER UPDATE BY ID', () => {
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
    describe('USER UPDATE BY ID - POSITIVE TESTS', () => {
        it('user update by id', (done) => {
            postData = {
                query: userUpdateQ,
                variables: {
                    userInput: {
                        firstName: 'John',
                        lastName: 'Doe',
                        userId: userId
                    }
                }
            }
            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if(err) return done(err)
                    respData = res.body.data.userUpdateById;
                    //console.log(respData)
                    expect(respData.firstName).to.equal('John');
                    expect(respData.lastName).to.equal('Doe');
                    done()
                })
        })
    })
    //describe('USER UPDATE BY ID - NEGATIVE TESTS', () => {})
})