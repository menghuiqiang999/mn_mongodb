#This is a class for mongodb from Moonlight, refer some common method of mongodb,such find, findOne, insertOne etc.
##Prerequisite: Require: mongodb

#Quick Start
##install npm install mn_Mongodb
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

const Mongodb = require('mn_Mongodb');
const mongodb= new Mongodb();

mongodb.setOptions(options);

###Method insertOne
mongodb.insert(document,options,(err,result) => {
    if (err) { return conssole.log(err)}
    console.log(result);
});

options is option.

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

options example: {{"timestamp":-1};} means: sort by field timestamp descending order. 1 is means ascending.

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

options example: {{"timestamp":-1};} means: sort by field timestamp descending order. 1 is means ascending.

[timestamp,-1] is ok , too.

The result is a document that meet the condition of the query.

Ref:

http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#findOne

###Method updateOne



const query= {trimContent:"XXX"};

mongodb.updateOne(filter,update,(err,result) => {

     if (err) {conssole.log(err)}

     console.log(result);

})

update is like  {$set:{resume:"XXXXXXXX"}}; resume is field of a document.

options is option.


The result: update successfully, errCode = 0 else not equal 0 ;

http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#updateOne