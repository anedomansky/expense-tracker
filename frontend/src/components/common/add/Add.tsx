import React from 'react';
import './Add.scss';

interface Props {
    title: string;
    onSubmit: (event: any) => Promise<void>;
    onChange: (event: any) => void;
    value: string;
    successMessage: string;
    showCategoryInput?: boolean;
}

const Add: React.FC<Props> = ({ title, onSubmit, onChange, value, successMessage, showCategoryInput }) => (
    <section className="add-item">
        <h2>{title}</h2>
        <form onSubmit={() => onSubmit(event)}>
            <label htmlFor="add-item__name">
                Name:
                <input onChange={() => onChange(event)} placeholder="Enter a name..." type="text" id="add-item__name" name="name" pattern="[a-zA-Z]+" value={value} required />
            </label>
            <br />
            {
                showCategoryInput
                && (
                    <label htmlFor="add-item__category">
                        Category:
                        <select name="category" id="add-item__category">
                            <option defaultChecked>-/-</option>
                        </select>
                    </label>
                )
            }
            <br />
            <button type="submit">Add</button>
        </form>
        <br />
        <p className="success-info">{successMessage}</p>
    </section>
);

export default Add;
