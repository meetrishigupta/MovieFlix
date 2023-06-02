import React from "react"

export const Navbar = () => {

    return (
        <>
            <div style={style.nav}>
                <div>
                    <h1>Title</h1>
                </div>
                <div>
                    <img src="" alt="cart" />
                    <span>0</span>
                </div>
            </div>
        </>
    )
}

const style ={
    nav:{
        width: "100%",
        height: 70,
        background: "purple",
        display: "flex",
        justifyContent: "space-between"
    }
}