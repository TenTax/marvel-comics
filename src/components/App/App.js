import { URL_COMICS } from '../../constants/api';
import { getDataApi } from '../../utils/getDataApi';

import './App.css';

class App {
    async render() {
        const data = await getDataApi.getData(URL_COMICS);
        if (data) {
            console.log(data);
        } else {
            console.log('bad');
        }
    }
}

export default new App();