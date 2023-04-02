function formatDuration (seconds) {
    // Complete this function
    let second=0;
    let minutes=0;
    let hours=0;
    let days=0;
    let years=0;
    let year="";
    let day="";
    let hour="";
    let minute="";
    let sec="";
  
    
  
    // work out whats what, hour many years, days, hours, minutes and seconds
    
    if(seconds<60){second=seconds}
    if(seconds>59){
        minutes=Math.floor(seconds/60);
      second=seconds%60;
      }
    else{
      minutes=0;
      }
    if(minutes>59){
      hours=Math.floor(minutes/60);
      minutes=minutes%60;
      }
    else{
      hours=0;
      }
    if(hours>23){
      days=Math.floor(hours/24);
      hours=hours%24;
      }
    else{
      days=0;
      }
    if(days>364){
      years=Math.floor(days/365);
      days=days%365;
      }
    else{
      years=0;
      }  
    
    //sort out the plurals, or not as the case may be
    
    if (years==1) {year="year";} else {year="years";}
    if (days==1) {day="day";} else {day="days";}
    if (hours==1) {hour="hour";} else {hour="hours";}               
    if (minutes==1) {minute="minute";} else {minute="minutes";}
    if (second==1) {sec="second";} else {sec="seconds";}
  
  
    // return the easy ones        

    if (seconds==0) return ("now");      
    if (seconds<60) return (`${second} ${sec}`); 
  
    
    // declare array to build string from
  
     let arr=[]; 
  
    
    // build the array ready for punctuation
  
    if(second!=0) arr.push(`${second} ${sec}`);  
    
    if(minutes!=0) arr.unshift(`${minutes} ${minute}`);  
    if(hours!=0) {arr.unshift(`${hours} ${hour}`)}; 
      
    if(days!=0) {arr.unshift(`${days} ${day}`)};
    
    if(years!=0) {arr.unshift(`${years} ${year}`)}
  
  
  
  
  // splice in the punctuation
    
   switch (arr.length){
        case 1:
            break;

        case 2:
            arr.splice(arr.length-1,0," and ");
            break;

        case 3:
            arr.splice(arr.length-1,0," and ");
            arr.splice(arr.length-3,0,", ");
            break;
        
        case 4:
            arr.splice(arr.length-1,0," and ");
            arr.splice(arr.length-3,0,", ");
            arr.splice(arr.length-5,0,", ");
            break;

        case 5:
            arr.splice(arr.length-1,0," and ");
            arr.splice(arr.length-3,0,", ");
            arr.splice(arr.length-5,0,", ");
            arr.splice(arr.length-7,0,", ");
            break;

        default:
            return "What a terrible failure!";
    }
    
    
  
  
    // join the array back together into a string   
    
    let arr2=arr.join("");
  
    // and return completed string
    
     return (arr2);


  
  