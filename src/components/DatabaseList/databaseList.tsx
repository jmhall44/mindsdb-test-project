import React from 'react';
import CollapsibleRow from "../CollapsibleRow/collapsibleRow.tsx";
import { Row } from "../../types.ts";

export default function DatabaseList(props: { data: Row[] }) {
    const { data } = props;

    if (!data) { return; }

    return (
        <>
            {data.map((row, i) => {
                return <CollapsibleRow key={i} row={row} />
            })}
        </>
    );
}