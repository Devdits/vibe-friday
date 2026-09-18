import { SetupCheck } from "@/components/setup-check";

export default function Home() {
  return (
    <main className="shell">
      <section className="card" aria-labelledby="page-title">
        <p className="eyebrow">Agent playground</p>
        <h1 id="page-title">Vibe Friday is ready.</h1>
        <p className="intro">
          The environment is intentionally small. Give your agents a goal,
          improve their instructions, and let them build the interesting part.
        </p>
        <SetupCheck />
      </section>
    </main>
  );
}
