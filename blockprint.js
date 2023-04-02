function blockPrint(input){
    if (input.trim()=="") return"";
  const string=input.trim().toUpperCase();    //trims off spaces and converts to uppercase
  const map=[];
  let output="";            // Uses the exact requirements given in expected output as shown below
  let pos=0;
  map[0]=" AAA  BBBB   CCC  DDDD  EEEEE FFFFF  GGG  H   H IIIII JJJJJ K   K L     M   M N   N  OOO  PPPP   QQQ  RRRR   SSS  TTTTT U   U V   V W   W X   X Y   Y ZZZZZ ";
  map[1]="A   A B   B C   C D   D E     F     G   G H   H   I       J K  K  L     MM MM NN  N O   O P   P Q   Q R   R S   S   T   U   U V   V W   W X   X Y   Y     Z ";
  map[2]="A   A B   B C     D   D E     F     G     H   H   I       J K K   L     M M M N   N O   O P   P Q   Q R   R S       T   U   U V   V W   W  X X   Y Y     Z  ";  
  map[3]="AAAAA BBBB  C     D   D EEEEE FFFFF G GGG HHHHH   I       J KK    L     M   M N N N O   O PPPP  Q   Q RRRR   SSS    T   U   U V   V W W W   X     Y     Z   ";
  map[4]="A   A B   B C     D   D E     F     G   G H   H   I       J K K   L     M   M N   N O   O P     Q Q Q R R       S   T   U   U V   V W W W  X X    Y    Z    ";  
  map[5]="A   A B   B C   C D   D E     F     G   G H   H   I       J K  K  L     M   M N  NN O   O P     Q  QQ R  R  S   S   T   U   U  V V  W W W X   X   Y   Z     ";  
  map[6]="A   A BBBB   CCC  DDDD  EEEEE F      GGG  H   H IIIII JJJJ  K   K LLLLL M   M N   N  OOO  P      QQQQ R   R  SSS    T    UUU    V    W W  X   X   Y   ZZZZZ ";
  
   
  
  
   
    for (let i=0;i<7;i++){
    for(let j=0;j<string.length-1;j++){
      pos=(string.charCodeAt(j)-65)*6;    // works out which bit to add    
      if (pos=>0){                        // and if its not a space
       output+=(map[i].slice(pos,pos+6)); // adds it
        }                                      //just do up till the last char because of test requirement for no trailing spaces
     
      if((pos/6)+65===32) {                // or if it is a space
          output+="      ";                // adds a space of 6 "spaces"
        }
             
    }
      pos=(string.charCodeAt((string.length)-1)-65)*6;        // finds the last char
      output+=(map[i].slice(pos,pos+6)).trimEnd();        // adds the bit with its "end" trimmed off as per the test requirements
     
    if(i<6) output+="\n";   //this to ensure no added carriage returns are added at the end as per test requirements
  }
   
   
   console.log(output);
    return output;
   
  }
blockPrint("hello wuuuurld");  
