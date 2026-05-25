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
      {type: 'paragraph', content: 'Um simulador de rede social desenvolvido para praticar conceitos avançados de manipulação de estado, interatividade e dinamismo no front-end. A aplicação permite que o usuário crie publicações, visualize o feed e interaja deixando comentários ou excluindo suas próprias mensagens, tudo com uma interface limpa e intuitiva.'},
      {type: 'link', content: 'https://github.com/zebigode0000/postsPage.git'}
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
      {type: 'paragraph', content: 'Projeto Twitter Fake'},
      {type: 'paragraph', content: 'Uma aplicação web desenvolvida para simular as principais interações de uma rede social. O projeto foca em dinamismo e interatividade, permitindo a criação de posts, sistema de comentários em tempo real e gerenciamento de interações. 🚀'},
      {type: 'link', content: 'https://github.com/zebigode0000/postsPage.git'}
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


