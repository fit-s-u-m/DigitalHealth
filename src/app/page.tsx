import { FetchName } from "@/components/FetchName";

export default async function Home() {
  return (
    <>
      <h2 className="underline">
        <FetchName />
      </h2>
    </>
  );
}
