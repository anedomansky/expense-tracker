import React from 'react';
import './CategoryList.scss';
import { ICategory } from '../../../interfaces/ICategory';
import CategoryService from '../service/CategoryService';

interface State {
    categories: ICategory[];
}

class CategoryList extends React.PureComponent<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            categories: [],
        };
    }

    async componentDidMount(): Promise<void> {
        const fetchedCategories = await CategoryService.getInstance().getAllCategories();
        this.setState({
            categories: fetchedCategories,
        });
        console.log(fetchedCategories, this.state.categories);
    }

    render(): React.ReactNode {
        return (
            <section className="category-list">
                <h2>Categories</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.categories.map((category: ICategory) => (
                                <tr key={category.id}>
                                    <td>{category.id}</td>
                                    <td>{category.name}</td>
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
