import React, { Component } from 'react';
import './App.css';


const interval = 100; //частота обновления таймераы

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { value: 0, stopped: false }; //исходное состояние
    }

    increment() {
        if (!this.state.stopped) (this.setState({ value: this.state.value + 1 })); //увелечение состояния на 1
    }

    stopTimer = () => {
        this.setState({ stopped: !this.state.stopped });
        if (this.state.stopped) {
            clearInterval(this.timerId);
        } else {
            this.timerId = setInterval(() => this.increment(), 1000 / interval);
        }
    }

    resetTimer = () => {
        this.setState({ value: 0 });
    }

    componentDidMount() { //установка таймера
        this.timerId = setInterval(() => this.increment(), 1000 / interval);
    }

    componentWillMount() {
        clearInterval(this.timerId);
    }

    componentDidUpdate() {
        const value = this.state.value;
        if (this.state.stopped) document.title = "Таймер";
        else document.title = "Таймер: " + Math.floor(value / interval / 60 / 60) + ":" + Math.floor(value / interval / 60) % 60 + ":" + Math.floor(value / interval) % 60;
    }



    render() {
        const value = this.state.value //фмксируем значение сост. value
        return (
            <div className='container-fluid align-items-center'>
                <h1 className='display-1'>Timer:</h1>
                <h1 className='display-1'>
                    <span><kbd>{Math.floor(value / interval / 60 / 60)}</kbd>:</span>
                    <span><kbd>{Math.floor(value / interval / 60) % 60}</kbd>:</span>
                    <span><kbd>{Math.floor(value / interval) % 60}</kbd>:</span>
                    <span><kbd>{value % interval < 10 ? '0' : ''}{value % interval}</kbd></span>
                </h1>
                <div>
                    <button className='display-4' onClick={this.stopTimer}>
                        {this.state.stopped ? 'Continue' : 'Stop'}
                    </button>  &nbsp;
                    <button className='display-4' onClick={this.resetTimer}>Rest</button>
                </div>
            </div>
        )
    }




}








export default App