const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected successfully");
    console.log("Database name:", mongoose.connection.db.databaseName);

    const fetchdata = await mongoose.connection.db
      .collection("food_item")
      .find({})
      .toArray();

     //  console.log("Food data:", fetchdata);

            global.food_item = fetchdata;
          //  console.log(global.food_item)

             const foodcategory = await mongoose.connection.db
          .collection("categoryfood")
          .find({})
          .toArray();
          //console.log(foodcategory) 

          global.categoryfood=foodcategory
          console.log(global.categoryfood) 

  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};

module.exports = mongodb;   