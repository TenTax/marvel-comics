import { URL_COMICS, STANDARD_XLARGE, IMAGE_NOT_AVAILABLE } from '../../constants/api';
import { getDataApi } from '../../utils/getDataApi';
import { ROOT } from '../../constants/root';

import Error from '../Error';
import Characters from '../Characters';

import classes from './Comics.css';

class Comics {
    renderComics(data) {
        let htmlContent = '';

        data.forEach(({ id, title, thumbnail: { extension, path } }) => {

            if (path.lastIndexOf(IMAGE_NOT_AVAILABLE) === -1) {
                const imgSrc = path + '/' + STANDARD_XLARGE + '.' + extension;
                const uri = URL_COMICS + '/' + id + '/characters';

                htmlContent += `
                        <li class="comics__item ${classes.comics__item}" data-uri="${uri}" data-title="${title}">
                            <span class="${classes.comics__name}">${title}</span>
                            <img class="${classes.comics__img}" src="${imgSrc}">
                        </li>
                    `;
            }
        });

        const htmlWrapper = `
                <ul class="${classes.comics__container}">
                    ${htmlContent}
                </ul>
            `;

        ROOT.innerHTML = htmlWrapper;
    }

    async render() {
        const data = await getDataApi.getData(URL_COMICS);

        data ? this.renderComics(data) : Error.render();
    }

    eventListener() {
        document.querySelectorAll('.comics__item').forEach(item => {
            item.addEventListener('click', e => {
                const uri = item.getAttribute('data-uri');
                const nameComics = item.getAttribute('data-title');

                Characters.render(uri, nameComics);
            });
        });
    }
}

export default new Comics();