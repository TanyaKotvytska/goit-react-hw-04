import React from 'react';
import { Bars } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
    return (
        <div className={css.loaderContainer}>
            <Bars color="#007bff" height={80} width={80} />
        </div>
    );
}
