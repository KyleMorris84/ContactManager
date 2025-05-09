import { useState } from 'react'
import { ArrowDownUp, ArrowDownWideNarrow, ArrowUpNarrowWide } from 'lucide-react';

export default function ColHeader({ colName, setColOrdering, colOrdering, setPage }) {
    const [isHovering, setIsHovering] = useState(false);

    const handleClick = () => {
      if (colOrdering.col == colName && colOrdering.direction == "asc") {
        setColOrdering({col : colName, direction: "desc"})
        setPage(0)
      } else {
        setColOrdering({col : colName, direction: "asc"})
        setPage(0)
      }
    }

    return (
        <div onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)} onClick={handleClick} className="flex items-center gap-2 px-2">
            { colName } 
            { isHovering && colOrdering.col != colName && <ArrowDownUp size={16}/> }
            { colOrdering.col == colName && colOrdering.direction=="asc" && <ArrowUpNarrowWide size={16}/> }
            { colOrdering.col == colName && colOrdering.direction=="desc" && <ArrowDownWideNarrow size={16}/> }
        </div>
    )
}