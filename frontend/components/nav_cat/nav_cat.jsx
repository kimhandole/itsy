import React from 'react';
import { Link } from 'react-router-dom';


class NavCat extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const category = [
            "Jewelry & Accessories",
            "Clothing & Shoes",
            "Home & Living",
            "Wedding & Party",
            "Toys & Entertainment",
            "Art & Collectibles",
            "Craft & Supplies",
            "Vintage",
            "🎁Gifts"
        ];

        const categoryIds = [
            1,
            3,
            5,
            7,
            9,
            11,
            13,
            15,
            16
        ];

        const categoryItems = [];

        for (const [index, value] of category.entries()) {
            categoryItems.push(
                <Link key={index} to={`/categories/${categoryIds[index]}`}>
                    <li className="nav-cat-list-item" key={index}>
                        {value}
                    </li>
                </Link>
            )
        }

        return (
            <div id="nav-cat">
                <ul className="nav-cat-list">
                    {categoryItems}
                </ul>
            </div>
        );
    }
}

export default NavCat;