import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { DispatchTool } from "./DispatchTool";

export const metadata: Metadata = { title: "Dispatch" };

export default function DispatchPage() {
  return (
    <>
      <PageHero
        eyebrow="Dispatch"
        title={<>Plan it. Fly it.<br />File it.</>}
        intro="Pick any sector in the network and build an operational flight plan in seconds — ready to hand off to SimBrief."
      />
      <section className="wrap py-12">
        <DispatchTool />
      </section>
    </>
  );
}
