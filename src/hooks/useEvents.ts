import axios from 'axios'
import { useQuery } from 'react-query'
import api from '../util/api'

interface Props {
  search: string
}

const useEvents = ({ search }: Props) => {
  return useQuery('events', async () => {
    const { data } = await axios({
      method: 'GET',
      url: `${api}/events?search=${search}`,
      headers: JSON.parse(localStorage.user)
    })
    return data
  })
}

export default useEvents
