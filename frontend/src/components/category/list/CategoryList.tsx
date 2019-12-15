import React from 'react';
import './CategoryList.scss';
import { Link } from 'react-router-dom';
import { ICategory } from '../../../interfaces/ICategory';
import CategoryService from '../service/CategoryService';

interface State {
    categories: ICategory[];
    success: boolean;
}

// TODO: refactor to container + presentational component
// TODO: add express server for handling url requests /* and serve ./dist/index.html
class CategoryList extends React.PureComponent<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            categories: [],
            success: false,
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
            success: true,
        });
    }

    render(): React.ReactNode {
        const { categories, success } = this.state;
        return (
            <section className="category-list">
                <h2 className="category-heading">Categories</h2>
                {
                    success && categories.length === 0
                    && (
                        <p>
                            There are no categories yet. You can add one
                            <Link to="/category/add" className="category-add--link"> here</Link>
                        </p>
                    )
                }
                {
                    success && categories.length > 0
                    && (
                        <table className="category-table">
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
                    )}
            </section>
        );
    }
}

export default CategoryList;
