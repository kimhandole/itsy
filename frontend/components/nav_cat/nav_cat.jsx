import React from 'react';

const NavCat = () => {
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

    const categoryItems = [];

    for (const [index, value] of category.entries()) {
        categoryItems.push(<li className="nav-cat-list-item" key={index}>{value}</li>)
    }

    return (
        <div id="nav-cat">
            <ul className="nav-cat-list">
                {categoryItems}
            </ul>
        </div>
    );
}

export default NavCat;