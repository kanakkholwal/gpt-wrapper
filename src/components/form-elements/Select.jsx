import React from 'react';
import styled from 'styled-components';
import { MdOutlineUnfoldMore } from "react-icons/md";

export const SelectWrapper = styled.div`
position: relative;
order:2;
svg {
    position: absolute;
    height: 20px;
    top: 50%;
    right: 0.65rem;
    transform: translateY(-50%);
  }
  &:focus, &:has(select:focus), &:has(select:active), &:focus-within {
    border-color: rgba(var(--theme-rgb),0.75);
      opacity: 1;
      box-shadow: 0 0 0 0 rgba(0,0,0,0.1);
  
    
      &::placeholder {
          opacity: 1;
      }
    input[type="text"] {
        border-color: rgba(var(--theme-rgb),0.75);
      opacity: 1;
      box-shadow: 0 0 0 0 rgba(0,0,0,0.1);
  
    
      &::placeholder {
          opacity: 1;
      }
    }
} 


`;
const SelectToggle = styled.input.attrs(props => ({
  type: 'text',
}))`
    letter-spacing: 0.1em;
    max-width: 100%;
    min-width: 140px;
    opacity: 0.95;
    font-weight: 600;
    cursor:pointer;
    transition: all .2s linear;
    border-radius: 10px;
    padding: 10px 12px;
    border: 2px solid var(--form-border);
     background: var(--form-bg);
     color: var(--form-color);
     caret-color: var(--form-caret);
     transition: all .3s ease-in-out;
    outline: none;
    width: 100%;
    font-size: 1rem;
    user-select:none;
    border: ${props => props.outlined ? "2px" : "1px"} solid rgba(var(--grey-rgb),0.1);
    caret-color: var(--theme);
    
    &::placeholder {
      color: inherit;
      opacity: 0.75;
      user-select:none;
    }
    
    
    &:focus {
      border-color: rgba(var(--theme-rgb),0.75);
      opacity: 1;
      box-shadow: 0 0 0 0 rgba(0,0,0,0.1);
  
    
      &::placeholder {
          opacity: 1;
      }
    }
   
    &.checkValid:invalid,
    &.isInvalid {
      border-color: var(--danger)!important;
      animation-name: invalid;
      animation-timing-function: ease-in-out;
      animation-duration: 500ms;
      animation-fill-mode: both;
    
    }
    
    &.checkValid:focus:not(:placeholder-shown):valid,
    &.isValid {
      animation-name: valid;
      border-color: var(--success)!important;
      animation-timing-function: ease-in-out;
      animation-duration: 500ms;
      animation-fill-mode: both;
    }
    ${props => props.size === "lg" ? `font-size: 1rem !important;
    line-height: 2.15 !important;
    padding-left: 0.75em !important;
    padding-right: 0.75em !important;
    border-radius: 0.5rem !important;`: ""}
    
    ${props => props.size === "sm" ? `padding: 0.43em 0.99em 0.35em !important;
    font-size: .775rem !important;
    line-height: 1.6 !important;
    border-radius: 0.2rem !important;
    border-width: 1px !important;`: ""}
    

   
  `;



const SelectDropdownWrapper = styled.div`
  position: absolute;
   top: 100%;
   left: 50%;
   z-index: 999;
   translate: -50% 0.5rem;
   width: max-content;
   min-width: 100%;
   transition: opacity .15s cubic-bezier(0, 0, .2, 1) 0ms, transform .15s cubic-bezier(0, 0, .2, 1) 0ms, -webkit-transform .15s cubic-bezier(0, 0, .2, 1) 0ms;
   overflow: hidden auto;
    min-height: 16px;
    max-width: calc(100% - 32px);
    outline: 0px;
    box-shadow: rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) -20px 20px 40px -4px;
    border-radius: 12px;
    max-height: 260px;
       transform: scale(.8);
   opacity: 0;
   pointer-events:none;
border-radius: 0.25rem;
background: #fbfbfb;
      
   &.isOpen {
          transform: scale(1);
          opacity: 1;
        pointer-events:auto;

  }
 
`;
const SelectDropdown = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: max-content;
min-width: 100%;
gap: 0;
margin-left: 0;
padding-block:0.25rem;
`;

const SelectDropdownItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding-block: 0.5rem;
    padding-inline: 1rem;
    color: rgba(0, 0, 0, 0.87);
    transition: all 0.25s ease-in-out;
    opacity: 0.85;
    box-sizing: border-box;
    white-space: nowrap;
    border-radius: 6px;
    line-height: 1.57143;
    font-weight: 500;
    font-size: 0.875rem;
    text-transform: capitalize;
    width: 100%;
    cursor: pointer;
    margin: 0px 8px;
    
    &:is(:hover, :active ) {
      opacity:1;
      background:rgba(0,0,0,0.05);
    }

    &.isActive{
      color:var(--theme)
    }


    &:first-child {
      border-top-left-radius: 0.25rem;
      border-top-right-radius: 0.25rem;
    }

    &:last-child {
      border-bottom-left-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
    }
    ${props => props.size === "sm" ? 
    `
    font-size: 0.875rem !important;
  line-height: 1rem!important;
  padding: 8px 24px 8px 8px!important;
    `: ""}
`;


function Select({ options, value, onChange, size = "md", ...props }) {
  const selectRef = React.useRef(null);

  // const [usingOptions, SetUsingOptions] = React.useState(options);

  const usingOptions = options.map((option) => {
    return {
      value: option.value,
      label: option.label,
      option: option.value === value,
    }
  });
  const [open, SetOpen] = React.useState(false);
  const [SelectedOption, SetSelectedOption] = React.useState(usingOptions.find(({ option }) => option === true) || usingOptions[0]);

  const UpdateOption = (e) => {
    const target = e.target;

    const SelectedOption = usingOptions.find((Option) => Option.value.toString() === target.getAttribute("value"));


    const Updated = usingOptions?.map((option) => {
      if (option === SelectedOption)
        option.option = true;
      else
        option.option = false;

      return option
    });
    if (typeof Updated !== void [] && Updated !== undefined && Updated !== null) {

      SetSelectedOption(Updated.find((option) => option === SelectedOption));

      SetOpen(false)
    }
  }
  const Close = (e) => {
    if (selectRef.current) {
      if (!selectRef.current.contains(e.target))
        SetOpen(false)
    }
  }

  React.useEffect(() => {
    document.addEventListener("mouseup", Close);
    return () => {
      document.removeEventListener("mouseup", Close);
    }
  }, []);

  React.useEffect(() => {
    onChange(SelectedOption);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SelectedOption]);


  return (
    <>
      <select
        value={SelectedOption?.value.toString()}
        id={props.id}
        onChange={(e) => SetSelectedOption(usingOptions.map((option) => {
          if (option === SelectedOption)
            option.option = true;
          else
            option.option = false;

          return option
        }).find(({ value }) => value === e.target.value))} hidden={true} style={{ display: "none!important" }}>
        {options.map((option, index) => (
          <option key={index} value={option.value.toString()}>{option.label}</option>
        ))}
      </select>
      <SelectWrapper {...props} ref={selectRef}>
        <SelectToggle
          type="text"
          outlined
          className={(open ? " isActive" : "")}
          role="listbox"
          readOnly={true}
          onClick={() => SetOpen(!open)}
          value={SelectedOption.label ? SelectedOption.label : SelectedOption.value.toString()}
          invert={!open}
          size={size}
        />
        <MdOutlineUnfoldMore onClick={() => SetOpen(!open)} />
        <SelectDropdownWrapper className={(open ? " isOpen" : "")}>
          <SelectDropdown>
            {usingOptions.map((Option, index) => {
              return <SelectDropdownItem size={size} className={Option.value === SelectedOption.value ? " isActive" : " "} onClick={(e) => UpdateOption(e)} value={Option.value.toString()} key={index}>{Option.label ? Option.label.toString() : Option.value.toString()}</SelectDropdownItem>
            })}
          </SelectDropdown>

        </SelectDropdownWrapper>

      </SelectWrapper>

    </>
  )
}
export default Select;

