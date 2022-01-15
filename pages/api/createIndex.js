// ONLY NEED TO DO ONCE TO CREATE SEARCH INDEX
import { index } from "../../lib/redis";

export default async function handler(req, res) {
    await index();
    res.status(200).send('ok');
}