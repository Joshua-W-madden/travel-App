import { getYear } from "../utilities/getDates";

const Footer = ({ copyright = getYear(), author = "Dayna Cho" }) => (
    <footer>
        <p>
            &copy; {copyright} {author}
        </p>
    </footer>
);

export default Footer;
