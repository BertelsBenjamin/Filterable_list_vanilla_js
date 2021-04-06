let filterInput = document.getElementById('filterInput');

const filterNames = () => {
  // ORIGINAL CODE BY BRAD
  /* let filterValue = document.getElementById('filterInput').value.toUpperCase();
  let ul = document.getElementById('names');
  let li = ul.querySelectorAll('li.collection-item');

  //Loop through collection-item li's
  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName('a')[0];
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  } */

  // CONVERTED TO ES6 BY BENJAMIN
  let filterValue = document.querySelector('#filterInput').value.toUpperCase();
  let names = document.querySelector('#names');
  let items = names.querySelectorAll('li.collection-item');

  items.forEach((item, index) => {
    let link = item.querySelectorAll('a')[0];

    link.innerHTML.toUpperCase().indexOf(filterValue) > -1
      ? (item.style.display = '')
      : (item.style.display = 'none');
  });
};

filterInput.addEventListener('keyup', filterNames);
