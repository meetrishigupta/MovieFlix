import React from "react"
import styled from "styled-components"

const MovieName = "Flix"
let count = 0;
export const Navbar = (props) => {
    const { cartCount } = props;
    return (
        <>
            <Nav>
                <Headingdiv>
                    <a href="link address">
                        <img
                            style={{
                                width: 100,
                                marginTop: 15,
                                marginLeft: 20,
                            }}

                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png" /> </a>

                </Headingdiv>
                <Divcart>
                    <Cartimg
                        img src="https://icon-library.com/images/shopping-cart-icon-white/shopping-cart-icon-white-12.jpg" alt="cart"
                    >
                    </Cartimg>
                    <Cartcount show={true}>
                        <span>{cartCount}</span>
                    </Cartcount>
                </Divcart>
            </Nav>
        </>
    )
}

// CSS Components

const Nav = styled.div`
width: 100%;
height: 70px;
background-color: #00000094;
display: flex;
justify-content: space-between;
`;

const Headingdiv = styled.div`
width: 50%;
&:hover{
    img{
        transition: all .4s ease-in-out;
        transform: scale(1.1);
    }
}

`

const Divcart = styled.div`
width: 10%;
left: 500px;
background-color: #00000069;
`;

const Cartimg = styled.img`
margin-top: 20px;
width: 40px;        
margin-left: 40px;
`;
const Cartcount = styled.span`
font-size: 15px;
color: black;
border-radius: 50px;
width: 10px;
background-color: orange;
font-weight: 600;
padding: 1px 6px;
position: relative;
top: -22px;
right: 12px;
visibility: ${(props) => props.show ? "visible" : "hidden"};
`;