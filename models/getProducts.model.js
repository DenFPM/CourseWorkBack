const db = require("../config/db");
const getProducts = function(data) {};

getProducts.getProducts = async (result) => {
    await db.query(`SELECT * FROM tasks;`, (err, rows, res) => {
        console.log(rows)
        if (err) {
            console.log("error: ", err);
            result(null, {error:'during database connection'});
            return;
        }
        result(null, rows)
    })
};


module.exports = getProducts;