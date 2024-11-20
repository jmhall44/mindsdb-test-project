import {
    ChevronDownIcon,
    ChevronRightIcon,
    CircleStackIcon,
    ComputerDesktopIcon,
    EyeIcon, FolderOpenIcon,
    LightBulbIcon,
    TableCellsIcon
} from "@heroicons/react/24/outline";
import React from "react";

// Easy to add new icons as they come up
export const TypeToIcon = {
    'system': <CircleStackIcon className="h-5 w-5 font-bold text-blue-600" aria-label='System' />,
    'project':  <CircleStackIcon className="h-5 w-5 font-bold text-blue-600" aria-label='Project'/>,
    'view': <EyeIcon className="h-5 w-5 font-bold text-green-500" aria-label='View'/>,
    'agent': <ComputerDesktopIcon className="h-5 w-5 font-bold text-orange-400" aria-label='Agent'/>,
    'model': <LightBulbIcon className="h-5 w-5 font-bold text-purple-600" aria-label='Model'/>,
    'data': <CircleStackIcon className="h-5 w-5 font-bold text-blue-600" aria-label='Data' />,
    'table': <TableCellsIcon className="h-5 w-5 font-bold text-red-600" aria-label='Table' />,
    'chevron-right': <ChevronRightIcon className="h-3 w-3 text-gray-600" aria-label='Open'/>,
    'chevron-down': <ChevronDownIcon className="h-3 w-3 text-gray-600" aria-label='Close'/>,
    'blank-with-children': <FolderOpenIcon className="h-5 w-5 font-bold text-yellow-600" aria-label='System' />,
    'blank-no-children': <CircleStackIcon className="h-5 w-5 font-bold text-blue-600" aria-label='Misc'/>
}
