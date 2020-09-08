'use strict';


function Notes(note){
   
    this.note = note;
}
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
            break;
      }
      if(flag){
          if(passedObj.payload.length == 0){
            console.log(`Type your note, please!`)

          }else{
           Notes.prototype.add(passedObj.payload);  
          }
        }
        
        
    }
    
    Notes.prototype.add = (note)=>{
        let obj = { ID : Math.ceil(Math.random() * 10) };
        obj.note = note;
        console.log(`Your note:`, obj,` \n Thank You.`);
        // return obj;
        return new Notes(obj).note;

}

module.exports = Notes;
