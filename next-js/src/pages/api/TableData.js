import * as fs from 'fs';

export default function handler(req, res) {
    fs.readFile("jsonData/Test.json", "utf-8", (err, data) => {
        res.status(200).json(JSON.parse(data));
    })
}
