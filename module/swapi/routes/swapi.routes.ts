import express from 'express';
const router = express.Router();

import { listPeople, getActorByName, getMovie, listMovies } from '../controllers/swapi.controller';

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
router.get('/listPeople', listPeople);

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
router.get('/listMovies', listMovies);

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
router.get('/getMovie/:id', getMovie);


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
router.get('/getActorByName', getActorByName);


export default router;