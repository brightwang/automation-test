var request = require('supertest');
var expect = require("chai").expect;

describe('POST /api/login', function () {
    it('respond with success', function (done) {
        request('http://127.0.0.1:3000')
            .post('/api/login')
            .send({ name: 'john', pwd: '111' })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(function (res) {
                expect(res.body.message).to.equal('success');
            })
            .expect(200, done);
    });
});

describe('GET /user/:uid', function () {
    it('respond with user info', function (done) {
        var uid=1;
        request('http://127.0.0.1:3000')
            .get('/api/user/'+uid)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(function (res) {
                expect(parseInt(res.body.uid)).to.equal(uid);
            })
            .expect(200, done);
    });
});

describe('GET /index', function () {
    it('respond with api index', function (done) {
        var uid=1;
        request('http://127.0.0.1:3000')
            .get('/index')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(function (res) {
                expect(res.body.message).to.equal('api index');
            })
            .expect(200, done);
    });
});