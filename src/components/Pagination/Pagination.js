import React,{useEffect} from 'react'
import './Pagination.css'

export default function Pagination(props) {
    const totalItems=[];

    useEffect(() => {
        const initialActivePage= document.getElementsByClassName("page")[0];

        if(initialActivePage){
            initialActivePage.setAttribute("id","active__page");
        }
       
    }, [])

    for(let i=1;i<=props.totalPages;i++)
    {
        totalItems.push(i);

    }
    const setActivePage=(e)=>{
        props.setPage(e.target.innerText);
        const activePage=document.getElementById("active__page");
        if(activePage){
            activePage.removeAttribute("id");

        }
       
        e.target.setAttribute("id","active__page")
    }
    return (
        <div className='pagination'>
       
        {
            totalItems&&totalItems.map((element)=>{
                return (
                    <p onClick={setActivePage} className='page' key={element}>{element}</p>
                    
                )
            })
        }
       
            
        </div>
    )
}
