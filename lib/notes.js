'use strict';

/**
 * 
 * @param {*} note 
 */
function Notes(note){
   
    this.note = note;
}
/**
 * 
 * @param {*} passedObj 
 */
Notes.prototype.execute = (passedObj)=>{
    let flag;
    switch(passedObj.action) {
        case 'a':
            flag = true;
            break;
          
        case 'add':
            flag = true;
            break;
          
        default:
             flag = false;
             console.error(Error,"Type a valid command or check whether your note is empty ")
        
      }
      if(flag){
          if(!passedObj.payload.length ){
             console.error(Error,"Type your note, please!")
          }else{
           Notes.prototype.add(passedObj.payload);  
          }
        }
        
        
    }
    /**
     * 
     * @param {*} note 
     */
    Notes.prototype.add = (note)=>{
        let obj = { ID : Math.ceil(Math.random() * 10) };
        obj.note = note;
        console.log(`Your note:`, obj,` \n Thank You.`);
        // return obj;
        return new Notes(obj).note;

}

module.exports = Notes;
