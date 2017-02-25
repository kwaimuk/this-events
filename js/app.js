//Secret Menu Challenge
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/
var mel =document.getElementsByClassName("name");
/*console.log(mel.length);
*/
for(i=0;i<mel.length;i++){
  mel[i].addEventListener("click",showMe);
  
}

function showMe(){
  var mel=this.querySelectorAll(".menu")[0];


  if (mel.style.display==="block"){
mel.style.display="none";
}else{
	mel.style.display="block";
	}
  
}
/*   mel.style.color="blue";*/

 


/*
name

for (i;.length;i++){



}
if 
else

*/