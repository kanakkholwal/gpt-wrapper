import { IndeterminateLinearLoader, IndeterminateCircularLoader, ProgressCircularLoader, ProgressLinearLoader } from "components/Loader";
import Alert from "components/alert";


export default function _State({ loader, alert }) {

    const { type, value, shape, size, strokeWidth } = loader;
    const { open, message, nature } = alert;

    return (<>

        {type === "indeterminate" ? <>
            {shape === "circular" && <IndeterminateCircularLoader size={size} />}
            {shape === "linear" && <IndeterminateLinearLoader size={size} />}
        </> : null}
        {type === "progress" ?
            <>
                {shape === "circular" && <ProgressCircularLoader size={size} value={value} strokeWidth={strokeWidth} />}
                {shape === "linear" && <ProgressLinearLoader size={size} value={value} />}
            </>
            : null}
        <Alert nature={nature} open={open}>{message}</Alert>
    </>)
}