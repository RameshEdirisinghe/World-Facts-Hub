async function search() {
    let searchCountry = document.getElementById("Search").value;
    let card = document.getElementById("card");
   

    let res =await fetch("https://restcountries.com/v3.1/all");
    let items =await res.json();
    let cardbody="";
    items.forEach(element => {
        if (element.name.common == searchCountry) {
            cardbody= `<div class="card" style="width: 18rem;">
                <img src="${element.flags.png}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${element.name.official}</h5>
                        <p>Region - ${element.region}</p>
                        <p>Sub Region - ${element.subregion}</p>
                        <a href="${element.maps.googleMaps}" class="btn btn-primary">Google Maps</a>
                    </div>
            </div>`
        }
    });

    document.getElementById("card").innerHTML=cardbody;
}