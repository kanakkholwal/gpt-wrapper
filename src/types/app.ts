
type App = {
    _id:string | any;
    appId: string;
    enabled:Boolean;
    name: string;
    shortDescription: string;
    description: string;
    type: string;
    membership: string;
    category: string;
    tags: string[];
    author: any;
    path: string;
    coverImage: string;
    recommended: Boolean,
    createdAt:Date,
    average_rating: Number,
    ratings: Number[],
    reviews: AppReview[],
    usage: string[] | AppUsage[],
    formFlow:{
        menuType: "text_input_to_text_output" | "chatbot"| "text_input_to_image_output" | "text_input_to_video_output" | "text_input_to_audio_output" | "text_input_to_file_output"  |  "text_input_to_code_output" ,
        inputs:Input[],
        outputs:any[],
        controls:Controls[]
    }
}
interface Controls {
    controlType: string;
    id: string;
    text: string;
    icon?: string;
    action: string;
    variant: string;
}
// Also change mongo schema
interface Input {
    inputType: string;
    inputName: string;
    inputId: string;
    inputLabel:string;
    inputValue: string;
    inputPlaceholder: string;
    inputRequired:Boolean;
    constraints:any;
    inputOptions: Options[];    
}
type Options = {
    label: string;
    value: string;
}

interface AppReview {
    appId: string;
    userId: string;
    rating: Number;
    review: string;
    createdAt: string;
    _id:string | any;
}
interface AppUsage{
    appId: string;
    userId: string;
    usage: any;
    createdAt: string;
    _id:string | any;
}
type newApp = Omit<App ,"_id">
export type { App,newApp, AppReview, AppUsage };