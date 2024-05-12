export default function TextureOverlay() {
    return (
        <>
            {/* pointer-events-none allows clicks through the overlay */}
            <div className="fixed inset-0 z-50 bg-[url('../public/star.png')] bg-[length:8px] opacity-5 pointer-events-none"></div>
        </>
    )
}
