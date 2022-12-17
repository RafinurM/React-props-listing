class ListModel {
    constructor(listing_id, url, MainImage, title, currency_code, price, quantity) {
        this.listing_id = listing_id;
        this.url = url;
        this.MainImage = MainImage;
        this.title = title;
        this.currency_code = currency_code;
        this.price = price;
        this.quantity = quantity;
    }
    
}

export default ListModel