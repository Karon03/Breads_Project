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
            <li><a href="/bread">Go home</a></li>
        </Default>

    )
}


module.exports = Show
