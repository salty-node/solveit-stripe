import { CircleCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>SolveIt</div>
      <CircleCheck color="green" size={48} />
      <p>Payment Processed Successfully!</p>
    </main>
  );
}
