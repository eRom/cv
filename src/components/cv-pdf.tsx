import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

// Styles pour le PDF
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.5,
    color: "#1a1a1a",
  },
  header: {
    marginBottom: 25,
    borderBottomWidth: 2,
    borderBottomColor: "#00000",
    paddingBottom: 15,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 5,
  },
  jobTitle: {
    fontSize: 14,
    color: "#000000",
    marginBottom: 8,
  },
  jobAutorTitle: {
    fontSize: 14,
    color: "#000000",
    marginBottom: 8,
    marginTop: 8,
  },
  contactInfo: {
    fontSize: 9,
    color: "#666",
    marginTop: 5,
  },
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    paddingBottom: 4,
  },
  subsection: {
    marginBottom: 12,
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  company: {
    fontSize: 10,
    color: "#4b5563",
    marginBottom: 2,
  },
  period: {
    fontSize: 9,
    color: "#6b7280",
  },
  bulletPoint: {
    fontSize: 9,
    color: "#4b5563",
    marginLeft: 15,
    marginBottom: 2,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  skillBadge: {
    backgroundColor: "#eff6ff",
    padding: "4 8",
    borderRadius: 4,
    fontSize: 9,
    color: "#000000",
  },
  link: {
    color: "#000000",
    textDecoration: "none",
  },
  twoColumns: {
    flexDirection: "row",
    gap: 20,
  },
  column: {
    flex: 1,
  },
  aboutText: {
    fontSize: 10,
    color: "#374151",
    marginBottom: 8,
    textAlign: "justify",
  },
});

export function CVPdfDocument() {
  return (
    <Document
      title="CV - Romain Ecarnot"
      author="Romain Ecarnot"
      subject="CV Professionnel - Architecte Cloud & Développeur Fullstack"
      keywords="Romain Ecarnot, Architecte Cloud, Développeur, DevOps, Santé Digitale"
      creator="cv.romain-ecarnot.com"
      producer="@react-pdf/renderer"
    >
      <Page size="A4" style={styles.page}>
        {/* En-tête */}
        <View style={styles.header}>
          <Text style={styles.name}>ROMAIN ECARNOT</Text>
          <Text style={styles.jobAutorTitle}>
            Architecte Cloud & Développeur Fullstack
          </Text>
          <Text style={styles.contactInfo}>
            LinkedIn: linkedin.com/in/romainecarnot • GitHub: github.com/eRom •
            Web: romain-ecarnot.com
          </Text>
        </View>

        {/* À propos */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>À PROPOS</Text>
          <Text style={styles.aboutText}>
            Architecte Cloud & Développeur Fullstack avec plus de 20 ans
            d&apos;expérience. Spécialisé dans les environnements cloud
            sécurisés et scalables.
          </Text>
          <Text style={styles.aboutText}>
            Animé par la satisfaction client, l&apos;innovation et
            l&apos;agilité, je mets mon expertise au service de la santé
            digitale pour apporter une valeur ajoutée concrète aux
            organisations.
          </Text>
        </View>

        {/* Compétences */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>COMPÉTENCES CLÉS</Text>
          <View style={styles.skillsContainer}>
            <View style={styles.skillBadge}>
              <Text>Architecture</Text>
            </View>

            <View style={styles.skillBadge}>
              <Text>DevOps</Text>
            </View>

            <View style={styles.skillBadge}>
              <Text>CI/CD</Text>
            </View>

            <View style={styles.skillBadge}>
              <Text>RGPD</Text>
            </View>
            <View style={styles.skillBadge}>
              <Text>Santé Digitale</Text>
            </View>
            <View style={styles.skillBadge}>
              <Text>IA</Text>
            </View>
          </View>
        </View>

        {/* Expériences professionnelles */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EXPÉRIENCES PROFESSIONNELLES</Text>

          <View style={styles.subsection}>
            <View style={styles.jobHeader}>
              <Text style={styles.jobTitle}>
                Architecte Cloud / Développeur Fullstack
              </Text>
              <Text style={styles.period}>Jan. 2021 - Aujourd&apos;hui</Text>
            </View>
            <Text style={styles.company}>Morannon • France</Text>
            <Text style={styles.bulletPoint}>
              • Conception et déploiement d&apos;architectures AWS sécurisées et
              scalables
            </Text>
            <Text style={styles.bulletPoint}>
              • Développement fullstack d&apos;applications métiers (Node.js,
              Next.js)
            </Text>
            <Text style={styles.bulletPoint}>
              • Mise en place de pipelines CI/CD et automatisation avec
              Terraform
            </Text>
          </View>

          <View style={styles.subsection}>
            <View style={styles.jobHeader}>
              <Text style={styles.jobTitle}>
                Co-fondateur & Directeur Technique
              </Text>
              <Text style={styles.period}>Jan. 2021 - Jan. 2025</Text>
            </View>
            <Text style={styles.company}>pharmacylounge • Nantes</Text>
            <Text style={styles.bulletPoint}>
              • Pilotage de la roadmap technique et de la sécurité applicative
            </Text>
            <Text style={styles.bulletPoint}>
              • Mise en place du dispositif RGPD : rédaction de procédures, DPO
              interne
            </Text>
            <Text style={styles.bulletPoint}>
              • Encadrement d&apos;une équipe de développeurs fullstack et
              DevOps
            </Text>
          </View>

          <View style={styles.subsection}>
            <View style={styles.jobHeader}>
              <Text style={styles.jobTitle}>
                Directeur de Programme AWS & Terraform Advocate
              </Text>
              <Text style={styles.period}>Jan. 2019 - Déc. 2020</Text>
            </View>
            <Text style={styles.company}>OPEN • Paris</Text>
            <Text style={styles.bulletPoint}>
              • Animation nationale de la communauté AWS : webinaires,
              workshops, formations
            </Text>
            <Text style={styles.bulletPoint}>
              • Avant-vente et déploiement de solutions Terraform chez grands
              comptes
            </Text>
            <Text style={styles.bulletPoint}>
              • Coordination technique des squads et standardisation des bonnes
              pratiques Cloud
            </Text>
          </View>

          <View style={styles.subsection}>
            <View style={styles.jobHeader}>
              <Text style={styles.jobTitle}>Architecte Solutions AWS</Text>
              <Text style={styles.period}>Jan. 2016 - Déc. 2018</Text>
            </View>
            <Text style={styles.company}>GFI Informatique • Paris</Text>
            <Text style={styles.bulletPoint}>
              • Migration vers AWS du SI de Veolia : audit, POC, automatisation,
              sécurité
            </Text>
            <Text style={styles.bulletPoint}>
              • Conception de modules Terraform pour déploiement
              multi-environnements
            </Text>
          </View>

          <View style={styles.subsection}>
            <View style={styles.jobHeader}>
              <Text style={styles.jobTitle}>
                Architecte solutions & Responsable qualité
              </Text>
              <Text style={styles.period}>Mars 2011 - Déc. 2015</Text>
            </View>
            <Text style={styles.company}>Bouygues Telecom • Paris</Text>
            <Text style={styles.bulletPoint}>
              • Architecte Logiciel des Services Bbox TV
            </Text>
            <Text style={styles.bulletPoint}>
              • Optimisation des algorithmes, benchmark performance sur systèmes
              embarqués
            </Text>
          </View>
        </View>

        {/* Formations */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>FORMATIONS</Text>
          <View style={styles.subsection}>
            <Text style={styles.jobTitle}>
              AWS Professional Services Delivery Best Practices
            </Text>
            <Text style={styles.company}>AWS • Paris • 2018</Text>
          </View>
          <View style={styles.subsection}>
            <Text style={styles.jobTitle}>
              Architecture avancée & Migration d&apos;applications
            </Text>
            <Text style={styles.company}>AWS • Paris • 2017</Text>
          </View>
          <View style={styles.subsection}>
            <Text style={styles.jobTitle}>D.U.T. Informatique</Text>
            <Text style={styles.company}>Université • Nantes • 1998</Text>
          </View>
        </View>

        {/* Projets */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PROJETS NOTABLES</Text>
          <View style={styles.subsection}>
            <Text style={styles.jobTitle}>Health In Cloud</Text>
            <Text style={styles.company}>
              Plateforme de santé digitale dédiée à la rééducation numérique •
              healthincloud.app
            </Text>
          </View>
          <View style={styles.subsection}>
            <Text style={styles.jobTitle}>pharmacylounge</Text>
            <Text style={styles.company}>
              Réseau social sécurisé des professionnels de la pharmacie •
              pharmacylounge.fr
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View
          style={{
            position: "absolute",
            bottom: 30,
            left: 40,
            right: 40,
            textAlign: "center",
            fontSize: 8,
            color: "#9ca3af",
          }}
        >
          <Text>
            CV généré depuis cv.romain-ecarnot.com • Plus de 20 ans
            d&apos;expertise en développement et architecture cloud
          </Text>
        </View>
      </Page>
    </Document>
  );
}
