import { getDataApi } from '../../utils/getDataApi';
import { MODAL } from '../../constants/root';

import classes from './Characters.css';
import { STANDARD_XLARGE } from '../../constants/api';

import close from './img/close.svg';
import Notify from '../Notify';

class Charactrs {
    constructor() {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add(classes.wrapper, 'wrapper');
    }

    renderContent(data, nameComics) {
        let htmlContent = '';

        data.forEach(({ name, thumbnail: { path, extension } }) => {
            const pathImg = path + '/' + STANDARD_XLARGE + '.' + extension;

            htmlContent += `
                <li class="${classes.characters__item}">
                    <img class="${classes.characters__img}" src="${pathImg}" />
                    <span class="${classes.characters__name}">${name}</span>
                </li>
            `;
        });

        this.wrapper.innerHTML = `
            <div class="${classes.wrapper__content}">
                <div class="${classes.header}">
                    <span class="${classes.header__title}">${nameComics}</span>
                    <button class="header__close ${classes.header__close}">
                        <img src="${close.slice(1)}" />
                    </button>
                </div>
                <ul class="${classes.characters__list}">
                    ${htmlContent}
                </ul>
            </div>
        `;

        document.body.classList.add('modal');
        MODAL.appendChild(this.wrapper);

        this.eventListener();
    }

    renderNotification(nameComics) {
        Notify.addNotify(nameComics);
    }

    async render(uri, nameComics) {
        const data = await getDataApi.getData(uri);

        data.length ? this.renderContent(data, nameComics) : this.renderNotification(nameComics);
    }

    eventListener() {
        this.wrapper.querySelector('.header__close').addEventListener('click', () => {
            MODAL.innerHTML = '';
            document.body.classList.remove('modal');
        });

        this.wrapper.addEventListener('click', (e) => {
            if (e.target.classList.contains('wrapper')) {
                MODAL.innerHTML = '';
                document.body.classList.remove('modal');
            }
        });
    }
}

export default new Charactrs();