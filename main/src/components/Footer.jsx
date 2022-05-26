import React from "react";

const year = new Date().getFullYear()
function Footer() {
    return <footer><p>Copyright &copy;{year} by ROOM 6</p></footer>;
}

export default Footer;