/**
 * Created by Administrator on 2018/11/28.
 */
'use strict';
const pageName = 'Mongodb';
const MongoClient =  require ('mongodb').MongoClient;

const newParser={ useNewUrlParser: true };

var ok = {"errCode":0,"errMsg":"ok"};

class Mongodb {
    setOptions (options){
        const defaultUrl= 'mongodb://localhost:27017';
        this.options = {
            url : options.url || defaultUrl,
            dbName : options.dbName ,
            collectionName : options.collectionName
        };
    };
    insertOne(document,callback){
        const url = this.options.url;
        const dbName = this.options.dbName;
        const collectionName = this.options.collectionName;
        new MongoClient.connect(url, newParser, (err, client) => {
            if (err) {return params.callback(err)}
            const db = client.db(dbName);
            const col = db.collection(collectionName);
            col.insertOne(document, (err, result) => {
                if (err) {
                    return callback(err)
                }
                const rt = result.result;

                if (rt.ok == 1) {
                    rt.errCode = ok.errCode;
                    rt.errMsg = ok.errMsg;
                    callback(null, rt);
                }
                else {
                    rt.errCode = 1;
                    rt.errMsg = "Insert failure  in insertOne of mn_Mongodb!";
                    callback(null, rt);
                }
            });
            client.close();
        });

    };
    /**
     *
     * @param document
     * @param callback
     */
    insertOne(document,options,callback){
        translateOptionsCallback(arguments,(params)=> {
            const url = this.options.url;
            const dbName = this.options.dbName;
            const collectionName = this.options.collectionName;
            new MongoClient.connect(url, newParser, (err, client) => {
                if (err) {return callback(err)}
                const db = client.db(dbName);
                const col = db.collection(collectionName);
                col.insertOne(document, params.options, (err, result) => {
                    if (err) {
                        return params.callback(err)
                    }
                    const rt = result.result;

                    if (rt.ok == 1) {
                        rt.errCode = ok.errCode;
                        rt.errMsg = ok.errMsg;
                        params.callback(null, rt);
                    }
                    else {
                        rt.errCode = 1;
                        rt.errMsg = "Insert failure  in insertOne of mn_Mongodb!";
                        params.callback(null, rt);
                    }
                });
                client.close();
            });
        });
    };
    find(query,options,callback) {
        translateOptionsCallback(arguments,(params)=>{
            const url = this.options.url;
            const dbName = this.options.dbName;
            const collectionName = this.options.collectionName;
            new MongoClient.connect(url,newParser,(err,client) =>{
                if (err) { return params.callback (err)}
                const db = client.db(dbName);
                const col = db.collection(collectionName);
                col.find(query,params.options).toArray(params.callback);
                client.close();
            });
        });
    };
    findOne(query,options,callback) {
        translateOptionsCallback(arguments,(params)=> {
            const url = this.options.url;
            const dbName = this.options.dbName;
            const collectionName = this.options.collectionName;
            new MongoClient.connect(url, newParser, (err, client) => {
                if (err) {return params.callback(err)}
                const db = client.db(dbName);
                const col = db.collection(collectionName);
                col.findOne(query,params.options, params.callback);
                client.close();
            });
        });
    };
    updateOne(filter,update,callback){
            console.log("here1__________________");
            const url = this.options.url;
            const dbName = this.options.dbName;
            const collectionName = this.options.collectionName;
            new MongoClient.connect(url, newParser, (err, client) => {
                if (err) {return callback(err)}
                const db = client.db(dbName);
                const col = db.collection(collectionName);
                col.updateOne(filter, update, (err, result)=> {
                    if (err) {
                        return callback(err)
                    }
                    const rt = result.result;
                    if (rt.ok == 1) {
                        rt.errCode = ok.errCode;
                        rt.errMsg = ok.errMsg;
                        callback(null, rt);
                    }
                    else {
                        rt.errCode = 1;
                        rt.errMsg = "Update failure  in updateOne of mn_Mongodb!";
                        callback(null, rt);
                    }
                });
                client.close();
            });

    };

    updateOne(filter,update,options,callback){
        console.log("here_________________2");
        FourParamsTranslateOptionsCallback(arguments,(params)=> {
            const url = this.options.url;
            const dbName = this.options.dbName;
            const collectionName = this.options.collectionName;
            new MongoClient.connect(url, newParser, (err, client) => {
                if (err) {return params.callback(err)}
                const db = client.db(dbName);
                const col = db.collection(collectionName);
                col.updateOne(filter, update, params.options, (err, result)=> {
                    if (err) {
                        return params.callback(err)
                    }
                    const rt = result.result;
                    if (rt.ok == 1) {
                        rt.errCode = ok.errCode;
                        rt.errMsg = ok.errMsg;
                        params.callback(null, rt);
                    }
                    else {
                        rt.errCode = 1;
                        rt.errMsg = "Update failure  in updateOne of mn_Mongodb!";
                        params.callback(null, rt);
                    }
                });
                client.close();
            });
        });
    };



}

module.exports = Mongodb;
/*
* @module translateOptionsCallback
* @version 1.0.0
* @param {object} arguments  The arguments of the Function use this function.
* @param {object} callback function
* @returns {object} callback function, if success: {null,{ "options" : options , "callback" : callback } }
* @example   This is example of use case
*  var insert = function(document,options,resultCallback){
    *       translateOpertionsCallback(arguments,function(err,result){
        *                         ......
        *       }
    *   }
*
*/
//Default 3 params.
function translateOptionsCallback(arg , params) {
    var args = Array.prototype.slice.call(arg, 1);
    var callback = typeof args[args.length - 1] == 'function' ? args.pop() : null;
    var options = args.length ? args.shift() : null;
    options = options || {};
    var dataCallback = {
        options : options ,
        callback : callback
    };
    params(dataCallback) ;
}
function FourParamsTranslateOptionsCallback(arg , params) {
    var args = Array.prototype.slice.call(arg, 2);
    var callback = typeof args[args.length - 1] == 'function' ? args.pop() : null;
    var options = args.length ? args.shift() : null;
    options = options || {};
    var dataCallback = {
        options : options ,
        callback : callback
    };

    params(dataCallback) ;
}


