import React from 'react';
import './CategoryList.scss';
import { ICategory } from '../../../interfaces/ICategory';

interface IState {
    categories: ICategory[];
}

class CategoryList extends React.PureComponent<IState> {
    constructor(props: any) {
        super(props);
        this.state= {
            categories: []
        }
    }

    componentDidMount(): void {
        // TODO: fetch the category rows - update the state - render them
    }

    render(): React.ReactNode {
        return (
            <section className="category-list">
                <h2>Categories</h2>
                <table>
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </section>
        )
    }
}

export default CategoryList;
