import {CircleChevronLeft, CircleChevronRight} from 'lucide-react'
import {useState} from 'react'

export default function Paging({ page, setPage }) {
    const [hoverLeft, setHoverLeft] = useState(false)
    const [hoverRight, setHoverRight] = useState(false)

    const decrementPage = () => {
        if (page<=0) return
        setPage(page-1)
    }

    const incrementPage = () => {
        if (page>=125000) return
        setPage(page+1)
    }

    return (
        <div className="mx-auto flex items-center justify-between mt-5 mb-2 w-165 rounded-md bg-neutral-800" >
            <div onClick={() => decrementPage()} onMouseOver={() => setHoverLeft(true)} onMouseLeave={() => setHoverLeft(false)} className={`p-2 rounded-4xl ${hoverLeft ? "bg-neutral-600" : ""}`}>
                <CircleChevronLeft size={40} />
            </div>
            <p>Page: {page+1}/{125000 / 100}</p>
            <div onClick={() => incrementPage()}onMouseOver={() => setHoverRight(true)} onMouseLeave={() => setHoverRight(false)} className={`p-2 rounded-4xl ${hoverRight ? "bg-neutral-600" : ""}`}>
                <CircleChevronRight size={40} />
            </div>
        </div>
    )
}