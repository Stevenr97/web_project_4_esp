var initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

var flag = true;
var flags = [false, false, false, false, false, false];
var contador = 0;

function displayCards() {
  const container = document.getElementsByClassName("elements")[0];
  if (contador == 0) {
    container.innerHTML = "";
    contador = 1;
  }
  initialCards.forEach((card, index) => {
    if (!flags[index]) {
      container.innerHTML =
        `
      <div class="element">
            <img
            class="element__image"
            src="${card.link}"
            alt="asdkma"
          />
          <svg
            width="18"
            height="20"
            class="element__trash"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.45787 18.1422C2.51882 18.8126 3.06735 19.3002 3.73778 19.3002H14.2615C14.9319 19.3002 15.4804 18.7923 15.5414 18.1422L16.7197 5.79004H1.27954L2.45787 18.1422Z"
              fill="white"
            />
            <path
              d="M16.7201 1.93002H11.5801V1.27991C11.5801 0.568849 11.0113 0 10.3002 0H7.72009C7.00903 0 6.44018 0.568849 6.44018 1.27991V1.93002H1.27991C0.568849 1.93002 0 2.49887 0 3.20993C0 3.92099 0.568849 4.48984 1.27991 4.48984H16.7201C17.4312 4.48984 18 3.92099 18 3.20993C18 2.49887 17.4312 1.93002 16.7201 1.93002Z"
              fill="white"
            />
          </svg>

          <h3 class="element__name">
            ${card.name}
            <svg
              width="21"
              height="19"
              class="element__heart"
              viewBox="0 0 21 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.3764 9.78586C21.5412 7.54338 21.5412 3.90213 19.3764 1.68186C17.2115 -0.560619 13.6964 -0.560619 11.5315 1.68186L10.4812 2.792L9.43098 1.70406C7.26614 -0.560619 3.75096 -0.560619 1.60755 1.68186C0.557285 2.76979 0 4.21297 0 5.74496C0 7.27695 0.578719 8.72013 1.60755 9.80806L10.4812 19L19.3764 9.78586ZM1.37178 5.74496C1.37178 4.59042 1.80046 3.52469 2.59352 2.72539C3.40801 1.88168 4.45828 1.45983 5.50855 1.45983C6.55882 1.45983 7.60909 1.88168 8.42358 2.72539L10.4812 4.83465L12.5389 2.70318C14.1465 1.03798 16.7829 1.03798 18.369 2.70318C19.1406 3.50248 19.5907 4.56821 19.5907 5.72276C19.5907 6.8773 19.162 7.94303 18.369 8.74233L10.4812 16.9351L2.59352 8.76453C1.82189 7.94303 1.37178 6.8773 1.37178 5.74496Z"
                fill="black"
              />
            </svg>
          </h3>
          <div
            class="imagepopup popup-opened"
            style="opacity: 0; visibility: hidden"
          >
            <div class="imagepopup__container">
              <svg
                class="imagepopup__close"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.171 0.786237L11 8.95725L2.829 0.786236L0.786246 2.82899L8.95726 11L0.786246 19.171L2.829 21.2138L11 13.0428L19.171 21.2138L21.2138 19.171L13.0428 11L21.2138 2.82899L19.171 0.786237Z"
                  fill="white"
                />
              </svg>
              <img
                src="${card.link}"
                class="imagepopup__image"
                alt=""
              />
              <h3 class="imagepopup__title">${card.name}</h3>
            </div>
          </div>
        </div>` + container.innerHTML;
      flags[index] = true;
    }
  });

  let trashContainerList = document.querySelectorAll(".element__trash");
  trashContainerList.forEach((trashContainer) => {
    trashContainer.addEventListener("click", deleteCard);
  });

  let heartContainerList = document.querySelectorAll(".element__heart");
  heartContainerList.forEach((heartContainer) => {
    heartContainer.addEventListener("click", heart);
  });
}

displayCards();

function heart() {
  let pathContainer = this.querySelector("path");
  pathContainer.removeAttribute("d");
  if (flag) {
    pathContainer.setAttribute(
      "d",
      "M19.3764 1.68186C21.5412 3.90213 21.5412 7.54338 19.3764 9.78586L10.4812 19L1.60755 9.80806C0.578719 8.72013 0 7.27695 0 5.74496C0 4.21297 0.557285 2.76979 1.60755 1.68186C3.75096 -0.560619 7.26614 -0.560619 9.43098 1.70406L10.4812 2.792L11.5315 1.68186C13.6964 -0.560619 17.2115 -0.560619 19.3764 1.68186Z"
    );
    flag = !flag;
  } else {
    pathContainer.setAttribute(
      "d",
      "M19.3764 9.78586C21.5412 7.54338 21.5412 3.90213 19.3764 1.68186C17.2115 -0.560619 13.6964 -0.560619 11.5315 1.68186L10.4812 2.792L9.43098 1.70406C7.26614 -0.560619 3.75096 -0.560619 1.60755 1.68186C0.557285 2.76979 0 4.21297 0 5.74496C0 7.27695 0.578719 8.72013 1.60755 9.80806L10.4812 19L19.3764 9.78586ZM1.37178 5.74496C1.37178 4.59042 1.80046 3.52469 2.59352 2.72539C3.40801 1.88168 4.45828 1.45983 5.50855 1.45983C6.55882 1.45983 7.60909 1.88168 8.42358 2.72539L10.4812 4.83465L12.5389 2.70318C14.1465 1.03798 16.7829 1.03798 18.369 2.70318C19.1406 3.50248 19.5907 4.56821 19.5907 5.72276C19.5907 6.8773 19.162 7.94303 18.369 8.74233L10.4812 16.9351L2.59352 8.76453C1.82189 7.94303 1.37178 6.8773 1.37178 5.74496Z"
    );
    flag = !flag;
  }
}

function hidePopUpEdit() {
  this.parentElement.style.visibility = "hidden";
  this.parentElement.style.opacity = "0";
}

document
  .querySelector(".popup__close")
  .addEventListener("click", hidePopUpEdit);

function showPopUpcreate() {
  let popupvisible = this.parentElement.querySelector(
    ".popup-create.popup-opened"
  );
  popupvisible.style.visibility = "visible";
  popupvisible.style.opacity = "1";
}

document
  .querySelector(".popup-create__close")
  .addEventListener("click", hidePopUpEdit);

document
  .querySelector(".profile__create-button")
  .addEventListener("click", showPopUpcreate);

function showPopUpimage() {
  let popupvisible = this.parentElement.querySelector(".popup-opened");
  popupvisible.style.visibility = "visible";
  popupvisible.style.opacity = "1";
}
document
  .querySelector(".profile__edit-button")
  .addEventListener("click", showPopUpimage);

function hidePopUpImage() {
  this.parentElement.parentElement.style.visibility = "hidden";
  this.parentElement.parentElement.style.opacity = "0";
}

let imgPopUpContainerList = document.querySelectorAll(".imagepopup__close");
imgPopUpContainerList.forEach((imgPopUpContainer) => {
  imgPopUpContainer.addEventListener("click", hidePopUpImage);
});

function changeContent() {
  let nombre = document.getElementById("nombre").value;
  if (nombre) {
    document.querySelector(".profile__name")["textContent"] = nombre;
  }
  let acerca = document.getElementById("acerca").value;
  if (acerca) {
    document.querySelector(".profile__descripcion")["textContent"] = acerca;
  }
  document.querySelector(".popup-opened").style.visibility = "hidden";
  document.querySelector(".popup-opened").style.opacity = "0";
}

document
  .querySelector(".popup__button")
  .addEventListener("click", changeContent);

let imgContainerList = document.querySelectorAll(".element__image");
imgContainerList.forEach((imgContainer) => {
  imgContainer.addEventListener("click", showPopUpimage);
});

function deleteCard() {
  const card = this.parentElement;
  var name = String(card.querySelector(".element__name").innerText);
  initialCards = initialCards.filter((card, index) => {
    if (card.name == name) {
      flags.splice(index, 1);
    }
    return card.name !== name;
  });
  card.remove();
}

function createCard() {
  let titulo = document.getElementById("Titulo").value;
  let enlace = document.getElementById("enlace").value;
  if (titulo && enlace) {
    initialCards.splice(0, 0, {
      name: "" + titulo,
      link: "" + enlace,
    });

    flags.splice(0, 0, false);
  }
  displayCards();

  document.querySelector(".popup-create.popup-opened").style.visibility =
    "hidden";
  document.querySelector(".popup-create.popup-opened").style.opacity = "0";
}

document
  .querySelector(".popup-create")
  .querySelector(".popup-create__button")
  .addEventListener("click", createCard);
