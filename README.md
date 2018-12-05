#This is a class for mongodb from Moonlight, refer some common method of mongodb,such find, findOne, insertOne etc.
##Prerequisite: Require: mongodb

#Quick Start
##install npm install mn_Mongodb --save
##Basic Usage
###usual params

options 为数据库的参数，如下样例：

    const options = {
        url :  "mongodb://localhost:27017",
        dbName : "booklist",
        collectionName : "booklist"
    };

document 为要插入的文档，如下样例：

    const  document = {
        corpId : "123456789" ,
        user : "mXXXXXSXX2" ,
        content:content ,
        timestamp :  Date.now()
    };

    const Mongodb = require('mn_mongodb');
    const mongodb= new Mongodb();

    mongodb.setOptions(options);
###Method aggregate

    const _id="$userId";
    const firstResumePeriod={$first:"$resumePeriod"};
    const group={_id:_id,firstResumePeriod:firstResumePeriod};
    const pipeline=[{$group:group}];
    mongodb.aggregate(pipeline,(err,cursor) => {
            assert.equal(err, null);
            cursor.toArray(function(err, documents) {
                console.log(documents);
                callback(documents);
            });
    });
options is option.
cursor: user cursor just like above;
Ref:.
http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#aggregate

###Method insertOne
    mongodb.insert(document,options,(err,result) => {
        if (err) { return conssole.log(err)}
        console.log(result);
    });

options is option.

result: success: result.errCode ==0 , failure errCode !=0 .

Ref.

http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#insertOne

###Method find

query为查询条件，样例如下：

    const query= {trimContent:"XXX"};

    mongodb.find(query,options,(err,result) => {

         if (err) {conssole.log(err)}

         console.log(result);

    })

options is option.

options example: {sort:[["timestamp",-1]]} means: sort by field timestamp descending order. 1 is means ascending.

[timestamp,-1] is ok , too.

The result is a array, it include the documents that meet the condition of query.

Ref:

http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#find

###Method findOne

query为查询条件，样例如下：

    const query= {trimContent:"XXX"};

    mongodb.findOne(query,options,(err,result) => {

         if (err) {conssole.log(err)}

         console.log(result);

    })

options is option.

options example: {sort:[["timestamp",-1]]} means: sort by field timestamp descending order. 1 is means ascending.

[timestamp,-1] is ok , too.

The result is a document that meet the condition of the query.

Ref:

http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#findOne

###Method findOneAndUpdate



    const query= {trimContent:"XXX"};

    mongodb.findOneAndUpdateOne(filter,update,options,(err,result) => {

         if (err) {conssole.log(err)}

         console.log(result);

    })

update is like  {$set:{resume:"XXXXXXXX"}}; resume is field of a document.

options is option.such as {sort:[["timestamp",-1]]}


The result: update successfully, errCode = 0 else not equal 0 ;

http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#findOneAndUpdate

###Method updateOne



    const query= {trimContent:"XXX"};

    mongodb.updateOne(filter,update,options,(err,result) => {

         if (err) {conssole.log(err)}

         console.log(result);

    })

update is like  {$set:{resume:"XXXXXXXX"}}; resume is field of a document.

options is option.


The result: update successfully, errCode = 0 else not equal 0 ;

http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#updateOne