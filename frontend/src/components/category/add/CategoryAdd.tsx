import React, { ReactNode } from 'react';
import CategoryService from '../service/CategoryService';
import Add from '../../common/add/Add';

interface State {
    successMessage: string;
    name: string;
}

class CategoryAdd extends React.PureComponent<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            successMessage: '',
            name: '',
        };
    }

    addCategory = async (event: any): Promise<void> => {
        event.preventDefault();
        const response = await CategoryService.getInstance().addCategory(event.target[0].value);
        this.setState({
            successMessage: response.success,
            name: '',
        });
    }

    handleNameChange = (event: any): void => {
        this.setState({
            name: event.target.value,
        });
    }

    render(): ReactNode {
        const { successMessage, name } = this.state;
        return (
            <Add
                title="Add a new category"
                onSubmit={this.addCategory}
                successMessage={successMessage}
            >
                <label htmlFor="add-item__name">
                    Name:
                    <br />
                    <input onChange={() => onChange(event)} placeholder="Enter a name..." type="text" id="add-item__name" name="name" pattern="[a-zA-Z]+" value={name} required />
                </label>
                <button type="submit">Add</button>
            </Add>
        );
    }
}

export default CategoryAdd;
