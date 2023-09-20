  
  async function buscarTempoCidades() {
  const apiKey = "GThGwLsNm6w2ecGnfkGT6lm7Uf8YmWkE";
   let cidades = document.getElementById("BuscarCidade").value;

   let dados = await fetch(`http://dataservice.accuweather.com/locations/v1/search?q=${cidades}&apikey=${apiKey}`)

   let cidade = await dados.json()
   
   document.getElementById("cidadePesquisa").innerHTML = cidade[0].LocalizedName

   let chave = cidade[0].Key

   let dados02 = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${chave}?apikey=${apiKey}`)

   let clima = await dados02.json()
   
   document.getElementById("climaTempo").innerHTML = clima[0].Temperature.Metric.Value + "°C"

   document.getElementById("tempo").innerHTML = clima[0].WeatherText

   document.getElementById("diaCidade").innerHTML = clima[0].LocalObservationDateTime.slice(0,clima[0].LocalObservationDateTime.length - 15).split('-').reverse().join('/');

   console.log(clima)
  }












//   const dados = await fetch(
//     `http://dataservice.accuweather.com/locations/v1/search?q=${Buscarcidades}&apikey=DTdgX7Zbwd7BHQJSXLFW3oQQdVAvVADr`
//   );

//   console.log(dados);
//   console.log(Buscarcidades);

//   const cidade = await dados.json();
//   console.log(cidade);

// const chave = cidade[0].key;
// document.getElementById("BuscarCidade").innerHTML = cidade[0].localizedName;

// const dados2 = await fetch(
//   `http://dataservice.accuweather.com/locations/v1/search?q=${chave}&apikey=DTdgX7Zbwd7BHQJSXLFW3oQQdVAvVADr`
// );
// const clima = await dados2.json();

// document.getElementById("graus").innerHTML =
//   clima[0].temperature.Metric.Value + "°C";

// document.getElementById("tempo").innerHTML = clima[0].weatherText;

// document.getElementById("data").innerHTML =
//   clima[0].LocalObservationDateTime.slice(
//     0,
//     clima[0].LocalObservationDateTime.length - 15
//   )
//     .split("-")
//     .reverse()
//     .join("/");
//   }