import React from 'react';
import { withRouter } from 'react-router-dom';

class ProductForm extends React.Component {
    constructor(props) {
        super(props);
    }

    renderPhotos() {
        return (
            <section className="product-form-photos">  
                <p className="product-form-photos-title">Photos</p>
                <p className="product-form-photos-description">Add as many as you can so buyer can see every detail.</p>
                <section className="product-form-photos-descriptions">
                    <section className="product-form-photos-descriptions-text">
                        <p className="product-form-photos-descriptions-text-title">Photos *</p>
                        <p className="product-form-photos-descriptions-text-description">Use up to ten photos to show your item's most important qualities.</p>
                        <p className="product-form-photos-descriptions-text-description">Tips:</p>
                        <ul className="product-form-photos-descriptions-text-tips">
                            <li>Use natural light and no flash.</li>
                            <li>Include a common object for scale.</li>
                            <li>Show the item being held, worn, or used.</li>
                            <li>Shoot against a clean, simple background.</li>
                        </ul>
                    </section>
                    <div className="product-form-photos-descriptions-images-container">
                        <section className="product-form-photos-descriptions-images">
                            <div className="product-form-photos-descriptions-image"></div>
                            <div className="product-form-photos-descriptions-image"></div>
                            <div className="product-form-photos-descriptions-image"></div>
                            <div className="product-form-photos-descriptions-image"></div>
                            <div className="product-form-photos-descriptions-image"></div>
                            <div className="product-form-photos-descriptions-image"></div>
                            <div className="product-form-photos-descriptions-image"></div>
                            <div className="product-form-photos-descriptions-image"></div>
                            <div className="product-form-photos-descriptions-image"></div>
                            <div className="product-form-photos-descriptions-image"></div>
                        </section>
                    </div>
                </section>
            </section>
        );
    }

    renderProductDetails() {
        return (
            <section className="product-form-photos">
                <p className="product-form-photos-title">Listing details</p>
                <p className="product-form-photos-description">Tell the world all about your item and why they’ll love it.</p>
                <section className="product-form-photos-descriptions">
                    <section className="product-form-photos-descriptions-text">
                        <p className="product-form-photos-descriptions-text-title">Title *</p>
                        <p className="product-form-photos-descriptions-text-description">Include keywords that buyers would use to search for your item.</p>
                        <p className="product-form-photos-descriptions-text-title">About this listing *</p>
                        <p className="product-form-photos-descriptions-text-description white">Tell buyers background information about your item.</p>
                        <p className="product-form-photos-descriptions-text-title">Category *</p>
                        <p className="product-form-photos-descriptions-text-description">Select a word description of your item to get category suggestions that will help more shoppers find it.</p>
                        <p className="product-form-photos-descriptions-text-title">Type *</p>
                        <p className="product-form-photos-descriptions-text-description white">Type a two- or three-word description of your item to get category suggestions that will help more shoppers find it.</p>
                        <p className="product-form-photos-descriptions-text-title">Description *</p>
                        <p className="product-form-photos-descriptions-text-description">Start with a brief overview that describes your item’s finest features. Shoppers will only see the first few lines of your description at first, so make it count!</p>
                        <p className="product-form-photos-descriptions-text-description">Not sure what else to say? Shoppers also like hearing about your process, and the story behind this item.</p>


                    </section>
                    <div className="product-form-photos-descriptions-images-container">
                        <section className="product-form-photos-descriptions-images">
                            <input type="text" className="product-form-detail-title-input"/>
                            <div className="product-form-detail-about-container">
                                <select className="product-form-detail-about-select">
                                    <option value="">Who made it?</option>
                                    <optgroup label="Select a maker">
                                        <option value="I did it">I did it</option>
                                        <option value="A member of my shop">A member of my shop</option>
                                        <option value="Another company or person">Another company or person</option>
                                    </optgroup>

                                </select>
                                
                                <select className="product-form-detail-about-select middle-select">
                                    <option value="">What is it?</option>
                                    <optgroup label="Select a use">
                                        <option value="A finished product">A finished product</option>
                                        <option value="A supply or tool to make things">A supply or tool to make things</option>
                                    </optgroup>

                                </select>
                                <select className="product-form-detail-about-select">
                                    <option value="">When was it made?</option>
                                    <optgroup label="Not yet made">
                                        <option value="Made to order">Made to order</option>
                                    </optgroup>
                                    <optgroup label="Recently">
                                        <option value="2020-2020">2020-2020</option>
                                        <option value="2010-2019">2010-2019</option>
                                        <option value="2001-2009">2001-2009</option>
                                    </optgroup>
                                    <optgroup label="Vintage">
                                        <option value="before 2001">before 2001</option>
                                        <option value="2000-2000">2000-2000</option>
                                        <option value="1990s">1990s</option>
                                        <option value="1980s">1980s</option>
                                        <option value="1970s">1970s</option>
                                        <option value="1960s">1960s</option>
                                        <option value="1950s">1950s</option>
                                        <option value="1940s">1940s</option>
                                        <option value="1930s">1930s</option>
                                        <option value="1920s">1920s</option>
                                        <option value="1910s">1910s</option>
                                        <option value="1900-1909">1900-1909</option>
                                        <option value="1800s" disabled>1800s</option>
                                        <option value="1700s" disabled>1700s</option>
                                        <option value="before 1700" disabled>before 1700</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div className="product-form-detail-about-container">
                                <select className="product-form-detail-about-select">
                                    <option value="">What describes it?</option>
                                    <optgroup label="Select a category">
                                        <option value="Jewelry">Jewelry</option>
                                        <option value="Accessories">Accessories</option>
                                        <option value="Clothing">Clothing</option>
                                        <option value="Shoes">Shoes</option>
                                        <option value="Home">Home</option>
                                        <option value="Living">Living</option>
                                        <option value="Wedding">Wedding</option>
                                        <option value="Party">Party</option>
                                        <option value="Toys">Toys</option>
                                        <option value="Entertainment">Entertainment</option>
                                        <option value="Art">Art</option>
                                        <option value="Collectibles">Collectibles</option>
                                        <option value="Craft">Craft</option>
                                        <option value="Supplies">Supplies</option>
                                        <option value="Vintage">Vintage</option>
                                        <option value="Gifts">Gifts</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div className="product-form-detail-type-container">
                                <div className="radio">
                                    <label>
                                        <input type="radio" value="Physical" defaultChecked/>
                                            &nbsp;&nbsp;&nbsp;Physical
                                    </label>
                                    <p>
                                       A tangible item that you will ship to buyers.
                                    </p>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input type="radio" value="Digital" />
                                            &nbsp;&nbsp;&nbsp;Digital
                                    </label>
                                    <p>
                                        A digital file that buyers will download.
                                    </p>
                                </div>
                            </div>
                            <textarea className="product-form-detail-description-container" rows="16" data-field="description"/>
                        </section>
                    </div>
                </section>
            </section>
        );
    }

    renderPricing() {
        return (
            <section className="product-form-photos">  
                <p className="product-form-photos-title pricing">Inventory and pricing</p>
                <section className="product-form-photos-descriptions">
                    <section className="product-form-photos-descriptions-text">
                        <p className="product-form-photos-descriptions-text-title">Price *</p>
                        <p className="product-form-photos-descriptions-text-description">Factor in the costs of materials and labor, plus any related business expenses. Consider the total price buyers will pay too—including shipping.</p>
                        <p className="product-form-photos-descriptions-text-title">Quantity *</p>
                        <p className="product-form-photos-descriptions-text-description">For quantities greater than one, this listing will renew automatically until it sells out. You’ll be charged a $0.20 USD listing fee each time.</p>
                    </section>
                    <div className="product-form-photos-descriptions-images-container">
                        <section className="product-form-photos-descriptions-images">
                            
                        </section>
                    </div>
                </section>

            </section>
        );
    }

    render() {
        return (
            <section className="product-form-container">
                <h1 className="product-form-container-title">Add a new listing</h1>
                <div className="product-form-photos-container">
                    {this.renderPhotos()}
                    {this.renderProductDetails()}
                    {this.renderPricing()}
                </div>
            </section>
        );
    }
}

export default withRouter(ProductForm);