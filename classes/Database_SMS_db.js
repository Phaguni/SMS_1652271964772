// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import ClassModel from "../models/SMS_db/ClassModel";
import ExamsModel from "../models/SMS_db/ExamsModel";
import LessonsModel from "../models/SMS_db/LessonsModel";
import StudentsModel from "../models/SMS_db/StudentsModel";
import SubjectsModel from "../models/SMS_db/SubjectsModel";
import TeachersModel from "../models/SMS_db/TeachersModel";
import TestModel from "../models/SMS_db/TestModel";
import UserModel from "../models/SMS_db/UserModel";

// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.SMS_db_dbUrl);

    // Start Init Models

		ClassModel.init();
		ExamsModel.init();
		LessonsModel.init();
		StudentsModel.init();
		SubjectsModel.init();
		TeachersModel.init();
		TestModel.init();
		UserModel.init();
 // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_SMS_db = await mongoose.connect(
        "mongodb://" + properties.SMS_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_SMS_db;
  }
}

export default new Database();
