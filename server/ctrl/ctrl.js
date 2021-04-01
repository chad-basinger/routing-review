module.exports = {
    successfulStringMessage: (req, res) => {
        console.log('Good job, that was a string')
        res.sendStatus(200)
    }
}