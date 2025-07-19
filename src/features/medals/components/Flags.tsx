import React from 'react';
import styles from '../styles.module.css';
import {countryCodes, FLAG_HEIGHT} from "@/features/medals/consts";

export const Flag = ({ code }: { code: string}) => {
 const sortedCountryCodes = countryCodes.sort((a, b) => a.localeCompare(b));
    const index = sortedCountryCodes.indexOf(code.toUpperCase())
    const yOffset = -index * FLAG_HEIGHT;

    return (
        <div
            className={styles.flag}
            style={{ backgroundPosition: `0px ${yOffset}px` }}
            aria-label={`Flag of ${code}`}
        />
    );
}
