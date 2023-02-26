const dynamic = document.getElementById("chart");

if (dynamic) {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((result) => {
        dynamic.innerHTML += `
              <figure class="day" id="${result.day}" onClick="setActive(${
          result.day
        })">
              <div class="hover_display">${result.amount}</div>
              <div

                class="bar"
                style="height: ${(result.amount / 100) * 200}px"
                ></div>
              <p class="label">${result.day}</p>
            </figure>`;
      });
    })
    .catch((error) => console.log(error));
}

function setActive(day) {
  const elements = document.getElementsByClassName("day");
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (element.classList.contains("active")) {
      element.classList.remove("active");
    }
    day.classList.add("active");
  }
}
