const { expect } = require('chai')
const {  userGetByIdQ} = require('./queries1')
const gqlRequest = require('../../gqlRequest')

let postData, respData;
describe('USER GET BY ID', () => {
    describe('USER GET BY ID - POSITIVE TESTS', () => {
        it('user get by id with valid id', (done) => {
            postData = {
                query: userGetByIdQ,
                variables: {
                    userId: '66bbf15ea592c892347155a7'
                }
            }
            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if(err) return done(err)
                    respData = res.body.data.userGetById;
                    console.log(respData);
                    expect(respData['_id']).to.equal('66bbf15ea592c892347155a7')
                    expect(respData.firstName).to.equal('Al')
                    expect(respData.lastName).to.equal('Pacino')
                    done()
                })
        })
    })
    // describe('USER GET BY ID - NEGATIVE TESTS', () => {})
})