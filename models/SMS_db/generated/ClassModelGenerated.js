/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE ClassModelGenerated.js PLEASE EDIT ../ClassModel.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
// Database
import Database from "../../../classes/Database_SMS_db";
import mongoose, { Schema } from "mongoose";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {
  /**
   * Init  schema
   */
  init() {
    const db = Database.getConnection();

    /**
      * Class
      */
    const classSchema = new mongoose.Schema({
      class: {
        type: "Number", 
        required: true
      },
      classteacher: {
        type: "String", 
        required: true
      },
      noofstudents: {
        type: "Number", 
        required: true
      },
      noofsubjects: {
        type: "Number", 
        required: true
      },
      roomno: {
        type: "Object", 
        required: true
      },
      // RELATIONS
      _Teachers: [{
        type: Schema.ObjectId,
        ref: "Teachers"
      }],
      
      
      // EXTERNAL RELATIONS
      /*
      _Class: [{
        type: Schema.ObjectId,
        ref: "Subjects"
      }],
      _Class: [{
        type: Schema.ObjectId,
        ref: "Test"
      }],
      _Class: [{
        type: Schema.ObjectId,
        ref: "Exams"
      }],
      _Class: {
        type: Schema.ObjectId,
        ref: "Teachers"
      },
      _Class: {
        type: Schema.ObjectId,
        ref: "Students"
      },
      */
    });

    generatedModel.setModel(db.connection.model("Class", classSchema));

    return classSchema;
  },

  /**
   * Set Model
   */
  setModel: model => {
    generatedModel.model = model;
  },

  /**
   * Get model
   */
  getModel: () => {
    return generatedModel.model;
  },

  // Start queries
    

  // CRUD METHODS


  /**
  * ClassModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    const obj = new generatedModel.model(item);
    return await obj.save();
  },
  
  /**
  * ClassModel.delete
  *   @description CRUD ACTION delete
  *   @param Number class Class
  *   @param ObjectId id Id
  *
  */
  async delete(id) {
    return await generatedModel.model.findByIdAndRemove(id);
  },
  
  /**
  * ClassModel.findBy_Teachers
  *   @description CRUD ACTION findBy_Teachers
  *   @param String firstname First Name
  *   @param String lastname Last Name
  *
  */
  async findBy_Teachers(key) {
    return await generatedModel.model.find({ '_Teachers' : key});
  },
  
  /**
  * ClassModel.findByclass
  *   @description CRUD ACTION findByclass
  *
  */
  async findByclass(key) {
    return await generatedModel.model.find({ 'class' : key});
  },
  
  /**
  * ClassModel.findByclassteacher
  *   @description CRUD ACTION findByclassteacher
  *   @param String firstname First Name
  *   @param String lastname Last Name
  *
  */
  async findByclassteacher(key) {
    return await generatedModel.model.find({ 'classteacher' : key});
  },
  
  /**
  * ClassModel.get
  *   @description CRUD ACTION get
  *   @param Number class Class
  *   @param ObjectId id Id resource
  *
  */
  async get(id) {
    return await generatedModel.model.findOne({ _id : id });
  },
  
  /**
  * ClassModel.get_Teachers
  *   @description CRUD ACTION get_Teachers
  *   @param String firstname First Name
  *   @param String lastname Last Name
  *
  */
  async get_Teachers(id) {
    return await generatedModel.model.findOne({ _id : id}).populate("_Teachers")
  },
  
  /**
  * ClassModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() {
    return await generatedModel.model.find();
  },
  
  /**
  * ClassModel.update
  *   @description CRUD ACTION update
  *   @param Number class Class
  *   @param ObjectId id Id
  *
  */
  async update(item) { 
    return await generatedModel.model.findOneAndUpdate({ _id: item._id }, item, {'new': true});
  },
  


};

export default generatedModel;
