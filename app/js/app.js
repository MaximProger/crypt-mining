document.addEventListener("DOMContentLoaded", function () {
  // Поиск родителя
  function findAncestor(el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
  }

  function closeSelects() {
    const selects = document.querySelectorAll(".exchange__select");
    selects.forEach((select) => {
      select.classList.remove("exchange__select--active");
    });
  }

  const selectsHead = document.querySelectorAll(".exchange__select__head");
  const exchange = document.querySelector("#exchange");
  if (selectsHead) {
    selectsHead.forEach((selectHead) => {
      selectHead.addEventListener("click", () => {
        const currSelect = selectHead.parentNode;

        if (currSelect.classList.contains("exchange__select--active")) {
          currSelect.classList.remove("exchange__select--active");
        } else {
          closeSelects();
          currSelect.classList.add("exchange__select--active");
        }
      });
    });
  }

  if (exchange) {
    document.onclick = function (evt) {
      if (
        evt.target.className != "exchange__select" &&
        !findAncestor(evt.target, "exchange__select")
      ) {
        closeSelects();
      }
    };
  }

  const selectItems = document.querySelectorAll(".exchange__select__item");
  if (selectItems) {
    selectItems.forEach((selectItem) => {
      selectItem.addEventListener("click", () => {
        const currSelect = findAncestor(selectItem, "exchange__select");
        const currSelectHead = currSelect.querySelector(
          ".exchange__select__head"
        );
        currSelectHead.innerHTML = selectItem.innerHTML;
        currSelect.classList.remove("exchange__select--active");
      });
    });
  }

  const exchangeTableHeadItems = document.querySelectorAll(
    ".exchange__table__head__col"
  );
  if (exchangeTableHeadItems) {
    exchangeTableHeadItems.forEach((exchangeTableHeadItem) => {
      exchangeTableHeadItem.addEventListener("click", () => {
        if (
          exchangeTableHeadItem.classList.contains(
            "exchange__table__head__col--active"
          )
        ) {
          const currArrow = exchangeTableHeadItem.querySelector(
            ".exchange__table__head__arrow"
          );
          currArrow.classList.toggle("exchange__table__head__arrow--active");
        }

        exchangeTableHeadItems.forEach((exchangeTableHeadItem) => {
          exchangeTableHeadItem.classList.remove(
            "exchange__table__head__col--active"
          );
        });

        exchangeTableHeadItem.classList.add(
          "exchange__table__head__col--active"
        );
      });
    });
  }

  const openSelect = document.querySelector("#openSelect");
  if (openSelect) {
    openSelect.addEventListener("click", (evt) => {
      evt.preventDefault();
      openSelect.parentNode.classList.toggle("exchange__inner__choose--active");
    });
  }

  // Рейтинг в форме
  const recallStars = document.querySelectorAll(
    ".exchange__recall__form__star"
  );
  if (recallStars) {
    recallStars.forEach((recallStar) => {
      recallStar.addEventListener("click", () => {
        recallStars.forEach((recallStar) => {
          recallStar.classList.remove("exchange__recall__form__star--active");
        });

        recallStar.classList.add("exchange__recall__form__star--active");

        if (recallStar.classList.contains("exchange__recall__form__star--1")) {
          recallStars.forEach((recallStar) => {
            recallStar.classList.add("exchange__recall__form__star--active");
          });
        } else if (
          recallStar.classList.contains("exchange__recall__form__star--2")
        ) {
          document
            .querySelector(".exchange__recall__form__star--3")
            .classList.add("exchange__recall__form__star--active");
          document
            .querySelector(".exchange__recall__form__star--4")
            .classList.add("exchange__recall__form__star--active");
          document
            .querySelector(".exchange__recall__form__star--5")
            .classList.add("exchange__recall__form__star--active");
        } else if (
          recallStar.classList.contains("exchange__recall__form__star--3")
        ) {
          document
            .querySelector(".exchange__recall__form__star--4")
            .classList.add("exchange__recall__form__star--active");
          document
            .querySelector(".exchange__recall__form__star--5")
            .classList.add("exchange__recall__form__star--active");
        } else if (
          recallStar.classList.contains("exchange__recall__form__star--4")
        ) {
          document
            .querySelector(".exchange__recall__form__star--5")
            .classList.add("exchange__recall__form__star--active");
        } else {
        }
      });
    });
  }

  // Открыть/закрыть форму
  const openFormBtn = document.querySelector("#openForm");
  const form = document.querySelector("#recallForm");
  if (openFormBtn) {
    openFormBtn.addEventListener("click", (evt) => {
      evt.preventDefault();
      form.classList.toggle("exchange__recall__form--active");
    });
  }

  // Отзывы вкладки
  const recallPannelItems = document.querySelectorAll(
    ".exchange__recall__pannel__left .exchange__recall__pannel__item"
  );
  if (recallPannelItems) {
    recallPannelItems.forEach((recallPannelItem) => {
      recallPannelItem.addEventListener("click", () => {
        recallPannelItems.forEach((recallPannelItem) => {
          recallPannelItem.classList.remove(
            "exchange__recall__pannel__item--active"
          );
        });

        recallPannelItem.classList.add(
          "exchange__recall__pannel__item--active"
        );
      });
    });
  }

  // Отзывы ответить
  const recallItemsOpen = document.querySelectorAll(
    ".exchange__recall__item__open"
  );
  if (recallItemsOpen) {
    recallItemsOpen.forEach((recallItemOpen) => {
      recallItemOpen.addEventListener("click", (evt) => {
        evt.preventDefault();
        const currReview = findAncestor(
          recallItemOpen,
          "exchange__recall__item"
        );
        const currRecallItemForm = currReview.querySelector(
          ".exchange__recall__form--small"
        );
        currRecallItemForm.classList.toggle("exchange__recall__form--active");
      });
    });
  }
});
