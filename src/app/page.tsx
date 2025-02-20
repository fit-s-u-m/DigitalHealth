import { LatestMissionName } from "@/components/LatestMissionName";

export default async function Home() {
  return (
    <>
      <article>
        <h2>
          Latest mission: <LatestMissionName />
        </h2>
      </article>
    </>
  );
}
