import { useQuery } from "@tanstack/react-query";
import { searchChannel } from '@/lib/api/channel'

export const useChannel = ({ channelId }: {channelId: number}) => {
    const { data, refetch } = useQuery({
        queryKey: ['channels'],
        queryFn: (async () => await searchChannel({ channelId })) 
    })

    return {channels: data, refetch}
}