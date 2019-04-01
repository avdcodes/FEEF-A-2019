const spicedPg = require('spiced-pg');
let db;

if (process.env.DATABASE_URL) {
    db = spicedPg(process.env.DATABASE_URL);
}

function getALLimgz() {
    return db.query("SELECT * FROM imgzx").then(result => result.rows)
}

function getLastimg() {
    return db.query("SELECT * FROM imgzx ORDER BY id DESC LIMIT 1").then(result => result.rows)
}

function inputIJG_intosXX(file) {
    return db.query(`INSERT INTO imgzx (filename, who, type) VALUES ($1, $2, $3)`,
    [file.filename, file.who, file.type]).then(result => result.rowCount ? {done:true} : {done:false}).catch(err => {done:false});
}

module.exports.getALLimgz = getALLimgz;
module.exports.getLastimg = getLastimg;
module.exports.inputIJG_intosXX = inputIJG_intosXX;
