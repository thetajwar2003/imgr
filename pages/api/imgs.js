import { createImg } from "../../lib/redis";

export default async function handler(req, res) {
    // req.body is the data from the form -> img, description, and title
    const id = await createImg(req.body);
    res.status(200).json({ id });
}