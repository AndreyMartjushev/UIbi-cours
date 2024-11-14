import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise(resolve => {
    // замедление для проверки саспенсов
    // @ts-ignore
    setTimeout(() => resolve(import ('./AboutPage')), 1500)})
);
