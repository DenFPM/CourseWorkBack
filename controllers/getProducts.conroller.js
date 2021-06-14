const getProducts = require("../models/getProducts.model");

exports.getProducts = (req, res) => {
    getProducts.getProducts((err, data) => {
        if (err)
            res.status(500).send({
                message:
                  err.message || "error."
            });
        else res.send(data);
    });
};
