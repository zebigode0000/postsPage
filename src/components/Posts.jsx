import { Avatar } from './Avatar'
import ptBR from 'date-fns/locale/pt-BR'
import { Comments } from './Comment'
import { formatDistanceToNow } from 'date-fns'
import { useState } from 'react'

export function Posts(props) {

   //variavel do comentario
  const [comments, setComments] = useState([
    "Esse projeto é um projeto muito Legal"
  ])
 //adicionar mais um comentario
  const [newComment, setNewComment] = useState ('')

  //aqui onde vai mudar o valor do comentario
  function cliqueNewCommentChange() {
    event.target.setCustomValidity('')
    setNewComment(event.target.value)
  }

  //ao clicar cria um novo comentario
  function cliqueCreateNewComment(event) {
    event.preventDefault()

    setComments([...comments, newComment])
    setNewComment('')

    
  }

  //Text area invalida mensagem
function handleNewCommentInvalid () {
  event.target.setCustomValidity('Esse campo é obrigatorio')
}

  //Deletar comentario
function deleteComment (commentToDelete) {
    const commentWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(commentWithoutDeletedOne)
  }
  
  //Data de envio
  const publishedDate = props.publishedAt;

  const publishedDateFormat = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  }).format(publishedDate)

  const publishedDateRelativeToNow = formatDistanceToNow(publishedDate, {
    locale: ptBR,
    addSuffix: true
  })

  const isNewCommentEmpty = newComment.length === 0


  return (
    
    <article className="bg-gray-900 rounded p-5 mb-4">
      <header className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Avatar hasBorder={true} src={props.author.avatarUrl} />
          <div className="flex flex-col pl-2">
            <strong className="text-gray-100">{props.author.name}</strong>
            <span className="text-gray-400">{props.author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormat} dateTime={publishedDate.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className="p-4">
        {props.content.map((line) => {
          if (line.type === 'paragraph') return <p key={line.content} className='pb-5 text-gray-300'>{line.content}</p>
          if (line.type === 'link') return <p key={line.content}><a className="text-blue-400" target='_blank' href="https://github.com/zebigode0000/postsPage.git">{line.content}</a></p>
        })}
      </div>

      <form onSubmit={cliqueCreateNewComment} className="w-full mt-2 border-t-2 border-white group">
    <strong className="leading-15 text-gray-100">Deixe seu Feedback</strong>

    <textarea name='comment'
        className="text-gray-100 mt-2 w-full bg-black/30 resize-none h-30 p-2 rounded focus:outline-none focus:border focus:border-blue-400" 
        placeholder="Deixe um Comentario"
        onChange={cliqueNewCommentChange}
        value={newComment}
        onInvalid={handleNewCommentInvalid}
        required
    />

    <footer className="invisible max-h-0 opacity-0 group-focus-within:visible group-focus-within:max-h-20 group-focus-within:opacity-100 transition-all duration-300">
        <button 
            className="mt-2 p-2 rounded bg-blue-400 font-bold text-white cursor-pointer hover:bg-blue-900 disabled:opacity-70 disabled:cursor-not-allowed enabled:hover:bg-[var(--green-300)]" 
            type="submit"
            disabled={isNewCommentEmpty}
        >
            Comentar
        </button>
    </footer>
</form>
      <div className="mt-8">
        {comments.map(comment => {
            return ( 
            <Comments 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment}
            />)
        })}
      </div>
    </article>
  )
}