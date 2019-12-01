import React, { ReactNode } from 'react';
import './CategoryAdd.scss';
import CategoryService from '../service/CategoryService';

interface State {
    successMessage: string;
    name: string;
}

// TODO: reset form after submit
class CategoryAdd extends React.PureComponent<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            successMessage: '',
            name: '',
        };
    }

    async addCategory(event: any): Promise<void> {
        event.preventDefault();
        const response = await CategoryService.getInstance().addCategory(event.target[0].value);
        this.setState({
            successMessage: response.success,
            name: '',
        });
    }

    handleNameChange(event: any): void {
        this.setState({
            name: event.target.value,
        });
    }

    render(): ReactNode {
        const { successMessage, name } = this.state;
        return (
            <section className="category-add">
                <h2>Add a new category</h2>
                <form onSubmit={() => this.addCategory(event)}>
                    <label htmlFor="category-add__name">
                        Name:
                        <input onChange={() => this.handleNameChange(event)} placeholder="Enter a name..." type="text" id="category-add__name" name="name" pattern="[a-zA-Z]+" value={name} required />
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
