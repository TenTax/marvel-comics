export const bodyLock = () => {
    const body = document.body;
    body.style.overflow = 'hidden';
    body.style.marginRight = calcScroll() + 'px';


    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflow = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    };
};

export const bodyUnLock = () => {
    document.body.style.overflow = '';
    document.body.style.marginRight = '0px';
};