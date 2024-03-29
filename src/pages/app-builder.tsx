import TextInputToTextOutput from 'src/layouts/apps/text_input_to_text_output';

// Types
import { AppTypeEditable, OptionType } from 'types/app';
// utilities
import axios from 'axios';
import { useReducer, useState } from 'react';
import type { InputType } from "types/app";
// Components
import Tabs from 'components/Tabs';
import Button, { IconButton } from 'components/buttons';
import { CheckBox, FormElement, FormGroup, FormHelper, Input, Label, Select, TextArea } from "components/form-elements";
import toast, { Toaster } from 'react-hot-toast';
import styled from 'styled-components';
// Icons 
import Link from 'next/link';
import { MdOutlineDragIndicator } from 'react-icons/md';
import { TbCircleMinus, TbCirclePlus, TbEdit, TbTrash } from 'react-icons/tb';

import { INPUT_TYPES } from 'src/layouts/apps/common/constants';

export default function AppBuilder({ user, app: defaultApp, type = "submit" }: {
    user: any,
    app?: AppTypeEditable,
    type?: "submit" | "update",
}) {
    const initialState = {
        app: defaultApp
    };

    function reducer(state: any, action: any) {
        switch (action.type) {
            case 'setApp':
                return { ...state, app: action.payload };
            case 'setAppCustomFunction':
                return { ...state, app: { ...state.app, customFunction: action.payload } };
            case 'setAppConfig':
                return { ...state, app: { ...state.app, config: action.payload } };
            case 'setAppId':
                return { ...state, app: { ...state.app, appId: action.payload, path: "/apps/" + action.payload.split("_").join("-") } };
            case 'setAppEnabled':
                return { ...state, app: { ...state.app, enabled: action.payload } };
            case 'setAppName':
                return { ...state, app: { ...state.app, name: action.payload } };
            case 'setAppState':
                return { ...state, app: { ...state.app, state: action.payload } };
            case 'setAppShortDescription':
                return { ...state, app: { ...state.app, shortDescription: action.payload } };
            case 'setAppDescription':
                return { ...state, app: { ...state.app, description: action.payload } };
            case 'setAppKeywords':
                return { ...state, app: { ...state.app, keywords: action.payload } };
            case 'setAppType':
                return { ...state, app: { ...state.app, type: action.payload, formFlow: { ...state.app.formFlow, menuType: action.payload } } };
            case 'setAppMembership':
                return { ...state, app: { ...state.app, membership: action.payload } };
            case 'setAppCategory':
                return { ...state, app: { ...state.app, category: action.payload } };
            case 'setAppTags':
                return { ...state, app: { ...state.app, tags: action.payload } };
            case 'setAppAuthor':
                return { ...state, app: { ...state.app, author: action.payload } };
            case 'setAppPath':
                return { ...state, app: { ...state.app, path: action.payload } };
            case 'setAppVersion':
                return { ...state, app: { ...state.app, version: action.payload } };
            case 'setAppRecommended':
                return { ...state, app: { ...state.app, recommended: action.payload } };
            case 'setAppCreatedAt':
                return { ...state, app: { ...state.app, createdAt: action.payload } };
            case 'setAppRatings':
                return { ...state, app: { ...state.app, ratings: action.payload } };
            case 'setAppReviews':
                return { ...state, app: { ...state.app, reviews: action.payload } };
            case 'setAppUsage':
                return { ...state, app: { ...state.app, usage: action.payload } };
            case 'setAppState':
                return { ...state, app: { ...state.app, state: action.payload } };
            case 'setAppFormFlowInput':
                return { ...state, app: { ...state.app, formFlow: { ...state.app.formFlow, inputs: action.payload } } };
            case 'setAppFormFlowOutput':
                return { ...state, app: { ...state.app, formFlow: { ...state.app.formFlow, outputs: action.payload } } };
            case 'setAppFormFlowControl':
                return { ...state, app: { ...state.app, formFlow: { ...state.app.formFlow, controls: action.payload } } };

            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    const { app } = state;

    console.log(app);

    return (
        <PageWrapper>
            <PreviewWrapper>
                {(app.type === "text_input_to_text_output") && <TextInputToTextOutput user={user} app={app} />}
            </PreviewWrapper>
            <EditorWrapper>
                <Tabs
                    TabList={[
                        { title: "General", id: "general", content: <GeneralTab app={app} dispatch={dispatch} /> },
                        { title: "Inputs", id: "input-flow", content: <InputFlowTab app={app} dispatch={dispatch} /> },
                        { title: "Controls ", id: "control-flow", content: <ControlFlowTab app={app} dispatch={dispatch} /> },
                        { title: "Prompt ", id: "prompt-flow", content: <PromptTab app={app} dispatch={dispatch} /> },
                        { title: "Final", id: "final", content: <FinalTab app={app} user={user} type={type} dispatch={dispatch} /> },
                    ]}

                    align={"flex-start"}
                    filled={true}
                    variant={"dark"}
                    sm={true}

                />
            </EditorWrapper>

        </PageWrapper>)
}
// generate Form Flow Input and controls
function InputFlowTab({ app, dispatch }) {

    const [newInput, setNewInput] = useState<InputType>({
        type: "",
        name: "",
        id: "",
        label: "",
        defaultValue: "",
        placeholder: "",
        required: false,
        helperText: "",
        constraints: {},
        options: [],
    });
    const [draggedItemIndex, setDraggedItemIndex] = useState<number | null>(null);
    const handleDragStart = (index:number) => {
        setDraggedItemIndex(index);
      };
    const handleDragOver = (e, index:number) => {
        e.preventDefault();
        const items = [...app.formFlow.inputs];
        const draggedItem = items[draggedItemIndex !== null ? draggedItemIndex : index];
        items.splice(draggedItemIndex !== null ? draggedItemIndex : index, 1);
        items.splice(index, 0, draggedItem);
        dispatch({ type: 'setAppFormFlowInput', payload: items })
        setDraggedItemIndex(index);
      };

    return (<>
        {/* new Input */}
        <FormGroup className='g-0'>
            <FormElement>
                <Label sm={true} htmlFor="InputType">Type</Label>
                <Select id="InputType" value={newInput.type} onChange={(option) => setNewInput({ ...newInput, type: option.value })}
                    options={INPUT_TYPES}
                    size='sm'
                />
            </FormElement>
        </FormGroup>
        {newInput.type.length > 0 && <>
            <FormGroup className='g-0'>
                <FormElement>
                    <Label sm={true} htmlFor="InputName">Name</Label>
                    <Input sm={true} value={newInput.name} id='InputName' placeholder='Enter the name' onChange={(e) => setNewInput({ ...newInput, name: e.target.value })} />
                </FormElement>
                <FormElement>
                    <Label sm={true} htmlFor="InputId">Id</Label>
                    <Input sm={true} value={newInput.id} id='InputId' placeholder='@variable' required onChange={(e) => setNewInput({ ...newInput, id: e.target.value })} />
                </FormElement>
                <FormElement>
                    <Label sm={true} htmlFor="InputLabel">Label</Label>
                    <Input sm={true} value={newInput.label} id='InputLabel' placeholder='Enter the label' onChange={(e) => setNewInput({ ...newInput, label: e.target.value })} />
                </FormElement>
                <FormElement>
                    <Label sm={true} htmlFor="InputValue">Value</Label>
                    <Input sm={true} value={newInput.defaultValue} id='InputValue'
                        placeholder='Enter the value'
                        onChange={(e) => setNewInput({ ...newInput, defaultValue: e.target.value })} />
                </FormElement>
                {(newInput.type === "dropdown" || newInput.type === "autoComplete" || newInput.type === "radio") && <div>
                    <Label>Options </Label>
                    
                    <FormGroup className='g-0'>
                        {newInput?.options?.map((option, index) => {
                            return (<div className='d-flex align-items-center g-1' key={index}>

                                <Input
                                    id='InputOptionLabel'
                                    onChange={(e) => {
                                        let temp = [...newInput?.options]
                                        temp[index].label = e.target.value
                                        setNewInput({ ...newInput, options: temp })
                                    }}
                                    value={option.label}
                                    placeholder='label'
                                    sm={true}
                                />
                                <Input
                                    id='InputOptionValue'
                                    value={option.value}
                                    placeholder='value'
                                    onChange={(e) => {
                                        let temp = [...newInput?.options]
                                        temp[index].value = e.target.value
                                        setNewInput({ ...newInput, options: temp })
                                    }} sm={true} />
                                <IconButton
                                    onClick={() => {
                                        let temp = [...newInput?.options]
                                        temp.splice(index, 1)
                                        setNewInput({ ...newInput, options: temp })
                                    }}
                                    size='sm'
                                    nature='danger'
                                ><TbCircleMinus size={16} /></IconButton>
                            </div>)
                        })
                        }
                    </FormGroup>
                    <Button
                        onClick={() => {
                            let temp = [...newInput.options]
                            temp.push({ label: "", value: "" })
                            setNewInput({ ...newInput, options: temp })
                        }}
                        type='button'
                        nature="dark"
                        size="sm"
                        level={true}

                    >Add New <TbCirclePlus size={16} /></Button>

                </div>}
                {(newInput.type === "text_input" || newInput.type === "number_input" || newInput.type === "text_multiline" || newInput.type === "autoComplete") && <FormElement>
                    <Label sm={true} htmlFor="InputPlaceholder">Placeholder</Label>
                    <Input sm={true} value={newInput.placeholder} id='InputPlaceholder'
                        placeholder='Enter the placeholder'
                        onChange={(e) => setNewInput({ ...newInput, placeholder: e.target.value })} />
                </FormElement>}
                <FormElement sm={true}>
                    <Label sm={true} htmlFor="InputRequired">Required Input ? </Label>
                    <CheckBox
                        type='checkbox'
                        checked={newInput.required}
                        id='InputRequired'
                        onChange={(e) => setNewInput({ ...newInput, required: e.target.checked })}
                    />


                </FormElement>
                <FormElement>
                    <Label sm={true} htmlFor="InputHelper">Helper Text</Label>
                    <Input sm={true} value={newInput.helperText} id='InputHelper'
                        placeholder='Enter the helperText'
                        onChange={(e) => setNewInput({ ...newInput, helperText: e.target.value })} />
                </FormElement>
                <FormElement>
                    <Label sm={true} htmlFor="maxLength">Max Length</Label>
                    <Input sm={true} type='number' value={newInput.constraints["max_length"]} id='maxLength'
                        placeholder='Enter the maxLength of value'
                        onChange={(e) => {
                            setNewInput({ ...newInput, constraints: {
                                ...newInput.constraints,
                                "max_length": e.target.value
                            } })
                        }} />
                </FormElement>
            </FormGroup>

        </>}
        <Button
            onClick={() => {
                if (ValidateNewInput(newInput)?.isValid === false) {
                    alert(ValidateNewInput(newInput)?.message)
                    return;
                }

                if (app.formFlow.inputs.length === 0) {
                    dispatch({ type: 'setAppFormFlowInput', payload: [newInput] })
                }
                else {
                    dispatch({ type: 'setAppFormFlowInput', payload: [...app.formFlow.inputs, newInput] })
                }
                setNewInput({
                    type: "",
                    name: "",
                    id: "",
                    label: "",
                    defaultValue: "",
                    placeholder: "",
                    required: false,
                    helperText: "",
                    constraints: {},
                    options: [],
                })
            }}
            type='button'
            nature="info"
            level={true}
        >Add Field</Button>
        {/* Drag and drop to rearrange items  in the array  */}

        {app.formFlow.inputs.map((input, index) => {

            return <div className='item' key={index} 
            draggable
          

            >
                
                <span>{input.id}</span>
                {/*  Edit input */}
                <IconButton
                    onClick={() => {
                        setNewInput(input)
                        dispatch({ type: 'setAppFormFlowInput', payload: app.formFlow.inputs.filter((_, i) => i !== index) })
                    }}
                    size='sm'
                    nature='warning'
                ><TbEdit size={16} /></IconButton>
                {/*  Delete input */}
                <IconButton
                    onClick={() => {
                        dispatch({ type: 'setAppFormFlowInput', payload: app.formFlow.inputs.filter((_, i) => i !== index) })
                    }}
                    size='sm'
                    nature='danger'
                ><TbTrash size={16} /></IconButton>
                <IconButton
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDragStart={() => handleDragStart(index)}
                    className='drag'
                    size='sm'
                    nature='grey'
                >   <MdOutlineDragIndicator
                        size={16}

                    /></IconButton>
         


            </div>
        })
        }


    </>)

}
function ControlFlowTab({ app, dispatch }) {

    const [newControl, setNewControl] = useState({
        controlType: "button",
        id: "generate",
        text: "Generate",
        icon: "",
        action: "get_output",
        variant: "secondary",

    })
    const [draggedItemIndex, setDraggedItemIndex] = useState<number | null>(null);
    const handleDragStart = (index:number) => {
        setDraggedItemIndex(index);
      };
    const handleDragOver = (e, index:number) => {
        e.preventDefault();
        const items = [...app.formFlow.controls];
        const draggedItem = items[draggedItemIndex !== null ? draggedItemIndex : index];
        items.splice(draggedItemIndex !== null ? draggedItemIndex : index, 1);
        items.splice(index, 0, draggedItem);
        dispatch({ type: 'setAppFormFlowControl', payload: items })
        setDraggedItemIndex(index);
      };
    return < >
    
    <FormGroup className='g-0'>

        <FormElement size="sm">
            <Label sm={true} htmlFor="ControlType">Control Type</Label>
            <Select size='sm'
                value={newControl.controlType} id='ControlType'

                options={[
                    { label: 'Button', value: 'button' },
                    { label: 'Icon Button', value: 'icon_button' },
                ]}
                onChange={(option: {
                    label: string;
                    value: string;
                }) => setNewControl({ ...newControl, controlType: option.value })}
            />
        </FormElement>

        <FormElement size="sm">
            <Label sm={true} htmlFor="ControlId">Control Id</Label>
            <Input sm={true} value={newControl.id} id='ControlId' onChange={(e) => setNewControl({ ...newControl, id: e.target.value })} />
        </FormElement>
        <FormElement>
            <Label sm={true} htmlFor="ControlText">Control Text</Label>
            <Input sm={true} value={newControl.text} id='ControlText' onChange={(e) => setNewControl({ ...newControl, text: e.target.value })} />
        </FormElement>
        <FormElement size="sm">
            <Label sm={true} htmlFor="ControlIcon">Control Icon</Label>
            <Input sm={true} value={newControl.icon} id='ControlIcon' onChange={(e) => setNewControl({ ...newControl, icon: e.target.value })} />
        </FormElement>
        <FormElement size="sm">
            <Label sm={true} htmlFor="ControlAction">Control Action</Label>
            <Select
                value={newControl.action} id='ControlAction'
                options={[
                    { label: 'Get Output', value: 'get_output' },
                    { label: 'Refresh', value: 'refresh' },
                ]}
                size='sm'
                onChange={(option) => setNewControl({ ...newControl, action: option.value })}
            />
        </FormElement>
        <FormElement size="sm">
            <Label sm={true} htmlFor="ControlVariant">Control Variant</Label>
            <Select
                value={newControl.variant} id='ControlVariant'
                options={[
                    { label: 'Primary', value: 'primary' },
                    { label: 'Secondary', value: 'secondary' },
                    { label: 'Success', value: 'success' },
                    { label: 'Warning', value: 'warning' },
                    { label: 'Danger', value: 'danger' },
                    { label: 'Info', value: 'info' },
                    { label: 'Light', value: 'light' },
                    { label: 'Dark', value: 'dark' },
                ]} size='sm'

                onChange={(option) => setNewControl({ ...newControl, variant: option.value })}
            />
        </FormElement>
        <Button
            onClick={() => {
                if (app.formFlow.controls.length === 0) {
                    dispatch({ type: 'setAppFormFlowControl', payload: [newControl] })
                }
                else {
                    dispatch({ type: 'setAppFormFlowControl', payload: [...app.formFlow.controls, newControl] })
                }
                setNewControl({
                    controlType: "button",
                    id: "generate",
                    text: "Generate",
                    icon: "",
                    action: "get_output",
                    variant: "secondary",
                })
            }
            }
            type='button'
            nature="info"
            level={true}
        >Add Control</Button>
    </FormGroup>

        {app.formFlow.controls.map((control, index) => {
            return <div className='item' key={index} 
            draggable
>
                <span>{control.id}</span>
                {/*  Edit input */}
                <IconButton
                    onClick={() => {
                        setNewControl(control)
                        dispatch({ type: 'setAppFormFlowControl', payload: app.formFlow.controls.filter((_, i) => i !== index) })
                        
                    }}
                    size='sm'
                    nature='warning'
                ><TbEdit size={16} /></IconButton>
                {/*  Delete input */}
                <IconButton
                    onClick={() => {
                        dispatch({ type: 'setAppFormFlowControl', payload: app.formFlow.controls.filter((_, i) => i !== index) })
                    }}
                    size='sm'
                    nature='danger'
                ><TbTrash size={16} /></IconButton>
 <IconButton
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDragStart={() => handleDragStart(index)}
                    className='drag'
                    size='sm'
                    nature='grey'
                >   <MdOutlineDragIndicator
                        size={16}

                    /></IconButton>

            </div>
        })
        }
    </>
}
function GeneralTab({ app, dispatch }) {

    return <FormGroup className='g-0'>
        <FormElement size="sm">
            <Label sm={true} htmlFor="appName">App Name</Label>
            <Input sm={true} value={app.name} id='appName' onChange={(e) => dispatch({ type: 'setAppName', payload: e.target.value })} />
        </FormElement>
        <FormElement size="sm">
            <Label sm={true} htmlFor="appId">App Id</Label>
            <Input sm={true} value={app.appId} id='appId' required onChange={(e) => dispatch({ type: 'setAppId', payload: e.target.value })} />
            <FormHelper>
                {process.env.NEXT_PUBLIC_WEBSITE_URL + app.path}
            </FormHelper>
        </FormElement>
        <FormElement size="sm">
            <Label sm={true} htmlFor="appShortDescription">Short Description</Label>
            <TextArea sm={true} value={app.shortDescription} id='appShortDescription' onChange={(e) => dispatch({ type: 'setAppShortDescription', payload: e.target.value })} />
        </FormElement>
        <FormElement size="sm">
            <Label sm={true} htmlFor="appDescription">Description</Label>
            <TextArea sm={true} value={app.description} id='appDescription' onChange={(e) => dispatch({ type: 'setAppDescription', payload: e.target.value })} ></TextArea>
        </FormElement>
        <FormElement size="sm">
            <Label sm={true} htmlFor="appType">Type</Label>
            <Select value={app.type} id='appType' onChange={(option) => dispatch({ type: 'setAppType', payload: option.value })}
                options={[
                    { label: "Text Input to Text Output", value: "text_input_to_text_output" },
                    { label: "Text Input to Image Output", value: "text_input_to_image_output" },
                    { label: "Text Input to Audio Output", value: "text_input_to_audio_output" },
                    { label: "Text Input to Video Output", value: "text_input_to_video_output" },
                    { label: "Text Input to File Output", value: "text_input_to_file_output" },
                ]}
                size="sm"
            />
        </FormElement>
        <FormElement size="sm">
            <Label sm={true} htmlFor="appMembership">Membership</Label>
            <Select value={app.membership} id='appMembership' onChange={(option) => dispatch({ type: 'setAppMembership', payload: option.value })}
                options={[
                    { label: "Free", value: "free" },
                    { label: "Pro", value: "Pro" },
                    { label: "Premium", value: "premium" },
                ]}
                size='sm'
            />
        </FormElement>
        <FormElement size="sm">
            <Label sm={true} htmlFor="appCategory">Category</Label>
            <Select value={app.category} id='appCategory' onChange={(option) => dispatch({ type: 'setAppCategory', payload: option.value })}
                options={[
                    { label: "Education", value: "education" },
                    { label: "Personal", value: "personal" },
                    { label: "Career", value: "career" },
                    { label: "Business", value: "business" },
                    { label: "Health", value: "health" },
                    { label: "Fitness", value: "fitness" },
                    { label: "Lifestyle", value: "lifestyle" },
                    { label: "Sales & Marketing", value: "sales_and_marketing" },
                    { label: "Finance", value: "finance" },
                    { label: "Productivity", value: "productivity" },
                    { label: "Social", value: "social" },
                    { label: "Entertainment", value: "entertainment" },
                ]}
                size='sm'
            />
        </FormElement>
        <FormElement size="sm">
            <Label sm={true} htmlFor="appTags">Tags</Label>
            <Input 
                id="appTags"
                placeholder={"Add Tags"}
                value={app.tags.join(', ')}
                onChange={(e) => dispatch({ 
                    type: 'setAppTags',
                    payload: e.target.value.split(',').map((tag) => tag.trim())
                 })}
                
            />
        </FormElement>
        <FormElement size="sm">
            <Label sm={true} htmlFor="appKeywords">Keywords</Label>
            <TextArea 
                id="appKeywords"
                rows={5}
                cols={8}
                placeholder={"Add Keywords fo search engine"}
                value={app.keywords.join(', ')}
                onChange={(e) => dispatch({ 
                    type: 'setAppKeywords',
                    payload: e.target.value.split(',').map((words) => words.trim())
                 })}
                
            />
        </FormElement>
        {/* <FormElement>
            <Label sm={true} htmlFor="appAuthor">Author</Label>
            <Input sm={true} value={app.author} id='appAuthor' onChange={(e) => dispatch({ type: 'setAppAuthor', payload: e.target.value })} />
        </FormElement> */}
        <FormElement size="sm">
            <Label sm={true} htmlFor="appVersion">Version</Label>
            <Input sm={true} value={app.version} id='appVersion' onChange={(e) => dispatch({ type: 'setAppVersion', payload: e.target.value })} />
        </FormElement>
    </FormGroup>
}
function PromptTab({ app, dispatch }) {


    return <>
     <FormElement size="sm">
            <Label sm={true} htmlFor="Configurations">Configurations </Label>
            <CheckBox
                id='Configurations'
                checked={(Object.keys(app.config !== null ?app.config : {}).length > 0)}
                onChange={(e) => {
                    if (e.target.checked) {
                        dispatch({
                            type: 'setAppConfig', payload: {
                                prompt: "",
                                model: "text-davinci-003",
                                temperature: "1.0", //1.0
                                max_tokens: "", //500
                                top_p: "1.0", //1.0
                                frequency_penalty: "0.0", //0.0
                                presence_penalty: "0.0" //0.0
                            }
                        });
                    }
                    else {
                        dispatch({ type: 'setAppConfig', payload: null });
                    }
                }}
            />
        </FormElement>
       <FormGroup className='g-0'>
        {app.config === null ? null : <>
            <FormElement size="sm">
                <Label sm={true} htmlFor="appPrompt">Prompt</Label>
                <TextArea sm={true} value={app.config.prompt} id='appPrompt' onChange={(e) => dispatch({ type: 'setAppConfig', payload:{
                    ...app.config,
                    prompt: e.target.value
                } })} />
                <FormHelper>
                This logic is to enable the model to receive user input defined above through a designated input field marked with an ‘@’ symbol in the prompt. The model will then utilize the provided input to generate an appropriate response or perform the requested task. Example prompt: 'translate @variable into English

                </FormHelper>
            </FormElement>

            <FormElement size="sm">
                <Label sm={true} htmlFor="appModel">Model</Label>
                <Select
                    id="appModel"
                    value={app.config.model}
                    onChange={(option) => dispatch({ 
                        type: 'setAppConfig',
                        payload: {
                            ...app.config,
                            model: option.value
                        }
                     })}
                    options={[
                        { label: "Davinci", value: "text-davinci-003" },
                        { label: "Ada", value: "text-ada-003" },
                        { label: "Babbage", value: "text-babbage-003" },
                        { label: "Curie", value: "text-curie-003" },
                        { label: "Cushman", value: "text-cushman-003" },
                        { label: "Davinci Codex", value: "davinci-codex" },
                    ]}
                    size="sm"
                />
            </FormElement>
            <FormElement size="sm">
                <Label sm={true} htmlFor="appTemperature">Temperature</Label>
                <Input sm={true} value={app.config.temperature} id='appTemperature' onChange={(e) => dispatch({ 
                    type: 'setAppConfig',
                    payload: {
                        ...app.config,
                        temperature: e.target.value
                    }
                })} />
            </FormElement>
            <FormElement size="sm">
                <Label sm={true} htmlFor="appMaxTokens">Max Tokens</Label>
                <Input sm={true} value={app.config.max_tokens} id='appMaxTokens' onChange={(e) => dispatch({ 
                    type: 'setAppConfig',
                    payload:{
                        ...app.config,
                        max_tokens: e.target.value
                    }
                 })}
                 placeholder={'Estimated tokens : '+EstimateTokens(app) } 
                 
                 />
                 <FormHelper>
                   Requests can use up to 2048 tokens shared between prompt and completion. (One token is roughly 4 characters for normal English text)
                 </FormHelper>
            </FormElement>
            <FormElement size="sm">
                <Label sm={true} htmlFor="appTopP">Top P</Label>
                <Input sm={true} value={app.config.top_p} id='appTopP' onChange={(e) => dispatch({ 
                    type: 'setAppConfig',
                    payload: {
                        ...app.config,
                    }
                 })} />
            </FormElement>
            <FormElement size="sm">
                <Label sm={true} htmlFor="appFrequencyPenalty">Frequency Penalty</Label>
                <Input sm={true} value={app.config.frequency_penalty} id='appFrequencyPenalty' onChange={(e) => dispatch({ 
                    type: 'setAppConfig',
                    payload: {
                        ...app.config,
                        frequency_penalty: e.target.value
                    }
                 })} />
            </FormElement>
            <FormElement size="sm">
                <Label sm={true} htmlFor="appPresencePenalty">Presence Penalty</Label>
                <Input sm={true} value={app.config.presence_penalty} id='appPresencePenalty' onChange={(e) => dispatch({ 
                    type: 'setAppConfig',
                    payload: {
                        ...app.config,
                        presence_penalty: e.target.value
                    }
                 })} />
            </FormElement>



        </>}
        </FormGroup>


    </>

}

function FinalTab({ app, dispatch, user, type = "submit" }) {

    const [isSure, setSure] = useState(false);
    const SubmitApp = async () => {
 


        try {

            const response = await axios.post('/api/apps/' + type, {
                userId: user.id as string,
                appData: {
                    ...app,
                    config: app.config === null ? null : {
                        ...app.config,
                        prompt: replaceWords(app.config.prompt, app.formFlow.inputs.map((item) => item.id))
                    }
                },
            });
            console.log(response);
        }
        catch (e) {
            console.log(e);
            if (e.response.status === 401) {
                toast.error("You are not authorized to submit this app");
            }
            else if (e.response.status === 403) {
                toast.error("App with this id already exists");
            }

        }
    }
    return <>

        <FormGroup className='g-0'>

            <FormElement size="sm" className="m-0">
                <Label sm={true} htmlFor="InputEnabled">Enable app :  </Label>
                <CheckBox
                    id='InputEnabled'
                    checked={app.enabled}
                    onChange={(e) => {
                        if (e.target.checked) {
                            dispatch({ type: 'setAppEnabled', payload: true });
                        }
                        else {
                            dispatch({ type: 'setAppEnabled', payload: false });
                        }
                    }}
                />
            </FormElement>
            <FormElement size="sm" className="m-0">
                <Label sm={true} htmlFor="customFunction">Custom Function </Label>
                <CheckBox
                    id='customFunction'
                    checked={app.customFunction}
                    onChange={(e) => {
                            dispatch({ type: 'setAppCustomFunction', payload: e.target.checked });
                    }}
                />
            </FormElement>
            <FormElement size="sm" className="m-0">
                <Select
                    id="status"
                    value={app.state}
                    onChange={(option: {
                        label: string;
                        value: string;
                    }) => dispatch({ type: 'setAppState', payload: option.value })}
                    options={[
                        { label: "Draft", value: "draft" },
                        { label: "Pending", value: "pending" },
                        { label: "Published", value: "published" },
                        { label: "Rejected", value: "rejected" },
                    ]}
                    size='sm'
                />
                <Label sm={true} htmlFor="status">App State </Label>
            </FormElement>

            <FormElement size="sm">
                <Label sm={true} htmlFor="InputRequired">Are you sure you want to {type} this app?</Label>
                <CheckBox
                    id='InputRequired'
                    checked={isSure}
                    onChange={(e) => {
                        setSure(e.target.checked);
                    }}
                />
            </FormElement>
        </FormGroup>


        <div className='d-flex g-2 align-items-center my-2'>

            <Button onClick={() => {
                toast.promise(SubmitApp(), {
                    loading: (type === "update" ? "updating..." : "submitting..."),
                    success: 'App  ' + (type === "update" ? "updated" : "submitted") + ' successfully',
                    error: 'Error ' + (type === "update" ? "updating" : "submitting") + ' app',
                })
            }}
                nature='dark'

                disabled={!isSure}>{type} </Button>
        </div>
        <p className='small'>By clicking <span className='strong'>{type}</span> you agree to our <Link href="/terms">Terms of Service</Link> and <Link href="/privacy">Privacy Policy</Link></p>

        <Toaster />
    </>
}




const PageWrapper = styled.div`
position: relative;
width: 100%;
height: 100%;
min-height: 100vh;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: stretch;
gap: 1rem;
`;
const PreviewWrapper = styled.div`
position: relative;
width: 100%;
height: 100%;
min-height: 100vh;
`;
const EditorWrapper = styled.div`
position: relative;
top: 0;
right: 0;
bottom: 0;
height: 100%;
width: 100%;
// max-width: 262px;
background:var(--card-bg);
border-left: 1px solid var(--border-color);
box-shadow: 0 0 10px 0 rgba(0,0,0,.1);
border-radius: 0.5rem;
    .item{
        display: flex;
        justify-content:flex-end;
        align-items: center;
        gap: 0.25rem;
        padding: 0.25rem;
        border-bottom: 1px solid var(--border-color);
        background: #f2f5f7;
        border-radius: 0.5rem;
        margin-left:auto;
        margin-bottom:0.25rem;
        span{
            margin-right: auto;
            margin-left: 0.5rem;
            font-size: 1rem;
            font-weight: 500;
        }
        &:last-child{
            border-bottom: none;
        }
        .drag{
            cursor: grab;
            &:active{
                cursor: grabbing;
            }
        }
    }
`;

const EstimateTokens = (app: AppTypeEditable) => {
    let prompt :string ="";

    app?.formFlow.inputs.forEach((input) => {
        input.constraints["max_length"] ? prompt += input.constraints["max_length"] : prompt += "";
    });

    const cleanedPrompt = prompt.trim().replace(/\s+/g, ' ');

    // Split the prompt into tokens based on whitespace and common punctuation
    const tokens = cleanedPrompt.split(/\s+|\b/);
  
    // Remove empty tokens
    const filteredTokens = tokens.filter(token => token !== '');
  
    // Return the estimated token count
    return filteredTokens.length +  (app?.config?.prompt.length ? app?.config.prompt.length : 0);
    
}

const replaceWords = (sentence, wordList) => {
    let replacedSentence = sentence;

    for (const word of wordList) {
        const regex = new RegExp(`@${word}\\b`, 'g');
        replacedSentence = replacedSentence.replace(regex, `<<<${word}>>>]`);
    }

    return replacedSentence;
}


  
const ValidateNewInput = (Input: InputType) => {


    // check if type is valid
    if (Input.type.length === 0) {
        return { isValid: false, message: "Input Type is required" };
    }
    if (Input.type !== "text_input" && Input.type !== "number_input" && Input.type !== "text_multiline" && Input.type !== "dropdown" && Input.type !== "autoComplete" && Input.type !== "radio" && Input.type !== "checkbox") {
        return { isValid: false, message: "Input Type is invalid" };
    }
    // check if name is valid
    if (Input.name.length === 0) {
        return { isValid: false, message: "Input Name is required" };
    }
    if (Input.name.length < 2 || Input.name.length > 50) {
        return { isValid: false, message: "Input Name must be between 2 and 50 characters" };
    }
    // check if id is valid
    if (Input.id.length === 0) {
        return { isValid: false, message: "Input Id is required" };
    }
    if (Input.id.length < 2 || Input.id.length > 50) {
        return { isValid: false, message: "Input Id must be between 2 and 50 characters" };
    }
    // check if label is valid
    if (Input.label.length === 0) {
        return { isValid: false, message: "Input Label is required" };
    }
    if (Input.label.length < 2 || Input.label.length > 50) {
        return { isValid: false, message: "Input Label must be between 2 and 50 characters" };
    }
    // check if placeholder is valid
    if (Input.placeholder.length === 0) {
        return { isValid: false, message: "Input Placeholder is required" };
    }
    if (Input.placeholder.length < 2) {
        return { isValid: false, message: "Input Placeholder must be between 2 characters" };
    }
    // check if helperText is valid
    if (Input?.helperText) {
        if (Input?.helperText.length < 2 || Input?.helperText.length > 100) {
            return { isValid: false, message: "Input Helper must be between 2 and 100 characters" };
        }
    }
    // check if InputOptions is valid
    if (Input?.options.length > 0) {
        if (Input?.options.length < 2) {
            return { isValid: false, message: "Input Options must be at least 2" };
        }
        Input?.options.forEach((option :OptionType) => {
            // check if options label is valid
            if (option.label.length === 0) {
                return { isValid: false, message: "Input Option Label is required" };
            }
            if (option.label.length < 2 || option.label.length > 50) {
                return { isValid: false, message: "Input Option Label must be between 2 and 50 characters" };
            }
            // check if options value is valid
            if (option.value.length === 0) {
                return { isValid: false, message: "Input Option Value is required" };
            }
            if (option.value.length < 2 || option.value.length > 50) {
                return { isValid: false, message: "Input Option Value must be between 2 and 50 characters" };
            }
        })
    }
    // check if constraints is valid
    // if (Input.constraints) {
    //     if (Input.constraints.length < 2 || Input.constraints.length > 50) {
    //         return { isValid: false, message: "Input Constraints must be between 2 and 50 characters" };
    //     }
    // }


}