let div = document.querySelector(".country");

fetch("https://restcountries.com/v3.1/name/azerbaijan")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      console.log(data);
      div.innerHTML = `
        <img id="flag" src="${element.flags.png}">
        symbol:<img id="gerb" src="${element.coatOfArms.png}">
      `;
    });
  });

