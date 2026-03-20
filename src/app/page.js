import Header from "@/components/Header";
import { getUserIp } from "@/lib/getUserIp";
import WrapperClient from "@/components/WrapperClient";
export default async function Home() {
  const dataUser = await getUserIp();
  return (
    <div className="relative min-h-screen">
      <Header />
      <WrapperClient dataUser={dataUser} />
    </div>
  );
}
