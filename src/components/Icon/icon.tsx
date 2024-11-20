import { typeToIcon } from "./const.tsx";

export default function Icon(props: { type: string }) {
    const { type } = props;

    return (typeToIcon[type]);
}