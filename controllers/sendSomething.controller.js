
exports.sendSomething = (req, res) => {
    console.log(req.body.username);
    console.log(req.body.test);
    res.send({})
    // ... logic for model
};
