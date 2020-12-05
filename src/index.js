import 'regenerator-runtime/runtime'
import App from './components/App';
import Comics from './components/Comics';
import Preloader from './components/Preloader';

(async () => {

    Preloader.render();

    await App.render();

    Comics.eventListener();
})()

