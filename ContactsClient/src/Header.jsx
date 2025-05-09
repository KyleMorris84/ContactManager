import { Save, Info } from "lucide-react"

export default function Header({ setShowPopup, save }) {

    return(
        <div>
            <div className="max-w-fit mx-auto inset-x-0 absolute top-0 z-9995">
                <h1 className="text-3xl bg-neutral-800 p-2 rounded-xl mt-2">Contacts Manager</h1>
            </div>
            <div onClick={() => setShowPopup(true)} className="bg-neutral-800 flex items-center gap-1 text-xl justify-center rounded-xl p-2 fixed left-2 top-2 hover:bg-neutral-700 transition-all z-9996">
                <Info size={32} color={"white"} />
                Info
            </div>
            <div onClick={save} className="bg-neutral-800 text-xl justify-center rounded-xl p-2 fixed right-2 top-2 flex items-center gap-1 hover:bg-neutral-700 transition-all z-9997">
                <Save size={32} color={"white"} />
                Save
            </div>
        </div>
    )
}