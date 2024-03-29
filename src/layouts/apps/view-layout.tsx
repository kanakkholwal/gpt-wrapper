
import { AppTypeRenderable } from "src/types/app";
import { SessionUserType } from "src/types/user";
import AppView from "./app-view";

export default function AppplicationLayout({ user, app }: { user: SessionUserType, app: AppTypeRenderable }) {

    console.log(app);


    return (
        <div className="w-full h-full justify-center items-center">
            <AppView user={user} app={app}/>
        </div>)
}