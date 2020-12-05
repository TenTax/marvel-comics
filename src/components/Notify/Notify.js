import { NOTIFY } from '../../constants/root';
import classes from './Notify.css';

class Notify {
    constructor() {
        this.notify = document.createElement('div');
        this.notify.classList.add(classes.notify);
    }

    render() {
        NOTIFY.appendChild(this.notify);
    }

    addNotify(text) {
        const newNotify = document.createElement('div');
        newNotify.classList.add(classes.notify__item, 'notify__item');
        newNotify.textContent = `There are no characters in the ${text} comic`;

        this.notify.insertBefore(newNotify, this.notify.firstChild);

        setTimeout(() => {
            newNotify.classList.add('hide');
            setTimeout(() => {
                newNotify.remove();
            }, 300);
        }, 4000);
    }
}

export default new Notify();