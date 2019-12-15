import React from 'react';
import { Link } from 'react-router-dom';
import { IExpense } from '../../../interfaces/IExpense';
import ExpenseService from '../service/ExpenseService';
import './ExpenseList.scss';

interface State {
    expenses: IExpense[];
    success: boolean;
}

class ExpenseList extends React.PureComponent<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            expenses: [],
            success: false,
        };
    }

    async componentDidMount(): Promise<void> {
        this.fetchExpenses();
    }

    async fetchExpenses(): Promise<void> {
        const fetchedExpenses = await ExpenseService.getInstance().getAllExpenses();
        this.setState({
            expenses: fetchedExpenses,
            success: true,
        });
    }

    async handleRemoveExpense(id: number): Promise<void> {
        // TODO: implement me
        this.fetchExpenses();
    }

    render(): React.ReactNode {
        const { expenses, success } = this.state;
        return (
            <section className="expense-list">
                <h2 className="expense-heading">Expenses</h2>
                {
                    success && expenses.length === 0
                    && (
                        <p>
                            There are no expenses yet. You can add one
                            <Link to="/expense/add" className="expense-add--link"> here</Link>
                        </p>
                    )
                }
                {
                    success && expenses.length > 0
                    && (
                        <table className="expense-table">
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
                    )
                }
            </section>
        );
    }
};

export default ExpenseList;
