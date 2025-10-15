"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { QRCodeSVG } from "qrcode.react";

export function QRCodeSection() {
  return (
    <section
      className="hidden md:block mb-12"
      role="region"
      aria-label="QR Code"
    >
      <Card className="border-2">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faQrcode} className="h-6 w-6" aria-hidden="true" />
            Retrouve-moi sur mobile
          </CardTitle>
          <CardDescription>
            Accédez à ce CV sur votre smartphone
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <div className="p-2 bg-white rounded-lg">
            <QRCodeSVG
              value="https://cv.romain-ecarnot.com"
              size={200}
              level="H"
              aria-label="QR Code vers cv.romain-ecarnot.com"
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
