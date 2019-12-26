import React, { ReactNode } from 'react';
import ExpenseService from '../service/ExpenseService';
import Add from '../../common/add/Add';
import CategoryService from '../../category/service/CategoryService';
import { ICategory } from '../../../interfaces/ICategory';

// TODO: implement - centered <form>
interface State {
    successMessage: string;
    description: string;
    amount: number;
    categoryNames: ICategory[];
}

class ExpenseAdd extends React.PureComponent<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            successMessage: '',
            description: '',
            amount: 0,
            categoryNames: [],
        };
    }

    async componentDidMount(): Promise<void> {
        const fetchedCategoryNames = await CategoryService.getInstance().getAllCategories()
        this.setState({
            categoryNames: fetchedCategoryNames,
        });
    }

    addExpense = async (event: any): Promise<void> => {
        event.preventDefault();
        const response = await ExpenseService.getInstance().addExpense(event.target[0].value, event.target[1].value, event.target[2].value);
        this.setState({
            successMessage: response.success,
            description: '',
            amount: '',
        });
    }

    handleDescriptionChange(event: any): void {
        this.setState({
            description: event.target.value,
        });
    }

    handleAmountChange(event: any): void {
        this.setState({
            amount: event.target.value,
        });
    }

    render(): ReactNode {
        const { successMessage, categoryNames, description, amount } = this.state;
        return (
            <Add
                title="Add a new expense"
                onSubmit={this.addExpense}
                successMessage={successMessage}
            >
                <label htmlFor="add-item__name">
                    Description:
                    <br />
                    <input onChange={() => this.handleDescriptionChange(event)} placeholder="Enter a Description..." type="text" id="add-item__name" name="name" pattern="[a-zA-Z]+" value={description} required />
                </label>
                <label htmlFor="add-item__name">
                    Amount(in €):
                    <br />
                    <input onChange={() => this.handleAmountChange(event)} placeholder="Enter an Amount..." type="number" id="add-item__name" name="name" value={amount} required />
                </label>
                <label htmlFor="add-item__category">
                    Category:
                    <br />
                    <select name="category" id="add-item__category">
                        <option defaultChecked>-/-</option>
                        {
                            categoryNames?.map((category: ICategory, index: number): React.ReactNode => <option key={`${category.name}-${index}`}>{category.name}</option>)
                        }
                    </select>
                </label>
                <button type="submit">Add</button>
            </Add>
        );
    }
}

export default ExpenseAdd;
