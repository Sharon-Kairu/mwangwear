import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { Watch } from "../types/watch";

export async function getWatches(): Promise<Watch[]> {
     const snapshot = await getDocs(collection(db, "watches"));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Watch, "id">),
  }));
}
