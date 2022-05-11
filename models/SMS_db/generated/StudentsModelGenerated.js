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
 *  TO CUSTOMIZE StudentsModelGenerated.js PLEASE EDIT ../StudentsModel.js
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
      * Students
      */
    const studentsSchema = new mongoose.Schema({
      class: {
        type: "Number", 
        required: true
      },
      dateofbirth: {
        type: "Date"
      },
      fathersname: {
        type: "String"
      },
      firstname: {
        type: "String", 
        required: true
      },
      lastname: {
        type: "String", 
        required: true
      },
      middlename: {
        type: "String"
      },
      mothersname: {
        type: "String"
      },
      percentageinlastexam: {
        type: "Number"
      },
      rollno: {
        type: "Object", 
        required: true
      },
      // RELATIONS
      _Class: {
        type: Schema.ObjectId,
        ref: "Class"
      },
      _Exams: [{
        type: Schema.ObjectId,
        ref: "Exams"
      }],
      
      
      // EXTERNAL RELATIONS
      /*
      */
    });

    generatedModel.setModel(db.connection.model("Students", studentsSchema));

    return studentsSchema;
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
  * StudentsModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    const obj = new generatedModel.model(item);
    return await obj.save();
  },
  
  /**
  * StudentsModel.delete
  *   @description CRUD ACTION delete
  *   @param String firstname First Name
  *   @param ObjectId id Id
  *   @param String lastname Last Name
  *
  */
  async delete(id) {
    return await generatedModel.model.findByIdAndRemove(id);
  },
  
  /**
  * StudentsModel.findBy_Class
  *   @description CRUD ACTION findBy_Class
  *   @param Number class Class
  *
  */
  async findBy_Class(key) {
    return await generatedModel.model.find({ '_Class' : key});
  },
  
  /**
  * StudentsModel.findByclass
  *   @description CRUD ACTION findByclass
  *
  */
  async findByclass(key) {
    return await generatedModel.model.find({ 'class' : key});
  },
  
  /**
  * StudentsModel.findByfirstname
  *   @description CRUD ACTION findByfirstname
  *
  */
  async findByfirstname(key) {
    return await generatedModel.model.find({ 'firstname' : key});
  },
  
  /**
  * StudentsModel.findBylastname
  *   @description CRUD ACTION findBylastname
  *
  */
  async findBylastname(key) {
    return await generatedModel.model.find({ 'lastname' : key});
  },
  
  /**
  * StudentsModel.findByrollno
  *   @description CRUD ACTION findByrollno
  *
  */
  async findByrollno(key) {
    return await generatedModel.model.find({ 'rollno' : key});
  },
  
  /**
  * StudentsModel.get
  *   @description CRUD ACTION get
  *   @param String firstname First Name
  *   @param ObjectId id Id resource
  *   @param String lastname Last Name
  *
  */
  async get(id) {
    return await generatedModel.model.findOne({ _id : id });
  },
  
  /**
  * StudentsModel.get_Class
  *   @description CRUD ACTION get_Class
  *   @param Number class Class
  *
  */
  async get_Class(id) {
    return await generatedModel.model.findOne({ _id : id}).populate("_Class")
  },
  
  /**
  * StudentsModel.get_Exams
  *   @description CRUD ACTION get_Exams
  *   @param String examname Exam Name
  *
  */
  async get_Exams(id) {
    return await generatedModel.model.findOne({ _id : id}).populate("_Exams")
  },
  
  /**
  * StudentsModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() {
    return await generatedModel.model.find();
  },
  
  /**
  * StudentsModel.update
  *   @description CRUD ACTION update
  *   @param String firstname First Name
  *   @param ObjectId id Id
  *   @param String lastname Last Name
  *
  */
  async update(item) { 
    return await generatedModel.model.findOneAndUpdate({ _id: item._id }, item, {'new': true});
  },
  


};

export default generatedModel;
