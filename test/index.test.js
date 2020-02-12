// const expect = require('chai').expect;
// const nock = require('nock');
const index = require('../index');
const request = require('supertest');

const responseTodoList = {todos: ['todo1', 'todo2', 'todo3', 'todo4']};

// describe('index', () => {
//
//     /**
//      * Testing get all user endpoint
//      */
//     describe('GET /', function () {
//         it.skip('respond with json containing a list empty of todo', function (done) {
//             request(app)
//                 .get('/todo-list')
//                 .set('Accept', 'application/json')
//                 .expect('Content-Type', /json/)
//                 .expect(200, done);
//         });
//     });
//
//
//     // it('Get a user by username', () => {
//     //     return getUser('octocat')
//     //         .then(response => {
//     //             //expect an object back
//     //             expect(typeof response).to.equal('object');
//     //
//     //             //Test result of name, company and location for the response
//     //             expect(response.name).to.equal('The Octocat')
//     //             expect(response.company).to.equal('GitHub')
//     //             expect(response.location).to.equal('San Francisco')
//     //         });
//     // });
// });