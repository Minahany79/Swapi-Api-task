import { Request, Response } from "express";
import axios from 'axios';

/**
 * @swagger
 * /list all people
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       '200':
 *         description: Returns a mysterious string.
 */
export const listPeople = async (req: Request, res: Response) => {
    const { page } = req.query;
    try {
        const data = await axios.get(`https://swapi.dev/api/people`, {
            params: { 'page': page }
        })
        res.status(data.status).json({ Message: data.data })
    } catch (e: any) {
        res.status(404).json({ Message: e.message })
    }
};

export const listMovies = async (req: Request, res: Response) => {

    try {
        const data = await axios.get('https://swapi.dev/api/films/')
        res.status(data.status).json({ Message: data.data })
    } catch (e: any) {
        res.status(404).json({ Message: e.message })
    }
};

export const getMovie = async (req: Request, res: Response) => {
    const { id } = req.params;
    let actors: string[] = [];
    try {
        let response = await axios.get(`https://swapi.dev/api/films/${id}`);
        await Promise.all(response.data.characters.map(async (ele: any) => {
            let character = await axios.get(ele);
            actors.push(character.data.name)
        }));
        response.data.characters = actors

        res.status(response.status).json({ Message: response.data })
    } catch (e: any) {
        res.status(404).json({ Message: e.message })
    }
};

export const getActorByName = async (req: Request, res: Response) => {
    const { search } = req.query;
    try {
        const data = await axios.get(`https://swapi.dev/api/people`, {
            params: { 'search': search }
        })
        res.status(data.status).json({ Message: data.data })
    } catch (e: any) {
        res.status(404).json({ Message: e.message })
    }
};

