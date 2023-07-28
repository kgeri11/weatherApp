import React, { useEffect, useState } from 'react'
import style from './home.module.scss'
import TextInput from '../../Components/TextInput'
import WeatherCard from '../../Components/WeatherCard'
import Button from '../../Components/Button'
import moment from 'moment'

const Home = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [country, setCountry] = useState<string>('')
  const [temperature, setTemperature] = useState<number>(0)
  const [wind, setWind] = useState<number>(0)
  const [humidity, setHumidity] = useState<number>(0)
  const [sunrise, setSunrise] = useState<string>('')
  const [sunset, setSunset] = useState<string>('')
  const [time, setTime] = useState<string>('')
  const [formattedSunrise, setFormattedSunrise] = useState<string>('')
  const [formattedSunset, seFormattedtSunset] = useState<string>('')
  const [timezone, setTimezone] = useState<number>(0)
  const [currentWeather, setCurrentWeather] = useState<string>('')
  const [currentTypeOfWeather, setCurrentTypeOfWeather] = useState<weatherTypes>('clear')
  const [icon, setIcon] = useState<string>('')
  const [firstSearch, setFirstSearch] = useState<boolean>(true)

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=d1c30b4996e564b223cbb35434f043b3&units=metric`

  type weatherTypes =
    | 'thunderstorm'
    | 'drizzle'
    | 'rain'
    | 'snow'
    | 'mist'
    | 'clear'
    | 'smoke'
    | 'haze'
    | 'dust'
    | 'fog'
    | 'sand'
    | 'dust'
    | 'ash'
    | 'squall'
    | 'tornado'

  const calcHours = (): void => {
    const formattedSunrise = moment.utc(sunrise, 'X').add(timezone, 'seconds').format('HH:mm')
    const formattedSunset = moment.utc(sunset, 'X').add(timezone, 'seconds').format('HH:mm')

    setFormattedSunrise(formattedSunrise)
    seFormattedtSunset(formattedSunset)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value)
  }

  const fetchData = (): void => {
    fetch(URL)
      .then(async (resp) => await resp.json())
      .then((data) => {
        setCity(data.name)
        setCountry(data.sys.country)
        setCurrentWeather(data.weather[0].description)
        setCurrentTypeOfWeather(data.weather[0].main.toLowerCase())
        setTemperature(Number(data.main.temp.toFixed(0)))
        setHumidity(data.main.humidity)
        setWind(Number(data.wind.speed.toFixed(0)))
        setSunrise(data.sys.sunrise)
        setSunset(data.sys.sunset)
        setTime(data.dt)
        setTimezone(data.timezone)
        setIcon(data.weather[0].icon)
        setFirstSearch(false)
      })
      .catch((error) => console.error('fetch error: ', error))
  }

  useEffect(() => {
    calcHours()
  }, [time, sunrise, sunset, timezone])

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.header}>
          <div className={style.title}>React weather app</div>
          <div className={style.search}>
            <div className={style.input}>
              <TextInput onChange={handleChange} />
            </div>
            <div className={style.button}>
              <Button
                label='Search'
                onClick={() => fetchData()}
              />
            </div>
          </div>
        </div>
        <div className={style.body}>
          {firstSearch
            ? null
            : (
              <WeatherCard
                city={city}
                country={country}
                temperature={temperature}
                currentWeather={currentWeather}
                wind={wind}
                humidity={humidity}
                formattedSunrise={formattedSunrise}
                formattedSunset={formattedSunset}
                currentTypeOfWeather={currentTypeOfWeather}
                icon={icon}
            />
              )}
        </div>
      </div>
    </div>
  )
}

export default Home
