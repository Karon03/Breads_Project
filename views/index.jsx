const React = require('react')
const Default = require('./layout/default')

function Index({ breads }) {
    return (
        <Default>
            <h2>Index Page</h2>
            {/* <p>I have {breads[0].name} bread!</p> /}
            {/ This is a JSX comment. */}
            <ul>
                {
                    breads.map((bread, index) => {
                        return (
                            <li key={index}>
                                <a href={`/bread/${bread._id}`}>
                                    {bread.name}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="newButton">
                <a href="/bread/new"><button>Add a new bread</button></a>
            </div>
        </Default>
    )
}


module.exports = Index
