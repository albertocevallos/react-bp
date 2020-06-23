const {
  Stitch,
  AnonymousCredential,
  RemoteMongoClient,
} = require("mongodb-stitch-browser-sdk");

const appName = "cronimx-xsndd";

// Initialize the App Client
const client = Stitch.initializeDefaultAppClient(appName);

const stitchClient = Stitch.defaultAppClient;

stitchClient.auth
  .loginWithCredential(new AnonymousCredential())
  .then((user) => {
    console.log(`Logged in as anonymous user with id: ${user.id}`);
  })
  .catch(console.error);

// Get a client of the Remote Mongo Service for database access
const mongoClient = stitchClient.getServiceClient(
  RemoteMongoClient.factory,
  "mongodb-atlas"
);

// Get a reference to the blog database
const db = mongoClient.db("beta");

const displayPosts = function () {
  return db.collection("posts").find({}, { limit: 50 }).toArray();
  // .then((posts) => {
  //   const postList = posts.map((post) => `<div>${post.comment}</div>`);
  //   document.getElementById("comments").innerHTML = html;
  // });
};

module.exports = { appName, client, displayPosts };
