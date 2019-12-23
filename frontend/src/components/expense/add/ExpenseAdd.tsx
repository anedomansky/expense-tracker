import React, { ReactNode } from 'react';
import ExpenseService from '../service/ExpenseService';
import Add from '../../common/add/Add';

// TODO: implement - centered <form>
interface State {
    successMessage: string;
    name: string;
}

class ExpenseAdd extends React.PureComponent<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            successMessage: '',
            name: '',
        };
    }

    addExpense = async (event: any): Promise<void> => {
        event.preventDefault();
        const response = await ExpenseService.getInstance().addExpense(event.target[0].value);
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
                title="Add a new expense"
                value={name}
                onSubmit={this.addExpense}
                onChange={this.handleNameChange}
                successMessage={successMessage}
                showCategoryInput
            />
        );
    }
}

export default ExpenseAdd;
