loadItems();

async function loadItems() {

  let res = await fetch("https://restcountries.com/v3.1/all");
  let items = await res.json();
  let body = "";
  items.forEach(element => {
    console.log(element);
    body += `
              <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <div class="card shadow-sm h-100">
                        <img src="${element.flags.png}" class="card-img-top" alt="Country Flag">
                        <div class="card-body">
                            <h3 class="card-text fw-bold">${element.name.common}</h3>
                            <div class="d-flex justify-content-between align-items-center">
                                <a href="${element.maps.googleMaps}" class="btn btn-primary">Google Maps</a>
                                <small class="text-muted">9 mins</small>
                            </div>
                        </div>
                    </div>
                </div>
        `;
  });

  console.log(body);

  document.getElementById("card").innerHTML = body;

}


async function search(){
  let searchCountry = document.getElementById("Search").value;
  let card = document.getElementById("card");


  let res = await fetch("https://restcountries.com/v3.1/all");
  let items = await res.json();
  let cardbody = "";
  items.forEach(element => {
    if (element.name.common == searchCountry) {
      cardbody = `<div class="card" style="width:800px;">
                <img src="${element.flags.png}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h1 class="card-title">${element.name.official}</h1>
                    </div>
                    <div class="row  text-start">
                    <div class="col">
                    <ul>
                      <li>Region - ${element.region}</li>
                      <li>Sub Region - ${element.subregion}</li>
                      <li>Time Zone -${element.timezones}</li>
                    </ul>
                    
                    </div>

                    <div class="col">
                    <ul>
                      <li>Capital- ${element.capital}</li>
                      <li>Population - ${element.population}</li>
                      <li>Area - ${element.area} km²</li>
                    </ul>
                    
                    </div>
                    
                    </div>
                    <div class="m-4">
                    <a href="${element.maps.googleMaps}" class="btn btn-primary">Google Map</a>
                    </div>
            </div>`
    }
  });

  document.getElementById("card").innerHTML = cardbody;
}