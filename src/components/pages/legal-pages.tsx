import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/fr";
import LegalArticle from "./LegalArticle";

export function LegalPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <LegalArticle
      pageTitle={dict.legal.pageTitle}
      updated={dict.legal.updated}
      sections={dict.legal.sections}
    />
  );
}

export function PrivacyPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <LegalArticle
      pageTitle={dict.privacy.pageTitle}
      updated={dict.privacy.updated}
      sections={dict.privacy.sections}
    />
  );
}

export function RefundPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <LegalArticle
      pageTitle={dict.refund.pageTitle}
      updated={dict.refund.updated}
      sections={dict.refund.sections}
    />
  );
}
