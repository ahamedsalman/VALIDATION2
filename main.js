function validate(){
    var box1 = document.getElementById("name");
    var box2 = document.getElementById("name1");
    if(box1.value==""){
        document.getElementById("p1").innerHTML="*name will not be empty";
        box1.focus();
        box1.style.border="solid 2px red"
        return false;

        
    }
    if(box1.value.length<5){
        document.getElementById("p1").innerHTML="*name length is too SHORT";
        box1.focus();
        box1.style.border="solid 2px red"
        return false;
    }
    if(box1.value === 'salman'){
        Messages.push('password cannot be password')
        return false;
    }
    if(box2.value==""){
        document.getElementById("p2").innerHTML="*name will not be empty";
        box1.focus();
        box1.style.border="solid 2px red"
        return false;

        
    }

}