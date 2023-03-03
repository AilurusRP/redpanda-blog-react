import { Colors } from "../constants/colors";

export default function setOpacity(color: Colors, opacity: number) {
    if (opacity > 1 || opacity < 0) {
        throw Error(`Parameter "opacity" must be a number between 0 to 1, but received ${opacity}.`);
    }
    let opacityString = parseInt((opacity * 255).toFixed()).toString(16);
    if (opacityString.length === 1) opacityString = `0${opacityString}`;
    return `${color}${opacityString}`;
}