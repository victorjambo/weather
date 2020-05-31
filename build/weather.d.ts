import { IHttpResponse, IErrorNotFound, IWeather } from './utils/types';
declare class Weather {
    locations: string[];
    constructor(locations: string[]);
    handleError: (error: any, location?: string | undefined) => void;
    formatWeatherDataFromResponse: (response: Array<any>) => (IErrorNotFound | IWeather)[];
    requestWeatherInfo: (location: string) => Promise<IHttpResponse | IErrorNotFound>;
    getWeatherInfo: () => Promise<Array<IWeather | IErrorNotFound>>;
}
export default Weather;
