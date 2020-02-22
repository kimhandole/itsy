import React from 'react';
import { withRouter } from 'react-router-dom';
import { faGithub, faAngellist, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            who: "",
            what: "",
            when: "",
            productType: "physical",
            description: "",
            price: "",
            quantity: "1",
            category: "",
            photoFile: null,
            photoUrl: null
        }

        this.updateType = this.updateType.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.updateWho = this.updateWho.bind(this);
        this.updateWhen = this.updateWhen.bind(this);
        this.updateWhat = this.updateWhat.bind(this);
        this.updateCategory = this.updateCategory.bind(this);
        this.updatePrice = this.updatePrice.bind(this);
        this.updateQuantity = this.updateQuantity.bind(this);
        this.updateDescription = this.updateDescription.bind(this);


        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddPhoto = this.handleAddPhoto.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentDidMount() {
        const footer = document.getElementsByClassName("footer")[0];
        footer.style.display = "none";
    }

    componentWillUnmount() {
        const footer = document.getElementsByClassName("footer")[0];
        footer.style.display = "flex";
    }

    updateTitle() {
        return e => this.setState({
            title: e.currentTarget.value
        });
    }

    updateWho() {
        return e => this.setState({
            who: e.currentTarget.value
        });
    }

    updateWhat() {
        return e => this.setState({
            what: e.currentTarget.value
        });
    }

    updateWhen() {
        return e => this.setState({
            when: e.currentTarget.value
        });
    }

    updateCategory() {
        return e => this.setState({
            category: e.currentTarget.value
        });
    }

    updatePrice() {
        return e => this.setState({
            price: e.currentTarget.value
        });
    }

    updateQuantity() {
        return e => this.setState({
            quantity: e.currentTarget.value
        });
    }

    updateDescription() {
        return e => this.setState({
            description: e.currentTarget.value
        });
    }

    updateType() {
        return e => this.setState({
            productType: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger
        const formData = new FormData();
        formData.append('product[title]', this.state.title);
        formData.append('product[product_type]', this.state.productType);
        formData.append('product[who]', this.state.who);
        formData.append('product[what]', this.state.what);
        formData.append('product[when]', this.state.when);
        formData.append('product[description]', this.state.description);
        formData.append('product[price]', this.state.price);
        formData.append('product[quantity]', this.state.quantity);
        formData.append('product[category_id]', this.state.category);
        formData.append('product[shop_id]', this.props.shopId);
        formData.append('product[photo]', this.state.photoFile);

        
        this.props.createProduct(formData);
        this.props.history.push(`/shops/${this.props.shopId}`);
    }
    
    handleAddPhoto(e) {
        e.preventDefault();
        const fileInput = document.getElementById("add-photo-input");
        fileInput.click();
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({
                photoFile: file,
                photoUrl: fileReader.result
            });
        }
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleCancel(e) {
        e.preventDefault();
        this.props.history.goBack();
    }

    renderPreview() {
        if (this.state.photoUrl) {
            return (
                <div className="product-form-photos-descriptions-image preview-image" >
                    <img src={this.state.photoUrl} alt="preview" className="preview" />
                </div>
            );
        } 
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
                            {this.renderPreview()}
                            <div className="product-form-photos-descriptions-image add-product">
                                <div id="add-photo-input-container" onClick={this.handleAddPhoto}>
                                    <FontAwesomeIcon icon={faCamera} size="2x" />
                                    <p>Add a photo</p>
                                </div>
                                <input id="add-photo-input" type="file" onChange={this.handleFile}>

                                </input>
                            </div>
                            <div className="product-form-photos-descriptions-image" >
                                <div id="photo-1"></div>
                                <p>Primary photo</p>
                            </div>
                            <div className="product-form-photos-descriptions-image">
                                <div id="photo-2"></div>
                                <p>Every angle</p>
                            </div>
                            <div className="product-form-photos-descriptions-image">
                                <div id="photo-3"></div>
                                <p>Every angle</p>
                            </div>
                            <div className="product-form-photos-descriptions-image">
                                <div id="photo-4"></div>
                                <p>Every angle</p>
                            </div>
                            <div className="product-form-photos-descriptions-image">
                                <div id="photo-5"></div>
                                <p>Details</p>
                            </div>
                            <div className="product-form-photos-descriptions-image">
                                <div id="photo-6"></div>
                                <p>In use</p>
                            </div>
                            <div className="product-form-photos-descriptions-image">
                                <div id="photo-7"></div>
                                <p>Size and scale</p>
                            </div>
                            <div className="product-form-photos-descriptions-image">
                                <div id="photo-8"></div>
                                <p>Styled scene</p>
                            </div>
                            <div className="product-form-photos-descriptions-image last-photo">
                                <div id="photo-9"></div>
                                <p>Variations</p>             
                            </div>
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
                        <p className="product-form-photos-descriptions-text-description white">Tell</p>
                        <p className="product-form-photos-descriptions-text-title">Category *</p>
                        <p className="product-form-photos-descriptions-text-description">Select a word description of your item to get category suggestions that will help more shoppers find it.</p>
                        <p className="product-form-photos-descriptions-text-title">Type *</p>
                        <p className="product-form-photos-descriptions-text-description white">Type</p>
                        <p className="product-form-photos-descriptions-text-title">Description *</p>
                        <p className="product-form-photos-descriptions-text-description">Start with a brief overview that describes your item’s finest features. Shoppers will only see the first few lines of your description at first, so make it count!</p>
                        <p className="product-form-photos-descriptions-text-description">Not sure what else to say? Shoppers also like hearing about your process, and the story behind this item.</p>


                    </section>
                    <div className="product-form-photos-descriptions-images-container">
                        <section className="product-form-photos-descriptions-images">
                            <input type="text" className="product-form-detail-title-input" value={this.state.title} onChange={this.updateTitle()} required/>
                            <div className="product-form-detail-about-container">
                                <select className="product-form-detail-about-select product-description" onChange={this.updateWho()} required>
                                    <option value="">Who made it?</option>
                                    <optgroup label="Select a maker">
                                        <option value="I did it">I did it</option>
                                        <option value="A member of my shop">A member of my shop</option>
                                        <option value="Another company or person">Another company or person</option>
                                    </optgroup>

                                </select>
                                
                                <select className="product-form-detail-about-select middle-select product-description" onChange={this.updateWhat()} required>
                                    <option value="">What is it?</option>
                                    <optgroup label="Select a use">
                                        <option value="A finished product">A finished product</option>
                                        <option value="A supply or tool to make things">A supply or tool to make things</option>
                                    </optgroup>

                                </select>
                                <select className="product-form-detail-about-select product-description" onChange={this.updateWhen()} required>
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
                                <select className="product-form-detail-about-select product-description" onChange={this.updateCategory()} required>
                                    <option value="">What describes it?</option>
                                    <optgroup label="Select a category">
                                        <option value="1">Jewelry</option>
                                        <option value="2">Accessories</option>
                                        <option value="3">Clothing</option>
                                        <option value="4">Shoes</option>
                                        <option value="5">Home</option>
                                        <option value="6">Living</option>
                                        <option value="7">Wedding</option>
                                        <option value="8">Party</option>
                                        <option value="9">Toys</option>
                                        <option value="10">Entertainment</option>
                                        <option value="11">Art</option>
                                        <option value="12">Collectibles</option>
                                        <option value="13">Craft</option>
                                        <option value="14">Supplies</option>
                                        <option value="15">Vintage</option>
                                        <option value="16">Gifts</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div className="product-form-detail-type-container">
                                <div className="radio">
                                    <label>
                                        <input type="radio" value="physical" checked={this.state.productType === "physical"} onChange={this.updateType()} />
                                            &nbsp;&nbsp;&nbsp;Physical
                                    </label>
                                    <p>
                                       A tangible item that you will ship to buyers.
                                    </p>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input type="radio" value="digital" checked={this.state.productType === "digital"} onChange={this.updateType()}/>
                                            &nbsp;&nbsp;&nbsp;Digital
                                    </label>
                                    <p>
                                        A digital file that buyers will download.
                                    </p>
                                </div>
                            </div>
                            <textarea className="product-form-detail-description-container product-description" rows="16" data-field="description" onChange={this.updateDescription()} required />
                        </section>
                    </div>
                </section>
            </section>
        );
    }

    renderPricing() {
        return (
            <section className="product-form-photos last-pricing">  
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
                            <div className="product-form-price-container">
                                <input type="number" className="product-form-detail-title-input price" min={1} placeholder="$" value={this.state.price} onChange={this.updatePrice()} step=".01" required/>
                                <input type="number" className="product-form-detail-title-input quantity" min={1} value={this.state.quantity} onChange={this.updateQuantity()} required/>
                            </div>
                        </section>
                    </div>
                </section>

            </section>
        );
    }

    renderFooter() {
        return (
            <div className="footer-type-2-container">
                <footer className="footer-type-2">
                    <div>
                        Created by <a href="https://handolekim.com" target="_blank"><u>Han Dole Kim</u></a>
                    </div>
                    <a href="https://github.com/kimhandole/itsy" target="_blank">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/han-dole-kim-76979996" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://angel.co/kimhandole" target="_blank">
                        <FontAwesomeIcon icon={faAngellist} size="2x" />
                    </a>
                </footer>
                <div className="empty-bottom">

                </div>
            </div>
        );
    }

    render() {
        return (
            <form className="product-form-container" onSubmit={this.handleSubmit}>
                <h1 className="product-form-container-title">Add a new listing</h1>
                <div className="product-form-photos-container">
                    {this.renderPhotos()}
                    {this.renderProductDetails()}
                    {this.renderPricing()}
                    {this.renderFooter()}
                </div>
                <div className="product-form-bottom-nav">
                    <div>
                        <button className="cancel-btn" onClick={this.handleCancel}>Cancel</button>
                        <p><b>This listing isn't active yet. </b>It will be available to shoppers once you open your shop.</p>
                    </div>
                    <div className="save-and-continue-btn">
                        <input type="submit" value="Save and continue" />
                    </div>
                </div>
            </form>
        );
    }
}

export default withRouter(ProductForm);