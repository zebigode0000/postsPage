export function Avatar ({hasBorder = true, src}) {
    return(
        <div>
            <img className={ 
            hasBorder 
            ? "box-content outline-2 outline-ignite-500 border-2 size-10 rounded border-gray-900" 
            : "size-10 rounded"}
            src={src} alt="" />
        </div>
    )
}