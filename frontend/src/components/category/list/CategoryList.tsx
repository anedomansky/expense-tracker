import React from 'react';
import './CategoryList.scss';
import { ICategory } from '../../../interfaces/ICategory';
import CategoryService from '../service/CategoryService';

interface State {
    categories: ICategory[];
}

// TODO: refactor to container + presentational component
class CategoryList extends React.PureComponent<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            categories: [],
        };
    }

    async componentDidMount(): Promise<void> {
        await this.fetchCategories();
    }

    async handleRemoveCategory(id: number): Promise<void> {
        await CategoryService.getInstance().removeCategory(id);
        await this.fetchCategories();
    }

    async fetchCategories(): Promise<void> {
        const fetchedCategories = await CategoryService.getInstance().getAllCategories();
        this.setState({
            categories: fetchedCategories,
        });
    }

    render(): React.ReactNode {
        const { categories } = this.state;
        return (
            <section className="category-list">
                <h2>Categories</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories.map((category: ICategory) => (
                                <tr key={category.id}>
                                    <td>{category.id}</td>
                                    <td>{category.name}</td>
                                    <td><button type="button" className="removeBtn" onClick={() => this.handleRemoveCategory(category.id)}>Remove</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        );
    }
}

export default CategoryList;
