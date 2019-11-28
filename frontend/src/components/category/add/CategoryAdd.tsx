import React, { ReactNode } from 'react';
import './CategoryAdd.scss';
import CategoryService from '../service/CategoryService';

interface State {
    successMessage: string;
}

// TODO: reset form after submit
class CategoryAdd extends React.PureComponent<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            successMessage: '',
        };
    }

    async addCategory(event: any): Promise<void> {
        event.preventDefault();
        const response = await CategoryService.getInstance().addCategory(event.target[0].value);
        this.setState({
            successMessage: response.success,
        });
    }

    render(): ReactNode {
        const { successMessage } = this.state;
        return (
            <section className="category-add">
                <h2>Add a new category</h2>
                <form onSubmit={() => this.addCategory(event)}>
                    <label htmlFor="category-add__name">
                        Name:
                        <input placeholder="Enter a name..." type="text" id="category-add__name" name="name" pattern="[a-zA-Z]+" required />
                        <button type="submit">Add</button>
                    </label>
                </form>
                <br />
                <p className="success-info">{successMessage}</p>
            </section>
        );
    }
}

export default CategoryAdd;
