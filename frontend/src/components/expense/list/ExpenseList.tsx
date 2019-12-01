import React from 'react';
import { IExpense } from '../../../interfaces/IExpense';
import ExpenseService from '../service/ExpenseService';

interface State {
    expenses: IExpense[];
}

class ExpenseList extends React.PureComponent<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            expenses: [],
        };
    }

    async componentDidMount(): Promise<void> {
        this.fetchExpenses();
    }

    async fetchExpenses(): Promise<void> {
        const fetchedExpenses = await ExpenseService.getInstance().getAllExpenses();
        this.setState({
            expenses: fetchedExpenses,
        });
    }

    async handleRemoveExpense(id: number): Promise<void> {
        // TODO: implement me
        this.fetchExpenses();
    }

    render(): React.ReactNode {
        const { expenses } = this.state;
        return (
            <section className="expense-list">
                <h2>Expenses</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Text</th>
                            <th>Amount</th>
                            <th>Category</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            expenses.map((expense: IExpense) => (
                                <tr key={expense.id}>
                                    <td>{expense.id}</td>
                                    <td>{expense.text}</td>
                                    <td>{expense.amount}</td>
                                    <td>{expense.category}</td>
                                    <td>{expense.date}</td>
                                    <td><button type="button" className="removeBtn" onClick={() => this.handleRemoveExpense(expense.id)}>Remove</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        );
    }
};

export default ExpenseList;
