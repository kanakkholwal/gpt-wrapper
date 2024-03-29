import styled from "styled-components";
import Link from "next/link";

export const FooterWrapper = styled.footer`
width: 100%;
max-width: var(--max-width);
margin-inline: auto;
margin-block: ${({ only }) => only === "true" ? "200px" : "2.5rem"} 2rem;
display: flex;
align-items: center;
justify-content: space-between;
gap: 1.5rem;
color: rgba(var(--text-muted), 1);
padding: 1rem;
flex-wrap: wrap;

span{
    font-size: 1rem;
    display: inline-block;
}
ul{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 1.5rem;
    list-style: none;
    margin-inline-start:auto;
    @media (max-width: 768px) {
        margin-inline:auto;
    }


}
a{
    color: rgba(var(--text-rgb), 0.7);
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
        color:rgba(var(--text-rgb), 1)!important;
    }
}
@media (max-width: 768px) {
flex-direction: column;
text-align: center;
}
`;

const Footer = ({ only = "false" }) => {
    return (
        <FooterWrapper only={only}>
            <span>
                &copy; {new Date().getFullYear()} <Link href="/">{process.env.NEXT_PUBLIC_WEBSITE_NAME}</Link>. All Rights Reserved.
            </span>
            <ul>
                <li>
                    <Link href="/directory">AI Directory</Link>
                </li>
                <li>
                    <Link href="/apps">AI Apps</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/tools">Tools</Link>
                </li>
                <li>
                    <Link href="/privacy">Privacy Policy</Link>
                </li>
                {/* <li>
                    <Link href="/terms">Terms of Service</Link>
                </li> */}
                <li>
                    <Link href="/contact">Contact Us</Link>
                </li>
                {/* <li>
                    <Link href="/about">About Us</Link>
                </li> */}
                {/* <li>
                    <Link href="/pricing">Pricing</Link>
                </li> */}
            </ul>
        </FooterWrapper>)
}
export default Footer;
