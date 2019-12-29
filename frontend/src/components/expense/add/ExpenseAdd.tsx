import React, { ReactNode } from 'react';
import ExpenseService from '../service/ExpenseService';
import Add from '../../common/add/Add';
import CategoryService from '../../category/service/CategoryService';
import { ICategory } from '../../../interfaces/ICategory';

interface State {
    successMessage: string;
    description: string;
    amount: number;
    categoryNames: ICategory[];
    selectedCategory: string;
}

class ExpenseAdd extends React.PureComponent<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            successMessage: '',
            description: '',
            amount: 0,
            categoryNames: [],
            selectedCategory: '',
        };
    }

    async componentDidMount(): Promise<void> {
        const fetchedCategoryNames = await CategoryService.getInstance().getAllCategories();
        this.setState({
            categoryNames: fetchedCategoryNames,
        });
    }

    addExpense = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault();
        const { description, amount, selectedCategory } = this.state;
        const response = await ExpenseService.getInstance().addExpense(description, amount, selectedCategory);
        this.setState({
            successMessage: response.success,
            description: '',
            amount: 0,
            selectedCategory: '',
        });
    }

    handleDescriptionChange(event: React.FormEvent<HTMLInputElement>): void {
        this.setState({
            description: event.currentTarget.value,
        });
    }

    handleAmountChange(event: React.FormEvent<HTMLInputElement>): void {
        this.setState({
            amount: parseFloat(event.currentTarget.value),
        });
    }

    handleSelectedCategoryChange(event: React.FormEvent<HTMLSelectElement>): void {
        this.setState({
            selectedCategory: event.currentTarget.value,
        });
    }

    render(): ReactNode {
        const {
            successMessage,
            categoryNames,
            description,
            amount,
        } = this.state;
        return (
            <Add
                title="Add a new expense"
                onSubmit={this.addExpense}
                successMessage={successMessage}
            >
                <label htmlFor="add-item__name">
                    Description:
                    <br />
                    <input onChange={(event): void => this.handleDescriptionChange(event)} placeholder="Enter a Description..." type="text" id="add-item__name" name="name" pattern="[a-zA-Z]+" value={description} required />
                </label>
                <label htmlFor="add-item__name">
                    Amount(in €):
                    <br />
                    <input onChange={(event): void => this.handleAmountChange(event)} placeholder="Enter an Amount..." type="number" id="add-item__name" name="name" value={amount} required />
                </label>
                <label htmlFor="add-item__category">
                    Category:
                    <br />
                    <select name="category" id="add-item__category" onChange={(event): void => this.handleSelectedCategoryChange(event)}>
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
