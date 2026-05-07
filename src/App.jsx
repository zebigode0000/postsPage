import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Posts }  from './components/Posts'

import './Global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/142757915?v=4',
      name: 'Augusto',
      role: 'web developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2026-03-01 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/142757915?v=4',
      name: 'Daniel',
      role: 'Seller'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2026-01-01 20:00:00')
  },
]



export function App() {

  return (
    <>
    <Header />
      
      <div className='max-w-6xl m-auto p-2 grid grid-cols-1 md:grid-cols-[256px_1fr] gap-4 items-start'>
        <Sidebar />

        <main className='flex flex-col gap-5'>
          {posts.map(post => {
            return(<Posts 
            key={post.id}
            author = {post.author}
            content = {post.content}
            publishedAt = {post.publishedAt}
            />)
          }
        )}

        </main>
      </div>
      
    </>
  )
}


