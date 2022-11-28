const key = "7257c98dfe4ef291452548eaa37439d8";
const ciudad = "Barcelona";
const idioma = "sp, es";
const mesure = "units=metric";

const fetchData = async () => {
  try {
    const respuesta = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}&units=metric&lang=${idioma}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    console.log(respuesta);

    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      console.log(datos.weather);
      console.log(datos.main);
      console.log(datos.name);
      // let name = datos.name;
      let locationIcon = document.querySelector(".a");
      const { icon } = datos.weather[0];
      console.log(datos.weather[0]);
      console.log(icon);

      let a1;
      let temperatura = datos.main;
      console.log(temperatura.temp);
      let temp = temperatura.temp;
      console.log(temp);
      //let presion = temperatura.pressure;

      const result = datos.weather.forEach((a) => {
        console.log(a.description);
        console.log(a.icon);
        //Aquí en a1 iría una etiqueta con el ícono para mostrarlo por pantalla.
        a1 += `
		<div class="container w-25 " id="a"> 
      ${(locationIcon.innerHTML = `<img src="/imagenes/icons/${icon}.png" class = "w-25 m-1">`)} 
              				
		<h4 class="temperature w-75 fs-3 mt-3" >|&nbsp ${temp} C°</h4>
        
		</div>  `;
        //console.log(a1);
        //console.loga);
      });

      document.getElementById("a").innerHTML = a1;

      //console.log(result);
    } else if (respuesta.status === 401) {
      console.log("Error: " + respuesta.status);
    } else if (respuesta.status === 404) {
      console.log("Error, chiste no encontrada");
    } else {
      console.log("Error desconocido");
    }

    //como es un objeto accedo a los datos.
  } catch (error) {
    console.log(error);
  }
};
fetchData();
