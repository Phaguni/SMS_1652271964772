import LessonsModelGenerated from "./generated/LessonsModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = LessonsModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await LessonsModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...LessonsModelGenerated,
  ...customModel
};
