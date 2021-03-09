'use strict'



function randomAge(min, max) {
    return Math.random() * (max - min) + min;
  }

let studnt=[]
 let ageArr=['18','19','20','21','22','23','24']
function StudintInfo(name,emile,mobile,minAge,maxAge, tuition){
this.name=name,
this.emile=emile,
this.mobile=mobile,
this.minAge=minAge,
this.maxAge=maxAge,
this.Age=[]
studnt.push(this)

this.tuition=tuition
}
StudintInfo.prototype.randomAge = function(){
    for(let i=0; i <ageArr.length;i++){
        this.Age.push(Math.floor(roundomCookes(this.minAge,this.maxAge)))
       
   
      }
    }

    StudintInfo.prototype.renderstudint=function(){
        let div=document.getElementById('table')
        let table=document.createElement('table');
        div.appendChild(table)
      let thEL=document.createElement('th')
      table.appendChild(thEL)
      thEL.textContent=studnt
 
      
   
      
        }
      

      function handleSubmit(event){
        event.preventDefault();
        // console.log(event.target);
      
        let name = event.target;
        
        new StudintInfo(name, emile, mobile,);


      }
 
      const form = document.getElementById('studintform');
      form.addEventListener('submit', addSomeData);
     function addSomeData (event){
    
       event.preventDefault()
       let emile=event.target.stueml.value;
      
       let mobile=event.target.mobile.value;
       console.log(mobile)
            
    //    let tuition=event.target.tot.value;
    //    console.log(tuition)
   
      
       let newData= new StudintInfo(emile,mobile,);
    newData.renderstudint();
       console.log(newData)
     
      

     
    }

    


let mohammad=new StudintInfo('mohammad','mohamad@ltuc','mobile','18','24')

randomAge();
console.log(mohammad)

