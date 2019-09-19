import React from 'react';
import styles from './form-input.modele.css';

const FormInput = ( {handleChange, label, ...otherProps}) => (

    <div className={styles.group}>
        <input className={styles.forminput} onChange={handleChange} {...otherProps} />
        <label>{label}</label>
    </div>

)

export default FormInput;