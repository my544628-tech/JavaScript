// Data source: country -> details
const countryData = {
  somalia: {
    capital: "Mogadishu",
    population: "17.6 million",
    continent: "Africa",
  },
  kenya: {
    capital: "Nairobi",
    population: "55.1 million",
    continent: "Africa",
  },
  egypt: { capital: "Cairo", population: "112.7 million", continent: "Africa" },
  japan: { capital: "Tokyo", population: "123.3 million", continent: "Asia" },
  brazil: {
    capital: "Brasília",
    population: "216.4 million",
    continent: "South America",
  },
  canada: {
    capital: "Ottawa",
    population: "39.7 million",
    continent: "North America",
  },
};

function showCountryInfo() {
  const select = document.getElementById("countrySelect");
  const infoBox = document.getElementById("infoBox");
  const selected = select.value;

  if (selected && countryData[selected]) {
    const data = countryData[selected];
    document.getElementById("capital").textContent = data.capital;
    document.getElementById("population").textContent = data.population;
    document.getElementById("continent").textContent = data.continent;
    infoBox.classList.add("visible");
  } else {
    infoBox.classList.remove("visible");
  }
}
