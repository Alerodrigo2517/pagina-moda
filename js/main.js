const eraContent = {
  egipto: ["Egipto","Indumentaria, ornamentos, maquillaje y materiales en una de las culturas más influyentes de la Antigüedad."],
  grecia: ["Grecia","El drapeado, las proporciones y la relación entre vestimenta, cuerpo y vida cotidiana."],
  roma: ["Roma","Prendas, distinciones sociales y símbolos de poder en el mundo romano."],
  bizantino: ["Bizantino","Riqueza textil, color y jerarquía en la indumentaria del Imperio bizantino."],
  "edad-media": ["Edad Media","Los estilos románico y gótico, sus siluetas, materiales y expresiones visuales."],
  renacimiento: ["Renacimiento","La moda en Italia, Francia, Inglaterra y España durante el Renacimiento."],
  barroco: ["Barroco","Volumen, ornamentación y teatralidad en la vestimenta y los accesorios."],
  rococo: ["Rococó","La delicadeza ornamental, las texturas y las siluetas características del período."],
  neoclasicismo: ["Neoclasicismo","El regreso a los ideales clásicos y su influencia en la indumentaria."],
  romanticismo: ["Romanticismo","La expresión individual, las siluetas y los detalles de la moda romántica."]
};

const dialog = document.querySelector("#era-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogDescription = document.querySelector("#dialog-description");

document.querySelectorAll("[data-era]").forEach((button) => {
  button.addEventListener("click", () => {
    const content = eraContent[button.dataset.era];
    if (!content) return;
    dialogTitle.textContent = content[0];
    dialogDescription.textContent = content[1];
    dialog.showModal();
  });
});

dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && dialog.open) dialog.close();
});