import ReactWeather, { useOpenWeather } from 'react-open-weather';


function App() {

  const { data, isLoading, errorMessage } = useOpenWeather({
  key: '24479dce2a5b7d028a46e6d77cac6006',
  lat: '1.2921',
  lon: '36.8219',
  lang: 'en',
  unit: 'metric', // values are (metric, standard, imperial)
});

  return (
    <div className="App">
  <ReactWeather
    isLoading={isLoading}
    errorMessage={errorMessage}
    data={data}
    lang="en"
    locationLabel="Ipojuca"
    unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
    showForecast
  />
</div>

  );
}

export default App;
