import 'regenerator-runtime/runtime'
import App from './components/App';
import Characters from './components/Characters';
import Comics from './components/Comics';
import Preloader from './components/Preloader';

(async () => {

    Preloader.render();
    
    await App.render();

    Comics.eventListener();
})()

