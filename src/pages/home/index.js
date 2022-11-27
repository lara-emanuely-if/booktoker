import { useState } from 'react'
import {Contatainer, BookList, Book } from 'react'




function Home() {

    const { book, setBook } = useState([])

    
    
    
    
    
    
    return(
        <Contatainer>
        <h1>Livros</h1>
        <BookList>
            {book.map(livro => {
                return(
                    <Book key={book.id}>
                        <span>{book.title}</span>
                    </Book>
                
                  )
                },
                </BookList>
                </Contatainer>
    )
            }
export default Home;