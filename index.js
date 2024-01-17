function showNames(items) {
  const container = document.querySelector(".results");
  const template = document.querySelector("#items-template");
  for (const i of items) {
    const titleEl = template.content.querySelector(".card-title");
    titleEl.textContent = i.fields.titulo;

    const descriptionEl = template.content.querySelector(".card-description");
    descriptionEl.textContent = i.fields.descripcion;

    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
  }
}

function main() {
  fetch(
    "https://preview.contentful.com/spaces/rxsmar2qufs3/environments/master/entries?access_token=TAiIi_2qJ1DmrC4Q4WX--VTOO1gmd2HnS6nbawoOVSY"
  )
    .then((response) => response.json())
    .then((data) => showNames(data.items));

  fetch(
    "https://preview.contentful.com/spaces/rxsmar2qufs3/environments/master/entries?access_token=TAiIi_2qJ1DmrC4Q4WX--VTOO1gmd2HnS6nbawoOVSY"
  )
    .then((response) => response.json())
    .then((data) => showNames(data.items));

  fetch(
    "https://preview.contentful.com/spaces/rxsmar2qufs3/environments/master/entries?access_token=TAiIi_2qJ1DmrC4Q4WX--VTOO1gmd2HnS6nbawoOVSY"
  )
    .then((response) => response.json())
    .then((data) => showNames(data.items));
}

main();
