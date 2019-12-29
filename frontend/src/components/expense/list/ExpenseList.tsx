import React from 'react';
import { IExpense } from '../../../interfaces/IExpense';
import ExpenseService from '../service/ExpenseService';
import List from '../../common/list/List';

interface State {
    expenses: IExpense[];
    success: boolean;
    successMessage: string;
}

class ExpenseList extends React.PureComponent<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            expenses: [],
            success: false,
            successMessage: '',
        };
    }

    async componentDidMount(): Promise<void> {
        await this.fetchExpenses();
    }

    async fetchExpenses(): Promise<void> {
        const fetchedExpenses = await ExpenseService.getInstance().getAllExpenses();
        this.setState({
            expenses: fetchedExpenses,
            success: true,
        });
    }

    async handleRemoveExpense(id: number): Promise<void> {
        const response = await ExpenseService.getInstance().removeExpense(id);
        await this.fetchExpenses();
        this.setState({
            successMessage: response.success,
        });
    }

    render(): React.ReactNode {
        const { expenses, success, successMessage } = this.state;
        return (
            <List
                title="Expenses"
                success={success}
                addLinkInfo="There are no expenses yet. You can add one"
                addLinkDestination="/expense/add"
                items={expenses}
                successMessage={successMessage}
            >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Text</th>
                        <th>Amount in €</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        expenses.map((expense: IExpense) => (
                            <tr key={expense.id}>
                                <td>{expense.id}</td>
                                <td>{expense.description}</td>
                                <td>{expense.amount}</td>
                                <td>{expense.category}</td>
                                <td>{expense.date}</td>
                                <td><button type="button" className="removeBtn" onClick={(): Promise<void> => this.handleRemoveExpense(expense.id)}>Remove</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </List>
        );
    }
}

export default ExpenseList;
