function updateCountryView(){
    var ddCountry = document.getElementById("ddTravel");
    var divCountry = document.getElementById("divCountry");

    if(ddCountry.value=="Yes")
    {
        divCountry.classList.remove("invisible");
    }
    else{
        divCountry.classList.add("invisible");
    }

}