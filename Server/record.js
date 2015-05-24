/**
 * Created with IntelliJ IDEA.
 * User: AVT
 * Date: 01.03.15
 * Time: 16:36
 * To change this template use File | Settings | File Templates.
 */

var Model = require('./model.js');

var record = function() {

    // GET
    // Get list of records by purchase ID
    var get = function(req, res, next) {

        console.log('!!!! ========= var getRecordList')
        console.log('var getRecordList:: ', req.params)
        console.log('================================')

        var response = res;

        /*Model.Record.findAll({ //sync({force: true}).
            where: {PurchaseId: req.params.PurchaseId}}).success(function (result) {
                response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'
                });
                response.end(JSON.stringify(result));
            })*/
        /*"SELECT t.*, i.* FROM cmpr_record t, cmpr_items i where t.PurchaseId = " + req.params.PurchaseId +
         " and t.ItemId = i.id "*/

        Model.seq.query('SELECT t.id, t.price, i.id as ItemId, i.name, i.UserId FROM cmpr_record t, cmpr_items i ' +
                'where t.PurchaseId = ' + req.params.PurchaseId +
                ' and t.ItemId = i.id').success(function(myTableRows) {
            response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
            response.end(JSON.stringify(myTableRows));
        })
    };

    // GET record by id
    // Get one record by id
    var getById = function(req, res, next) {
        console.log('========= var getById')
        var response = res;
        Model.Record.find({where : {id: req.params.id}}).success(function (result) { //sync({force: true}).
            response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8' });
            response.end(JSON.stringify(result));
        })
    };

    // Create record
    var createRecord = function(req, res, next) {
        console.log('!!!! ========= var createRecord')
        console.log(req.params)
        console.log('========= var createRecord')

        var newRecord = req.params;
        Model.Record.create(newRecord).complete(function(err, func1) {
            res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
            res.end(JSON.stringify(func1));
            res.send();
        });
    };

    // UPDATE record IN DB
    var update = function(req, res, next) {
        console.log('========= var update')
        var tmpRecord = req.params;
        Model.Record.update(tmpItem, {where: { id : tmpRecord.id }}).complete(function(err, func1) {
            if (!err) console.log('^^^===== ' + err)
            res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'
            });
            res.send();
        });
    };

    var remove = function(req, req, next){
        var tmpRecord = req.req.params;
        console.log('========= delete record', tmpRecord)
        Model.Record.find({where : {id: tmpRecord.id}}).on('success', function(record) {
            record.destroy().success(function(u) {
                if (u && u.deletedAt) {
                    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
                    res.end(JSON.stringify(u));
                    res.send();
                }
            })
        })


    };


    return {
        get : get,
        getById : getById,
        createRecord : createRecord,
        update : update,
        delete: remove
    }
};
module.exports = new record();
