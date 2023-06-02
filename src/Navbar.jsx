import React from "react"

const MovieName = "Marvel Flix"
export const Navbar = () => {

    return (
        <>
            <div style={style.nav}>
                <div style={style.headingDiv}>
                    <h1 style={style.h1}>{MovieName}</h1>
                </div>
                <div style={style.divCart}>
                    <img style={style.cartImg} src="https://icon-library.com/images/shopping-cart-icon-white/shopping-cart-icon-white-12.jpg" alt="cart" />
                    <span style={style.cartCount}>0</span>
                </div>
            </div>
        </>
    )
}

const style = {
    nav: {
        width: "100%",
        height: 70,
        background: "purple",
        display: "flex",
        justifyContent: "space-between"
    },
    headingDiv: {
        width: "50%",
    },
    h1: {
        
        positon: "relative",
        left: "20px",
        bottom: "20px",
        color: "white",
        letterSpacing: "0.1rem",
        marginLeft: 20,
        marginTop: 14
    },
    divCart: {
        width: "50%",
        position: 'relative',
        left: "500px",
        backgroundColor: "#00000069"


    },
    cartImg: {
        marginTop: "20px",
        width: "5%",
        marginLeft: "40px",
    },
    cartCount: {
        fontSize: 13,
        color: "black",
        borderRadius: "50px",
        width: "10px",
        backgroundColor: "orange",
        fontWeight: 600,
        padding: "1px 6px",
        position: "relative",
        top: "-17px",
        right: "9px"
    }
}