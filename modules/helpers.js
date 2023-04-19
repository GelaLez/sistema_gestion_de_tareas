module.exports = {
    mysqlQuery: mysqlQuery
}

function mysqlQuery(tipo, c, query, d) {
    return new Promise(async (resolve, reject) => {
        console.log(tipo, query, d);
        c.query(query, d, (err, rs) => {
            if (err) {
                console.error(err);
                reject({ err: true, description: err })
            } else {
                if (tipo == 'GET') {
                    resolve({ err: false, description: rs })
                } else {
                    console.log(rs.insertId);
                    resolve({ err: false, insertId: rs.insertId })
                }
            }
        })
    })
}
