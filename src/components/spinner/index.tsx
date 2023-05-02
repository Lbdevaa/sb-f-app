import React, {FC} from "react";
import {ISpinnerOptions} from "./types";

const defaultValues = {
    size: 'sm',
    variant: 'dark',
    animation: 'border'
};

/**
 * Spinner with label
 * @param options
 * @constructor
 */
export const Spinner: FC<ISpinnerOptions> = (options: ISpinnerOptions) => {
    const {
        loading,
        size,
        variant,
        animation,
        label
    } = {...defaultValues, ...options};

    return (
        loading ?
            <div className={`d-flex align-items-center ${label ? 'mx-2' : ''}`}>
                <div className={`spinner-${animation} text-${variant} spinner-${animation}-${size}`} role="status"/>
                { label && <span className="ms-2">{label}</span> }
            </div>
            :
            <React.Fragment/>
    );
};

export default Spinner;