import React from "react";

const year = new Date().getFullYear()
function Footer() {
    return <footer>
        <a href="https://bytedance.sg.feishu.cn/docx/doxcnO4oa40uD1ze4Lw3CHdCkio">About Us</a>
        <a href="https://forms.gle/M4cJ2nvQWmjXb2qd9">Feedback</a>
        <p>Copyright &copy;{year} by ROOM 6</p>
    </footer>;
}

export default Footer;