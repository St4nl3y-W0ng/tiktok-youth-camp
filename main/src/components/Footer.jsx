import React from "react";

const year = new Date().getFullYear()
function Footer() {
    return <footer>
        <table>
            <tr>
                <td> <a href="https://bytedance.sg.feishu.cn/docx/doxcnO4oa40uD1ze4Lw3CHdCkio">About Us</a></td>
                <td>|</td>
                <td> <a href="https://forms.gle/M4cJ2nvQWmjXb2qd9">Feedback</a></td>
            </tr>
        </table>
        <p>Copyright &copy;{year} by ROOM 6</p>
    </footer>;
}

export default Footer;