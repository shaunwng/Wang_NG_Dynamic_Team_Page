(() => {

  console.log('JS is linked!');

  let popCardDeveloper = document.querySelector('.popCardDeveloper'),
    popCardDesigner = document.querySelector('.popCardDesigner'),
    developerExplore = document.querySelector('.developerExplore'),
    designerExplore = document.querySelector('.designerExplore'),
    closeDeveloper = document.querySelector('.closeDeveloper'),
    closeDesigner = document.querySelector('.closeDesigner');

  function popUpDeveloper() {
    popCardDeveloper.classList.add("popUpDeveloper");
  }
  function hideDeveloper() {
    popCardDeveloper.classList.remove("popUpDeveloper");
  }

  function popUpDesigner() {
    popCardDesigner.classList.add("popUpDesigner");
  }
  function hideDesigner() {
    popCardDesigner.classList.remove("popUpDesigner");
  }


  developerExplore.addEventListener('click', popUpDeveloper);
  closeDeveloper.addEventListener('click', hideDeveloper);



  designerExplore.addEventListener('click', popUpDesigner);
  closeDesigner.addEventListener('click', hideDesigner);


})();