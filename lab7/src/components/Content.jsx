import React from 'react'

export class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundColor1: 'white',
      textColor1: 'black',
      backgroundColor2: 'white',
      textColor2: 'black',
    }
  }

  changeColor1() {
    const textColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`
    this.setState({ textColor1: textColor, backgroundColor1: 'red' })
  }

  changeColor2() {
    const textColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`
    this.setState({ textColor2: textColor, backgroundColor2: 'black' })
  }

  render() {
    return (
      <>
        <div>Hародився хлопчик 24 січня 2002 року у місті Кропивницький</div>
        <ul>
          Освіта:
          <li id="elem">
            <div
              onClick={() => this.changeColor1()}
              style={{
                backgroundColor: this.state.backgroundColor1,
                color: this.state.textColor1,
              }}
            >
              Кропивницький областний навчально-виховний комплекс.
              Гімназія-інтернат школа мистецтв
            </div>
          </li>
          <li id="elem2">
            <div
              onClick={() => this.changeColor2()}
              style={{
                backgroundColor: this.state.backgroundColor2,
                color: this.state.textColor2,
              }}
            >
              Університет: КПІ ФІОТ 126
            </div>
          </li>
        </ul>
        <ul>
          Хобі:
          <li>Теніс</li>
          <li>Футбол</li>
          <li>писати html-5 файли</li>
        </ul>
        <ul>
          Улюблені фільми:
          <ol type="1">
            <li>Острів проклятих</li>
            <li>Револьвер</li>
            <li>на цьому досить</li>
          </ol>
        </ul>
        <div>
          Рідне місто - Кропивницький. Лежить у межах Придніпровської височини,
          на берегах річки Інгул, де в неї вливаються менші річки — Сугоклія та
          Біянка. Танцювальна столиця України.
        </div>
      </>
    )
  }
}
