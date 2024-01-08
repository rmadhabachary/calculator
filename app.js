let string=''
const btn=document.querySelectorAll('.btn');


Array.from(btn).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        
        
        if(e.target.value == '='){
            string=eval(string)
            document.querySelector('input').value=string
            
        }else{
            string=string+e.target.value;
            document.querySelector('input').value=string
        }
        
        
        
        
        console.log("button clicked!");
    });
});