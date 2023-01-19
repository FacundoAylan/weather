const Icons = (icon) => {
  switch (icon) {
      case 'Thunderstorm':
          icon='icons/thunderstorms-rain.svg'
          break;    
      case 'Drizzle':
          icon='icons/drizzle.svg'
          break;
      case 'Rain':
          icon='icons/rain.svg'
          break;
      case 'Snow':
          icon='icons/snowy.svg'
          break;                        
      case 'Clear':
          icon='icons/clear-day.svg'
          break;
      case 'Atmosphere':
          icon='icons/weather.svg'
          break;  
      case 'Clouds':
          icon='icons/fog.svg'
          break;  
      case 'Fog':
          icon='icons/fog.svg'
          break;    
      case 'Haze':
          icon='icons/haze.svg'
          break;   
      case 'Smoke':
          icon='icons/smoke.svg'
          break;      
      default:
          icon='icons/clear-day.svg'   
  }
return icon
}

export default Icons