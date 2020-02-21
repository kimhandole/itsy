import React from 'react';
import Footer from '../footer/footer';
import LoadingIcon from '../loading/loading_icon';

class CategoryShow extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     category: null
        // }
    }

    componentDidMount() {
    //     this.props.fetchCategory(this.props.match.params.categoryId);
    //     this.props.fetchShops();
    //     this.props.fetchProducts();
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


    // componentDidUpdate(prevProps) {
    //     if (this.props.match.params.categoryId !== prevProps.match.params.categoryId){
    //         this.props.fetchCategory(this.props.match.params.categoryId);
    //         this.props.fetchShops();
    //         this.props.fetchProducts();
    //     }
    // }

    // toProductPage(product) {
    //     event.preventDefault();
    //     return (event) => {
    //         event.preventDefault();
    //         this.props.history.push(`/shops/${product.shopId}/products/${product.id}`)
    //     }
    // }

    render() {
        // let {category, shops, products} = this.props;

        // if (!category || Object.keys(shops).length === 0 || !products){
        //     return <LoadingIcon/>
        // }

        // const categoryItems = products.map(product => {
        //     return (
        //         <li key={product.id} >
        //             <img src={product.imageUrls[0]} />
        //             <p>{product.title.slice(0, 35)}...</p>
        //             <p className="category-shop-name">{shops[product.shopId].name}</p>
        //             <p>USD {product.price}</p>
        //         </li>
        //     )
        // });

        // return (
        //     <section id="category-show">
        //         <ul>
        //             {categoryItems}
        //         </ul>
        //     </section>
        // )
        
        // if (this.state.category === null) {
        //     <LoadingIcon />
        // }

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
                <Footer isDark={true} />
            </section>
        )
    }

}



export default CategoryShow;