module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    console.log('Globalerror');
    if (typeof (err) === 'string') {
        // custom application error
        return res.status(400).json({ message: 'Globalerror' +err });
    }

    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
        return res.status(401).json({ message: 'Globalerror' +'Invalid Token' });
    }

    // default to 500 server error
    return res.status(500).json({ message: 'Globalerror' + err.message });
}