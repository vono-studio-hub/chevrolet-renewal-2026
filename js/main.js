/* =========================================================
   CHEVROLET RENEWAL 2026
   MAIN.JS
========================================================= */


/* =========================================================
   1. ELEMENTS
========================================================= */

const body =
  document.body;

const menuButton =
  document.querySelector(".menu-btn");

const sideMenu =
  document.querySelector(".side-menu");

const menuOverlay =
  document.querySelector(".menu-overlay");

const menuCloseButton =
  document.querySelector(".menu-close-btn");

const sideMenuLinks =
  document.querySelectorAll(".side-nav a");

const topButton =
  document.querySelector(".top-button");



/* =========================================================
   2. OPEN MENU
========================================================= */

function openMenu() {

  sideMenu.classList.add("open");

  menuOverlay.classList.add("active");

  menuButton.classList.add("active");

  body.classList.add("menu-open");


  menuButton.setAttribute(
    "aria-expanded",
    "true"
  );


  sideMenu.setAttribute(
    "aria-hidden",
    "false"
  );

}



/* =========================================================
   3. CLOSE MENU
========================================================= */

function closeMenu() {

  sideMenu.classList.remove("open");

  menuOverlay.classList.remove("active");

  menuButton.classList.remove("active");

  body.classList.remove("menu-open");


  menuButton.setAttribute(
    "aria-expanded",
    "false"
  );


  sideMenu.setAttribute(
    "aria-hidden",
    "true"
  );

}



/* =========================================================
   4. MENU EVENTS
========================================================= */

menuButton?.addEventListener(
  "click",
  () => {

    const isOpen =
      sideMenu.classList.contains("open");


    if (isOpen) {

      closeMenu();

    } else {

      openMenu();

    }

  }
);



menuCloseButton?.addEventListener(
  "click",
  closeMenu
);



menuOverlay?.addEventListener(
  "click",
  closeMenu
);



/* 메뉴 클릭 후 닫기 */

sideMenuLinks.forEach((link) => {

  link.addEventListener(
    "click",
    () => {

      closeMenu();

    }
  );

});



/* ESC 키로 닫기 */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape" &&
      sideMenu.classList.contains("open")
    ) {

      closeMenu();

    }

  }
);



/* =========================================================
   5. HERO PAGINATION
========================================================= */

const heroDots =
  document.querySelectorAll(
    ".pagination-dot"
  );


heroDots.forEach(
  (dot) => {

    dot.addEventListener(
      "click",
      () => {

        heroDots.forEach(
          (item) => {

            item.classList.remove(
              "active"
            );

          }
        );


        dot.classList.add(
          "active"
        );

      }
    );

  }
);



/* =========================================================
   6. VEHICLE SELECTOR
========================================================= */

const vehicleItems =
  document.querySelectorAll(
    ".vehicle-item"
  );

const vehicleDots =
  document.querySelectorAll(
    ".vehicle-dot"
  );


vehicleItems.forEach(
  (item, index) => {

    item.addEventListener(
      "click",
      () => {


        vehicleItems.forEach(
          (car) => {

            car.classList.remove(
              "active"
            );

          }
        );


        vehicleDots.forEach(
          (dot) => {

            dot.classList.remove(
              "active"
            );

          }
        );


        item.classList.add(
          "active"
        );


        if (
          vehicleDots[index]
        ) {

          vehicleDots[index]
            .classList.add(
              "active"
            );

        }

      }
    );

  }
);



/* =========================================================
   7. TOP BUTTON SHOW / HIDE
========================================================= */

window.addEventListener(
  "scroll",
  () => {

    /*
      500px 이상 내려가면
      TOP 버튼 표시
    */

    if (
      window.scrollY > 500
    ) {

      topButton.classList.add(
        "show"
      );

    } else {

      topButton.classList.remove(
        "show"
      );

    }

  },
  {
    passive: true
  }
);



/* =========================================================
   8. SCROLL TO TOP
========================================================= */

topButton?.addEventListener(
  "click",
  () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth"

    });

  }
);



/* =========================================================
   9. PREVENT EMPTY LINKS
========================================================= */

/*
  아직 연결 페이지가 없는
  href="#" 링크를 눌렀을 때
  화면이 맨 위로 튀는 것 방지
*/

document
  .querySelectorAll('a[href="#"]')
  .forEach((link) => {

    link.addEventListener(
      "click",
      (event) => {

        event.preventDefault();

      }
    );

  });