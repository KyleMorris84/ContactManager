import {useState} from 'react'

export default function Cell({ id, update, data, editable=true, col }) {
    const [value, setValue] = useState(data);

    const handleChange = (event) => {
        update(id, col, event.target.value)
        setValue(event.target.value)
    }
    
    return (
        <div>
            { editable && <input onChange={handleChange} className="p-1 w-18 rounded outline-1 outline-solid outline-transparent hover:outline-white focus:outline-white" value={value}></input> }
            { !editable && <p className="w-16">{value}</p> }
        </div>
    )
}