import React from 'react';
import a from '../images/a.png';
import b from '../images/b.png';
import c from '../images/c.png';
import d from '../images/d (2).png';
import e from '../images/e.png';
import f from '../images/f (2).png';
import g from '../images/g.png';
import h from '../images/h.png';
import i from '../images/i.png';
import j from '../images/j.png';
import k from '../images/k.png';
import l from '../images/l.png';

const mockData = [
    { id: 1, image: a, text: 'Shoply v-neck maxi silk gown', price: 300 },
    { id: 2, image: b, text: 'Shoply Cinderella silk gown', price: 300 },
    { id: 3, image: c, text: 'Shoply v-neck mermaid dress', price: 350 },
    { id: 4, image: d, text: 'Shoply red elegant solid color shoulder padded dress', price: 400 },
    { id: 5, image: e, text: 'Shoply solid peter pan collar blazer with rose', price: 700 },
    { id: 6, image: f, text: 'Summer solid square neck dress', price: 300 },
    { id: 7, image: g, text: 'Shoply elegant mesh patchwork puff dress', price: 250 },
    { id: 8, image: h, text: 'Women’s solid white daily wear long sleeve', price: 400 },
    { id: 9, image: i, text: 'Solid pu leather body con dress', price: 200 },
    { id: 10, image: j, text: 'Long sleeves peter pan collar baggy blazer', price: 500 },
    { id: 11, image: k, text: 'Shoply modely double breasted dress', price: 600 },
    { id: 12, image: l, text: 'Shoply ruffle trim ruched bodycon dress', price: 200 },
];

const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginTop: '2rem',
    width: '90%',
    padding: '0 2rem',
};

const itemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
};

const buttonStyle = {
    backgroundColor: 'black',
    color: 'white',
    height: '2rem',
    width: '7rem',
    borderRadius: '10px',
    margin: '2rem auto',
    display: 'block',
};

const addToCartButtonStyle = {
    backgroundColor: "rgba(217, 217, 217, 1)",
    color: 'black',
    height: '2rem',
    width: '7rem',
    borderRadius: '5px',
    marginLeft: '10px',
};

const textStyle = {
    marginBottom: '3rem', 
    fontSize: '14px', 
    fontWeight: 'bold'
};

const priceButtonContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '3rem', 
};

const RightBar = () => {
    return (
        <div style={gridStyle}>
            {mockData.map(item => (
                <div key={item.id} style={itemStyle}>
                    <img src={item.image} alt={item.text} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '13px' }} />
                    <p style={textStyle}>{item.text}</p>
                    <div style={priceButtonContainerStyle}>
                        <p>${item.price}</p>
                        <button style={addToCartButtonStyle}>Add to Cart</button>
                    </div>
                </div>
            ))}
            <button style={buttonStyle}>Load more</button>
        </div>
    );
}

export default RightBar;
