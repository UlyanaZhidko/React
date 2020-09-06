import React, { PureComponent } from 'react';


class Article extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
/* 
    componentWillReceiveProps(nextProps) {
        if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
            isOpen: nextProps.defaultOpen
        })
    } */

    render() {
        const { article, isOpen, onButtonClick} = this.props
        const style = { width: '50%' }
        const body = isOpen && <section className="card-text">{article.text}</section>
        return (
            <div className="card mx-auto" style={style}>
                <div className="card-header">
                    <h2 /*onClick={this.incrementCounter} //функция подсчета кликов*/>
                        {article.title}
                        {/*console.log(clicked {this.state.count})  //функция подсчета кликов */} 
                        <button onClick={onButtonClick} className="btn btn-primary btn-lg float-right">
                            {isOpen ? 'Close' : 'Open'}
                        </button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">
                        creation date: {(new Date(article.date)).toDateString()}
                    </h6>
                    {body}
                </div>
            </div>
        )
    }

    /*  //функция подсчета кликов
     incrementCounter = () => {
          this.setState({
              count: this.state.count + 1
          })
      }
   */

   
    
}



export default Article