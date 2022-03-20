var jwt = require('jsonwebtoken');

const KEY = "sjkasdfjsaldkfsadjfksafjkl";

export default function handler (req, res) {
    if(!req.body) {
        res.statusCode = 404;
        res.end("Error");
        return
    }
    const { firstName, lastName, email, phoneNumber } = NextApiRequest.body;
    res.json({
        token: jwt.sign({
            firstName,
            lastName,
            email,
        }, KEY)

    })
}