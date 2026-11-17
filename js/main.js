const eras=[
{name:"Prehistoria",date:"PALEOLÍTICO · NEOLÍTICO",short:"Primeras formas de abrigo",desc:"La necesidad de proteger el cuerpo dio origen a las primeras formas de indumentaria, elaboradas con pieles, fibras y materiales disponibles en el entorno.",detail:"La indumentaria nació de la adaptación al clima y al entorno. Con el tiempo, el uso de materiales y técnicas también comenzó a expresar identidad y pertenencia."},
{name:"Egipto",date:"3100 A. C. · ANTIGÜEDAD",short:"Lino, ornamentos y simbolismo",desc:"Los egipcios cuidaban mucho su apariencia y les importaba lucir bien. Utilizaban accesorios y adornos para expresar su estatus social.",detail:"El lino, las joyas, el maquillaje y los tocados formaban parte de una estética vinculada con la vida cotidiana, la religión y el poder."},
{name:"Grecia",date:"ANTIGÜEDAD CLÁSICA",short:"El cuerpo y el drapeado",desc:"La indumentaria griega se caracterizó por prendas drapeadas, tejidos ligeros y una relación armónica entre el cuerpo y la vestimenta.",detail:"El quitón y el himatión son ejemplos de prendas construidas mediante pliegues y sujeciones, con una silueta que acompañaba el movimiento."},
{name:"Roma",date:"753 A. C. · IMPERIO ROMANO",short:"Vestimenta y ciudadanía",desc:"La ropa romana distinguía funciones, jerarquías y posiciones sociales. La toga se convirtió en una de sus prendas más representativas.",detail:"La vestimenta romana combinó influencias de otros pueblos con códigos propios que identificaban ciudadanía, autoridad y posición social."},
{name:"Bizantino",date:"395 · 1453",short:"Color, lujo y jerarquía",desc:"Bizancio unió la herencia romana, la cultura griega y el cristianismo. La indumentaria expresó elegancia y jerarquía mediante pliegues, colores y telas ricas.",detail:"La seda, los bordados y los motivos ornamentales fueron rasgos destacados de la indumentaria imperial y ceremonial."},
{name:"Edad Media",date:"SIGLOS V · XV",short:"Románico y gótico",desc:"La vestimenta medieval evolucionó junto con la sociedad europea, desde siluetas románicas hasta las formas más estilizadas del gótico.",detail:"Los materiales, los colores y las formas de las prendas reflejaban diferencias sociales, tradiciones regionales y cambios técnicos."},
{name:"Renacimiento",date:"SIGLOS XV · XVI",short:"Proporción y esplendor",desc:"El Renacimiento transformó las siluetas y los códigos de elegancia en las cortes europeas.",detail:"Italia, Francia, Inglaterra y España desarrollaron expresiones propias de la moda, con tejidos elaborados, volúmenes y detalles decorativos."},
{name:"Barroco",date:"SIGLO XVII",short:"Volumen y teatralidad",desc:"La moda barroca se distinguió por su riqueza visual, ornamentación, contrastes y siluetas de gran presencia.",detail:"Encajes, bordados, lazos y tejidos suntuosos acompañaron la imagen de poder de las cortes europeas."},
{name:"Rococó",date:"SIGLO XVIII",short:"Delicadeza ornamental",desc:"El Rococó desarrolló una estética refinada, con colores suaves, ornamentos, texturas y siluetas elaboradas.",detail:"La indumentaria cortesana incorporó detalles decorativos, accesorios y estructuras que definieron una imagen elegante y exuberante."},
{name:"Neoclasicismo",date:"FINALES DEL SIGLO XVIII",short:"Regreso a lo clásico",desc:"La inspiración en la Antigüedad clásica modificó las formas de vestir y favoreció líneas más simples.",detail:"Las siluetas se aligeraron y recuperaron referencias visuales de Grecia y Roma, en sintonía con nuevas ideas culturales."},
{name:"Romanticismo",date:"SIGLO XIX",short:"Expresión y silueta",desc:"La moda romántica dio protagonismo a la expresión individual, los detalles y las siluetas características del siglo XIX.",detail:"La indumentaria masculina y femenina adoptó formas, capas y accesorios que reflejaban ideales estéticos y sociales del período."}
];
const upper=document.querySelector("#timeline-upper"),lower=document.querySelector("#timeline-lower");
function makeCell(era,i,position){const b=document.createElement("button");b.className="timeline-cell";b.type="button";b.dataset.era=i;b.innerHTML=position==="upper"?`<span class="cell-number">${String(i+1).padStart(2,"0")}</span><strong>${era.name}</strong><small>${era.short}</small><span class="cell-date">${era.date}</span>`:`<span class="cell-number">0${i+1}</span><strong>${era.name}</strong><small>Explorar período</small>`;b.addEventListener("click",()=>openEra(i));return b;}
eras.forEach((era,i)=>{upper.append(makeCell(era,i,"upper"));if(i<10)lower.append(makeCell(era,i,"lower"));});
const dialog=document.querySelector("#era-dialog"),title=document.querySelector("#dialog-title"),description=document.querySelector("#dialog-description"),page=document.querySelector("#era-page");let selected=0;
function openEra(i){selected=i;title.textContent=eras[i].name;description.textContent=eras[i].desc;dialog.showModal();}
dialog.querySelector('[data-action="close"]').addEventListener("click",()=>dialog.close());
dialog.querySelector(".dialog-close").addEventListener("click",()=>dialog.close());
dialog.querySelector('[data-action="open-era"]').addEventListener("click",()=>{dialog.close();showEra(selected);});
const eraSections = {
  "Egipto": ["Vestimenta", "Maquillaje", "Confección", "Arquitectura", "Accesorios", "Mapa"],
  "Grecia": ["Vestimenta", "Espartanos", "Arquitectura", "Arte", "Mapa", "Sabías que…"],
  "Roma": ["Vestimenta", "Arquitectura", "Arte", "Mapa"],
  "Bizantino": ["Vestimenta", "Arquitectura", "Joyas", "Nuevos materiales", "Arte", "Mapa"],
  "Edad Media": ["Vestimenta", "Arquitectura", "Arte", "Mapa", "Nuevos materiales"],
  "Renacimiento": ["Vestimenta", "Arquitectura", "Arte", "Accesorios", "Mapa"],
  "Barroco": ["Vestimenta", "Arquitectura", "Arte", "Accesorios", "Materiales", "Mapa"],
  "Rococó": ["Vestimenta", "Arquitectura", "Arte", "Accesorios", "Materiales", "Mapa"],
  "Neoclasicismo": ["Vestimenta", "Arquitectura", "Arte", "Accesorios", "Mapa"],
  "Romanticismo": ["Vestimenta", "Arquitectura", "Arte", "Accesorios", "Mapa"]
};

const designModal = document.createElement("dialog");
designModal.className = "design-modal";
designModal.id = "design-modal";
designModal.innerHTML = '<div class="design-modal-stage"><img class="design-modal-image" alt=""><div class="design-modal-hotspots"></div></div>';
document.body.append(designModal);
const designImage = designModal.querySelector(".design-modal-image");
const hotspots = designModal.querySelector(".design-modal-hotspots");

const svgFolder = "dise%C3%B1o%20de%20indumentaria/Introducci%C3%B3n%20de%20linea%20de%20tiempo";
const svgForEra = index => `${svgFolder}/${index + 1}.svg`;
function showSvgSheet(eraIndex, sectionLabel) {
  const era = eras[eraIndex];
  const src = svgForEra(eraIndex);
  designImage.src = src;
  designImage.alt = `Lámina original de ${era.name}: ${sectionLabel}`;
  designImage.onerror = () => {
    designImage.onerror = null;
    designImage.alt = `No se pudo cargar la lámina SVG de ${era.name}`;
  };
  designModal.dataset.era = era.name;
  designModal.dataset.section = sectionLabel;
  hotspots.replaceChildren();
  const close = document.createElement("button");
  close.type = "button";
  close.className = "design-hotspot";
  close.setAttribute("aria-label", "Cerrar lámina");
  close.textContent = "×";
  close.title = "Cerrar";
  close.style.cssText = "right:12px;top:12px;width:42px;height:42px;background:#2a1810;color:#f7edd9;border:1px solid #b88752;border-radius:50%;font:28px/1 Georgia;display:grid;place-items:center;";
  close.addEventListener("click", () => designModal.close());
  hotspots.append(close);
  if (!designModal.open) designModal.showModal();
}
function showEra(i) {
  const e = eras[i];
  document.querySelector("#era-heading").textContent = e.name;
  document.querySelector("#era-date").textContent = e.date;
  document.querySelector("#era-intro").textContent = e.detail;
  const visual = document.querySelector(".era-visual");
  const eraImage = document.createElement("img");
  eraImage.src = svgForEra(i);
  eraImage.alt = `Lámina original de ${e.name}`;
  eraImage.loading = "lazy";
  eraImage.onerror = () => {
    eraImage.onerror = null;
    eraImage.src = `dise%C3%B1o%20de%20indumentaria/Fotos%20de%20la%20L%C3%ADnea%20de%20tiempo/${i+1}.png`;
  };
  visual.replaceChildren(eraImage);
  const links = document.querySelector("#era-links");
  links.replaceChildren();
  const sections = eraSections[e.name] || [];
  sections.forEach(label => {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = label;
    b.addEventListener("click", () => {
      showSvgSheet(i, label);
    });
    links.append(b);
  });
  page.hidden = false;
}
document.querySelector(".era-back").addEventListener("click",()=>{page.hidden=true;});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!dialog.open)page.hidden=true;});
document.querySelector(".timeline-viewport").addEventListener("keydown",e=>{if(e.key==="ArrowRight")e.currentTarget.scrollBy({left:220,behavior:"smooth"});if(e.key==="ArrowLeft")e.currentTarget.scrollBy({left:-220,behavior:"smooth"});});