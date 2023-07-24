import "./style.css"

interface RepositoryItemProps {
     repository:{
        name:string,
        description:string,
        html_url:string
     }
}

export function RepositoryItem(props:RepositoryItemProps){
    return(
        <li className="conteiner-item">
            <strong className="title-item">{props.repository.name}</strong>
            <p className="description-item">{props.repository.description}</p>
            <a href={props.repository.html_url} className="link-item">acesse o repositorio</a>
        </li>
    )
}