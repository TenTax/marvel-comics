import { URL_COMICS, STANDARD_XLARGE, IMAGE_NOT_AVAILABLE } from '../../constants/api';
import { getDataApi } from '../../utils/getDataApi';
import { ROOT } from '../../constants/root';

import './Comics.css';

class Comics {
    async render() {
        const data = await getDataApi.getData(URL_COMICS);

        if (data) {

            let htmlContent = '';

            data.forEach(({ id, title, thumbnail: { extension, path } }) => {

                if (path.lastIndexOf(IMAGE_NOT_AVAILABLE) === -1) {
                    const imgSrc = path + '/' + STANDARD_XLARGE + '.' + extension;
                    const uri = URL_COMICS + '/' + id + '/characters';

                    htmlContent += `
                        <li class="comics__item" data-uri="${uri}">
                            <span class="comics__name">${title}</span>
                            <img class="comics__img" src="${imgSrc}">
                        </li>
                    `;
                }
            });

            const htmlWrapper = `
                <ul class="comics__container">
                    ${htmlContent}
                </ul>
            `;

            ROOT.innerHTML = htmlWrapper;

        } else {
            console.log('bad');
        }
    }

    eventListener() {
        document.querySelectorAll('.comics__item').forEach(item => {
            item.addEventListener('click', e => {
                const uri = item.getAttribute('data-uri');

                
            });
        });
    }
}

export default new Comics();