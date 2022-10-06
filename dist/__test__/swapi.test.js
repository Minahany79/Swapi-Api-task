"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./../app"));
const request = require('supertest');
describe.skip("get Movie By ID api", () => {
    it("GET Spacfic Movie when write id in params ==> return a spacfic movie with characters names", () => {
        return request(app_1.default).get('/getMovie/4')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
            expect(res.body).toEqual(expect.objectContaining({
                Message: expect.objectContaining({
                    'characters': expect.arrayContaining([expect.any(String)])
                })
            }));
        });
    });
    it("GET Spacfic Movie without params ==> return 404  not found", () => {
        return request(app_1.default).get('/getMovie')
            .expect(404);
    });
    it("GET Spacfic Movie if write number not found in params ==> return json with Message 'Request failed with status code 404'", () => {
        return request(app_1.default).get('/getMovie/99')
            .expect('Content-Type', /json/)
            .expect(404)
            .then((res) => {
            expect(res.body).toEqual(expect.objectContaining({ Message: expect.any(String) }));
        });
    });
});
describe.skip("list people api", () => {
    it("GET all people ==> array of people in results", () => {
        return request(app_1.default).get('/listPeople')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
            expect(res.body).toEqual(expect.objectContaining({ Message: expect.objectContaining({ 'results': expect.any(Array) }) }));
        });
    });
});
describe.skip("list Movies api", () => {
    it("GET all Movies ==> array of Movies in results", () => {
        return request(app_1.default).get('/listMovies')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
            expect(res.body).toEqual(expect.objectContaining({ Message: expect.objectContaining({ 'results': expect.any(Array) }) }));
        });
    });
});
describe.skip("get Actor By Name api", () => {
    it("GET Spacfic Actor if not use query  return all actors", () => {
        return request(app_1.default).get('/getActorByName')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
            expect(res.body).toEqual(expect.objectContaining({
                Message: expect.objectContaining({
                    'results': expect.arrayContaining([
                        expect.objectContaining({ 'name': expect.any(String) })
                    ])
                })
            }));
        });
    });
    it("GET Spacfic Actor when enter chars not exist in actor name in query ==> return array of empty", () => {
        return request(app_1.default).get('/getActorByName/?search=minahany')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
            expect(res.body).toEqual(expect.objectContaining({ Message: expect.objectContaining({ 'results': [] }) }));
        });
    });
});
