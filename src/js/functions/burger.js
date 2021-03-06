import {
    disableScroll
} from '../functions/disable-scroll.js';
import {
    enableScroll
} from '../functions/enable-scroll.js';

export const burger = () => {
    const burger = document?.querySelector('[data-burger]');
    const menu = document?.querySelector('[data-menu]');
    const menuItems = document?.querySelectorAll('[data-menu-item]');
    const overlay = document?.querySelector('[data-menu-overlay]');

    burger?.addEventListener('click', (e) => {
        burger?.classList.toggle('burger--active');
        menu?.classList.toggle('mobile-nav--active');

        if (menu?.classList.contains('mobile-nav--active')) {
            burger?.setAttribute('aria-expanded', 'true');
            burger?.setAttribute('aria-label', 'Закрыть меню');
            disableScroll();
        } else {
            burger?.setAttribute('aria-expanded', 'false');
            burger?.setAttribute('aria-label', 'Открыть меню');
            enableScroll();
        }
    });

    overlay?.addEventListener('click', () => {
        burger?.setAttribute('aria-expanded', 'false');
        burger?.setAttribute('aria-label', 'Открыть меню');
        burger.classList.remove('burger--active');
        menu.classList.remove('mobile-nav--active');
        enableScroll();
    });

    menuItems?.forEach(el => {
        el.addEventListener('click', () => {
            burger?.setAttribute('aria-expanded', 'false');
            burger?.setAttribute('aria-label', 'Открыть меню');
            burger.classList.remove('burger--active');
            menu.classList.remove('mobile-nav--active');
            enableScroll();
        });
    });
};
