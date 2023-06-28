//here we have our class\
export default class bikeInfo {
    static async getBikes(location) {
        try {
            const response = await fetch(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${location}=10&stolenness=proximity`);
            const jsonifiedResponse = await response.json();
            if (!response.ok) {
                const errorMessage = `${response.status} & ${response.statusText} ${jsonifiedResponse.error}`;
                throw new Error(errorMessage);
            }
            return jsonifiedResponse;
        } catch (error) {
            return error;
        }
    }
}

