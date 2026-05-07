import ignitesimbol from '../assets/ignitesimbol.svg'

export function Header () {
    return (
        <header className="bg-gray-900 text-white flex items-center justify-center text-3xl p-3">
            <img className='h-10' src={ignitesimbol} alt="" />
            <h1 className="font-bold ">InstaFeed</h1>
        </header>
    )
}