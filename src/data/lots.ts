import { Lot } from "@/lib/types";

export const lots: Lot[] = [
  {
    productSlug: "lavender",
    lotNo: "A1",
    productionDate: "2025-11-20",
    documentIds: ["doc-lav-tds-en", "doc-lav-gcms-en-lotA1"],
  },
  {
    productSlug: "lavender",
    lotNo: "A2",
    productionDate: "2025-12-05",
    documentIds: ["doc-lav-tds-en", "doc-lav-coa-en-lotA2"],
  },
  {
    productSlug: "sweet-orange",
    lotNo: "B1",
    productionDate: "2025-11-15",
    documentIds: ["doc-sor-tds-en", "doc-sor-coa-en-lotB1"],
  },
  {
    productSlug: "bergamot",
    lotNo: "C1",
    productionDate: "2025-11-28",
    documentIds: ["doc-ber-tds-en", "doc-ber-gcms-en-lotC1"],
  },
  {
    productSlug: "peppermint",
    lotNo: "D1",
    productionDate: "2025-12-01",
    documentIds: ["doc-pep-tds-en", "doc-pep-coa-en-lotD1", "doc-pep-sds-en"],
  },
  {
    productSlug: "eucalyptus",
    lotNo: "E1",
    productionDate: "2025-11-22",
    documentIds: ["doc-euc-tds-en", "doc-euc-gcms-en-lotE1"],
  },
  {
    productSlug: "tea-tree",
    lotNo: "F1",
    productionDate: "2025-12-08",
    documentIds: ["doc-tea-tds-en", "doc-tea-coa-en-lotF1"],
  },
  {
    productSlug: "frankincense",
    lotNo: "G1",
    productionDate: "2025-11-25",
    documentIds: ["doc-fra-tds-en", "doc-fra-gcms-en-lotG1"],
  },
  {
    productSlug: "sandalwood",
    lotNo: "H1",
    productionDate: "2025-11-18",
    documentIds: ["doc-san-tds-en", "doc-san-coa-en-lotH1"],
  },
  {
    productSlug: "cedarwood",
    lotNo: "I1",
    productionDate: "2025-12-10",
    documentIds: ["doc-ced-tds-en", "doc-ced-coa-en-lotI1"],
  },
  {
    productSlug: "ylang-ylang",
    lotNo: "J1",
    productionDate: "2025-11-30",
    documentIds: ["doc-yla-tds-en", "doc-yla-gcms-en-lotJ1"],
  },
  {
    productSlug: "rose",
    lotNo: "K1",
    productionDate: "2025-12-03",
    documentIds: ["doc-ros-tds-en", "doc-ros-coa-en-lotK1"],
  },
  {
    productSlug: "lemon",
    lotNo: "L1",
    productionDate: "2025-11-19",
    documentIds: ["doc-lem-tds-en", "doc-lem-coa-en-lotL1"],
  },
  {
    productSlug: "grapefruit",
    lotNo: "M1",
    productionDate: "2025-12-06",
    documentIds: ["doc-gra-tds-en", "doc-gra-coa-en-lotM1"],
  },
  {
    productSlug: "rosemary",
    lotNo: "N1",
    productionDate: "2025-11-24",
    documentIds: ["doc-rosm-tds-en", "doc-rosm-coa-en-lotN1"],
  },
  {
    productSlug: "ginger",
    lotNo: "O1",
    productionDate: "2025-12-02",
    documentIds: ["doc-gin-tds-en", "doc-gin-coa-en-lotO1"],
  },
  {
    productSlug: "clove",
    lotNo: "P1",
    productionDate: "2025-11-27",
    documentIds: ["doc-clo-tds-en", "doc-clo-coa-en-lotP1", "doc-clo-sds-en"],
  },
];

/**
 * Helper Functions
 */
export function getLotsByProductSlug(productSlug: string): Lot[] {
  return lots.filter((lot) => lot.productSlug === productSlug);
}

export function getLotByNumber(lotNo: string): Lot | undefined {
  return lots.find((lot) => lot.lotNo === lotNo);
}

export function getLatestLotForProduct(productSlug: string): Lot | undefined {
  const productLots = getLotsByProductSlug(productSlug);
  if (productLots.length === 0) return undefined;

  return productLots.sort((a, b) => {
    const dateA = a.productionDate ? new Date(a.productionDate).getTime() : 0;
    const dateB = b.productionDate ? new Date(b.productionDate).getTime() : 0;
    return dateB - dateA;
  })[0];
}
