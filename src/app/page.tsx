import styles from "./page.module.css";
import {SortType} from "@/services/medals/types";
import {MedalsTable} from "@/features/medals/components/MedalsTable";

export default function Home({ searchParams }: { searchParams?: { sort?: string } }) {
  const sort = searchParams?.sort as SortType ?? SortType.GOLD;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Olympics Games Leaderboards</h1>
        <MedalsTable sort={sort} />
      </main>
    </div>
  );
}
