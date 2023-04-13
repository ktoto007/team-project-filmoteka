import { sliderComponate } from "./footerModalSlider";
import { state } from "./teamState";

const btnModalOpen = document.querySelector('.footer-submit');

const modalWindowMarkup = `
<div class="backdrop footer_backdrop">
  <div class="footer_modal modal">
    <div class="footer_modal-header">
      <img
        src="https://www.edu.goit.global/_next/image?url=https%3A%2F%2Fs3.eu-north-1.amazonaws.com%2Flms.goit.files%2F0618d8e0-2652-3e30-ae44-fd6ff17d55a1.png&w=2048&q=75"
        alt=" GoIT logo"
        height="15"
        width="auto"
        class="footer-modal_img"
      />
      <h2 class="footer-modal_title">Student team</h2>
    </div>
    <div class="gallery footer_gallery">
       <button class="gallery-arrow left fa-solid fa-solid fa-arrow-left button-queue" ></button>
       <div class="box box-list"></div>
       <button class="gallery-arrow right fa-solid fa-arrow-right button-queue"></button>
    </div>
    <button type="button" class="footer-modal_button button-modal button-watched" data-action="close-footer-modal">
      Close
    </button>
  </div>
</div>
`

const renderModalWindow = () => {
  const backdrop = document.createElement('div');
  backdrop.setAttribute('class', 'modal-backdrop');
  backdrop.innerHTML = modalWindowMarkup;
  document.body.append(backdrop);
  return backdrop;
};

const onOpenModalBtnClick = () => {
  const backdrop = renderModalWindow();
  sliderComponate(state, '');
  const btnModalClose = document.querySelector('.footer-modal_button');
  const removeModalWindow = () => backdrop.remove();
  const onCloseModalBtnClick = () => removeModalWindow();
  btnModalClose.addEventListener('click', onCloseModalBtnClick);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      removeModalWindow();
    }
  });

  backdrop.addEventListener('click', (event) => {
    if (event.target === backdrop)
      removeModalWindow()
  });
}

btnModalOpen.addEventListener('click', onOpenModalBtnClick);
