import { queryAll } from "../../lib/redis";

export default async function handler(req, res) {
    const allImages = await queryAll();
    res.status(200).json({ allImages });
};
