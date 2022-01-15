import { searchImgs } from "../../lib/redis";

export default async function handler(req, res) {
    const q = req.query.q;
    const images = await searchImgs(q);
    res.status(200).json({ images });
}