'use client'

import { dayjs } from '@/lib/dayjs'
import { useEffect, useState } from 'react'

export default function RelativeDate({ date }: { date: string }) {
  const [relative, setRelative] = useState(() => dayjs(date).fromNow())

  useEffect(() => {
    // Update immediately when date changes
    setRelative(dayjs(date).fromNow())

    // Update every minute
    const interval = setInterval(() => {
      setRelative(dayjs(date).fromNow())
    }, 60000)

    return () => clearInterval(interval)
  }, [date])

  return <>{relative}</>
}
