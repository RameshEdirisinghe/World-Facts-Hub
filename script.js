loadItems();

async function loadItems() {
    
    let res = await fetch("https://restcountries.com/v3.1/all");
    let items = await res.json();
    let body = "";
    items.forEach(element => {
        console.log(element);
        body+=`
            <div class="col m-5">
                <div class="card shadow-sm">
                  <img src=${element.flags.png} alt="">
                  <div class="card-body">
                    <h3 class="card-text fw-bold">${element.name.common}</h3>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small class="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
        `;        
    });

    console.log(body);

    document.getElementById("card").innerHTML=body;
    
}




















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