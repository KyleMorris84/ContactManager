import { X } from "lucide-react";

export default function InfoPopup({ setShowPopup }) {

    console.log("hello")

    return (
        <>
            <div className="backdrop-blur-xs w-screen h-screen fixed top-0 bottom-0 left-0 right-0 z-9998">
            </div>
            <div className="fixed bg-neutral-700 ring-4 ring-neutral-400 m-auto inset-y-0 inset-x-0 max-w-fit max-h-fit p-5 pr-30 rounded-md z-9999">
                <h2 className="text-2xl mb-10 ml-20">Welcome to my Contacts Manager!</h2>
                <X size={32} onClick={() => setShowPopup(false)} className="absolute right-2 top-2 hover:bg-neutral-500 rounded-xl hover:drop-shadow-neutral-700/50 hover:drop-shadow-lg" />
                <p>This is some information. Fill this in later</p>
            </div>
        </>
    )
}