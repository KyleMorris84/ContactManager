import { useState, useRef } from 'react'
import Header from './Header'
import Table from './Table'
import InfoPopup from './InfoPopup'
import Paging from './Paging'

export default function App() {

  const [showPopup, setShowPopup] = useState(false);
  const [page, setPage] = useState(0)
  var updatedRecords = useRef([])

  async function save() {
    var response = await fetch(`https://localhost:7288/api/contacts`, {
      method: "POST",
      body: JSON.stringify(updatedRecords.current),
      headers: {
        "Content-Type" : "application/json"
      }
    })
    if (response.ok) {
      updatedRecords.current = []
    } else {
      console.log("Error submitting.")
    }
  }

  return (
    <div className={`bg-linear-to-br from-neutral-500 to-neutral-700 min-h-screen pt-20 z-0 overflow-hidden`}>
      <Header setShowPopup={setShowPopup} save={save} />
      <Table page={page} setPage={setPage} updatedRecords={updatedRecords} />
      <Paging page={page} setPage={setPage}/>
      { showPopup && <InfoPopup setShowPopup={setShowPopup}/> }
    </div>
  )
}
