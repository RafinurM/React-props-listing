import React from "react";
import PropTypes from 'prop-types';
import ListModel from "./ListModel";


function Listing(props) {
    let list = props.items.map((element, index) => element.state === 'active' ? <ListItem key={index} object={element} /> : undefined)
    return (<div className="item-list">{list}</div>)

}


function ListItem(object) {
    let string = !object.object.title ? undefined : object.object.title;
    let srcs = object.object.MainImage;
    let price = object.object.price;
    let currency = object.object.currency_code;
    let quantity = object.object.quantity;
    let quantityClass = 'item-quantity';

    if (quantity <= 10) {
        quantityClass = 'item-quantity level-low';
    } else if (quantity <= 20) {
        quantityClass = 'item-quantity level-medium';
    } else {
        quantityClass = 'item-quantity level-high';     
    }
    


    return (
        <div className="item">
            <div className="item-image">
                <a href={`${object.object.url}`}>
                    <img src={!srcs ? undefined : srcs.url_570xN} alt={object.object.title} />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{string.length > 50 ? string.slice(50, string.length - 1) + '...' : string}</p>
                <p className="item-price">{currency === 'USD' ? '$' : currency === 'EUR' ? '€' : ''}{price}{currency === 'GBP' ? ' GBP' : ''}</p>
                <p className={quantityClass}>{quantity} left</p>
            </div>
        </div>
    )
}


ListItem.propTypes = {
    props: PropTypes.instanceOf(ListModel)
}


ListItem.defaultProps = {
    listing_id: undefined,
    url: undefined,
    MainImage: undefined,
    title: undefined,
    currency_code: undefined,
    price: undefined,
    quantity: undefined,
}



export default Listing