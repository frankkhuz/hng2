import React from 'react';
import a from '../images/a.png'
import b from '../images/b.png'
import c from '../images/c.png'
import d from '../images/d (2).png'
import e from '../images/e.png'
import f from '../images/f (2).png'
import g from '../images/g.png'
import h from '../images/h.png'
import i from '../images/i.png'
import j from '../images/j.png'
import k from '../images/k.png'
import l from '../images/l.png'

const mockData = [
    { id: 1, image: a, text: 'Image 1', number: 1 },
    { id: 2, image: b, text: 'Image 2', number: 2 },
    { id: 3, image: c, text: 'Image 3', number: 3 },
    { id: 4, image: d, text: 'Image 4', number: 4 },
    { id: 5, image: e, text: 'Image 5', number: 5 },
    { id: 6, image: f, text: 'Image 6', number: 6 },
    { id: 7, image: g, text: 'Image 7', number: 7 },
    { id: 8, image: h, text: 'Image 8', number: 8 },
    { id: 9, image: i, text: 'Image 9', number: 9 },
    { id: 10, image: j, text: 'Image 10', number: 10 },
    { id: 11, image: k, text: 'Image 11', number: 11 },
    { id: 12, image: l, text: 'Image 12', number: 12 },
];

const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    marginTop: "2rem",
    width: '90%',
    padding: '0 2rem',
};

const itemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
   
};

const RightBar = () => {
    return (
        <div style={gridStyle}>
            {mockData.map(item => (
                <div key={item.id} style={itemStyle}>
                    <img src={item.image} alt={item.text} style={{ width: '100%', height: '200px' }} />
                    <p>{item.text}</p>
                    <p>{item.number}</p>
                </div>
            ))}
            <div style={{display:"flex",alignItems:"center"}}><button style={{backgroundColor:"black",color:"white",height:"2rem",width:"7rem",borderRadius:"10px",marginLeft:"5rem"}}>Load more</button></div>
        </div>
    );
}

export default RightBar;
