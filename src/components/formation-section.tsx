import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Formation {
  title: string;
  institution: string;
  location: string;
  year: string;
}

const formations: Formation[] = [
  {
    title: "AWS Professional Services Delivery Best Practices",
    institution: "AWS",
    location: "Paris",
    year: "2018",
  },
  {
    title: "Architecture avancée",
    institution: "AWS",
    location: "Paris",
    year: "2017",
  },
  {
    title: "Migration d'applications",
    institution: "AWS",
    location: "Paris",
    year: "2017",
  },
  {
    title: "D.U.T. Informatique",
    institution: "Université",
    location: "Nantes",
    year: "1998",
  },
  {
    title: "Baccalauréat Scientifique",
    institution: "Lycée",
    location: "Nantes",
    year: "1996",
  },
];

export function FormationSection() {
  return (
    <Card className="mb-8 border-2" role="region" aria-label="Formations">
      <CardHeader>
        <CardTitle className="text-2xl">Formations</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {formations.map((formation, index) => (
          <div key={index} className="border-l-2 border-muted pl-4">
            <h3 className="font-semibold text-base">{formation.title}</h3>
            <p className="text-muted-foreground text-sm">
              {formation.institution} · {formation.location} · {formation.year}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
