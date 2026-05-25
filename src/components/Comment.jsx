import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import { useState } from 'react'

export function Comments (props) {
    const [likeCount, setLikeCount] = useState(0)

function handleLikeComment () {
    setLikeCount(likeCount + 1)
}
    
function handleDeleteComment () {
    props.onDeleteComment(props.content)
}


    return (
        <div className="mt-10 flex gap-2">  
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/142757915?v=4"/>
            
            <div className="flex-1">
                <div className="bg-black/20 p-5 rounded">
                    <header className="flex justify-between">
                        <div className="flex flex-col">
                            <strong className="font-bold">Luana</strong>
                            <time className="text-gray-600 font-normal" title="11 de Maio as 8:30" dateTime="2022-05-11 08:13:40">Cerca de 1h atras</time>
                        </div>
                        <div>
                            <button onClick={handleDeleteComment} className="hover:text-red-400 cursor-pointer" title="Deletar "><Trash size={20}/></button>
                        </div>
                        
                    </header>
                    <p className="leading-15">{props.content}</p>
                </div>

                <footer className="flex gap-2 items-center pt-2 ">
                    <button className="flex items-center gap-2" onClick={handleLikeComment}>
                        <ThumbsUp className="hover:text-blue-400 cursor-pointer" />
                        Aplaudir <span className="before:content-['\2022'] before:mr-2">{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}