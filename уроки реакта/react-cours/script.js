
 
 
 function Article(props) {
     const {article} = props
    const body = <section>{article.text}</section>
    return (
        <div>
            <h2>{article.title}</h2>
            {body}
            <h3>
                creation date: {(new Date(article.date)).toDateString()}
            </h3>
        </div >
    )
} 



//New component

function App() {
    return (
        < div >
            <h1>title</h1>
            <Article article={articles[0]}/>
        </div >
    )
}

const app = document.getElementById("root");

ReactDOM.render(

    <App />,

    app
);