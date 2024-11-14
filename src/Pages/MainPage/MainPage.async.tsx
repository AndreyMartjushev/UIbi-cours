import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // замедление для проверки саспенсов
    // @ts-ignore
    setTimeout(() => resolve(import ('./MainPage')), 1500)})
);
