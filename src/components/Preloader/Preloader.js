import { ROOT } from "../../constants/root";
import classes from './Preloader.css';

class Preloader {
    render() {
        const htmlWrapper = `
            <div class="${classes.preloader__wrapper}">
                <div class="${classes.preloader__item}"></div>
            </div>
        `;

        ROOT.innerHTML = htmlWrapper;
    }
}

export default new Preloader();