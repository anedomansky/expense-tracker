import React from 'react';
import { ICategory } from '../../../interfaces/ICategory';
import CategoryService from '../service/CategoryService';
import List from '../../common/list/List';

interface State {
    categories: ICategory[];
    success: boolean;
}

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
            <List
                title="Categories"
                success={success}
                addLinkInfo="There are no categories yet. You can add one"
                addLinkDestination="/category/add"
                items={categories}
            >
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
            </List>
        );
    }
}

export default CategoryList;
