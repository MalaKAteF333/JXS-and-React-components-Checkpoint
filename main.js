// App.js
import React from "react";
import { Card } from "react-bootstrap";
import Name from "./components/Name";
import price from "./components/price";
import Description from "./components/Description";
import Image from "./components/Image";
import ProductDta from "./ProductDta";

const firstName = "YourFirstName";
// provide your first name here

const App = () => {
    return (
        <div className="container">
            <Card style={{ width: '18rem',
            margin: 'auto', marginTop: '50px'}}>
                <Image/>
                <Card.Body>
                    <Name />
                    <Price />
                    <Descriotion />
                    </Card.Body>
                    </Card>
                </Card.Body>
            </Card>
            <P style={{ textAlign: 'center,
            marginTop: '20px'}}>
                Hello, {firstName ? firstName :
                'there'}!

            </P>
            
        </div>
    );
}

export default App;



// components/Name.js

import React from "react";
import productData from '../product';

const Name = () => {
    return (
        <h2>{productData.name}</h2>
    );
}

export default Name;

// components/price.js

import Reart from 'react';
import productData from '../product';

const price = () => {
    return (
        <p>{productData.price}</p>
    )
}

export default price;


// components/Description.js

import React from 'react';
import productData from '../product';

const Descriotion = () => {
    return (
        <p>{productData.Descriotion}</p>
    );
}


export default

