const { expect } = require('chai')
const gqlRequest = require('../../gqlRequest')
const { user } = require('./data1')
const { userCreateQ } = require('./queries1')

let postData, respData;
describe('USER CREATE N1', () => {
    describe('USER CREATE - POSITIVE TESTS', () => {
        it('user create with valid data', (done) => {
                postData = {
                    query: userCreateQ,
                    variables: user
                }
                gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if(err) return done(err)
                    respData = res.body.data.userCreate;
                    console.log(respData)
                    expect(respData.firstName).to.equal('Al')
                    done();
                })
        })
    })
    // describe('USER CREATE - NEGATIVE TESTS', () => {
    //
    // })
})