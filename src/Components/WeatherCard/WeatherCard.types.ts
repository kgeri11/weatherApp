export interface WeatherCardProps {
  city: string
  country: string
  formattedSunset: string
  formattedSunrise: string
  currentTypeOfWeather:
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
  temperature: number
  wind: number
  humidity: number
  currentWeather: string
  icon: string
}
