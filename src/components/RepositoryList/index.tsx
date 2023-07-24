import { useEffect, useState } from "react";
import { RepositoryItem } from "../RepositoryItem";

import './style.css';
interface Repository{
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList(){
    const [repositories ,setRepositories] = useState<Repository[]>([]);
    useEffect(()=>{
        fetch("https://api.github.com/orgs/rocketseat/repos")
        .then(response => response.json())
        .then(data => setRepositories(data))
    })
    return <section className="container-list">
        <h1 className="title-list">Lista de Repositorios</h1>
        <ul className="box-list">
            {
                repositories.map((item) =>{
                    return(
                        <RepositoryItem key={item.name}
                         repository={item} />
                    )
                })
            }
            
        </ul>
    </section>
}