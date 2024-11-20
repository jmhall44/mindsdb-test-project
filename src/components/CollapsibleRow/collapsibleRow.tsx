import React, { useState } from "react";

import Icon from "../Icon/icon.tsx";
import Label from "../Label/label.tsx";
import { Row } from "../../types.ts";
import { TypeToColor } from "./const.tsx";

import './styles.css'

export default function CollapsibleRow(props: { row: Row }) {
    const { row } = props;
    const [collapsed, setCollapsed] = useState(true)

    let hasChildren = !!row.children;

    // I always want to add an icon/text color but if there is no type, default to file folder icon or stack
    let type = row.type || (hasChildren ? 'blank-with-children' : 'blank-no-children');
    let textColor =  TypeToColor[row.type] || (hasChildren ? 'text-yellow-600' : 'text-blue-600')

    return (
            <div className='row' aria-expanded={true}>
                <div className={`parent text-sm ${textColor}`}
                     tabIndex={hasChildren ? 0 : null}
                     onKeyDown={(e) => e.key === 'Enter' && setCollapsed(!collapsed)}
                     onClick={() => setCollapsed(!collapsed)}>

                    {hasChildren && <><Icon type={collapsed ? 'chevron-right' : 'chevron-down'} />&nbsp;</>}
                    <Icon type={type} />&nbsp;
                    {row.name}&nbsp;
                    {hasChildren && <Label label='system'/>}&nbsp;
                    {row.engine && <><Label label={row.engine}/>&nbsp;</>}
                    {<Label label={row.type}/>}&nbsp;
                </div>

                {/* Recursively call row component until there are no more children to display */}
                {!collapsed && row.children?.map((child, i) => { return <CollapsibleRow key={i} row={child} />}
                )}
            </div>


    );
}