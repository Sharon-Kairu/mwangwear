import {
  collection,
  getDocs,
  orderBy,
  limit,
  query,
  Timestamp,
} from 'firebase/firestore'
import { db } from './firebase'
import { Watch } from '../types/watch'

export async function getLatestWatches(): Promise<Watch[]> {
  const q = query(
    collection(db, 'watches'),
    orderBy('time', 'desc'),
    limit(4)
  )

  const snapshot = await getDocs(q)

  return snapshot.docs.map((doc) => {
    const data = doc.data() as Omit<Watch, 'id' | 'time'> & {
      time?: Timestamp
    }

    return {
      id: doc.id,
      ...data,
      time: data.time ? data.time.toMillis() : undefined,
    }
  })
}
