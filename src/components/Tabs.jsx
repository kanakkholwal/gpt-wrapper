import styled from "styled-components";
import { useState } from "react";


const TabHeader = styled.div`
    position:relative;
    display: flex;
    flex-direction: row;
    justify-content: ${({align}) => align ? align : "flex-start"};
    flex-wrap: ${({align}) => align ? "wrap" : "nowrap"};
    align-items: center;
    width: 100%;
    scroll-snap-type: x mandatory;
    overflow-x: auto;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        display: none;
    }
    background-color: var(--card-bg);
    padding:0.75rem 0.5rem;
    border-radius:0.5rem;
`;
const TabToggle = styled.button`
display:inline-flex;
align-items:center;
justify-content:center;
gap:0.5rem;
user-select: none;
border: 0;
margin: 0.25rem;
flex: 1 ${({align}) => align ? "1" : "0"} auto;
transition: all .3s cubic-bezier(.075,.82,.165,1);
font-weight: 600;
letter-spacing:0.0625rem;
padding:var(--btn-padding-y,0.5rem) var(--btn-padding-x,1.25rem);
line-height:var(--btn-line-height,1.75);
color:rgba(var(--theme-rgb),0.9);
border-bottom:2px solid rgba(var(--theme-rgb),0.1);
text-align: center;
cursor: pointer;
border-radius: 0.375rem 0.375rem 0 0;
max-width: max-content;

  ${props =>
        props.active &&
        `
        color:rgba(var(--theme-rgb),1);
        border-bottom-color:rgba(var(--theme-rgb),1);
    `
    }

  ${props =>
        props.filled ?
        `
        color:rgba(var(--${props.variant}-rgb),1);
        border:2px solid rgba(var(--${props.variant}-rgb),0.9);
        background:none;
        border-radius: 0.375rem;
        ${props.active && `
            color:rgba(var(--light-rgb),1);
            border:2px solid rgba(var(--${props.variant}-rgb),1);
            background-color:rgba(var(--${props.variant}-rgb),1);
        `}
        
      
      
    `:``
    }
white-space: nowrap;
visibility: visible;
    gap: 8px;
${props => props.sm && `
padding: 8px 16px;
font-size: 0.875rem;
line-height: 1rem;
`}



`;
const TabBody = styled.div`
display:block;
padding:0.75rem 1rem;
margin:0.75rem auto;
`;
const TabContent = styled.div`
${({ open }) => open ?
        `display:block;`
        :
        `display:none`

    }
`;

export default function Tabs({ TabList,align,activeIndex = 0,filled=false,variant= "theme" ,sm=false}) {
    const [selectedIndex, setSelectedIndex] = useState(activeIndex);

    return (
        <>
            {TabList?.length > 0 ?
                <>
                    <TabHeader align={align}>
                        {TabList.map(({ title }, index) => {
                            return (
                                <TabToggle key={index}
                                    onClick={
                                        () => {
                                            setSelectedIndex(index);
                                        }
                                    }
                                    active={selectedIndex === index ? true : false}
                                    filled={filled}
                                    variant={variant}
                                    sm={sm}
                                    >
                                    {title}
                                </TabToggle>
                            )
                        })}
                    </TabHeader>
                    <TabBody>
                        {TabList.map(({ content }, index) => {
                            return (
                                <TabContent key={index}
                                    open={selectedIndex === index ? true : false}
                                >
                                    {content}
                                </TabContent>
                            )
                        })}
                    </TabBody>
                </>
                : null}
        </>
    )
}