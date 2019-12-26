import React from 'react';
import './Add.scss';

interface Props {
    title: string;
    onSubmit: (event: any) => Promise<void>;
    successMessage: string;
}

const Add: React.FC<Props> = ({ title, onSubmit, successMessage, children }) => (
    <section className="add-item">
        <h2 className="add-item__heading">{title}</h2>
        <form className="add-item__form" onSubmit={() => onSubmit(event)}>
            {children}
        </form>
        <br />
        <p className="success-info">{successMessage}</p>
    </section>
);

export default Add;
