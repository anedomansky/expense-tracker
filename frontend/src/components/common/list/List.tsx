import React from 'react';
import './List.scss';
import { Link } from 'react-router-dom';

interface Props {
    title: string;
    addLinkInfo: string;
    addLinkDestination: string;
    success: boolean;
    items: any[];
    successMessage: string;
}

const List: React.FC<Props> = ({ title, addLinkInfo, addLinkDestination, success, items, children, successMessage }) => (
    <section className="list-items">
        <h2 className="list-items__heading">{title}</h2>
        {
            success && items.length === 0
            && (
                <p>
                    {addLinkInfo}
                    <Link to={addLinkDestination} className="list-items__add--link"> here</Link>
                </p>
            )
        }
        {
            success && items.length > 0
            && (
                <table className="list-items__table">
                    { children }
                </table>
            )
        }
        <p className="success-info">{successMessage}</p>
    </section>
);

export default List;
