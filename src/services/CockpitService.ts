import axios, {AxiosResponse} from 'axios';

class CockpitService {

    private static apiUrl: string = process.env.VUE_APP_COCKPIT_URL || "";

    private static readonly http = axios.create({
        baseURL: CockpitService.apiUrl,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        transformResponse: (data) => {
            return JSON.parse(data, (key, value) => {
                if (typeof value === 'string') {
                    const dateRegex = new RegExp(/^(\d{4})-(\d{2})-(\d{2})(T(\d{2}):(\d{2}):(\d{2}).(\d*)Z)?$/);
                    if (dateRegex.test(value)) {
                        return new Date(value);
                    }
                }
                return value;
            });
        }
    });

    static async getSingleton<T>(model: string, populate = 0): Promise<T | null> {
        return await this.http.get<T>(`/content/item/${model}?populate=${populate}`).then((response: AxiosResponse<T>) => {
            return response.data as T;
        }).catch((error) => {
            console.log(error);
            return null;
        });
    }
}

export default CockpitService;
