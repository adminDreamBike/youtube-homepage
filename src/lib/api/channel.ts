import axios, { AxiosError } from "axios"

export const searchChannel = ({channelId}: {channelId: number}) => {
    try {
        const response = axios.get('https://www.googleapis.com/youtube/v3/channels', {
            params: {
                key: 'AIzaSyBrIu3zYBXZb4gJMdPmywCS',
                id: channelId,
                part: 'snippet'
            }
        })
        return response
    } catch (error) {
        throw error as AxiosError;
    }
}