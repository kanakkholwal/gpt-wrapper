import styled from 'styled-components';
import FormHelper from "./FormHelper";
import Input from "./Input";
import FormAlert from "./FormAlert";
import Label from "./Label";
import Checkbox from "./CheckBox";
import { SelectWrapper } from "./Select";
import { PasswordWrapper } from "./PasswordInput";
import { TextAreaStyled } from "./TextArea";

const FormElement = styled.div<{
    align?: string;
    size?: "lg" | "sm" | "normal";
    nature?: "underlined" |"floating"| "normal" | undefined;
    lg?: boolean;
    sm?: boolean;
}>`

    display: flex;
    align-items: ${({ align }) => align || "flex-start"};
    &:not(:has(>input[type="checkbox"],>input[type="radio"])){
        flex-direction: column;
    }
    &:has(>input[type="checkbox"],>input[type="radio"]){
        &>${Label}, &>label {
          margin:0;
        }
    }
    margin: 0.25rem 0.5rem 1.25rem;
    flex:auto;
    &>${Label}, &>label {
      order: 1;
      display:flex;
    }
  
    &:has(>${Checkbox}){
      flex-direction: row;
      align-items: center;
      ${Checkbox} {
        margin-right: 0.5rem;
        order: 1;
    }
  }

  
    &>${Input}, &>${TextAreaStyled},
    &>textarea, &>input:not([type="checkbox"]), &>select, &>${SelectWrapper}, &>${PasswordWrapper} {
      order: 2;
      display:flex;
    }
  
  
    &>${FormAlert} {
      order: 3;    
    }
    &>${FormHelper} {
      order: 3;    
      &:has(~${FormAlert})~${FormAlert} {
          margin-top:0.5rem;
          order: 4;    
    }
      
    }
    &:has(${FormHelper}){
      &> ${Input},&>textarea{
margin-bottom:0
      }
    }
  
    ${props => props.nature ? getNature(props.nature) :``}
    ${props => props.size === "sm" ?`
      margin:0.125rem 0.25rem .5rem;

    &>${Input},&>textarea,&>${TextAreaStyled},&>input:not([type="checkbox"]){
        font-size: 0.875rem !important;
        line-height: 1rem!important;
        padding: 8px 24px 8px 8px!important;
        border-radius: 0.25rem !important;
        border-width: 1px !important;
    }
   &>${Label}{
        font-size: 0.875rem;
        line-height: 1rem;
    }
   &>${FormHelper}{
        font-size: 0.625rem;
        line-height: 0.875rem;
        margin-top: 0.25rem;
    }
    
  `:
  props.size === "lg" ? `
  &>${Input},&>textarea,&>${TextAreaStyled},&>input:not([type="checkbox"]){
        font-size: 1.25rem !important;
        line-height: 1.5rem!important;
        padding: 12px 24px 12px 12px!important;
        border-radius: 0.5rem !important;
        border-width: 1px !important;
    }
   &>${Label}{
        font-size: 1.25rem;
        line-height: 1.5rem;
    }
   &>${FormHelper}{
        font-size: 0.875rem;
        line-height: 1rem;
        margin-top: 0.5rem;
    }
    
    
    `:``}
  
  
`;

function getNature(nature){

    switch (nature) {
        case "underlined":
            return `
            
            
            `;
                
        case "floating":
            return `
                position: relative;
                &>${Input}{
                    &:not(:focus){
                        &::placeholder{
                            opacity: 0;
                        }
                        
                    }
                }
                &>label,&>${Label} {
                    position: absolute;
                    inset-block:0;
                    left: 0.25rem;
                    vertical-align: middle;
                    z-index: 0;
                    background:none;
                    translate:6px 2px;
                    transition: all 300ms ease-in-out;
                }
                &:has(>${Input}:focus,>${Input}:not(:placeholder-shown)){
                    &>label,&>${Label} {
                        translate:3px -20px;  
                        padding-left:4px;
                        
                        &:before{
                            content: "";
                            position: absolute;
                            width:100%;
                            padding-left:4px;
                            height: 2px;
                            translate: -2px 0;
                            z-index: -1;      
                            background: var(--form-bg-active);
                        }
                    }
                }

            `;
        default:
            return ``;
    }


}
export default FormElement;
