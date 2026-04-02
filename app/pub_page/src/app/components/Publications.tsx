"use client";

import { motion } from "framer-motion";
import svgPaths from "../../imports/svg-0wmwxk3hom";
import imgImage1 from "../../assets/aa0ba0b0f9f26ebda60d30bd5f8141b43b8eeae1.png";
import imgLogoFooter from "../../assets/58fd56f75ebe98b6835b2040fdd2bab0f7350eaa.png";

// ─── Types ────────────────────────────────────────────────────────────────────

interface PublicationEntry {
  number: number;
  content: React.ReactNode;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function B({ children }: { children: React.ReactNode }) {
  return <strong style={{ fontWeight: 700 }}>{children}</strong>;
}

function PubLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "underline", textDecorationSkipInk: "none", color: "inherit" }}
    >
      {children}
    </a>
  );
}

// ─── Year header ──────────────────────────────────────────────────────────────

function YearHeading({ year }: { year: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 12 }}>
      <div
        style={{
          width: 8,
          alignSelf: "stretch",
          background: "#027BBF",
          borderRadius: 4,
          flexShrink: 0,
        }}
      />
      <h2
        style={{
          fontFamily: "'Source Sans 3', sans-serif",
          fontSize: 42,
          fontWeight: 700,
          color: "#000",
          margin: 0,
          lineHeight: 1.15,
        }}
      >
        {year}
      </h2>
    </div>
  );
}

// ─── Single publication row ────────────────────────────────────────────────────

function PubItem({ number, content }: PublicationEntry) {
  return (
    <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
      <span
        style={{
          fontFamily: "'Source Sans 3', sans-serif",
          fontSize: 28,
          fontWeight: 700,
          color: "#027BBF",
          flexShrink: 0,
          lineHeight: 1.3,
          minWidth: 44,
        }}
      >
        {number}.
      </span>
      <p
        style={{
          fontFamily: "'Source Sans 3', sans-serif",
          fontSize: 17,
          fontWeight: 400,
          color: "#000",
          lineHeight: 1.55,
          margin: 0,
          flex: 1,
        }}
      >
        {content}
      </p>
    </div>
  );
}

// ─── Publications data ────────────────────────────────────────────────────────

const pubs2025: PublicationEntry[] = [
  {
    number: 1,
    content: (
      <>
        Lin EPY, Hsu CY, <B>Mishra S</B>, […], <B>Warner JL</B>*, Shyr Y*, on behalf of the COVID-19 and Cancer Consortium.{" "}
        <PubLink href="https://doi.org/10.1016/j.lana.2025.101038">
          Associations of COVID-19 vaccination with risks for post-infectious cardiovascular complications: an international cohort study in cancer patients with SARS-CoV-2 infection
        </PubLink>
        . Lancet Reg Health Am. 2025 Mar 6;44:101038. doi: 10.1016/j.lana.2025.101038. PMID: 40124588; PMCID: PMC11930098.
      </>
    ),
  },
  {
    number: 2,
    content: (
      <>
        Ahn B, Chou C, Chou C, Chen J, Zug A, Baykara Y, Claus J, Hacking SM, <B>Uzun A, Gamsiz Uzun ED</B>.
        <PubLink href="https://doi.org/10.1093/narcan/zcae047">
          {" "}The Atlas of Protein-Protein Interactions in Cancer (APPIC)-a webtool to visualize and analyze cancer subtypes
        </PubLink>
        . NAR Cancer. 2025 Jan 15;7(1):zcae047. doi: 10.1093/narcan/zcae047. PMID: 39822275; PMCID: PMC11734624.
      </>
    ),
  },
  {
    number: 3,
    content: (
      <>
        El-Deiry WS, Bresson C, Wunder F, Carneiro BA, Dizon DS, <B>Warner JL</B>, et al.{" "}
        <PubLink href="https://doi.org/10.18632/oncotarget.28703">
          Worldwide Innovative Network (WIN) Consortium in Personalized Cancer Medicine: Bringing next-generation precision oncology to patients
        </PubLink>
        . Oncotarget. 2025 Mar 12;16:140-162. doi: 10.18632/oncotarget.28703. PMID: 40073368; PMCID: PMC11907938.
      </>
    ),
  },
  {
    number: 4,
    content: (
      <>
        <B>Warner JL</B> "Lessons From the COVID-19 and Cancer Consortium" in National Cancer Policy Forum, Board on Health Care Services, Health and Medicine Division, & National Academies of Sciences, Engineering, and Medicine. (2025).{" "}
        <PubLink href="https://doi.org/10.17226/28676">
          Enabling 21st Century Applications for Cancer Surveillance Through Enhanced Registries and Beyond: Proceedings of a Workshop
        </PubLink>
        {" "}(F. Amankwah, T. Wizemann, & S. Nass, Eds). National Academies Press.{" "}
        <PubLink href="https://doi.org/10.17226/28676">https://doi.org/10.17226/28676</PubLink>
      </>
    ),
  },
  {
    number: 5,
    content: (
      <>
        Menville JE, Shinde N, Collins S, <B>Jiao Z</B>, Persad-Paisley EM, Baranwal N, Woo AS. Craniosynostosis: Quantifying Differences in Skull Architecture. Cleft Palate Craniofac J. 2025 Jan 19:10556656241297526. doi: 10.1177/10556656241297526. Epub ahead of print. PMID: 39828920.
      </>
    ),
  },
  {
    number: 6,
    content: (
      <>
        Crawford JM, Penberthy L, Pinto LA, Althoff KN, Assimon MM, Cohen O, Gillim L, Hammonds TL, Kapur S, Kaufman HW, Kwasny D, Liew JW, Meyer WA 3rd, Reynolds SL, Schleicher CB, Subbiah S, Theruviparampil C, Wallace ZS, <B>Warner JL</B>, Yoon S, Ziemba YC.{" "}
        <PubLink href="https://pubmed.ncbi.nlm.nih.gov/39850579/">
          Coronavirus Disease 2019 (COVID-19) Real World Data Infrastructure: A Big-Data Resource for Study of the Impact of COVID-19 in Patient Populations With Immunocompromising Conditions
        </PubLink>
        . Open Forum Infect Dis. 2025 Jan 23;12(1):ofaf021. doi: 10.1093/ofid/ofaf021. eCollection 2025 Jan. PMID: 39850579.
      </>
    ),
  },
  {
    number: 7,
    content: (
      <>
        Naqvi SAA, Riaz IB, Bibi A, Khan MA, Imran M, Khakwani KZR, Raina A, Anjum MU, Cobran EK, <B>Warner JL</B>, Hussain SA, Singh P, Childs DS, Baca SC, Orme JJ, Mateo J, Agarwal N, Gillessen S, Murad MH, Sartor O, Bryce AH.{" "}
        <PubLink href="https://pubmed.ncbi.nlm.nih.gov/39848867/">
          Heterogeneity of the Treatment Effect with PARP Inhibitors in Metastatic Castration-resistant Prostate Cancer: A Living Interactive Systematic Review and Meta-analysis.
        </PubLink>
        {" "}Eur Urol. 2025 Jan 22:S0302-2838(24)02760-X. doi: 10.1016/j.eururo.2024.12.007. Online ahead of print. PMID: 39848867.
      </>
    ),
  },
  {
    number: 8,
    content: (
      <>
        Khan MA, Ayub U, Naqvi SAA, Khakwani KZR, Sipra ZBR, Raina A, Zhou S, He H, Saeidi A, Hasan B, Rumble RB, Bitterman DS, <B>Warner JL</B>, Zou J, Tevaarwerk AJ, Leventakos K, Kehl KL, Palmer JM, Murad MH, Baral C, Riaz IB.{" "}
        <PubLink href="https://pubmed.ncbi.nlm.nih.gov/39836495/">
          Collaborative large language models for automated data extraction in living systematic reviews.
        </PubLink>
        {" "}J Am Med Inform Assoc. 2025 Jan 21:ocae325. doi: 10.1093/jamia/ocae325. Online ahead of print. PMID: 39836495
      </>
    ),
  },
  {
    number: 9,
    content: (
      <>
        Hong YD, Enewold L, Sharon E, <B>Warner JL</B>, Davidoff AJ, Zeruto C, Mariotto AB.{" "}
        <PubLink href="https://pubmed.ncbi.nlm.nih.gov/39194340/">
          Evolving patterns in systemic treatment utilization and survival among older patients with advanced cutaneous melanoma.
        </PubLink>
        {" "}Cancer Med. 2024 Aug;13(16):e70131. doi: 10.1002/cam4.70131. PMID: 39194340
      </>
    ),
  },
  {
    number: 10,
    content: (
      <>
        Ahn B, Chou C, Chou C, Chen J, Zug A, Baykara Y, Claus J, Hacking SM, <B>Uzun A, Gamsiz Uzun ED</B>.
        <PubLink href="https://doi.org/10.1093/narcan/zcae047">
          {" "}The Atlas of Protein-Protein Interactions in Cancer (APPIC)-a webtool to visualize and analyze cancer subtypes
        </PubLink>
        . NAR Cancer. 2025 Jan 15;7(1):zcae047. doi: 10.1093/narcan/zcae047. eCollection 2025 Mar. PMID: 39822275
      </>
    ),
  },
  {
    number: 11,
    content: (
      <>
        Hilty EC, Vilski V, <B>Mishra S</B>, Condon P, Gracia SM.{" "}
        <PubLink href="https://doi.org/10.1162/99608f92.d622eaff">
          Building an Inclusive Data Literacy Community.
        </PubLink>
        {" "}Harvard Data Science Review 2025 Jan 30;7(1). doi: 10.1162/99608f92.d622eaff
      </>
    ),
  },
  {
    number: 12,
    content: (
      <>
        Li Y, Imami MR, Zhao L, Amindarolzarbi A, Mena E, Leal J, Chen J, Gafita A, Voter AF, Li X, Du Y, Zhu C, Choyke PL, Zou B, <B>Jiao Z</B>, Rowe SP, Pomper MG, Bai HX.{" "}
        <B>An Automated Deep Learning-Based Framework for Uptake Segmentation and Classification on PSMA PET/CT Imaging of Patients with Prostate Cancer</B>
        . J Imaging Inform Med. 2024 Oct;37(5):2206-2215. doi: 10.1007/s10278-024-01104-y. Epub 2024 Apr 8. PMID: 38587770; PMCID: PMC11522269.
      </>
    ),
  },
];

const pubs2024: PublicationEntry[] = [
  {
    number: 1,
    content: (
      <>
        Gomez F, Danos AM, Del Fiol G, Madabhushi A, Tiwari P, McMichael JF, Bakas S, Bian J, Davatzikos C, Fertig EJ, Kalpathy-Cramer J, Kenney J, Savova GK, Yetisgen M, Van Allen EM, <B>Warner JL</B>, Prior F, Griffith M, Griffith OL.{" "}
        <PubLink href="https://doi.org/10.1158/2159-8290.CD-24-1130">
          A New Era of Data-Driven Cancer Research and Care: Opportunities and Challenges
        </PubLink>
        . Cancer Discov. 2024 Oct 4;14(10):1774-1778. doi: 10.1158/2159-8290.CD-24-1130. PMID: 39363742; PMCID: PMC11463721.
      </>
    ),
  },
  {
    number: 2,
    content: (
      <>
        Guermazi D, Arvanitis P, Vieira K, <B>Warner JL</B>, Farmakiotis D.{" "}
        <PubLink href="https://doi.org/10.1007/s00520-024-08706-2">
          Oral antivirals for COVID-19 among patients with cancer
        </PubLink>
        . Supportive Care in Cancer. 2024 Jul 9;32(8):496. PMID: 38980433.
      </>
    ),
  },
  {
    number: 3,
    content: (
      <>
        Lee K, Paek H, Huang LC, Hilton CB, Datta S, Higashi J, Ofoegbu N, Wang J, Rubinstein SM, Cowan AJ, Kwok M, <B>Warner JL</B>, Xu H, Wang X.{" "}
        <PubLink href="https://doi.org/10.1016/j.imu.2024.101589">
          SEETrials: Leveraging Large Language Models for Safety and Efficacy Extraction in Oncology Clinical Trials
        </PubLink>
        . Informatics in Medicine Unlocked. 2024 Oct 11;50:101589. PMCID: PMC11530223.
      </>
    ),
  },
  {
    number: 4,
    content: (
      <>
        Munoz E, <B>VanHelene AD</B>, Yang NT, Ramirez AG (2024).{" "}
        <PubLink href="https://doi.org/10.1080/28322134.2024.2431501">
          CancerClarity app: Enhancing cancer data visualization with AI-generated narratives
        </PubLink>
        . Preventive Oncology &amp; Epidemiology, 3(1). doi:10.1080/28322134.2024.2431501
      </>
    ),
  },
  {
    number: 5,
    content: (
      <>
        Song Q, Ni C, <B>Warner JL</B>, Chen Q, Song L, Rosenbloom ST, Malin BA, Yin Z.{" "}
        <PubLink href="https://doi.org/10.1038/s41598-024-66991-9">
          Optimizing word embeddings for small dataset: a case study on patient portal messages from breast cancer patients
        </PubLink>
        . Scientific Reports. 2024 Jul 12;14(1):16117. PMID: 38997332; PMCID: PMC11245534.
      </>
    ),
  },
  {
    number: 6,
    content: (
      <>
        <B>VanHelene AD*, Hadfield MJ*</B>, Trapani D, <B>Warner JL#, Lythgoe MP#</B>. "
        <PubLink href="https://doi.org/10.1136/bmjonc-2024-000410">
          As bleak as it sounds? Analysing trends in oncology clinical trial initiation in the UK from 2010 to 2022
        </PubLink>
        " BMJ Oncol. 2024 Aug 14;3(1):e000410. doi: 10.1136/bmjonc-2024-000410. eCollection 2024. PMID: 39886121 (VanHelene and Hadfield co-first authors.; Warner and Lythgoe co-last authors)
      </>
    ),
  },
  {
    number: 7,
    content: (
      <>
        <B>VanHelene AD</B>, Khatri I, Hilton CB, <B>Mishra S, Gamsiz Uzun ED, Warner JL</B>.{" "}
        <PubLink href="https://doi.org/10.1371/journal.pdig.0000456">
          Inferring gender from first names: Comparing the accuracy of Genderize, Gender API, and the gender R package on authors of diverse nationality
        </PubLink>
        . PLOS Digit Health. 2024 Oct 29;3(10):e0000456. doi: 0.1371/journal.pdig.0000456. PMID: 39471154; PMCID: PMC11521266.
      </>
    ),
  },
  {
    number: 8,
    content: (
      <>
        Wu Q, Morrow EM, <B>Gamsiz Uzun ED</B>.{" "}
        <PubLink href="https://doi.org/10.1371/journal.pcbi.1012468">
          A deep learning model for prediction of autism status using whole-exome sequencing data
        </PubLink>
        . PLoS Comput Biol. 2024 Nov 8;20(11):e1012468. doi: 10.1371/journal.pcbi.1012468. PMID: 39514604; PMCID: PMC11578481.
      </>
    ),
  },
  {
    number: 9,
    content: (
      <>
        Hadfield MJ, Benjamin DJ, Krell J, Warner J, Lythgoe MP.{" "}
        <PubLink href="https://pubmed.ncbi.nlm.nih.gov/38584070/">
          The evolving posology and administration of immune checkpoint inhibitors: subcutaneous formulations
        </PubLink>
        . Trends in Cancer. 2024 Apr 6. Epub ahead of print. PMID: 38584070.
      </>
    ),
  },
  {
    number: 10,
    content: (
      <>
        Burus T*, VanHelene AD*, Rooney MK, Lang Kuhs KA, Christian WJ, McNair C, Mishra S, Paulino AC, Smith GL, Frank SJ, Warner JL.{" "}
        <PubLink href="https://pubmed.ncbi.nlm.nih.gov/38758559/">
          Travel-Time Disparities in Access to Proton Beam Therapy for Cancer Treatment
        </PubLink>
        . JAMA Network Open. 2024 May 1;7(5):e2410670. PMID: 38758559.
      </>
    ),
  },
  {
    number: 11,
    content: (
      <>
        Zuo X, Kumar A, Shen S, Li J, Cong G, Jin E, Chen Q, Warner JL, Yang P, Xu H.{" "}
        <PubLink href="https://pubmed.ncbi.nlm.nih.gov/38885475/">
          Extracting Systemic Anticancer Therapy and Response Information from Clinical Notes Following the RECIST Definition
        </PubLink>
        . JCO Clinical Cancer Informatics. 2024 Jun;8:e2300166. PMID: 38885475.
      </>
    ),
  },
  {
    number: 12,
    content: (
      <>
        Bishay S, Robb WH, Schwartz TM, Smith DS, Lee LH, Lynn CJ, Clark TL, Jefferson AL, <B>Warner JL</B>, Rosenthal EL, Murphy BA, Hohman TJ, Koran MEI.{" "}
        <PubLink href="https://pubmed.ncbi.nlm.nih.gov/38148283/">
          Frontal and anterior temporal hypometabolism post chemoradiation in head and neck cancer: A real-world PET study
        </PubLink>
        . Journal of Neuroimaging. Mar-Apr;34(2):211-216. doi: 10.1111/jon.13181. Epub 2023 Dec 26. PMID: 38148283.
      </>
    ),
  },
  {
    number: 13,
    content: (
      <>
        Guermazi D, Arvanitis P, Vieira K, <B>Warner JL</B>, Farmakiotis D.{" "}
        <PubLink href="https://pubmed.ncbi.nlm.nih.gov/38343793/">
          Oral antivirals for COVID-19 among patients with cancer
        </PubLink>
        . Res Sq [Preprint]. 2024 Jan 24:rs.3.rs-3876022. PMID: 38343793; PMCID: PMC10854279.
      </>
    ),
  },
  {
    number: 14,
    content: (
      <>
        Zack T, <B>Warner JL</B>.{" "}
        <PubLink href="https://pubmed.ncbi.nlm.nih.gov/38269846/">
          Introducing a Comprehensive Score of Systemic Anticancer Treatment Relevance
        </PubLink>
        . Studies in Health Technology &amp; Informatics. 2024 Jan 25;310:464-468. PMID: 38269846; PMCID: PMC10909246.
      </>
    ),
  },
];

const pubs2023: PublicationEntry[] = [
  {
    number: 1,
    content: (
      <>
        Egan PC, Jani C, Singh H, <B>Mishra S</B>, <B>Warner JL</B>.{" "}
        <PubLink href="https://doi.org/10.1158/1055-9965.epi-22-0876">
          The Importance of Recency of Cancer Diagnosis in Patients Hospitalized with COVID-19-Glimpses from an EHR-based Study
        </PubLink>
        . Cancer Epidemiology, Biomarkers &amp; Prevention. 2023 Jan 9;32(1):3-5.
      </>
    ),
  },
  {
    number: 2,
    content: (
      <>
        De Souza A, <B>Charissa C</B>, Mega AE, Douglass J, Olszewski A, <B>Gamsiz Uzun ED</B>, <B>Uzun A</B>, Duan F, Wang J, Amin A, Golijanin D, Holder S, Lagos G, Safran H, El-Deiry WS, Carneiro BA.{" "}
        <PubLink href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9906077/">
          Clinical features of patients with MTAP-deleted bladder cancer
        </PubLink>
        . American Journal of Cancer Research. 2023 Jan 15;13(1):326-339.
      </>
    ),
  },
  {
    number: 3,
    content: (
      <>
        Riaz IB, Islam M, Ikram W, Naqvi SAA, Maqsood H, Saleem Y, Riaz A, Ravi P, Wang Z, Hussain SA, <B>Warner JL</B>, Odedina FT, Duma N, Singh P, Kehl KL, Kamran SC, Murad MH, Landman A, Van Allen E, Bryce AH.{" "}
        <PubLink href="https://doi.org/10.1001/jamaoncol.2022.5511">
          Disparities in the Inclusion of Racial and Ethnic Minority Groups and Older Adults in Prostate Cancer Clinical Trials: A Meta-analysis
        </PubLink>
        . JAMA Oncology. 2023 Feb 1;9(2):180-187.
      </>
    ),
  },
  {
    number: 4,
    content: (
      <>
        Hacking S, Chou C, <B>Baykara Y,</B> Wang Y, <B>Uzun A</B>, <B>Gamsiz Uzun ED</B>.{" "}
        <PubLink href="https://doi.org/10.3390/ijms24065327">
          MMR Deficiency Defines Distinct Molecular Subtype of Breast Cancer with Histone Proteomic Networks
        </PubLink>
        . International Journal of Molecular Science. 2023 Mar 10;24(6):5327.
      </>
    ),
  },
  {
    number: 5,
    content: (
      <>
        Choueiri TK*, Labaki C*, Bakouny Z*, Hsu C-Y, Schmidt AL, de Lima Lopes G, Hwang C, Singh SRK, Jani C, Weissmann LB, Griffiths EA, Halabi S, Wu U, Berg S, O'Connor TE, Wise-Draper TM, Panagiotou OA, Klein EJ, Joshi M, Yared F, Santos Dutra M, Gatson NTN, Blau S, Singh H, Nanchal R, McKay RR, Nonato TK, Quinn R, Rubinstein SM, Puc M, Mavromatis BH, Vikas P, Faller B, Zaren HA, Del Prete S, Russell K, Reuben DY, Accordino MK, Singh H, Friese CR, <B>Mishra S</B>, Rivera DR*, Shyr Y*, Farmakiotis D*, <B>Warner JL</B>*.{" "}
        <PubLink href="https://doi.org/10.1016/j.lana.2023.100445">
          Breakthrough SARS-CoV-2 infections among patients with cancer following two and three doses of COVID-19 mRNA vaccines: a retrospective observational study from the COVID-19 and Cancer Consortium
        </PubLink>
        . The Lancet Regional Health – Americas. 2023 Mar;19:100445.
      </>
    ),
  },
  {
    number: 6,
    content: (
      <>
        Johnson DB, Atkins MB, Hennessy C, Wise-Draper T, Heilman H, Awosika J, Bakouny Z, Labaki C, Saliby RM, Hwang C, Singh SRK, Balanchivadze N, Friese CR, Fecher LA, Yoon JJ, Hayes-Lattin B, Bilen MA, Castellano CA, Lyman GH, Tachiki L, Shah SA, Glover MJ, Flora DB, Wulff-Burchfield E, Kasi A, Abbasi SH, Farmakiotis D, Viera K, Klein EJ, Weissman LB, Jani C, Puc M, Fahey CC, Reuben DY, <B>Mishra S</B>, Beeghly-Fadiel A, French B, <B>Warner JL</B>; COVID-19 and Cancer Consortium.{" "}
        <PubLink href="https://doi.org/10.1186/s12885-023-10708-6">
          Impact of COVID-19 in patients on active melanoma therapy and with history of melanoma
        </PubLink>
        . BMC Cancer. 2023 Mar 23;23(1):265.
      </>
    ),
  },
  {
    number: 7,
    content: (
      <>
        Best AF, Bowman M, Li J, Mishkin GE, Denicoff A, Shekfeh M, Rubinstein L, <B>Warner JL</B>, Rini B, Korde LA.{" "}
        <PubLink href="https://doi.org/10.1093/jnci/djad015">
          COVID-19 severity by vaccination status in the NCI COVID-19 and Cancer Patients Study (NCCAPS)
        </PubLink>
        . Journal of the National Cancer Institute. 2023 May 8;115(5):597-600.
      </>
    ),
  },
  {
    number: 8,
    content: (
      <>
        Leung CS, Rosenzweig SJ, Yoon B, Marinelli NA, Hollingsworth EW, Maguire AM, Cowen MH, Schmidt M, Imitola J, <B>Gamsiz Uzun ED</B>*, Lizarraga SB*.{" "}
        <PubLink href="https://doi.org/10.1093/hmg/ddad002">
          Dysregulation of the chromatin environment leads to differential alternative splicing as a mechanism of disease in a human model of autism spectrum disorder
        </PubLink>
        . Human Molecular Genetics. 2023 May 5;32(10):1634-1646. This study was featured in a Spectrum News article ("
        <PubLink href="https://www.spectrumnews.org/news/chromatin-remodeling-tied-to-altered-splicing-in-autism-model/">
          Chromatin remodeling tied to altered splicing in autism model
        </PubLink>
        .")
      </>
    ),
  },
  {
    number: 9,
    content: (
      <>
        Hacking SM, <B>Karam J</B>, Singh K, <B>Gamsiz Uzun ED</B>, <B>Brickman A</B>, Yakirevich E, Taliano R, Wang Y.{" "}
        <PubLink href="https://doi.org/10.1016/j.prp.2023.154476">
          Whole slide image features predict pathologic complete response and poor clinical outcomes in triple-negative breast cancer
        </PubLink>
        . Pathology-Research and Practice. 2023 Jun;246:154476.
      </>
    ),
  },
  {
    number: 10,
    content: (
      <>
        Chen S, Guevara M, Ramirez N, Murray A, <B>Warner JL</B>, Aerts HJWL, Miller TA, Savova GK, Mak RH, Bitterman DS.{" "}
        <PubLink href="https://doi.org/10.1200/cci.23.00048">
          Natural Language Processing to Automatically Extract the Presence and Severity of Esophagitis in Notes of Patients Undergoing Radiotherapy
        </PubLink>
        . JCO Clinical Cancer Informatics. 2023 Jul;7:e2300048.
      </>
    ),
  },
  {
    number: 11,
    content: (
      <>
        <B>Jain S</B>, Li X, <B>Warner J</B>. Graphical presentations in systemic anticancer treatment network meta-analyses: A systematic review. Proceedings of MEDINFO 2023. In press.
      </>
    ),
  },
  {
    number: 12,
    content: (
      <>
        Zack T, <B>Warner JL</B>. Introducing a comprehensive score of systemic anticancer treatment relevance. Proceedings of MEDINFO 2023. In press.
      </>
    ),
  },
  {
    number: 13,
    content: (
      <>
        Moey MYY, Hennessy C, French B, <B>Warner JL</B>, Tucker MD, Hausrath DJ, Shah DP, DeCara JM, Bakouny Z, Labaki C, Choueiri TK, Dent S, Akhter N, Ismail-Khan R, Tachiki L, Slosky D, Polonsky TS, Awosika JA, Crago A, Wise-Draper T, Balanchivadze N, Hwang C, Fecher LA, Gomez CG, Hayes-Lattin B, Glover MJ, Shah SA, Gopalakrishnan D, Griffiths EA, Kwon DH, Koshkin VS, Mahmood S, Bashir B, Nonato T, Razavi P, McKay RR, Nagaraj G, Oligino E, Puc M, Tregubenko P, Wulff-Burchfield EM, Xie Z, Halfdanarson TR, Farmakiotis D, Klein EJ, Robilotti EV, Riely GJ, Durand JB, Hayek SS, Kondapalli L, Berg S, O'Connor TE, Bilen MA, Castellano C, Accordino MK, Sibel B, Weissmann LB, Jani C, Flora DB, Rudski L, Dutra MS, Nathaniel B, Ruíz-García E, Vilar-Compte D, Gupta S, Morgans A, Nohria A; COVID-19 and Cancer Consortium.{" "}
        <PubLink href="https://doi.org/10.1016/j.tranon.2023.101709">
          COVID-19 severity and cardiovascular outcomes in SARS-CoV-2-infected patients with cancer and cardiovascular disease
        </PubLink>
        . Translational Oncology. 2023 Aug;34:101709.
      </>
    ),
  },
  {
    number: 14,
    content: (
      <>
        Rooney MK, Sharifi B, Ludmir EB, Fuller CD, <B>Warner JL</B>.{" "}
        <PubLink href="https://doi.org/10.1200/CCI.23.00082">
          Factors Associated With Altmetric Attention Scores for Randomized Phase III Cancer Clinical Trials
        </PubLink>
        . JCO Clinical Cancer Informatics. 2023 Aug;7:e2300082.
      </>
    ),
  },
  {
    number: 15,
    content: (
      <>
        Castelo-Branco L, Lee R, Brandao M, Cortellini A, Freitaa A, Garassino M, Geukens T, Grivas P, Halabi S, Oliveria J, Pinato DJ, Ribeiro J, Peters S, Pentheroudakis G, <B>Warner JL</B>, Romano E.{" "}
        <PubLink href="https://doi.org/10.1016/j.esmoop.2023.101596">
          Learning Lessons from the COVID-19 pandemic for Real World Evidence research in Oncology – shared perspectives from an international consortia
        </PubLink>
        . ESMO Open. 2023 Aug;8(4):101596.
      </>
    ),
  },
  {
    number: 16,
    content: (
      <>
        Choudhury NJ, Lavery JA, Brown S, de Bruijn I, Jee J, Tran TN, Rizvi H, Arbour KC, Whiting K, Shen R, Hellmann M, Bedard PL, Yu C, Leighl N, LeNoue-Newton M, Micheel C, <B>Warner JL</B>, Ginsberg MS, Plodkowski A, Girshman J, Sawan P, Pillai S, Sweeney SM, Kehl KL, Panageas KS, Schultz N, Schrag D, Riely GJ;{" "}
        <PubLink href="https://doi.org/10.1158/1078-0432.ccr-23-0580">
          AACR GENIE BPC Core Team. The GENIE BPC NSCLC Cohort: A Real-World Repository Integrating Standardized Clinical and Genomic Data for 1,846 Patients with Non-Small Cell Lung Cancer
        </PubLink>
        . Clinical Cancer Research. 2023 Sep 1;29(17):3418-3428.
      </>
    ),
  },
  {
    number: 17,
    content: (
      <>
        Bitterman DS, Goldner E, Finan S, Harris D, Durbin EB, Hochheiser H, <B>Warner JL</B>, Mak RH, Miller T, Savova GK.{" "}
        <PubLink href="https://doi.org/10.1016/j.ijrobp.2023.03.055">
          An end-to-end natural language processing system for automatically extracting radiotherapy events from clinical texts: NLP to extract radiotherapy events from text
        </PubLink>
        . International Journal of Radiation Oncology Biology &amp; Physics. 2023 Sep 1;117(1):262-273.
      </>
    ),
  },
  {
    number: 18,
    content: (
      <>
        <B>Baykara Y</B>, <B>Gamsiz Uzun ED</B>, Jackson C, Kurt H.{" "}
        <PubLink href="https://pubmed.ncbi.nlm.nih.gov/37945023/">
          Exon 19 Deletion in EGFR in a Patient with a High-Grade Glioma: A Case Report
        </PubLink>
        . Annals of Clinical &amp; Laboratory Science. 2023 Sep;53(5):789-791.
      </>
    ),
  },
  {
    number: 19,
    content: (
      <>
        Hochheiser H, Finan S, Yuan Z, Durbin EB, Jeong JC, Hands I, Rust D, Kavuluru R, Wu XC, <B>Warner JL</B>, Savova G.{" "}
        <PubLink href="https://doi.org/10.1101/2023.05.05.23289524">
          DeepPhe-CR: Natural Language Processing Software Services for Cancer Registrar Case Abstraction
        </PubLink>
        . JCO Clinical Cancer Informatics. 2023 Sep;7:e2300156.
      </>
    ),
  },
  {
    number: 20,
    content: (
      <>
        Gulati S, Hsu CY, Shah S, Shah PK, Zon R, Alsamarai S, Awosika J, El-Bakouny Z, Bashir B, Beeghly A, Berg S, de-la-Rosa-Martinez D, Doroshow DB, Egan PC, Fein J, Flora DB, Friese CR, Fromowitz A, Griffiths EA, Hwang C, Jani C, Joshi M, Khan H, Klein EJ, Heater NK, Koshkin VS, Kwon DH, Labaki C, Latif T, McKay RR, Nagaraj G, Nakasone ES, Nonato T, Polimera HV, Puc M, Razavi P, Ruiz-Garcia E, Saliby RM, Shastri A, Singh SRK, Tagalakis V, Vilar-Compte D, Weissmann LB, Wilkins CR, Wise-Draper TM, Wotman MT, Yoon JJ, <B>Mishra S</B>, Grivas P, Shyr Y, <B>Warner JL</B>, Connors JM, Shah DP*, Rosovsky RP*;{" "}
        <PubLink href="https://doi.org/10.1001/jamaoncol.2023.2934">
          COVID-19 and Cancer Consortium. Systemic Anticancer Therapy and Thromboembolic Outcomes in Hospitalized Patients With Cancer and COVID-19
        </PubLink>
        . JAMA Oncology. 2023 Oct 1;9(10):1390-1400.
      </>
    ),
  },
  {
    number: 21,
    content: (
      <>
        Nagaraj G*, Vinayak S*, Khaki AR*, Sun T, Kuderer NM, Aboulafia DM, Acoba JD, Awosika J, Bakouny Z, Balmaceda NB, Bao T, Bashir B, Berg S, Bilen MA, Bindal P, Blau S, Bodin BE, Borno HT, Castellano C, Choi H, Deeken J, Desai A, Edwin N, Feldman LE, Flora DB, Friese CR, Galsky MD, Gonzalez CJ, Grivas P, Gupta S, Haynam M, Heilman H, Hershman DL, Hwang C, Jani C, Jhawar SR, Joshi M, Kaklamani V, Klein EJ, Knox N, Koshkin VS, Kulkarni AA, Kwon DH, Labaki C, Lammers PE, Lathrop KI, Lewis MA, Li X, Lopes GL, Lyman GH, Makower DF, Mansoor AH, Markham MJ, Mashru SH, McKay RR, Messing I, Mico V, Nadkarni R, Namburi S, Nguyen RH, Nonato TK, O'Connor TL, Panagiotou OA, Park K, Patel JM, Patel KG, Peppercorn J, Polimera H, Puc M, Rao YJ, Razavi P, Reid SA, Riess JW, Rivera DR, Robson M, Rose SJ, Russ AD, Schapira L, Shah PK, Shanahan MK, Shapiro LC, Smits M, Stover DG, Streckfuss M, Tachiki L, Thompson MA, Tolaney SM, Weissmann LB, Wilson G, Wotman MT, Wulff-Burchfield EM, <B>Mishra S</B>, French B, <B>Warner JL</B>, Lustberg MB*, Accordino MK*, Shah DP*; COVID-19 and Cancer Consortium.{" "}
        <PubLink href="https://doi.org/10.7554/eLife.82618">
          Clinical characteristics, racial inequities, and outcomes in patients with breast cancer and COVID-19: a COVID-19 and cancer consortium (CCC19) cohort study
        </PubLink>
        . eLife. 2023 Oct 17:12:e82618.
      </>
    ),
  },
  {
    number: 22,
    content: (
      <>
        Shuey MM, Stead WW, Aka I, Barnado AL, Bastarache JA, Brokamp E, Campbell M, Carroll RJ, Goldstein JA, Lewis A, Malow BA, Mosley JD, Osterman T, Padovani-Claudio DA, Ramirez A, Roden DM, Schuler BA, Siew E, Sucre J, Thomsen I, Tinker RJ, Van Driest S, Walsh C, <B>Warner JL</B>, Wells QS, Wheless L, Bastarache L.{" "}
        <PubLink href="https://doi.org/10.1093/bioinformatics/btad655">
          Next-generation phenotyping: introducing phecodeX for enhanced discovery research in medical phenomics
        </PubLink>
        . Bioinformatics. 2023 Nov 1;39(11):btad655.
      </>
    ),
  },
  {
    number: 23,
    content: (
      <>
        Cannon M, Stevenson J, Kuzma K, Kiwala S, <B>Warner JL</B>, Griffith OL, Griffith M, Wagner AH.{" "}
        <PubLink href="https://doi.org/10.1093/jamiaopen/ooad093">
          Normalization of drug and therapeutic concepts with Thera-Py
        </PubLink>
        . JAMIA Open. 2023 Nov 8;6(4):ooad093.
      </>
    ),
  },
  {
    number: 24,
    content: (
      <>
        <B>Wu Q</B>, Ma L, <B>Joesch-Cohen L</B>, Schmidt M, <B>Gamsiz Uzun ED</B>*, Morrow EM*.{" "}
        <PubLink href="https://doi.org/10.1242/bio.059778">
          Targeting NHE6 gene expression identifies lysosome and neurodevelopmental mechanisms in a haploid in vitro cell model
        </PubLink>
        . Biology Open. 2023 Nov 15;12(11):bio059778.
      </>
    ),
  },
  {
    number: 25,
    content: (
      <>
        Jani CT*, Ahmed A*, Singh H, Mouchati C, Al Omari O, Bhatt PS, Sharma R, Farooq M, Liu W, Shalhoub J, Marshall D, Salciccioli JD*, <B>Warner JL</B>*, Lam P*.{" "}
        <PubLink href="https://doi.org/10.1200/go.23.00229">
          Burden of AML, 1990-2019: Estimates From the Global Burden of Disease Study
        </PubLink>
        . JCO Global Oncology. 2023 Nov 22;9:e2300229.
      </>
    ),
  },
  {
    number: 26,
    content: (
      <>
        Walton NA, Nagarajan R, Wang C, Sincan M, Freimuth RR, Everman DB, Walton DC, McGrath SP, Lemas DJ, Benos PV, Alekseyenko AV, Song Q, <B>Gamsiz Uzun ED</B>, Taylor CO, <B>Uzun A</B>, Person TN, Rappoport N, Zhao Z, Williams MS.{" "}
        <PubLink href="https://doi.org/10.1093/jamia/ocad211">
          Enabling the clinical application of artificial intelligence in genomics: a perspective of the AMIA Genomics and Translational Bioinformatics Workgroup
        </PubLink>
        . Journal of the American Medical Informatics Association, 2023 Nov30:ocad211.
      </>
    ),
  },
  {
    number: 27,
    content: (
      <>
        de Bruijn I, Kundra R, Mastrogiacomo B, Tran TN, Sikina L, Mazor T, Li X, Ochoa A, Zhao G, Lai B, Abeshouse A, Baiceanu D, Ciftci E, Dogrusoz U, Dufilie A, Erkoc Z, Garcia Lara E, Fu Z, Gross B, Haynes C, Heath A, Higgins D, Jagannathan P, Kalletla K, Kumari P, Lindsay J, Lisman A, Leenknegt B, Lukasse P, Madela D, Madupuri R, van Nierop P, Plantalech O, Quach J, Resnick AC, Rodenburg SYA, Satravada BA, Schaeffer F, Sheridan R, Singh J, Sirohi R, Sumer SO, van Hagen S, Wang A, Wilson M, Zhang H, Zhu K, Rusk N, Brown S, Lavery JA, Panageas KS, Rudolph JE, LeNoue-Newton ML, <B>Warner JL</B>, Guo X, Hunter-Zinck H, Yu TV, Pilai S, Nichols C, Gardos SM, Philip J; AACR Project GENIE BPC Core Team, AACR Project GENIE Consortium; Kehl KL, Riely GJ, Schrag D, Lee J, Fiandalo MV, Sweeney SM, Pugh TJ, Sander C, Cerami E, Gao J, Schultz N.{" "}
        <PubLink href="https://doi.org/10.1158/0008-5472.can-23-0816">
          Analysis and Visualization of Longitudinal Genomic and Clinical Data from the AACR Project GENIE Biopharma Collaborative in cBioPortal
        </PubLink>
        . Cancer Research. 2023 Dec 1;83(23):3861-3867.
      </>
    ),
  },
  {
    number: 28,
    content: (
      <>
        EA Sigworth, SM Rubinstein, <B>JL Warner</B>, Y Chen, Q Chen.{" "}
        <PubLink href="https://doi.org/10.1214/23-AOAS1748">
          Building a dose toxo-equivalence model from a Bayesian meta-analysis of published clinical trials
        </PubLink>
        . The Annals of Applied Statistics. 2023 Dec;17(4):2993-3012.
      </>
    ),
  },
  {
    number: 29,
    content: (
      <>
        <B>Brickman A</B>, <B>Baykara Y,</B> Carabaño M, Hacking SM.{" "}
        <PubLink href="https://doi.org/10.1016/j.jpi.2023.100350">
          Whole slide images as non-fungible tokens: A decentralized approach to secure, scalable data storage and access
        </PubLink>
        . J Pathol Inform. 2023 Nov 9;15:100350. doi: 10.1016/j.jpi.2023.100350. PMID: 38162951; PMCID: PMC10757022.
      </>
    ),
  },
];

// ─── Social Icons SVG ─────────────────────────────────────────────────────────

function SocialIconsSVG() {
  return (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <a
        href="https://www.linkedin.com/company/brown-ccids"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="18" fill="#4E3629" />
          <path d={svgPaths.p3b341e00} fill="#027BBF" />
          <path d={svgPaths.p124c4b00} fill="#027BBF" />
          <path d={svgPaths.p1b95480} fill="#027BBF" />
        </svg>
      </a>
      <a
        href="https://www.facebook.com/brownccids"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <svg width="36" height="36" viewBox="60 0 36 36" fill="none">
          <path d={svgPaths.p25881f0} fill="#4E3629" />
        </svg>
      </a>
      <a
        href="https://twitter.com/brownccids"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter/X"
      >
        <svg width="36" height="36" viewBox="120 0 36 36" fill="none">
          <circle cx="18" cy="18" r="18" fill="#4E3629" />
          <path d={svgPaths.p19db3100} fill="#027BBF" transform="translate(-120,0)" />
        </svg>
      </a>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function PublicationsPage() {
  const baseFont = "'Source Sans 3', 'Source Sans Pro', sans-serif";

  return (
    <div style={{ fontFamily: baseFont, background: "#fff", minHeight: "100vh" }}>
      {/* ── HERO / TITLE ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: "center", paddingTop: 64, paddingBottom: 20 }}
      >
        <h1
          style={{
            fontFamily: baseFont,
            fontSize: 54,
            fontWeight: 700,
            color: "#027BBF",
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Selected Publications
        </h1>
        <p
          style={{
            fontFamily: baseFont,
            fontSize: 16,
            color: "#000",
            maxWidth: 760,
            margin: "24px auto 0",
            lineHeight: 1.6,
          }}
        >
          These are selected publications by the CCIDS members. Member names are in bold.
        </p>
      </motion.div>

      {/* ── PUBLICATIONS BODY ── */}
      <main
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "40px 32px 80px",
          display: "flex",
          flexDirection: "column",
          gap: 0,
        }}
      >
        {/* 2025 */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 60 }}
        >
          <YearHeading year="2025" />
          <div style={{ display: "flex", flexDirection: "column", gap: 28, marginTop: 24 }}>
            {pubs2025.map((p) => (
              <PubItem key={p.number} {...p} />
            ))}
          </div>
        </motion.section>

        {/* 2024 */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 60 }}
        >
          <YearHeading year="2024" />
          <div style={{ display: "flex", flexDirection: "column", gap: 28, marginTop: 24 }}>
            {pubs2024.map((p) => (
              <PubItem key={p.number} {...p} />
            ))}
          </div>
        </motion.section>

        {/* 2023 */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 60 }}
        >
          <YearHeading year="2023" />
          <div style={{ display: "flex", flexDirection: "column", gap: 28, marginTop: 24 }}>
            {pubs2023.map((p) => (
              <PubItem key={p.number} {...p} />
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
