import React from 'react'

const Popup = () => {
    const [isMuted, setIsMuted] = React.useState<boolean>(false)

    const toggleMute = () => {
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
            const currentTab = tabs[0]
            chrome.tabs.update(currentTab.id, { muted: !currentTab.mutedInfo.muted }, tab => {
                setIsMuted(tab.mutedInfo.muted)
            })
        })
    }
    return (
        <div className="inline-flex flex-col items-start p-8 border shadow w-96 h-44 bg-neutral-900 border-zinc-800">
            <h1 className="text-2xl font-bold text-white">Tab Muter</h1>
            <button
                className="mt-8 bg-violet-600 p-2 rounded-md hover:bg-violet-800  text-white"
                onClick={toggleMute}
            >
                {isMuted ? 'Unmute Tab' : 'Mute Tab'}
            </button>
        </div>
    )
}

export default Popup
