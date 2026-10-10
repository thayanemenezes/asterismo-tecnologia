import type { Route } from "./+types/home";
import { LandingPage } from "../features/landing/landing-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Asterismo Tecnologia | Sistemas conectados" },
    {
      name: "description",
      content:
        "Conectamos código, dados, ideias e processos para transformar desafios em sistemas digitais úteis e preparados para evoluir.",
    },
  ];
}

export default function Home() {
  return <LandingPage />;
}
