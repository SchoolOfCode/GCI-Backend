"use strict";
// init phase
const AWS = require("aws-sdk");
// const { v4: uuidv4 } = require("uuid");

// function to help responding to an API call
function response(statusCode, message) {
  return {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT, DELETE",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  };
}

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v1.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

// GET all in the table lambda function
module.exports.getAllItems = (event, context, callback) => {
  // return db
  //   .scan({
  //     TableName: users,
  //   })
  //   .promise()
  //   .then((res) => callback(null, response(200, res.Items)))
  //   .catch((err) => callback(null, response(err.statusCode, err)));
};

// GET 1 item by ID from the ducktable
module.exports.getItemById = (event, context, callback) => {
  const id = event.pathParameters.id;
  const params = {
    Key: {
      id: id,
    },
    TableName: ducktable,
  };

  // return db
  //   .get(params)
  //   .promise()
  //   .then((res) => {
  //     if (res.Item) callback(null, response(200, res.Item));
  //     else
  //       callback(null, response(404, { error: "No item with that id found" }));
  //   })
  //   .catch((err) => callback(null, response(err.statusCode, err)));
};

//POST a new item to the table
module.exports.addItem = (event, context, callback) => {
  // { 	id: number,
  //   name: string,
  //   quantity: number,
  //   category: string,
  //   image: string,
  //   isBought: Boolean
  // }
  const reqBody = JSON.parse(event.body);
  const item = {
    id: uuidv4(),
    name: reqBody.name,
    quantity: reqBody.quantity,
    category: reqBody.category,
    image: reqBody.image,
    isBought: reqBody.isBought,
  };

  // // return db
  //   .put({ TableName: ducktable, Item: item })
  //   .promise()
  //   .then(() => {
  //     callback(null, response(200, item));
  //   })
  //   .catch((err) => response(null, response(err.statusCode, err)));
};

//DELETE item by ID

module.exports.deleteItem = (event, context, callback) => {
  const id = event.pathParameters.id;
  const params = {
    Key: {
      id: id,
    },
    TableName: ducktable,
  };
  // return db
  //   .delete(params)
  //   .promise()
  //   .then((res) =>
  //     callback(null, response(200, { message: `${res} deleted successfully` }))
  //   )
  //   .catch((err) => callback(null, response(err.statusCode, err)));
};
