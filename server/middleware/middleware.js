module.exports = {
    checkValidString: (req, res, next) => {
        const {string} = req.body
        if(typeof string === 'string'){
            next()
        }else {
            res.status(400).send('the data type was not a string')
        }
    }
}