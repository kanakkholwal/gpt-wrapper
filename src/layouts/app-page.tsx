import { BreadCrumb } from "components/breadcrumb";
import Header from "components/layouts/header";
import SideNav from "components/layouts/sidenav";
import { ContentWrapper, MainWrapper, } from "components/layouts/wrapper";
import Footer from 'layouts/common/footer';
import styled from "styled-components";

import { GrResources } from "react-icons/gr";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { RiAppsLine } from "react-icons/ri";
import { TbBrandBlogger, TbDashboard, TbSmartHome, TbTools } from "react-icons/tb";

const SocialMedia = [
    {
        name: "Github",
        icon: <IoLogoGithub />,
        url: "https://github.com/kkupgrader",
    },
    {
        name: "Instagram",
        icon: <IoLogoInstagram />,
        url: "https://www.instagram.com/kanakkholwal/",
    },
    {
        name: "LinkedIn",
        icon: <IoLogoLinkedin />,
        url: "https://www.linkedin.com/in/kanak-kholwal/",
    },
    {
        name: "Twitter",
        icon: <IoLogoTwitter />,
        url: "https://twitter.com/KanakKholwal",
    },
]

const routes = (userRole :string ) => {
        return [
            {
                title: "Home",
                icon: <TbSmartHome size={16}/>,
                path: "/",
            },
            {
                title: "Dashboard",
                icon: <TbDashboard size={16}/>,
                path: "/dashboard",
                sessionRequired: true,
            },
            {
                title: "Apps",
                icon: <RiAppsLine size={16} />,
                path: "/apps",
            },
            {
                title: "Tools",
                icon: <TbTools  size={16}/>,
                path: "/tools",
            },
            {
                title: "AI Directory",
                icon: <GrResources  size={16}/>,
                path: "/directory",
            },
            {
                title: "Blog",
                icon: <TbBrandBlogger  size={16}/>,
                path: "/blog",
            }
        ]
}
export default function AppPage({ headerChildren , children, user } :{
    headerChildren?: React.ReactNode,
    children: React.ReactNode,
    user: any
}) {


    return (
        <>
            <SideNav routes={routes(user?.role)} user={user} />
            <MainWrapper id="main_wrapper" className="isSidenavOpen">
                <Header user={user} routes={routes(user?.role)}>
                    {headerChildren ? headerChildren : null}
                </Header>
                <ContentWrapper>
                    <BreadCrumb />
                    {children}
                </ContentWrapper>
                <Footer />

            </MainWrapper>
        </>
    )
}
export const AppContainer = styled.div`
padding-block: 1.5rem;
margin-inline: auto;
display: grid;
gap: 1rem;
grid-gap: 1rem;

@media (min-width:576px) {
    padding: 1.25rem;
    grid-template-columns: repeat(auto-fill, minmax(540px, 1fr));
}
@media (min-width:768px) {
    padding: 1.5rem;
    grid-template-columns: repeat(2, 5fr);
}
@media (min-width:992px) {
    grid-template-columns: repeat(3, 3.3fr);
}

@media (min-width: 1400px) {
    grid-template-columns: repeat(3, 2.5fr);
}
`;
export const Card = styled.div`
    background:var(--card-bg);
    border-radius: 0.5rem;
    padding: 1rem;
    box-shadow: 0 0 0.5rem rgba(0,0,0,0.1);
    transition: all 0.3s ease-in-out;
    &:hover {
        box-shadow: 0 0 0.5rem rgba(var(--theme-rgb),0.1);
    }

`;
export const AppCard = styled.div`  
    background:var(--card-bg);
    border-radius: 0.5rem;
    padding: 1rem;
    transition: all 0.3s ease-in-out;
    &:hover {
        box-shadow: 0 0 0.5rem rgba(0,0,0,0.1);
    }
    flex: 1 1 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    .footer{
        display:flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        gap:0.25rem;
        margin-top: 1rem;

        .category{
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            font-size: 0.75rem;
            font-weight: 500;
            color: rgba(var(--theme-rgb),0.75);
            background:rgba(var(--theme-rgb),0.1);
            text-transform:capitalize;
        }
    }
    a{
        color: var(--text-color);
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        font-size: 0.9rem;
        font-weight: 500;
        
        &:hover{
          background:rgba(var(--dark-rgb),0.1);
        }
        svg{
            margin-right: 0.5rem;
            animation: flick 1s linear infinite;
            @keyframes flick {
                0% {
                    translate:0.25rem 0;
                }
                50% {
                    translate:0 0;
                }
                100% {
                    translate:0.25rem 0;
                }
            }
        }
    }

  
`;