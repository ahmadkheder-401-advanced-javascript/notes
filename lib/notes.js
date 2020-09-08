'use strict';


class Notes{
    constructor(note){
        this.note = note;
    }
    execute(passedObj){
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
              if(!passedObj.payload){
                console.log(`Type your note, please!`)
    
              }else{
               this.add(passedObj.payload);  
              }
            }
             
    }
    add(note){
        let obj = { ID : Math.ceil(Math.random() * 10) };
        obj.note = note;
        console.log(`Your note:`, obj,` \n Thank You.`);
        return new Notes(obj).note;
    }
    
}
module.exports = Notes;
