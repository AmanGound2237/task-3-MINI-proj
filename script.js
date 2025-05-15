const data = {
  USA: {
    California: ["Los Angeles", "San Francisco", "San Diego"],
    Texas: ["Houston", "Dallas", "Austin"]
  },
  India: {
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    Karnataka: ["Bangalore", "Mysore", "Mangalore"]
  }
};

const countrySelect = document.getElementById("country");
const stateSelect = document.getElementById("state");
const citySelect = document.getElementById("city");

// Populate countries
function populateCountries() {
  for (let country in data) {
    let option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
  }
}

function populateStates() {
  stateSelect.innerHTML = "<option value=''>Select State</option>";
  citySelect.innerHTML = "<option value=''>Select City</option>";
  let selectedCountry = countrySelect.value;
  if (selectedCountry && data[selectedCountry]) {
    let states = Object.keys(data[selectedCountry]);
    states.forEach(state => {
      let option = document.createElement("option");
      option.value = state;
      option.textContent = state;
      stateSelect.appendChild(option);
    });
  }
}

function populateCities() {
  citySelect.innerHTML = "<option value=''>Select City</option>";
  let selectedCountry = countrySelect.value;
  let selectedState = stateSelect.value;
  if (selectedCountry && selectedState && data[selectedCountry][selectedState]) {
    data[selectedCountry][selectedState].forEach(city => {
      let option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      citySelect.appendChild(option);
    });
  }
}

countrySelect.addEventListener("change", populateStates);
stateSelect.addEventListener("change", populateCities);

// Initialize on load
populateCountries();
