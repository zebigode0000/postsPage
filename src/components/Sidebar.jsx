import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar () {
    return (
        <aside className="bg-gray-900 overflow-hidden rounded-2xl">
            <img className="w-full h-20 object-cover" src="https://images.unsplash.com/photo-1719253480609-579ad1622c65?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            <div className="flex flex-col items-center p-2 mt-[-30px]">
                <Avatar hasBorder={true} src="https://avatars.githubusercontent.com/u/142757915?v=4" />
                <strong className="mt-2 text-gray-100 leading-5">Augusto Moraes</strong>
                <span className="text-[14px] text-gray-400 leading-5">Web Developer</span>
            </div>

            <footer className="border-t-2 mt-2 p-6">
                <a className="w-full bg-transparent border-2 p-2 px-4 text-blue-400 rounded flex justify-center items-center gap-1.5 hover:bg-blue-400 hover:text-white hover:border-blue-400 transition-all ease-in duration-200" href="#">
                    <PencilLine 
                    size={20}
                    />
                    Editar seu perfil
                    </a>
            </footer>
        </aside>
    )
}