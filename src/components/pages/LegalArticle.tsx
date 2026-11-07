import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/fr";

type LegalSections = Dictionary["legal"]["sections"];

// Rendu générique des pages légales : sections avec titres, paragraphes et listes.
export default function LegalArticle({
  pageTitle,
  updated,
  sections,
}: {
  pageTitle: string;
  updated: string;
  sections: LegalSections;
}) {
  return (
    <article className="wrap max-w-3xl py-16 sm:py-20" data-reveal>
      <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {pageTitle}
      </h1>
      <p className="mt-3 text-sm text-zinc-500">{updated}</p>

      <div className="mt-12 space-y-12">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display text-xl font-semibold text-ink">{section.heading}</h2>
            <div className="mt-4 space-y-4">
              {section.blocks.map((block, i) =>
                block.type === "p" ? (
                  <p key={i} className="leading-relaxed text-zinc-600">
                    {block.text}
                  </p>
                ) : (
                  <ul key={i} className="list-disc space-y-2 pl-5 text-zinc-600">
                    {block.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                ),
              )}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
