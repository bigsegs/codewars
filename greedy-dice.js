function score( dice ) {
  // Fill me in!
  // 5 nums, in array
  // use regex.test
  // start at lowest, remove singles if triple scored
  let points=0;
  let str=dice.join("");
  let arr=[]
  
  arr=(str.match(/5/g));
    if(arr!=null)points+=arr.length*50;
    arr=[];
    
    arr=(str.match(/1/g));
    if(arr!=null)points+=arr.length*100;
    console.log(arr,points);
    arr=[];
    
    arr=(str.match(/2/g));
    if(arr!=null && arr.length>2)points+=200;
    console.log(arr,points);
    arr=[];
    
    arr=(str.match(/3/g));
    if(arr!=null && arr.length>2)points+=300;
    console.log(arr,points);
    arr=[];
    
    arr=(str.match(/4/g));
    if(arr!=null && arr.length>2)points+=400;
    console.log(arr,points);
    arr=[];
    
    arr=(str.match(/5/g));
    if(arr!=null && arr.length>2)points+=350;
    console.log(arr,points);
    arr=[];
    
    arr=(str.match(/6/g));
    if(arr!=null && arr.length>2)points+=600;
    console.log(arr,points);
    arr=[];
    
    arr=(str.match(/1/g));
    if(arr!=null && arr.length>2)points+=700;
    
    console.log(arr);
   console.log(points);
    return points;
  }