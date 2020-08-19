import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookOpen } from 'react-icons/fa';

import { HeaderTop } from './styles';

export default function Header() {
    return(
       <HeaderTop>
           <nav>
               <Link className="logo" to="/">
                   LiveInBook <FaBookOpen size={28} color="#2A273A" />
                </Link>

               <ul>
                   <li>
                        <Link to="/books/create">
                            Adicionar Livro
                        </Link>
                   </li>
                   {/* <li>
                        <Link to="/books">
                            Lista de Livros
                        </Link>
                   </li> */}
               </ul>
           </nav>
       </HeaderTop>
    );
}