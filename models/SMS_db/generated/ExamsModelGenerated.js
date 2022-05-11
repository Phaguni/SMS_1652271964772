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
 *  TO CUSTOMIZE ExamsModelGenerated.js PLEASE EDIT ../ExamsModel.js
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
      * Exams
      */
    const examsSchema = new mongoose.Schema({
      averageresult: {
        type: "Number"
      },
      class: {
        type: "Number", 
        required: true
      },
      date: {
        type: "Date"
      },
      done: {
        type: "Boolean"
      },
      examname: {
        type: "String", 
        required: true
      },
      invigilator1: {
        type: "String", 
        required: true
      },
      invigilator2: {
        type: "String", 
        required: true
      },
      maxmarks: {
        type: "Number"
      },
      roomno: {
        type: "Object", 
        required: true
      },
      session: {
        type: "Object", 
        required: true
      },
      subjectname: {
        type: "String", 
        required: true
      },
      timing: {
        type: "Object"
      },
      // RELATIONS
      _Class: [{
        type: Schema.ObjectId,
        ref: "Class"
      }],
      _Subjects: [{
        type: Schema.ObjectId,
        ref: "Subjects"
      }],
      _Teachers: [{
        type: Schema.ObjectId,
        ref: "Teachers"
      }],
      
      
      // EXTERNAL RELATIONS
      /*
      _Exams: [{
        type: Schema.ObjectId,
        ref: "Teachers"
      }],
      _Exams: [{
        type: Schema.ObjectId,
        ref: "Students"
      }],
      */
    });

    generatedModel.setModel(db.connection.model("Exams", examsSchema));

    return examsSchema;
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
  * ExamsModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    const obj = new generatedModel.model(item);
    return await obj.save();
  },
  
  /**
  * ExamsModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *   @param String subjectname Subject Name
  *
  */
  async delete(id) {
    return await generatedModel.model.findByIdAndRemove(id);
  },
  
  /**
  * ExamsModel.findBy_Class
  *   @description CRUD ACTION findBy_Class
  *   @param Objectid key Id of model to search for
  *
  */
  async findBy_Class(key) {
    return await generatedModel.model.find({ '_Class' : key});
  },
  
  /**
  * ExamsModel.findByclass
  *   @description CRUD ACTION findByclass
  *
  */
  async findByclass(key) {
    return await generatedModel.model.find({ 'class' : key});
  },
  
  /**
  * ExamsModel.findBydate
  *   @description CRUD ACTION findBydate
  *
  */
  async findBydate(key) {
    return await generatedModel.model.find({ 'date' : key});
  },
  
  /**
  * ExamsModel.findBydone
  *   @description CRUD ACTION findBydone
  *
  */
  async findBydone(key) {
    return await generatedModel.model.find({ 'done' : key});
  },
  
  /**
  * ExamsModel.findByexamname
  *   @description CRUD ACTION findByexamname
  *
  */
  async findByexamname(key) {
    return await generatedModel.model.find({ 'examname' : key});
  },
  
  /**
  * ExamsModel.findByroomno
  *   @description CRUD ACTION findByroomno
  *
  */
  async findByroomno(key) {
    return await generatedModel.model.find({ 'roomno' : key});
  },
  
  /**
  * ExamsModel.findBysession
  *   @description CRUD ACTION findBysession
  *
  */
  async findBysession(key) {
    return await generatedModel.model.find({ 'session' : key});
  },
  
  /**
  * ExamsModel.findBysubjectname
  *   @description CRUD ACTION findBysubjectname
  *
  */
  async findBysubjectname(key) {
    return await generatedModel.model.find({ 'subjectname' : key});
  },
  
  /**
  * ExamsModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *   @param String subjectname Subject Name
  *
  */
  async get(id) {
    return await generatedModel.model.findOne({ _id : id });
  },
  
  /**
  * ExamsModel.get_Teachers
  *   @description CRUD ACTION get_Teachers
  *
  */
  async get_Teachers(id) {
    return await generatedModel.model.findOne({ _id : id}).populate("_Teachers")
  },
  
  /**
  * ExamsModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() {
    return await generatedModel.model.find();
  },
  
  /**
  * ExamsModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *   @param String subjectname Subject Name
  *
  */
  async update(item) { 
    return await generatedModel.model.findOneAndUpdate({ _id: item._id }, item, {'new': true});
  },
  


};

export default generatedModel;
