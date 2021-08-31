import React, { Component } from 'react';

const TitleContext = React.createContext();

const LevelThree = () => (
    <TitleContext.Consumer>
        { ({ title, subTitle, click }) => (
            <>
                <h1 onClick={click}>{title}</h1>
                <h2>{subTitle}</h2>
            </>
        ) }
    </TitleContext.Consumer>
)

const LevelTwo = () => <LevelThree />

const LevelOne = () => <LevelTwo />

class Lesson extends Component {
    render() {
        return (
            <TitleContext.Provider value={{ title: "Simple title", subTitle: "Sub Tittle", click: () => {console.log('Hi!')} }}>
                <LevelOne />
            </TitleContext.Provider>
        );
    }    
}

export default Lesson;