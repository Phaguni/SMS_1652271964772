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
 *  TO CUSTOMIZE TestControllerGenerated.js PLEASE EDIT ../TestController.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
import Properties from "../../../properties";
import TestModel from "../../../models/SMS_db/TestModel";
import ErrorManager from "../../../classes/ErrorManager";
import { authorize } from "../../../security/SecurityManager";
import TestController from "../TestController";

const generatedControllers = {
  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/test`;
    router.post(baseUrl + "", authorize([]), TestController.create);
    router.delete(baseUrl + "/:id", authorize([]), TestController.delete);
    router.get(baseUrl + "/findBy_Class/:key", authorize([]), TestController.findBy_Class);
    router.get(baseUrl + "/findBy_Lessons/:key", authorize([]), TestController.findBy_Lessons);
    router.get(baseUrl + "/findBy_Subjects/:key", authorize([]), TestController.findBy_Subjects);
    router.get(baseUrl + "/findBy_Teachers/:key", authorize([]), TestController.findBy_Teachers);
    router.get(baseUrl + "/findByclass/:key", authorize([]), TestController.findByclass);
    router.get(baseUrl + "/findBydate/:key", authorize([]), TestController.findBydate);
    router.get(baseUrl + "/findBylessonno/:key", authorize([]), TestController.findBylessonno);
    router.get(baseUrl + "/findBysubjectname/:key", authorize([]), TestController.findBysubjectname);
    router.get(baseUrl + "/findByteacher/:key", authorize([]), TestController.findByteacher);
    router.get(baseUrl + "/:id", authorize([]), TestController.get);
    router.get(baseUrl + "/:id/get_Class", authorize([]), TestController.get_Class);
    router.get(baseUrl + "/:id/get_Lessons", authorize([]), TestController.get_Lessons);
    router.get(baseUrl + "/:id/get_Subjects", authorize([]), TestController.get_Subjects);
    router.get(baseUrl + "/:id/get_Teachers", authorize([]), TestController.get_Teachers);
    router.get(baseUrl + "", authorize([]), TestController.list);
    router.post(baseUrl + "/:id", authorize([]), TestController.update);
  },


  // CRUD METHODS


  /**
  * TestModel.create
  *   @description CRUD ACTION create
  *
  */
  create: async (req, res) => {
    try {
      const result = await TestModel.create(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TestModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  delete: async (req, res) => {
    try {
      const result = await TestModel.delete(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TestModel.findBy_Class
  *   @description CRUD ACTION findBy_Class
  *   @param Objectid key Id of model to search for
  *
  */
  findBy_Class: async (req, res) => {
    try {
      const result = await TestModel.findBy_Class(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TestModel.findBy_Lessons
  *   @description CRUD ACTION findBy_Lessons
  *   @param Objectid key Id of model to search for
  *
  */
  findBy_Lessons: async (req, res) => {
    try {
      const result = await TestModel.findBy_Lessons(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TestModel.findBy_Subjects
  *   @description CRUD ACTION findBy_Subjects
  *   @param String name Subject Name
  *
  */
  findBy_Subjects: async (req, res) => {
    try {
      const result = await TestModel.findBy_Subjects(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TestModel.findBy_Teachers
  *   @description CRUD ACTION findBy_Teachers
  *   @param String firstname First Name
  *   @param String lastname Last Name
  *
  */
  findBy_Teachers: async (req, res) => {
    try {
      const result = await TestModel.findBy_Teachers(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TestModel.findByclass
  *   @description CRUD ACTION findByclass
  *
  */
  findByclass: async (req, res) => {
    try {
      const result = await TestModel.findByclass(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TestModel.findBydate
  *   @description CRUD ACTION findBydate
  *
  */
  findBydate: async (req, res) => {
    try {
      const result = await TestModel.findBydate(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TestModel.findBylessonno
  *   @description CRUD ACTION findBylessonno
  *
  */
  findBylessonno: async (req, res) => {
    try {
      const result = await TestModel.findBylessonno(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TestModel.findBysubjectname
  *   @description CRUD ACTION findBysubjectname
  *
  */
  findBysubjectname: async (req, res) => {
    try {
      const result = await TestModel.findBysubjectname(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TestModel.findByteacher
  *   @description CRUD ACTION findByteacher
  *
  */
  findByteacher: async (req, res) => {
    try {
      const result = await TestModel.findByteacher(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TestModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  get: async (req, res) => {
    try {
      const result = await TestModel.get(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TestModel.get_Class
  *   @description CRUD ACTION get_Class
  *   @param Number class Class Number
  *
  */
  get_Class: async (req, res) => {
    try {
      const result = await TestModel.get_Class(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TestModel.get_Lessons
  *   @description CRUD ACTION get_Lessons
  *   @param Number lessonno Lesson Number
  *
  */
  get_Lessons: async (req, res) => {
    try {
      const result = await TestModel.get_Lessons(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TestModel.get_Subjects
  *   @description CRUD ACTION get_Subjects
  *   @param String name Subject Name
  *
  */
  get_Subjects: async (req, res) => {
    try {
      const result = await TestModel.get_Subjects(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TestModel.get_Teachers
  *   @description CRUD ACTION get_Teachers
  *   @param String firstname First Name
  *   @param String lastname Last Name
  *
  */
  get_Teachers: async (req, res) => {
    try {
      const result = await TestModel.get_Teachers(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TestModel.list
  *   @description CRUD ACTION list
  *
  */
  list: async (req, res) => {
    try {
      const result = await TestModel.list();
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  /**
  * TestModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *   @param Number lessonno Lesson Number
  *
  */
  update: async (req, res) => {
    try {
      const result = await TestModel.update(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  // Custom APIs

};

export default generatedControllers;