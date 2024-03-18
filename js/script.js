
 function hello(){
  let w=document.getElementsByTagName("h2");
 
  for(i=0; i<w.length; i++){
  w[i].innerHTML="Live Life for the Moment";
  
  //style used//
  let r=Math.random()*255;
	r=Math.round(r);

    let g=Math.random()*255;
	g=Math.round(g);
	
	let b=Math.random()*255;
	b=Math.round(b);
	
	w[i].style.backgroundColor='rgb('+ r + ', ' + g + ', ' + b + ')';
	w[i].style.color="rgb(247,244,22)";
	w[i].style.fontSize="25px";
  }
 }