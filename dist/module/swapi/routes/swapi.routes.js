"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const swapi_controller_1 = require("../controllers/swapi.controller");
/**
 * @swagger
 * /listPeople:
 *   get:
 *      tag:
 *      - Swapi
 *     description: list all people!
 *     responses:
 *       '200':
 *         description: Returns a array of people in results.
 */
router.get('/listPeople', swapi_controller_1.listPeople);
/**
 * @swagger
 * /listMovies:
 *   get:
 *      tag:
 *      - Swapi
 *     description: list all movies!
 *     responses:
 *       '200':
 *         description: Returns a array of movies in results.
 */
router.get('/listMovies', swapi_controller_1.listMovies);
/**
 * @swagger
 * /getMovie/:id:
 *   get:
 *      tag:
 *      - Swapi
 *     description: get specfic movie
 *     responses:
 *       '200':
 *         description: Returns a object of movie
 *      '404'
 *          description: Returns a page not found
 */
router.get('/getMovie/:id', swapi_controller_1.getMovie);
/**
 * @swagger
 * /getActorByName/
 *   get:
 *      tag:
 *      - Swapi
 *     description: get specfic movie
 *     responses:
 *       '200':
 *         description: Returns a object of actors
 *      '404'
 *          description: Returns a page not found
 */
router.get('/getActorByName', swapi_controller_1.getActorByName);
exports.default = router;
