import React from "react";

import { LabelToColor } from "./const.tsx";

import './styles.css'

export default function Label(props: { label: string }) {
    const { label } = props;
    return (
        <div className={`text-xs font-slim outer-box ${LabelToColor[label] || 'text-blue-600 bg-blue-100'}`}>{label}</div>
    );
}