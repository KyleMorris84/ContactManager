import ColHeader from "./ColHeader";
import Cell from "./Cell"
import {useState, useEffect} from "react";

function parseDate(date) {
    let newDate = new Date(date)
    return newDate.toLocaleDateString("en-GB")
}

export default function Table({ page, setPage, updatedRecords }) {

    const [colOrdering, setColOrdering] = useState({})
    const [data, setData] = useState([])

    async function loadData() {

        let col = "";
        if (colOrdering.col == "First Name") col="FirstName"
        else if (colOrdering.col == "Last Name") col="LastName"
        else if (colOrdering.col == "Post Code") col="PostCode"
        else if (colOrdering.col == "Date of Birth") col="DateOfBirth"
        else col="Id"

        let sort = "";
        if (colOrdering.direction == "asc") sort="Ascending"
        else if (colOrdering.direction == "desc") sort="Descending"
        else sort="Ascending"

        var response = await fetch(`https://localhost:7288/api/contacts?pageSize=100&page=${page}&col=${col}&sort=${sort}`)
        const responseData = await response.json()
        setData(responseData)
        
        window.scrollTo(0, 0);
    }

    function updateUpdatedRecords(id, col, value) {
        let contact = data.filter(d => d.id == id)[0]
        let updatedRecord = {...contact}
        updatedRecord[col] = value

        updatedRecords.current = [...updatedRecords.current.filter(r => r.id != id), updatedRecord];
    }

    useEffect(() => {
        loadData()
    }, [colOrdering, page])

    return ( 
        <div className="max-w-fit mx-auto bg-white rounded-xl">
            <table className="rounded-xl">
                <thead className="bg-neutral-900 rounded-xl">
                    <tr>
                        <th className="rounded-tl-xl hover:bg-neutral-700">
                            <ColHeader colName="Id" setColOrdering={setColOrdering} colOrdering={colOrdering} setPage={setPage}/>
                            <div className="w-15"></div>
                        </th>
                        <th className="hover:bg-neutral-700">
                            <ColHeader colName="First Name" setColOrdering={setColOrdering} colOrdering={colOrdering} setPage={setPage} />
                            <div className="w-33"></div>
                        </th>
                        <th className="hover:bg-neutral-700">
                            <ColHeader colName="Last Name" setColOrdering={setColOrdering} colOrdering={colOrdering} setPage={setPage} />
                            <div className="w-33"></div>
                        </th>
                        <th className="hover:bg-neutral-700">
                            <ColHeader colName="Post Code" setColOrdering={setColOrdering} colOrdering={colOrdering} setPage={setPage} />
                            <div className="w-32"></div>
                        </th>
                        <th className="rounded-tr-xl hover:bg-neutral-700">
                            <ColHeader colName="Date of Birth" setColOrdering={setColOrdering} colOrdering={colOrdering} setPage={setPage} />
                            <div className="w-36"></div>
                        </th>
                    </tr>
                </thead>
                <tbody className="">
                    { data.map(c => {
                        return(
                            <tr className="nth-of-type-[even]:bg-neutral-800/95 nth-of-type-[odd]:bg-neutral-800 hover:nth-of-type-[even]:bg-neutral-600 hover:nth-of-type-[odd]:bg-neutral-600" key={c.id}>
                                <td><Cell id={c.id} update={updateUpdatedRecords} col="id" data={c.id} editable={false} /></td>
                                <td><Cell id={c.id} update={updateUpdatedRecords} col="firstName" data={c.firstName} /></td>
                                <td><Cell id={c.id} update={updateUpdatedRecords} col="lastName" data={c.lastName} /></td>
                                <td><Cell id={c.id} update={updateUpdatedRecords} col="postcode" data={c.postCode} /></td>
                                <td><Cell id={c.id} update={updateUpdatedRecords} col="dateOfBirth" data={parseDate(c.dateOfBirth)} /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div> 
    )
}