"use strict";

const productListLinks = document.querySelectorAll(".productList");

productListLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const typeCategory = this.nextElementSibling;
    const otherCategories = document.querySelectorAll('.typeCategory');

    otherCategories.forEach(function (category) {
      if (category !== typeCategory) {
        category.style.display = 'none';
        resetSubMenus(category);
      }
    });

    if (typeCategory.style.display === 'block') {
      typeCategory.style.display = 'none';
      resetSubMenus(typeCategory);
    } else {
      typeCategory.style.display = 'block';
    }
  });
});

const subCategoryLinks = document.querySelectorAll('.typeCategory > li > a');

subCategoryLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const subMenu = this.nextElementSibling;
    const otherSubMenus = document.querySelectorAll('.typeCategory ul');

    otherSubMenus.forEach(function (menu) {
      if (menu !== subMenu) {
        menu.style.display = 'none';
      }
    });

    if (subMenu.style.display === 'block') {
      subMenu.style.display = 'none';
      resetSubMenus(subMenu);
    } else {
      subMenu.style.display = 'block';
    }
  });
});

const menuContainer = document.querySelector('.container');

menuContainer.addEventListener('mouseleave', function () {
  const openCategories = document.querySelectorAll('.typeCategory');

  openCategories.forEach(function (category) {
    category.style.display = 'none';
    resetSubMenus(category);
  });
});

const buyButtons = document.querySelectorAll('.Product button');

buyButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    alert('Товар куплено');
    location.reload();
  });
});

function resetSubMenus(parentMenu) {
  const subMenus = parentMenu.querySelectorAll('.typeCategory ul');

  subMenus.forEach(function (subMenu) {
    subMenu.style.display = 'none';
  });
}
