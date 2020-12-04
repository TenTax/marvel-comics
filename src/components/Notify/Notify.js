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
        newNotify.classList.add(classes.notify__item);
        newNotify.textContent = `Comics ${text} not available characters`;

        this.notify.appendChild(newNotify);

        setTimeout(() => {
            newNotify.remove();
        }, 3000);
    }
}

export default new Notify();