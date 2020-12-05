import { getDataApi } from '../../utils/getDataApi';
import { MODAL } from '../../constants/root';
import { STANDARD_XLARGE } from '../../constants/api';
import { bodyLock, bodyUnLock } from '../../utils/bodyLock';

import Notify from '../Notify';

import closeImg from './img/close.svg';
import classes from './Characters.css';


class Characters {
    constructor() {
        this.modal = document.createElement('div');
        this.modal.classList.add(classes.modal, 'modal');
    }

    renderContent(data, nameComics) {
        let htmlCharacters = '';

        data.forEach(({ name, thumbnail: { path, extension } }) => {
            const pathImg = path + '/' + STANDARD_XLARGE + '.' + extension;

            htmlCharacters += `
                <li class="${classes.character}">
                    <img class="${classes.character__img}" src="${pathImg}" />
                    <span class="${classes.character__name}">${name}</span>
                </li>
            `;
        });

        this.modal.innerHTML = `
            <div class="wrapper__content ${classes.modal__wrapper}">
                <div class="${classes.modal__header}">
                    <span class="${classes.modal__title}">${nameComics}</span>
                    <button class="modal__close ${classes.modal__close}">
                        <img src="${closeImg.slice(1)}" />
                    </button>
                </div>
                <ul class="${classes.characters}">
                    ${htmlCharacters}
                </ul>
            </div>
        `;

        bodyLock();
        MODAL.appendChild(this.modal);
        this.eventListener();
    }

    async render(uri, nameComics) {
        const data = await getDataApi.getData(uri);

        data.length ? this.renderContent(data, nameComics) : Notify.addNotify(nameComics);
    }

    eventListener() {
        const closeModal = () => {
            this.modal.classList.add('hide');

            setTimeout(() => {
                MODAL.innerHTML = '';
                this.modal.classList.remove('hide');
                bodyUnLock();
            }, 300);
        }

        this.modal.querySelector('.modal__close').addEventListener('click', closeModal);
    }
}

export default new Characters();