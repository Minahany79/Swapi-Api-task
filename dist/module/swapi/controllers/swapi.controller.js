"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActorByName = exports.getMovie = exports.listMovies = exports.listPeople = void 0;
const axios_1 = __importDefault(require("axios"));
/**
 * @swagger
 * /list all people
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       '200':
 *         description: Returns a mysterious string.
 */
const listPeople = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { page } = req.query;
    try {
        const data = yield axios_1.default.get(`https://swapi.dev/api/people`, {
            params: { 'page': page }
        });
        res.status(data.status).json({ Message: data.data });
    }
    catch (e) {
        res.status(404).json({ Message: e.message });
    }
});
exports.listPeople = listPeople;
const listMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield axios_1.default.get('https://swapi.dev/api/films/');
        res.status(data.status).json({ Message: data.data });
    }
    catch (e) {
        res.status(404).json({ Message: e.message });
    }
});
exports.listMovies = listMovies;
const getMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    let actors = [];
    try {
        let response = yield axios_1.default.get(`https://swapi.dev/api/films/${id}`);
        yield Promise.all(response.data.characters.map((ele) => __awaiter(void 0, void 0, void 0, function* () {
            let character = yield axios_1.default.get(ele);
            actors.push(character.data.name);
        })));
        response.data.characters = actors;
        res.status(response.status).json({ Message: response.data });
    }
    catch (e) {
        res.status(404).json({ Message: e.message });
    }
});
exports.getMovie = getMovie;
const getActorByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { search } = req.query;
    try {
        const data = yield axios_1.default.get(`https://swapi.dev/api/people`, {
            params: { 'search': search }
        });
        res.status(data.status).json({ Message: data.data });
    }
    catch (e) {
        res.status(404).json({ Message: e.message });
    }
});
exports.getActorByName = getActorByName;
