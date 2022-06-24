var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String },
  username: String,
  email: { type: String, unique: true }, //Unique Index
  address: {
    city: String,
    state: String,
    country: String,
    pin: String,
  },
});

userSchema.index({ "address.state": 1, "address.country": 1 }); //Compound Index

userSchema.index({ favourites: 1 }); //Multikey Indexes

userSchema.index({ username: 1 }, { unique: true }); //Unique index property

module.exports = mongoose.model("User", userSchema);

var articleSchema = new Schema({
  title: { type: String },
  description: { type: String },
  tags: [String],
});

articleSchema.index({ tags: 1 }); //Multikey Indexes

articleSchema.index({ title: "text" }); //Text Indexing

articleSchema.index({ title: "text", description: "text" }); //Compound Text Indexing

module.exports = mongoose.model("Article", articleSchema);