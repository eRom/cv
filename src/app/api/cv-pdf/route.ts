import { NextResponse } from "next/server";
import { renderToStream } from "@react-pdf/renderer";
import { createElement } from "react";
import { CVPdfDocument } from "@/components/cv-pdf";

/**
 * API Route pour générer et télécharger le CV en PDF
 * GET /api/cv-pdf
 *
 * Génère un PDF professionnel du CV côté serveur
 * et le retourne avec les headers appropriés pour le téléchargement
 */
export async function GET() {
  try {
    // Générer le PDF stream
    const stream = await renderToStream(createElement(CVPdfDocument));

    // Convertir le stream en buffer
    const chunks: Uint8Array[] = [];
    for await (const chunk of stream) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);

    // Créer la réponse avec les bons headers
    const response = new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="CV-Romain-Ecarnot.pdf"',
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });

    return response;
  } catch (error) {
    console.error("Erreur lors de la génération du PDF:", error);
    return NextResponse.json(
      { error: "Erreur lors de la génération du PDF" },
      { status: 500 }
    );
  }
}
