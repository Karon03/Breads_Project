const React = require('react')
const Default = require('./layout/default')

function Show({ bread }) {
    return (
        <Default>
            <h3>{bread.name}</h3>
            <p>
                and it
                {
                    bread.hasGluten
                        ? <span> does </span>
                        : <span> does NOT </span>
                }
                have gluten.
            </p>
            <img src={bread.image} alt={bread.name} />
            <p>{bread.getBakedBy()}</p>
            <a href={`/bread/${bread.id}/edit`}><button>Edit</button></a>
            <form action={`/bread/${bread.id}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE" />
            </form>
            <li><a href="/bread">Go home</a></li>
        </Default>

    )
}


module.exports = Show
