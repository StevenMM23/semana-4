import Padron from "@/Models/PadronSchema";
import PadronPage from "@/components/padron";
import PersonPage from "@/components/person";

export default function Home() {
  return (
    <div>
      <PersonPage />
      <PadronPage />
    </div>
  );
}
