import Editor from '@draft-js-plugins/editor';
import createMentionPlugin from '@draft-js-plugins/mention';
import { ContentState, EditorState, convertToRaw } from 'draft-js';
import {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState
} from 'react';

import { Badge } from '@/components/ui/badge';
import { AppConfigType, AppType } from "src/types/app";
import { useBuilderContext } from "../../common/context/builder-context";



export default function Prompt({ app }: {
    app: AppType
}) {
    const { builderData, updateBuilderData } = useBuilderContext();

    const mentions = builderData.formFlow.inputs.map((item) => item.id).map((item, index) => {
        return {
            name: "@" + item,
            id: index,
        }
    });
    const ref = useRef<any>(null);
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    const [open, setOpen] = useState(true);
    const [suggestions, setSuggestions] = useState(mentions);

    

    const { MentionSuggestions, plugins } = useMemo(() => {
        const mentionPlugin = createMentionPlugin({
            entityMutability: 'IMMUTABLE',
            // mentionPrefix: '@',
            mentionTrigger: '@',
            supportWhitespace: true,
            // mentionRegExp: "/@(\w+)/g"
        });

        const { MentionSuggestions } = mentionPlugin;

        const plugins = [mentionPlugin];
        return { plugins, MentionSuggestions };
    }, []);

    const onOpenChange = useCallback((_open: boolean) => {
        setOpen(_open);
    }, []);
    const onSearchChange = useCallback(({ value }: {
        value: string
    }) => {
        setSuggestions(mentions.filter((mention) => {
            return mention.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
        }));
    }, []);
    useEffect(() => {
        // Convert plain text to Draft.js content state
        const initialContentState = ContentState.createFromText(builderData?.config?.prompt ?  builderData?.config?.prompt + " " :"");
        const initialEditorState = EditorState.createWithContent(initialContentState);
        setEditorState(initialEditorState);
        let config = {
            ...builderData.config,
            prompt: builderData?.config?.prompt ? builderData.config.prompt : ""
        } as AppConfigType;
        updateBuilderData({
            ...builderData,
            config
        })
    }, []);




    return (
        <div>

            <p className="text-xs text-gray-400 ">
                This logic allows the model to receive user input defined above via a specific input field in the prompt denoted with a <kbd className='font-inherit text-xs bg-primary/5 text-primary'>@</kbd> symbol. The model will next use the input provided to provide an appropriate answer or carry out the specified task. <kbd className='font-inherit text-xs bg-primary/5 text-primary'>translate @input_name into English</kbd> is an example prompt.
            </p>

            <div
                role="textbox"
                aria-multiline="true"
                aria-labelledby="prompt-label"
                aria-required="true"
                className={` promptBox my-2 bg-slate-100 focus-within:border-primary active:border-primary border-[hsl(var(--border))] border cursor-text rounded-md p-4 w-[100%] outline-none min-h-[400px] break-words`}
                onClick={() => {
                    if (ref.current)
                        ref.current?.focus();
                }}
            >
                <Editor
                    editorKey={'editor'}
                    editorState={editorState}
                    onChange={(value) => {

                        const plainText = convertToRaw(value.getCurrentContent()).blocks.map(block => block.text).join('\n');

                        console.log(plainText)
                        let config = {
                            ...builderData.config,
                            prompt: plainText
                        } as AppConfigType;
                        updateBuilderData({
                            ...builderData,
                            config
                        })
                        setEditorState(value)
                    }}
                    plugins={plugins}
                    ref={ref}
                />
                <MentionSuggestions
                    open={open}
                    onOpenChange={onOpenChange}
                    suggestions={suggestions}
                    onSearchChange={onSearchChange}
                    onAddMention={() => {
                        // get the mention object selected
                    }}
                />
            </div>


            <div className="flex flex-col w-[100%] gap-4">
                <div className="w-[100%] flex gap-2 flex-wrap">
                    {mentions.map((sugg, index) => {
                        return (
                            <Badge variant="secondary" key={index} className={`break-word cursor-pointer`}
                                onClick={() => {
                                    const editorValue = convertToRaw(editorState.getCurrentContent()).blocks.map(block => block.text).join('\n');

                                    const withSuggester = editorValue + " " +  sugg.name + " ";
                                    let config = {
                                        ...builderData.config,
                                        prompt: withSuggester
                                    } as AppConfigType;
                                    updateBuilderData({
                                        ...builderData,
                                        config
                                    })
                                    const initialContentState = ContentState.createFromText(withSuggester);
                                    const _EditorState = EditorState.createWithContent(initialContentState);
                                    setEditorState(_EditorState);

                                }}
                            >
                                {sugg.name}
                            </Badge>

                        )
                    })}
                </div>

            </div>


        </div>

    )

};

