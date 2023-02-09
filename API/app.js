const url = "https://api.coingecko.com/api/v3/coins/";

async function getapi() {
 var tbody = document.getElementById("tbody");
const response = await fetch(url);
var data = await response.json();



    hideloader();
    showdata();
    data.forEach(function (value, i){
    let p1h = "text-danger"; 
    let p_24h = "text-danger";
    let p_7D = "text-danger";
   if(parseFloat(value.market_data.price_change_percentage_1h_in_currency.usd) > 0)
   {
         p1h = "text-success";
   }
   if(parseFloat(value.market_data.price_change_percentage_24h_in_currency.usd) > 0)
   {
         p_24h = "text-success";
   }
   if(parseFloat(value.market_data.price_change_percentage_7d_in_currency.usd) > 0)
   {
        p_7D = "text-success";
   }
    tbody.innerHTML += ` <tr>
                
               <td class="align-middle"><i class="bi bi-star"></i> &nbsp; ${ i  + 1}</td>
               <td class="align-middle"><img src=" ${value.image.thumb}">
               <a href="second.html?id=${value.id}"><b>${value.name}</b></a>&nbsp;<sup>${value.symbol}</sup></td>
               <td class=" align-middle" class="price" > &#36;${value.market_data.current_price.usd}</td>
               <td class="align-middle ${p1h}">${value.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2)}&#37</td>
               <td class="align-middle ${p_24h} ">${value.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}&#37</td>
               <td class="align-middle ${p_7D}">${value.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2)}&#37</td>
               <td class="align-middle"> &#36;${value.market_data.total_volume.usd}</td>
               <td class="align-middle"> &#36;${value.market_data.market_cap.usd}</td>
              </tr> `
     });
    }
    
  

   function hideloader() {
                document.getElementById("buffer").style.display = "none";
    }
    function showdata() {
                document.getElementById("data").style.display = "block";
    }

    getapi();