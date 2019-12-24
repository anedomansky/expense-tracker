import React from 'react';
import './Add.scss';
import { ICategory } from '../../../interfaces/ICategory';

interface Props {
    title: string;
    onSubmit: (event: any) => Promise<void>;
    successMessage: string;
}

const Add: React.FC<Props> = ({ title, onSubmit, successMessage, children }) => (
    <section className="add-item">
        <h2>{title}</h2>
        <form onSubmit={() => onSubmit(event)}>
            {children}
        </form>
        <br />
        <p className="success-info">{successMessage}</p>
    </section>
);

export default Add;
