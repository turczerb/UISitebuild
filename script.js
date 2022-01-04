function main() {
  const container = document.getElementById("container");
  container.id = "cont-id";
  let lbltitle = document.createElement("h2");
  lbltitle.id = "title-id";
  lbltitle.innerText = "JELENTKEZÉS";
  container.append(lbltitle);

  let inpName = document.createElement("input");
  inpName.className = "inpClass";
  container.append(inpName);

  let inpEmail = document.createElement("input");
  inpEmail.className = "inpClass";
  container.append(inpEmail);

  let divDat = document.createElement("div");
  container.append(divDat);

  let checkB = document.createElement("input");
  checkB.id = "checkB-id";
  checkB.type = "checkbox";
  divDat.append(checkB);

  let lblDat = document.createElement("label");
  lblDat.innerHTML =
    "Elolvastam és elfogadom az <a href='./data'> Adatkezelési Tájékoztatót </a>";
  lblDat.id = "lblDat-id";
  divDat.append(lblDat);

  let btn = document.createElement("button");
  btn.id = "submit-id";
  btn.innerText = "ELKÜLD";
  container.append(btn);
}

window.addEventListener("load", main);
