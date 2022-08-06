export default function setOpacity(color: string, opacity: number) {
    const opacityString = parseInt((opacity * 255).toFixed()).toString(16);
    return `${color}${opacityString}`;
}
