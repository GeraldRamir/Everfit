import { Check, Minus } from "lucide-react";
import { getDictionary } from "@/i18n";
import { getLocale } from "@/i18n/server";

function CellValue({ value, included, notIncluded }: { value: boolean; included: string; notIncluded: string }) {
  return value ? (
    <Check size={18} className="mx-auto text-everfit-orange" aria-label={included} />
  ) : (
    <Minus size={18} className="mx-auto text-gray-300" aria-label={notIncluded} />
  );
}

export default async function PlanComparison() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const { planComparison } = dict;

  const tiers = [
    { key: "ignite" as const, label: planComparison.tiers.ignite, highlight: false },
    { key: "power" as const, label: planComparison.tiers.power, highlight: true },
    { key: "elite" as const, label: planComparison.tiers.elite, highlight: false },
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-gray-100">
            <th scope="col" className="p-4 font-medium text-gray-500 md:p-6">
              {planComparison.featureColumn}
            </th>
            {tiers.map((tier) => (
              <th
                key={tier.key}
                scope="col"
                className={`p-4 text-center font-display text-base font-bold md:p-6 ${
                  tier.highlight
                    ? "bg-everfit-wine/5 text-everfit-wine"
                    : "text-everfit-wine"
                }`}
              >
                {tier.label}
                {tier.highlight && (
                  <span className="mt-1 block text-[0.625rem] font-semibold uppercase tracking-wider text-everfit-orange">
                    {planComparison.recommended}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {planComparison.features.map((row, index) => (
            <tr
              key={row.label}
              className={index % 2 === 0 ? "bg-everfit-cream/30" : "bg-white"}
            >
              <th scope="row" className="p-4 font-medium text-gray-700 md:p-6">
                {row.label}
              </th>
              <td className="p-4 text-center md:p-6">
                <CellValue value={row.ignite} included={planComparison.included} notIncluded={planComparison.notIncluded} />
              </td>
              <td className={`p-4 text-center md:p-6 ${tiers[1].highlight ? "bg-everfit-wine/5" : ""}`}>
                <CellValue value={row.power} included={planComparison.included} notIncluded={planComparison.notIncluded} />
              </td>
              <td className="p-4 text-center md:p-6">
                <CellValue value={row.elite} included={planComparison.included} notIncluded={planComparison.notIncluded} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
