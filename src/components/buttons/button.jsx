import styled from 'styled-components';

const Button = styled.button`
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:0.25rem;
  user-select: none;
  border: 0;
  margin: 0.25rem;
  transition: all .25s cubic-bezier(.075,.82,.165,1);
  font-family: var(--btn-font,inherit);
  font-weight: 600;
  letter-spacing:var(--btn-letter-spacing,0.02846rem);
  font-size: var(--btn-font-size,0.875rem);
  padding:var(--btn-padding-y,0.25rem) var(--btn-padding-x,1rem);
  line-height:var(--btn-line-height,1.75);
  color:var(--btn-text,#fbfbfb);
  background:var(--btn-bg,var(--theme));
  border: 2px solid var(--btn-border,var(--theme));
  border-radius: var(--btn-border-radius,0.25rem);
  text-align: center;
  
  &:hover{
    color:var(--btn-hover-color,var(--btn-text));
    background:var(--btn-hover-bg,var(--theme));
    border-color:var(--btn-border-hover,var(--theme));
  }
  ${props => props.rounded ? `
  --btn-border-radius:2rem;
  ` : ``}
  ${props => props.pill ? `
  --btn-border-radius:10rem;
  ` : ``}
  ${props => props.nature ? `
    --btn-bg:rgba(var(--${props.nature}-rgb), 1);
    --btn-box-shadow: 0px 1px 3px rgba(var(--${props.nature}-rgb), 0.8);
    --btn-hover-bg:rgba(var(--${props.nature}-rgb), 0.95);
    --btn-border:rgba(var(--${props.nature}-rgb), 0.95);
    --btn-border-hover:rgba(var(--${props.nature}-rgb), 0.95);
  ` : ``}
  ${props => props.outlined ? `
    --btn-text:rgba(var(--${props.nature || "theme"}-rgb), 1);
    --btn-hover-color:var(--btn-text,#fbfbfb);
    --btn-bg:none;
    --btn-box-shadow: none;
    --btn-hover-bg:rgba(var(--${props.nature || "theme"}-rgb), 1);
    --btn-hover-box-shadow:none;
  ` : ``}
  ${props => props.level ? `
    --btn-text:rgba(var(--${props.nature || "theme"}-rgb), 1);
    --btn-hover-color:rgba(var(--${props.nature || "theme"}-rgb), 1);
    --btn-bg:rgba(var(--${props.nature || "theme"}-rgb), 0.12);
    --btn-box-shadow: none;
    --btn-hover-box-shadow: none;
    --btn-hover-bg:rgba(var(--${props.nature || "theme"}-rgb), 0.12);
    --btn-border:transparent;
    --btn-border-hover:transparent;
  ` : ``
  }
  ${props => props.fill ? `
    --btn-text:rgba(var(--${props.nature || "theme"}-rgb), 1);
    --btn-hover-color:#fbfbfb;
    --btn-bg:none;
    --btn-hover-bg:rgba(var(--${props.nature || "theme"}-rgb), 1);
    --btn-border:rgba(var(--${props.nature || "theme"}-rgb), 1);
    --btn-border-hover:rgba(var(--${props.nature || "theme"}-rgb), 1);
  ` : ``
  }
  
  ${props => props.size ? `
  --btn-padding-y:var(--${props.size || "normal"}-btn-padding-y,0.375rem);
  --btn-padding-x:var(--${props.size || "normal"}-btn-padding-x,1rem);
  --btn-line-height:var(--${props.size || "normal"}-btn-line-height,1.75);
  --btn-border-radius:var(--${props.size || "normal"}-btn-border-radius,0.25rem);
  --btn-font-size:var(--${props.size || "normal"}-btn-font-size,0.875rem);
  --btn-letter-spacing:var(--${props.size || "normal"}-btn-letter-spacing,.02846rem);
  ` : ``
  
  }

      
  &> svg{
  font-size: inherit;
  line-height: inherit;
  color: currentColor;
  margin-inline:0!important;
}

opacity:${props => props.disabled ? "0.5" : "1"};
pointer-events:${props => props.disabled ? "none" : "all"};
cursor:${props => props.disabled ? "not-allowed" : "pointer"};

`;
const ButtonWithIcon = styled(Button) 
`
user-select: none;
&>svg{
  font-size: inherit;
  line-height: inherit;
  color: currentColor;
}
${({direction}) =>{
  direction ? `
  flex-direction:row-reverse;`
  :
  `
  flex-direction:row;
  `
}}
@media (max-width:${({breakpoint}) => breakpoint ? breakpoint : "768px"}){
  padding:0.75rem;

  &>span{
    display:none;
  }
}

`;
export const IconButton = styled(Button)`
padding:0.5rem;
border-radius:50%;
background: transparent;
color:rgba(0, 0, 0, 0.54);
border:none;
&:hover{
    color:rgba(0, 0, 0, 0.75);
    background: rgba(0, 0, 0, 0.04);
}
${props => props.nature ? `
   color:rgba(var(--${props.nature}-rgb), 1);
    &:hover{
        color:rgba(var(--${props.nature}-rgb), 1);
        background: rgba(var(--${props.nature}-rgb), 0.04);
    }
  ` : ``}
`;
export const ResponsiveButton = ({icon,direction, children,...props }) => {
  return (
    <ButtonWithIcon direction={direction} {...props}>
      {icon}
      <span>
        {children}
      </span>
    </ButtonWithIcon>
    )

}


export default Button;