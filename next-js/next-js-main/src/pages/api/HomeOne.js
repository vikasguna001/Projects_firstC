// http://localhost:3000/api/HomeOne?sulg=Test1
import * as fs from 'fs';

export default function handler(req, res) {
    fs.readFile(`jsonData/${req.query.sulg}.json`, "utf-8", (err, data) => {
        if (err) {
            res.status(500).json({ error: "not fount data..." })
        }
        console.log(req.query.sulg);
        res.status(200).json(JSON.parse(data));
    })
}
