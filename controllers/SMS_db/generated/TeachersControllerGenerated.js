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
 *  TO CUSTOMIZE TeachersControllerGenerated.js PLEASE EDIT ../TeachersController.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
import Properties from "../../../properties";
import TeachersModel from "../../../models/SMS_db/TeachersModel";
import ErrorManager from "../../../classes/ErrorManager";
import { authorize } from "../../../security/SecurityManager";
import TeachersController from "../TeachersController";

const generatedControllers = {
  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/teacher`;
    router.post(baseUrl + "", authorize([]), TeachersController.create);
    router.delete(baseUrl + "/:id", authorize([]), TeachersController.delete);
    router.get(baseUrl + "/findBy_Class/:key", authorize([]), TeachersController.findBy_Class);
    router.get(baseUrl + "/findBy_Exams/:key", authorize([]), TeachersController.findBy_Exams);
    router.get(baseUrl + "/findByclass/:key", authorize([]), TeachersController.findByclass);
    router.get(baseUrl + "/findByfirstname/:key", authorize([]), TeachersController.findByfirstname);
    router.get(baseUrl + "/findBylastname/:key", authorize([]), TeachersController.findBylastname);
    router.get(baseUrl + "/:id", authorize([]), TeachersController.get);
    router.get(baseUrl + "/:id/get_Class", authorize([]), TeachersController.get_Class);
    router.get(baseUrl + "/:id/get_Exams", authorize([]), TeachersController.get_Exams);
    router.get(baseUrl + "", authorize([]), TeachersController.list);
    router.post(baseUrl + "/:id", authorize([]), TeachersController.update);
  },


  // CRUD METHODS


  /**
  * TeachersModel.create
  *   @description CRUD ACTION create
  *
  */
  create: async (req, res) => {
    try {
      const result = await TeachersModel.create(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TeachersModel.delete
  *   @description CRUD ACTION delete
  *   @param String firstname First Name
  *   @param ObjectId id Id
  *   @param String lastname Last Name
  *
  */
  delete: async (req, res) => {
    try {
      const result = await TeachersModel.delete(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TeachersModel.findBy_Class
  *   @description CRUD ACTION findBy_Class
  *   @param Number class Class
  *
  */
  findBy_Class: async (req, res) => {
    try {
      const result = await TeachersModel.findBy_Class(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TeachersModel.findBy_Exams
  *   @description CRUD ACTION findBy_Exams
  *   @param String examname Exam Name
  *
  */
  findBy_Exams: async (req, res) => {
    try {
      const result = await TeachersModel.findBy_Exams(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TeachersModel.findByclass
  *   @description CRUD ACTION findByclass
  *
  */
  findByclass: async (req, res) => {
    try {
      const result = await TeachersModel.findByclass(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TeachersModel.findByfirstname
  *   @description CRUD ACTION findByfirstname
  *
  */
  findByfirstname: async (req, res) => {
    try {
      const result = await TeachersModel.findByfirstname(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TeachersModel.findBylastname
  *   @description CRUD ACTION findBylastname
  *
  */
  findBylastname: async (req, res) => {
    try {
      const result = await TeachersModel.findBylastname(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TeachersModel.get
  *   @description CRUD ACTION get
  *   @param String firstname First Name
  *   @param ObjectId id Id resource
  *   @param String lastname Last Name
  *
  */
  get: async (req, res) => {
    try {
      const result = await TeachersModel.get(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TeachersModel.get_Class
  *   @description CRUD ACTION get_Class
  *   @param Number class Class
  *
  */
  get_Class: async (req, res) => {
    try {
      const result = await TeachersModel.get_Class(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TeachersModel.get_Exams
  *   @description CRUD ACTION get_Exams
  *   @param String examname Exam Name
  *
  */
  get_Exams: async (req, res) => {
    try {
      const result = await TeachersModel.get_Exams(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TeachersModel.list
  *   @description CRUD ACTION list
  *
  */
  list: async (req, res) => {
    try {
      const result = await TeachersModel.list();
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  /**
  * TeachersModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  update: async (req, res) => {
    try {
      const result = await TeachersModel.update(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  // Custom APIs

};

export default generatedControllers;
