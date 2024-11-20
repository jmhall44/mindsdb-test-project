import { TypeToIcon } from "./const.tsx";

export default function Icon(props: { type: string }) {
    const { type } = props;

    return (TypeToIcon[type]);
}