export const party = {
  name: "Bullets and Ballots",
  hero: "Bullets and Ballots.",
  slogan: "WE SHOOT FOR LIBERTY",
  candidate: "Sam Drake-Weiss",
  goal: "Our main goal is to bring back personal freedom.",
} as const;

export const bioSentences = [
  "Sam Drake-Weiss is a varsity football player at Moscow High School, where he earned an All-League honor as a linebacker and received the team’s Bear Award.",
  "Through football, Sam has learned the importance of hard work, discipline, and being someone that his teammates can count on.",
  "He believes being a leader means showing up, putting in the work, and setting an example for others.",
] as const;

export const preamble =
  "Our party believes in protecting the rights and freedoms of Idaho residents while building a stronger future. We believe in securing our borders and enforcing immigration laws to keep our country safe. We also support making healthcare more affordable, lowering inflation and housing costs, and reducing unnecessary government spending. Our party believes in protecting traditional values, supporting families, enforcing laws, fighting drug problems, fair laws, and keeping our communities safe. Our goal is to limit unnecessary government involvement and improve life for everyone in Idaho.";

export const pledge = [
  "I pledge allegiance to protect Second Amendment rights,",
  "Secure our borders and keep our communities safe,",
  "To support affordable healthcare and lower costs of living,",
  "To strengthen our economy and protect traditional values,",
  "And protect individual liberty while building a stronger future for Idaho.",
] as const;

export type Figure = {
  value?: string;
  label: string;
  source: string;
};

export type Plank = {
  id: string;
  number: string;
  title: string;
  author: string;
  body: string;
  figure?: Figure;
};

export const planks: Plank[] = [
  {
    id: "gun-rights",
    number: "01",
    title: "Gun rights",
    author: "Sam Drake-Weiss",
    body: 'Our party believes that the right to keep and bear arms is a fundamental part of American freedom and Idaho\'s identity. The Second Amendment protects an individual\'s ability to own and carry firearms for personal protection, hunting, and the defense of liberty. We stand firmly behind Idaho\'s permit less-carry laws and oppose firearm registries, bans on commonly owned firearms, mandatory waiting periods, and unnecessary restrictions on responsible gun owners. In a state where firearm ownership is deeply rooted in everyday life, RAND-based estimates suggest that approximately 60.1% of Idaho adults live in households with firearms, placing Idaho among the states with the highest rates of gun ownership. Idaho\'s Constitution reinforces this commitment by declaring that the right to keep and bear arms "shall not be abridged." Our party will work to preserve constitutional carry, prevent conflicting local firearm restrictions, defend Idaho\'s authority against federal overreach, and ensure that law enforcement focuses on violent criminals rather than law-abiding citizens exercising their constitutional rights.',
    figure: {
      value: "60.1%",
      label: "of Idaho adults live in households with firearms",
      source: "RAND-based estimates, as cited in the Gun rights plank",
    },
  },
  {
    id: "border-security",
    number: "02",
    title: "Border Security",
    author: "Cam Spellman",
    body: "We believe in securing our nation's borders and enforcing immigration laws to protect American citizens and keep our communities safe. We support legal immigration and believe that people should follow the proper process to enter and live in the United States. We think that Idaho should work with the federal government to enforce immigration laws. In February 2025, Idaho Governor Brad Little signed Executive Order 2025-03, called the Border Security and Immigration Enforcement Act. This act made state agencies cooperate with the federal authorities in enforcing immigration laws. Our party will support a fair and organized legal process, support a secure national border, protect public safety while respecting people's legal rights, and support enforcing current immigration laws.",
    figure: {
      value: "2025-03",
      label:
        "Border Security and Immigration Enforcement Act, signed February 2025 by Idaho Governor Brad Little",
      source: "Cited in the Border Security plank",
    },
  },
  {
    id: "healthcare-costs",
    number: "03",
    title: "Healthcare Costs",
    author: "Riley Edwards",
    body: "Our party believes that families should be able to afford healthcare without giving up freedom and to choose their doctors or insurance. We support reducing unnecessary government regulations, private healthcare options, and competition between insurance companies. We believe individuals should have more control over their healthcare decisions. Healthcare costs are a concern for many Idaho families. The Idaho Department of Insurance stated that health insurance premiums for 2026 were expected to increase by 10% for individual plans and 11% for small group plans. This means that many families will have to spend more money on healthcare. Our party will work to make healthcare more affordable, give Idaho residents more choices, and reduce unnecessary government regulations on healthcare providers. We want to encourage competition between insurance companies so that families have more options when choosing coverage.",
    figure: {
      value: "10% / 11%",
      label:
        "expected 2026 health insurance premium increase for individual plans and small group plans",
      source:
        "Idaho Department of Insurance, as cited in the Healthcare Costs plank",
    },
  },
  {
    id: "inflation",
    number: "04",
    title: "Inflation/ High Cost of Living",
    author: "Cullen White",
    body: "Inflation and cost of living is at all-time highs in America causing many Americans to feel lost or stuck. Gas prices have continued to rise along with housing prices. Since the pandemic American families have had to spend hundreds more on food than they did during the pandemic. Rents and prices for a new home have not gone down, causing more of a poverty gap in America. Health insurance and childcare have also been severely affected. Corporate price gouging has created an unfair bias on certain markets, and local businesses are getting quietly swept under the rug. Along with that Corporations have such a large control of markets they can keep prices high just to make more profits. Governments should try and lower costs and fight back against corporations and give unions more rights as well.",
  },
  {
    id: "cultural-shift",
    number: "05",
    title: "Cultural Shift",
    author: "Keaton Frei",
    body: "Our party believes in protecting traditional American values, religious freedom and the importance of family. We support freedom of speech, parental rights, and the right for individuals to practice their beliefs without government interference. Cultural changes have created disagreements in Idaho about family values, education, religion, and individual rights. The Idaho Republican party platform supports traditional family values, parental; responsibility, and protecting Idaho's cultural heritage. Our party will protect freedom of speech and religious freedom, support parents having a say in their children's education, protect individual's rights and limit unnecessary government involvement.",
    figure: {
      label:
        "The Idaho Republican party platform supports traditional family values, parental; responsibility, and protecting Idaho's cultural heritage.",
      source: "Cited in the Cultural Shift plank",
    },
  },
  {
    id: "crime-drugs-public-safety",
    number: "06",
    title: "Crime, Drugs and Public safety",
    author: "Max Gropp",
    body: "Our party believes Idaho families deserve safe neighborhoods, secure communities, and protection from crime and illegal drugs. We support strong local police, tougher penalties for violent criminals and drug dealers, and stronger efforts to stop fentanyl and meth from entering Idaho. According to Idaho State Police, the drug offense rate increased 38% between 2005 and 2024. Our party will increase funding for Idaho law enforcement, protect our schools from drugs, improve border security, support drug prevention programs, and hold criminals accountable to keep Idaho safe.",
    figure: {
      value: "38%",
      label: "increase in the drug offense rate between 2005 and 2024",
      source:
        "Idaho State Police, as cited in the Crime, Drugs and Public safety plank",
    },
  },
];

export const members = [
  { role: "Party Chairperson", name: "Cam Spellman" },
  { role: "Party Secretary", name: "Riley Edwards" },
  { role: "Graphic Designer", name: "Cullen White" },
  { role: "Party Treasurer", name: "Keaton Frei" },
  { role: "Communication Director", name: "Max Gropp" },
] as const;

export const nav = [
  { href: "#candidate", label: "The Candidate" },
  { href: "#platform", label: "Platform" },
  { href: "#pledge", label: "Pledge" },
  { href: "#team", label: "Team" },
] as const;
