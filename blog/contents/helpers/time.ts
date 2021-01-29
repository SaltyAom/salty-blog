import dayjs from 'dayjs'

export const time = (input: string) => dayjs(input, 'YYYY-M-D h:m').toString()
