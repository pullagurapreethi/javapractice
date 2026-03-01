function check(){
     let inventori="mobile,maptop,tablet,desktop,smartwatch";
     let valuez=document.getElementById("searche").value;
     document.writeln(valuez)

     if(inventori.includes(valuez)){
        document.writeln("found");
        let finialSize=valuez.lenghth;
        let initialSize=inventori.indexOf(valuez);
        let slicing=inventori.slice(initialSize,initialSize+finialSize);
        document.writeln(slicing);
     }
     else{
        document.writeln("not found");
     }
}