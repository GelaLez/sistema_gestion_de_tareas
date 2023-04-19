Promise = require('bluebird');
sql_mysql = require('mysql2');

conn_mysql = null;
var fs = require('fs');
var sql_cred_mysql = JSON.parse(fs.readFileSync(__dirname + '/conexions/sql_cred', 'utf8'));

module.exports.start = function () {
    return new Promise(function (resolve, reject) {
        var p1 = new Promise(function (resolve, reject) {
            conn_mysql = sql_mysql.createConnection(sql_cred_mysql);
            if (!conn_mysql) {
                reject(err);
            } else {
                console.log("conectado a DB");
                conn_mysql.config.queryFormat = function (query, values) {
                    if (!values) return query
                    return query.replace(/\@(\w+)/g, function (txt, key) {
                        if (values.hasOwnProperty(key)) {
                            return this.escape(values[key])
                        }
                        return txt
                    }.bind(this))
                }
                resolve({ conn: conn_mysql, sql: sql_mysql });
            }
        });

        Promise.settle([p1]).then(function (results) {
            resolve({ conn: conn_mysql });
        });

    });
}

module.exports.mysqlQuery = function (tipo, c, query, d) {
    return new Promise(function (resolve, reject) {
        // console.log("tipo", tipo)
        // console.log("query", query)
        // console.log("d", d)
        console.log("<<<<<<<<<<<", c)
        process.exit()
        c.query(query, d, function (err, rs) {
            if (err) {
                resolve({ err: true, result: err })
                process.exit(1)
            } else {
                if (tipo == 'GET') {
                    resolve({ err: false, result: rs })
                } else {
                    resolve({ err: false })
                }
            }
        })
    })
}
