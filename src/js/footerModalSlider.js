//VIEW

const render = (localState, root) => {
    const block = document.createElement('div');
    block.classList.add('team');
  
    const imgContainer1 = document.createElement('div');
    imgContainer1.classList.add('team-container');
    const imageEl1 = document.createElement("img");
    imageEl1.setAttribute("src", localState.array[localState.idEl1].preview);
    imageEl1.setAttribute('class', 'modal_img team-modal_img');;
    const titleEl1 = document.createElement("a");
    titleEl1.setAttribute('href', localState.array[localState.idEl1].link);
    titleEl1.innerText = localState.array[localState.idEl1].name;
    titleEl1.setAttribute('class', 'team-title main_text_modal');
    const descriptionEl1 = document.createElement("p");
    descriptionEl1.innerText = localState.array[localState.idEl1].title;
    descriptionEl1.classList.add('team-description');
    imgContainer1.append(imageEl1, titleEl1, descriptionEl1);
  
  
    const imgContainer2 = document.createElement('div');
    imgContainer2.classList.add('team-container');
    const imageEl2 = document.createElement("img");
    imageEl2.setAttribute("src", localState.array[localState.idEl2].preview);
    imageEl2.setAttribute('class', 'modal_img team-modal_img');
    const titleEl2 = document.createElement("a");
    titleEl2.setAttribute('href', localState.array[localState.idEl2].link);
    titleEl2.innerText = localState.array[localState.idEl2].name;
    titleEl2.setAttribute('class', 'team-title main_text_modal');
    const descriptionEl2 = document.createElement("p");
    descriptionEl2.innerText = localState.array[localState.idEl2].title;
    descriptionEl2.classList.add('team-description');
    imgContainer2.append(imageEl2, titleEl2, descriptionEl2);
  
  
    block.append(imgContainer1, imgContainer2);
    root.replaceChildren();
    root.append(block);
  };
  
  //CONTROLLER
  
  const createElements = () => ({
    triangleLeft: document.querySelector(`.left`),
    triangleRight: document.querySelector(`.right`),
    boxForImages: document.querySelector(`.box-list`),
  });
  
  const createActions = (localState, box) => ({
    start: () => {
      render(localState, box);
    },
  
    moveLeft: () => {
      localState.idEl1 =
        localState.idEl1 === 0 ? localState.array.length - 1 : localState.idEl1 - 1;
        localState.idEl2 =
        localState.idEl2 === 0 ? localState.array.length - 1 : localState.idEl2 - 1;
      render(localState, box);
    },
  
    moveRight: () => {
      localState.idEl1 =
        localState.idEl1 === localState.array.length - 1 ? 0 : localState.idEl1 + 1;
        localState.idEl2 =
        localState.idEl2 === localState.array.length - 1 ? 0 : localState.idEl2 + 1;
      render(localState, box);
    },
  });
  
  export const sliderComponate = (state) => {
    const el = createElements();
    const actions = createActions(state, el.boxForImages);
    el.triangleLeft.addEventListener("click", actions.moveLeft);
    el.triangleRight.addEventListener("click", actions.moveRight);
    actions.start();
  };