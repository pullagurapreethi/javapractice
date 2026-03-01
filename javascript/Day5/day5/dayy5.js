function test(){
  //  var paragraph=document.getElementById("para").innerHTML;
    //paragraph.innerText="this is mine";
    //document.writeln(par);
    //let paragraph=document.createElement("h1");

    paragraph.textContent="this is mine";

    document.getElementsByClassName("example")[0].appendChild(paragraph)

    let header =document.createElement("h2");

    header.textContent="this is mine";

    document.getElementsByClassName("example")[0].appendChild(header)

}