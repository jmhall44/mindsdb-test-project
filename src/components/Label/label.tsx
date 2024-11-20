import React from "react";
import './styles.css'

const LabelToColor = {
    'system': 'text-gray-600 bg-gray-100',
    'project': 'text-blue-600 bg-blue-100',
    'view': 'text-green-500 bg-green-100',
    'agent': 'text-orange-400 bg-orange-100',
    'model': 'text-purple-600 bg-purple-100',
    'lightwood': 'text-blue-600 bg-blue-100',
    'web': 'text-blue-600 bg-blue-100',
    'data': 'text-blue-600 bg-blue-100',
    'files': 'text-blue-600 bg-blue-100',
    'table': 'text-red-600 bg-red-100'
}

export default function Label(props: { label: string }) {
    const { label } = props;
    return (
        <div className={`text-xs font-slim outer-box ${LabelToColor[label] || 'text-blue-600 bg-blue-100'}`}>{label}</div>
    );
}