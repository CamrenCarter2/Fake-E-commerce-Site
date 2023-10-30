let prev = 0;

function clickedSize(num) {

    var elements = document.getElementsByClassName("size-box");
    elements[num - 1].style.backgroundColor = "#a972cb"; 
    if(prev != 0){
        elements[prev - 1].style.backgroundColor = "grey";
    }
    if(prev == num){
        elements[num - 1].style.backgroundColor = "#a972cb"; 
    }
    
    prev = num;
}

function alertFake() {
    window.alert("Sorry these shoes are fake and are not for sell");
}