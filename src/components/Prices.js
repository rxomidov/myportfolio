import React from 'react';

const Prices = () => {
    const [header] = React.useState({
        mainHeader: "CHOOSE A PLAN",
        subHeading: "Pricing Plan",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            " Commodi consectetur consequuntur dolor inventore," +
            " nemo obcaecati quaerat repellendus rerum sit veniam?"
    });
    const [state] = React.useState([
        {
            id: 1,
            heading: "Basic",
            price: 50,
            msg1: "5GB Storage Space",
            msg2: "20GB Monthly Bandwidth",
            msg3: "My SQL Databases",
            msg4: "100 Email Account",
            msg5: "10 Free Domain Names"
        },
        {
            id: 2,
            heading: "Standart",
            price: 80,
            msg1: "5GB Storage Space",
            msg2: "20GB Monthly Bandwidth",
            msg3: "My SQL Databases",
            msg4: "100 Email Account",
            msg5: "10 Free Domain Names"
        },
        {
            id: 3,
            heading: "Premium",
            price: 160,
            msg1: "5GB Storage Space",
            msg2: "20GB Monthly Bandwidth",
            msg3: "My SQL Databases",
            msg4: "100 Email Account",
            msg5: "10 Free Domain Names"
        },
    ]);
    return (
        <div className="prices" id="prices">
            <div className="container">
                <div className="common">
                    <h3 className="heading">{header.mainHeader}</h3>
                    <h1 className="main-header">{header.subHeading}</h1>
                    <p className="mainContent">{header.text}</p>
                    <div className="commonBorder"></div>
                </div>
                <div className="row">
                    {state.map(prices => (
                        <div className="col-4" key={prices.id}>
                            <div className="price">
                                <div className="priceHeading">{prices.heading}</div>
                                <div className="price-rs"><span>&</span>{prices.price}</div>
                                <ul>
                                    <li>{prices.msg1}</li>
                                    <li>{prices.msg2}</li>
                                    <li>{prices.msg3}</li>
                                    <li>{prices.msg4}</li>
                                    <li>{prices.msg5}</li>
                                </ul>
                                <div className="price-btn">
                                    <a href="#" className="btn btn-outline">
                                        Purchase
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Prices;