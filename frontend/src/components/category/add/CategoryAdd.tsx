import React, { ReactNode } from 'react';
import './CategoryAdd.scss';
import CategoryService from '../service/CategoryService';

class CategoryAdd extends React.PureComponent {
    addCategory = async (event: any): Promise<void> => {
        event.preventDefault();
        console.log(event.target[0].value);
        const response = await CategoryService.getInstance().addCategory(event.target[0].value);
        console.log(response.success);
    }

    render(): ReactNode {
        return (
            <section className="category-add">
                <h2>Add a new category</h2>
                <form onSubmit={() => this.addCategory(event)}>
                    <label htmlFor="category-add__name">
                        Name:
                        <input type="text" id="category-add__name" name="name" pattern="[a-zA-Z]+" required />
                        <br />
                        <button type="submit">Add</button>
                    </label>
                </form>
            </section>
        );
    }
}

export default CategoryAdd;
