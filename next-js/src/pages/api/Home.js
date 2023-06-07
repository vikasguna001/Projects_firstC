// http://localhost:3000/api/Home
import * as fs from 'fs';

export default function handler(req, res) {
    fs.readdir("jsonData", (err, data) => {
        console.log(data);
        res.status(200).json(data)
    })
}
