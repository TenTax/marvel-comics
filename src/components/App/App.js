import Comics from '../Comics';
import Notify from '../Notify';

import './App.css';

class App {
    async render() {
        await Comics.render(); 
        
        Notify.render();
    }
}

export default new App();