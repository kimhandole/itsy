import React from 'react';
import Footer from '../footer/footer';
import LoadingIcon from '../loading/loading_icon';
import ProductIndexContainer from '../product/product_index_container'


class CategoryShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.fetchProducts(this.props.categoryId);
    }

    componentDidUpdate() {
        this.fetchProducts(this.props.categoryId);
    }

    fetchProducts(categoryId) {
        switch (categoryId) {
            case "15":
                this.props.fetchProductsByCategory(this.props.categoryId);
                break;

            case "16":
                this.props.fetchProductsByCategory(this.props.categoryId);
                break 

            default:
                this.props.fetchProductsByCategory(this.props.categoryId);
                this.props.fetchProductsByCategory(`${parseInt(this.props.categoryId) + 1}`);
                break;
        }
    }

    getCategory(categoryId) {
        switch (categoryId) {
            case "1":
                return "Jewelry & Accessories";
                
            case "3":
                return "Clothing & Shoes";
                
            case "5":
                return "Home & Living";
                
            case "7":
                return "Wedding & Party";
                
            case "9":
                return "Toys & Entertainment";
                
            case "11":
                return "Art & Collectibles";
                
            case "13":
                return "Craft & Supplies";
                
            case "15":
                return "Vintage";
                
            case "16":
                return "Gifts";

            default:
                return "All";
        }
    }


    render() {

        return (
            <section id="category-show">
                <p className="category-show-header">
                    <a href="#/" className="category-link">
                        Home
                    </a> 
                    &nbsp;
                    >
                    &nbsp;
                    <a href={`#/categories/${this.props.categoryId}`} className="category-link">
                        {this.getCategory(this.props.categoryId)}
                    </a>
                </p>
                <h1 className="category-title">{this.getCategory(this.props.categoryId)}</h1>
                <ProductIndexContainer fetchAll={false} />
                <Footer isDark={true} />
            </section>
        )
    }

}



export default CategoryShow;