import React from 'react'
import style from './weatherCard.module.scss'
import { WeatherCardProps } from './WeatherCard.types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faWind, faDroplet, faArrowsUpToLine, faArrowsDownToLine } from '@fortawesome/free-solid-svg-icons'

const WeatherCard = ({
  city,
  country,
  temperature,
  currentWeather,
  wind,
  humidity,
  formattedSunrise,
  formattedSunset,
  currentTypeOfWeather,
  icon,
}: WeatherCardProps): React.ReactElement => {
  return (
    <div className={[style.container, style[currentTypeOfWeather]].join(' ')}>
      <div className={style.header}>
        <div className={style.title}>{city}</div>
        <div className={style.country}>{country}</div>
      </div>
      <div className={style.weatherContainer}>
        <div className={style.mode}>
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt='icon'
          />
        </div>
        <div className={style.title}>{currentWeather}</div>
      </div>
      <div className={style.data}>
        <div className={style.weatherTemp}>
          <div className={style.number}>{temperature}°C</div>
        </div>
        <div className={style.windHum}>
          <div className={style.wind}>
            <FontAwesomeIcon icon={faWind} />
            <div className={style.data}>{wind} km/h</div>
          </div>
          <div className={style.humidity}>
            <FontAwesomeIcon icon={faDroplet} />
            <div className={style.data}>{humidity}%</div>
          </div>
        </div>
      </div>
      <div className={style.sun}>
        <div className={style.sunWrapper}>
          <div className={style.icon}>
            <span className={style.settings}>
              <FontAwesomeIcon icon={faSun} />
            </span>
            <FontAwesomeIcon icon={faArrowsUpToLine} />
          </div>
          <div className={style.time}>{formattedSunrise}</div>
        </div>
        <div className={style.sunWrapper}>
          <div className={style.icon}>
            <span className={style.settings}>
              <FontAwesomeIcon icon={faSun} />
            </span>
            <FontAwesomeIcon icon={faArrowsDownToLine} />
          </div>
          <div className={style.time}>{formattedSunset}</div>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
