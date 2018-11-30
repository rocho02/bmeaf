
const connection = require("./db");
const  rxjs = require('rxjs');

/**
 * Class to create, get feeding records from db.
 * @constructor
 */
function FeedingService() {

    /**
     * Create a new feeding
     */
    this.create = function () {
        return rxjs.Observable.create((observer) => {
            connection.query("insert into feeding set ? ", {feeding_time: new Date()}, (err, resultSet) => {
                if (err) {
                    console.log("error: ", err);
                    observer.reject(err);
                } else {
                    observer.next({id: resultSet.insertId});
                    observer.complete();
                }
            });
        });
    };

    /**
     * Get the last feeding date.
     */
    this.findLastFeeding = function () {
        return rxjs.Observable.create((observer) => {
            connection.query("select * from feeding order by feeding_time desc limit 1", (err, resultSet) => {
                if (err) {
                    console.log("error: ", err);
                    observer.reject(err);
                }
                else {
                    console.log(resultSet);
                    observer.next(resultSet);
                    observer.complete();
                }
            });
        });
    };

    /**
     * find all feeding record.
     * @returns {*}
     */
    this.findAll = function () {
        return rxjs.Observable.create((observer) => {
            connection.query("select * from feeding", (err, resultSet) => {
                if (err) {
                    console.log("error: ", err);
                    observer.reject(err)
                    // res.status(500);
                    // res.json({error: "Ismeretlen hiba"});
                }
                else {
                    console.log(resultSet);
                    observer.next(resultSet);
                    observer.complete();
                }
            });
        });
    };

}

const feedingService = new FeedingService();

module.exports = feedingService;