// Plant data (50 plants)
const plants = [
  {
    "id": 1,
    "name": "Ashwagandha",
    "latinName": "Withania somnifera",
    "description": "Parts Used: Root, Leaves. For decoction: Boil 1 teaspoon of dried ashwagandha root in 2 cups of water for 10-15 minutes. Strain and drink warm. For powder: Mix 1/2 to 1 teaspoon with warm milk or water. Best taken in the evening.",
    "diseases": [
      "Stress",
      "Anxiety",
      "Insomnia",
      "Low immunity"
    ],
    "bodySystems": [
      "Nervous",
      "Immune",
      "Reproductive"
    ],
    "preparation": "Decoction, Powder (churna), Capsules\nFor decoction: Boil 1 teaspoon of dried ashwagandha root in 2 cups of water for 10-15 minutes. Strain and drink warm. For powder: Mix 1/2 to 1 teaspoon with warm milk or water. Best taken in the evening.",
    "dosage": "Powder 3–6 g/day; Standardized extract per label\nGeneral health: 300-500mg twice daily. For stress and anxiety: 600mg daily. For sleep: Take 300-500mg 30 minutes before bedtime. Always start with lower dose and gradually increase.",
    "safety": "May potentiate sedatives and thyroid meds; avoid in pregnancy unless supervised\nContraindications: Not recommended during pregnancy. Use with caution if taking sedatives, thyroid medication, or immunosuppressants. May lower blood sugar - monitor if diabetic.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 2,
    "name": "Tulsi",
    "latinName": "Ocimum tenuiflorum",
    "description": "Parts Used: Leaves, Seeds. For tea: Steep 5-10 fresh leaves or 1 tsp dried leaves in hot water for 5-10 minutes. Add honey if desired. For juice: Crush fresh leaves and extract juice. Mix with honey or water.",
    "diseases": [
      "Cough",
      "Cold",
      "Asthma",
      "Diabetes"
    ],
    "bodySystems": [
      "Respiratory",
      "Immune",
      "Digestive"
    ],
    "preparation": "Tea, Fresh juice, Powder\nFor tea: Steep 5-10 fresh leaves or 1 tsp dried leaves in hot water for 5-10 minutes. Add honey if desired. For juice: Crush fresh leaves and extract juice. Mix with honey or water.",
    "dosage": "Fresh leaves: 4–6/day; Juice: 5–10 ml\nTea: 2-3 cups daily. Juice: 5-10ml twice daily. Powder: 1-3g daily with water or honey. For diabetes: Take before meals.",
    "safety": "May lower blood sugar; caution with anticoagulants\nContraindications: May interact with blood-thinning medications. Not recommended for people with bleeding disorders. May lower blood sugar levels significantly.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 3,
    "name": "Turmeric",
    "latinName": "Curcuma longa",
    "description": "Parts Used: Rhizome. Golden milk: Mix 1 tsp turmeric powder with 1/4 tsp black pepper in 1 cup milk. Heat gently. For paste: Mix with water or oil. For wounds: Apply paste directly.",
    "diseases": [
      "Arthritis",
      "Indigestion",
      "Wound healing"
    ],
    "bodySystems": [
      "Digestive",
      "Anti-inflammatory",
      "Skin"
    ],
    "preparation": "Paste, Powder, Milk decoction (golden milk)\nGolden milk: Mix 1 tsp turmeric powder with 1/4 tsp black pepper in 1 cup milk. Heat gently. For paste: Mix with water or oil. For wounds: Apply paste directly.",
    "dosage": "Powder: 1–3 g/day; With black pepper for absorption\nGeneral use: 500mg-1g, 2-3 times daily. With black pepper (piperine) for enhanced absorption. For arthritis: 500mg capsules 3 times daily.",
    "safety": "High doses may cause gastric upset\nContraindications: May cause gallbladder contractions. Avoid if you have gallstones or bile duct obstruction. High doses may interact with blood thinners.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 4,
    "name": "Brahmi",
    "latinName": "Bacopa monnieri",
    "description": "Parts Used: Whole plant. Juice: Extract from fresh leaves, mix with water. Powder: Can be taken with ghee, honey or water. Best taken after meals.",
    "diseases": [
      "Memory loss",
      "Anxiety",
      "ADHD"
    ],
    "bodySystems": [
      "Nervous",
      "Cognitive"
    ],
    "preparation": "Juice, Powder, Capsules\nJuice: Extract from fresh leaves, mix with water. Powder: Can be taken with ghee, honey or water. Best taken after meals.",
    "dosage": "300–600 mg/day standardized extract\nStandardized extract (20% bacosides): 300-450mg daily. Powder: 1-2g twice daily with warm milk. For children: Half the adult dose.",
    "safety": "May cause nausea in empty stomach\nContraindications: May interact with thyroid medications. Not recommended for people with digestive issues or ulcers. May slow heart rate - use caution with heart conditions.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 5,
    "name": "Guduchi",
    "latinName": "Tinospora cordifolia",
    "description": "Parts Used: Stem. Decoction: Boil 1 tsp dried stem in 2 cups water until reduced to half. Strain and drink. Powder: Can be taken with honey or water.",
    "diseases": [
      "Fever",
      "Diabetes",
      "Liver disorders"
    ],
    "bodySystems": [
      "Immune",
      "Detoxification"
    ],
    "preparation": "Decoction, Powder, Tablet\nDecoction: Boil 1 tsp dried stem in 2 cups water until reduced to half. Strain and drink. Powder: Can be taken with honey or water.",
    "dosage": "Powder: 3–6 g/day\nPowder: 1-2g, 2-3 times daily. Tablet: 1-2 tablets (500mg each) twice daily. For diabetes: Take before meals.",
    "safety": "Safe for long-term use\nContraindications: Generally safe. Rare cases of allergic reactions reported. May lower blood sugar levels - monitor if diabetic.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 6,
    "name": "Shatavari",
    "latinName": "Asparagus racemosus",
    "description": "Parts Used: Root. Milk decoction: Boil 1 tsp powder in milk. Strain and drink. With ghee: Mix with equal part ghee. Can be taken with honey or water.",
    "diseases": [
      "Hormonal imbalance",
      "Low lactation",
      "Gastritis"
    ],
    "bodySystems": [
      "Reproductive",
      "Digestive"
    ],
    "preparation": "Powder, Milk decoction, Ghee preparation\nMilk decoction: Boil 1 tsp powder in milk. Strain and drink. With ghee: Mix with equal part ghee. Can be taken with honey or water.",
    "dosage": "Powder: 3–6 g/day\nGeneral use: 1-2g, 2-3 times daily. For lactation: 3g twice daily with milk. For hormonal balance: 500mg-1g twice daily.",
    "safety": "May increase estrogen levels\nContraindications: Not recommended for estrogen-sensitive conditions. Use with caution if you have kidney issues. May cause allergic reactions in some individuals.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 7,
    "name": "Neem",
    "latinName": "Azadirachta indica",
    "description": "Parts Used: Leaves, Bark, Oil. Juice: Crush fresh leaves and extract juice. Mix with water. For skin: Apply oil directly or mix with coconut oil. Powder: Can be taken with water.",
    "diseases": [
      "Acne",
      "Eczema",
      "Diabetes"
    ],
    "bodySystems": [
      "Skin",
      "Blood Purification"
    ],
    "preparation": "Leaf juice, Powder, Oil application\nJuice: Crush fresh leaves and extract juice. Mix with water. For skin: Apply oil directly or mix with coconut oil. Powder: Can be taken with water.",
    "dosage": "Leaf juice: 2–4 ml/day\nJuice: 2-4ml twice daily. Powder: 500mg-1g twice daily. Oil: For external use only. Capsules: 1-2 capsules (500mg) daily.",
    "safety": "Bitter taste; avoid in pregnancy\nContraindications: Not recommended during pregnancy or breastfeeding. May lower blood sugar significantly. Long-term internal use may cause liver or kidney damage.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 8,
    "name": "Amla",
    "latinName": "Phyllanthus emblica",
    "description": "Parts Used: Fruit. Juice: Extract from fresh fruits, mix with water. Powder: Can be taken with water, honey or ghee. Fresh fruit: Can be eaten directly.",
    "diseases": [
      "Premature graying",
      "Constipation",
      "Weak immunity"
    ],
    "bodySystems": [
      "Anti-aging",
      "Digestive",
      "Hair"
    ],
    "preparation": "Fresh fruit, Powder, Juice\nJuice: Extract from fresh fruits, mix with water. Powder: Can be taken with water, honey or ghee. Fresh fruit: Can be eaten directly.",
    "dosage": "Powder: 3–6 g/day\nPowder: 1-2g, 2-3 times daily. Juice: 10-20ml daily. Fresh fruit: 1-2 fruits daily. For hair: Apply oil externally.",
    "safety": "Safe even in high doses\nContraindications: Generally very safe. May cause acidity in some people if taken on empty stomach. No known serious contraindications.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 9,
    "name": "Arjuna",
    "latinName": "Terminalia arjuna",
    "description": "Parts Used: Bark. Decoction: Boil 1 tsp bark powder in 2 cups water until reduced to half. Strain and drink. Powder: Can be taken with warm water or milk.",
    "diseases": [
      "High cholesterol",
      "Heart weakness"
    ],
    "bodySystems": [
      "Cardiovascular"
    ],
    "preparation": "Bark decoction, Powder\nDecoction: Boil 1 tsp bark powder in 2 cups water until reduced to half. Strain and drink. Powder: Can be taken with warm water or milk.",
    "dosage": "Powder: 3–6 g/day\nPowder: 1-2g, 2-3 times daily. Extract: 500mg twice daily. For heart health: Take consistently for 2-3 months.",
    "safety": "May lower blood pressure\nContraindications: May interact with blood pressure medications. Not recommended during pregnancy. May cause constipation in some individuals.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 10,
    "name": "Guggul",
    "latinName": "Commiphora mukul",
    "description": "Parts Used: Resin. Tablets: Take with warm water. Resin: Purified form only. Traditionally taken with triphala or other herbs.",
    "diseases": [
      "Obesity",
      "Arthritis",
      "High cholesterol"
    ],
    "bodySystems": [
      "Metabolic",
      "Anti-inflammatory"
    ],
    "preparation": "Purified resin, Tablet\nTablets: Take with warm water. Resin: Purified form only. Traditionally taken with triphala or other herbs.",
    "dosage": "500 mg 2–3 times/day\nStandardized extract: 500mg, 2-3 times daily. For cholesterol: Take for 12-24 weeks. For arthritis: Combine with anti-inflammatory herbs.",
    "safety": "May cause mild diarrhea initially\nContraindications: Not recommended during pregnancy. May interact with thyroid medications. Avoid in liver disease or inflammatory bowel conditions.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 11,
    "name": "Punarnava",
    "latinName": "Boerhavia diffusa",
    "description": "Parts Used: Root, Whole plant. Decoction: Boil 1 tsp powder in 2 cups water until reduced to half. Strain and drink. Best taken in morning.",
    "diseases": [
      "Edema",
      "Kidney stones",
      "UTI"
    ],
    "bodySystems": [
      "Urinary",
      "Kidney"
    ],
    "preparation": "Decoction, Powder\nDecoction: Boil 1 tsp powder in 2 cups water until reduced to half. Strain and drink. Best taken in morning.",
    "dosage": "Powder: 3–5 g/day\nPowder: 1-2g, 2-3 times daily. Extract: 500mg twice daily. For edema: Take for 2-4 weeks. Increase water intake.",
    "safety": "Diuretic effect; maintain hydration\nContraindications: Not recommended during pregnancy. May interact with diuretic medications. Use with caution in kidney disease.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 12,
    "name": "Shankhpushpi",
    "latinName": "Convolvulus pluricaulis",
    "description": "Parts Used: Whole plant. Juice: Extract from fresh plant. Powder: Mix with milk or water. Ghrita: Medicated ghee preparation.",
    "diseases": [
      "Memory enhancement",
      "Insomnia"
    ],
    "bodySystems": [
      "Nervous",
      "Cognitive"
    ],
    "preparation": "Powder, Juice, Ghrita\nJuice: Extract from fresh plant. Powder: Mix with milk or water. Ghrita: Medicated ghee preparation.",
    "dosage": "Powder: 3–6 g/day\nPowder: 1-2g, 2-3 times daily. Juice: 5-10ml twice daily. For memory: Take consistently for 2-3 months.",
    "safety": "Mild sedative effect\nContraindications: May enhance effects of sedative medications. Not recommended during pregnancy. Use with caution if driving or operating machinery.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 13,
    "name": "Yashtimadhu",
    "latinName": "Glycyrrhiza glabra",
    "description": "Parts Used: Root. Decoction: Boil 1 tsp powder in 2 cups water for 10 minutes. Strain and drink. For throat: Gargle with decoction. Chew sticks: Chew slowly.",
    "diseases": [
      "Sore throat",
      "Ulcers",
      "Cough"
    ],
    "bodySystems": [
      "Respiratory",
      "Digestive"
    ],
    "preparation": "Powder, Decoction, Chew sticks\nDecoction: Boil 1 tsp powder in 2 cups water for 10 minutes. Strain and drink. For throat: Gargle with decoction. Chew sticks: Chew slowly.",
    "dosage": "Powder: 3–5 g/day\nPowder: 1-2g, 2-3 times daily. For ulcers: Take between meals. Maximum 4-6 weeks continuous use.",
    "safety": "Avoid in hypertension; may cause edema\nContraindications: Not recommended for people with high blood pressure, heart conditions, or kidney disease. Avoid during pregnancy. May interact with corticosteroids.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 14,
    "name": "Vacha",
    "latinName": "Acorus calamus",
    "description": "Parts Used: Rhizome. Powder: Only processed form should be used. Mix with honey or ghee. Medicated ghee: Special preparation required.",
    "diseases": [
      "Speech disorders",
      "Memory issues"
    ],
    "bodySystems": [
      "Nervous",
      "Speech"
    ],
    "preparation": "Powder, Medicated ghee\nPowder: Only processed form should be used. Mix with honey or ghee. Medicated ghee: Special preparation required.",
    "dosage": "Powder: 125–500 mg/day\nProcessed powder: 125-250mg, 1-2 times daily. Never exceed 500mg daily. Use only under supervision.",
    "safety": "Use processed form only; toxic in high doses\nContraindications: Not recommended during pregnancy or breastfeeding. Toxic in high doses. Use only professionally processed forms. Avoid long-term use.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 15,
    "name": "Haritaki",
    "latinName": "Terminalia chebula",
    "description": "Parts Used: Fruit. Powder: Take with warm water or ghee. Decoction: Boil 1 tsp powder in 2 cups water until reduced to half. Strain and drink.",
    "diseases": [
      "Constipation",
      "Digestive weakness"
    ],
    "bodySystems": [
      "Digestive",
      "Detoxification"
    ],
    "preparation": "Powder, Decoction\nPowder: Take with warm water or ghee. Decoction: Boil 1 tsp powder in 2 cups water until reduced to half. Strain and drink.",
    "dosage": "Powder: 3–6 g/day\nPowder: 1-2g, 2-3 times daily. For constipation: Take at bedtime. For digestion: Take after meals.",
    "safety": "May cause loose stools initially\nContraindications: Not recommended during pregnancy. May cause dehydration if not taken with sufficient water. Avoid in severe diarrhea or dehydration.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 16,
    "name": "Bibhitaki",
    "latinName": "Terminalia bellirica",
    "description": "Parts Used: Fruit. Powder: Take with honey for respiratory issues, with warm water for digestion. Decoction: Boil 1 tsp in 2 cups water.",
    "diseases": [
      "Cough",
      "Hoarseness",
      "Constipation"
    ],
    "bodySystems": [
      "Respiratory",
      "Digestive"
    ],
    "preparation": "Powder, Decoction\nPowder: Take with honey for respiratory issues, with warm water for digestion. Decoction: Boil 1 tsp in 2 cups water.",
    "dosage": "Powder: 3–5 g/day\nPowder: 1-2g, 2 times daily. For respiratory: Mix with honey. For digestion: Take with warm water.",
    "safety": "Dryness may increase in excess\nContraindications: Not recommended during pregnancy. May cause excessive dryness. Avoid in already dehydrated conditions.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 17,
    "name": "Amalaki",
    "latinName": "Phyllanthus emblica",
    "description": "Parts Used: Fruit. Fresh: Eat directly. Powder: Mix with water or honey. Murabba: Ayurvedic preserve, 1-2 pieces daily.",
    "diseases": [
      "Premature aging",
      "Weak digestion"
    ],
    "bodySystems": [
      "Anti-aging",
      "Digestive"
    ],
    "preparation": "Fresh fruit, Powder, Murabba\nFresh: Eat directly. Powder: Mix with water or honey. Murabba: Ayurvedic preserve, 1-2 pieces daily.",
    "dosage": "Powder: 3–6 g/day\nPowder: 1-2g, 2-3 times daily. Fresh fruit: 1-2 daily. Murabba: 10-20g daily.",
    "safety": "Very safe even in high doses\nContraindications: Generally very safe. Rare cases of allergic reactions. No known serious contraindications.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 18,
    "name": "Gokshura",
    "latinName": "Tribulus terrestris",
    "description": "Parts Used: Fruit, Root. Decoction: Boil 1 tsp powder in 2 cups water until reduced to half. Strain and drink. Powder: Can be taken with milk or water.",
    "diseases": [
      "UTI",
      "Low libido",
      "Kidney stones"
    ],
    "bodySystems": [
      "Urinary",
      "Reproductive"
    ],
    "preparation": "Powder, Decoction\nDecoction: Boil 1 tsp powder in 2 cups water until reduced to half. Strain and drink. Powder: Can be taken with milk or water.",
    "dosage": "Powder: 3–6 g/day\nPowder: 1-2g, 2-3 times daily. Extract: 500mg twice daily. For urinary: Increase water intake.",
    "safety": "Safe for long-term use\nContraindications: Generally safe. May interact with diabetes medications. Use with caution in hormone-sensitive conditions.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 19,
    "name": "Manjistha",
    "latinName": "Rubia cordifolia",
    "description": "Parts Used: Root. Decoction: Boil 1 tsp powder in 2 cups water for 10 minutes. Strain and drink. For skin: Apply paste externally.",
    "diseases": [
      "Acne",
      "Skin disorders",
      "Tumors"
    ],
    "bodySystems": [
      "Blood Purification",
      "Skin"
    ],
    "preparation": "Powder, Decoction\nDecoction: Boil 1 tsp powder in 2 cups water for 10 minutes. Strain and drink. For skin: Apply paste externally.",
    "dosage": "Powder: 3–5 g/day\nPowder: 1-2g, 2 times daily. Extract: 500mg twice daily. For skin: Both internal and external use.",
    "safety": "May color urine red (normal)\nContraindications: Not recommended during pregnancy. May interact with blood thinners. Temporary red discoloration of urine is normal.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 20,
    "name": "Katuki",
    "latinName": "Picrorhiza kurroa",
    "description": "Parts Used: Root. Powder: Mix with honey to mask bitterness. Decoction: Boil 1/2 tsp in 2 cups water. Very bitter taste.",
    "diseases": [
      "Jaundice",
      "Liver disorders"
    ],
    "bodySystems": [
      "Liver",
      "Digestive"
    ],
    "preparation": "Powder, Decoction\nPowder: Mix with honey to mask bitterness. Decoction: Boil 1/2 tsp in 2 cups water. Very bitter taste.",
    "dosage": "Powder: 1–3 g/day\nPowder: 500mg-1g, 2 times daily. Extract: 250-500mg twice daily. For liver: Take for 4-8 weeks.",
    "safety": "Very bitter; use with honey\nContraindications: Not recommended during pregnancy. High doses may cause diarrhea. Use with caution in autoimmune conditions.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 21,
    "name": "Pippali",
    "latinName": "Piper longum",
    "description": "Parts Used: Fruit. Powder: Can be taken with honey. Decoction: Boil 1/2 tsp in 2 cups water. Often combined with other herbs.",
    "diseases": [
      "Asthma",
      "Digestive weakness"
    ],
    "bodySystems": [
      "Respiratory",
      "Digestive"
    ],
    "preparation": "Powder, Decoction\nPowder: Can be taken with honey. Decoction: Boil 1/2 tsp in 2 cups water. Often combined with other herbs.",
    "dosage": "Powder: 1–3 g/day\nPowder: 500mg-1g, 2 times daily. For respiratory: Mix with honey. For digestion: Take after meals.",
    "safety": "Heating effect; balance with cooling foods\nContraindications: Not recommended during pregnancy. May increase Pitta. Use with cooling herbs in Pitta constitution.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 22,
    "name": "Bala",
    "latinName": "Sida cordifolia",
    "description": "Parts Used: Root. Powder: Can be taken with milk or ghee. Decoction: Boil 1 tsp in 2 cups water. Oil: For external massage.",
    "diseases": [
      "Muscle weakness",
      "Nervine tonic"
    ],
    "bodySystems": [
      "Nervous",
      "Muscular"
    ],
    "preparation": "Powder, Decoction, Oil\nPowder: Can be taken with milk or ghee. Decoction: Boil 1 tsp in 2 cups water. Oil: For external massage.",
    "dosage": "Powder: 3–6 g/day\nPowder: 1-2g, 2-3 times daily. Oil: External use only. For weakness: Long-term use beneficial.",
    "safety": "Safe tonic herb\nContraindications: Generally safe. No known serious contraindications. Use standard precautions during pregnancy.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 23,
    "name": "Daruharidra",
    "latinName": "Berberis aristata",
    "description": "Parts Used: Root, Stem. Eye drops: Professional preparation only. Decoction: Boil 1 tsp in 2 cups water. For skin: Apply paste externally.",
    "diseases": [
      "Conjunctivitis",
      "Skin infections"
    ],
    "bodySystems": [
      "Skin",
      "Eyes"
    ],
    "preparation": "Decoction, Eye drops\nEye drops: Professional preparation only. Decoction: Boil 1 tsp in 2 cups water. For skin: Apply paste externally.",
    "dosage": "Powder: 1–3 g/day\nPowder: 500mg-1g, 2 times daily. External use only for eyes. For skin: Apply paste 2-3 times daily.",
    "safety": "Bitter; avoid in pregnancy\nContraindications: Not recommended during pregnancy. Not for internal use without professional guidance. May cause irritation in sensitive skin.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 24,
    "name": "Jatamansi",
    "latinName": "Nardostachys jatamansi",
    "description": "Parts Used: Root. Powder: Can be taken with milk or water. Oil: For external massage, especially head massage.",
    "diseases": [
      "Insomnia",
      "Anxiety"
    ],
    "bodySystems": [
      "Nervous",
      "Sleep"
    ],
    "preparation": "Powder, Oil\nPowder: Can be taken with milk or water. Oil: For external massage, especially head massage.",
    "dosage": "Powder: 1–3 g/day\nPowder: 500mg-1g, 2 times daily. For sleep: Take before bedtime. Oil: External use for massage.",
    "safety": "Mild sedative effect\nContraindications: May enhance effects of sedative medications. Use with caution if driving or operating machinery. Generally safe.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 25,
    "name": "Kutaja",
    "latinName": "Holarrhena antidysenterica",
    "description": "Parts Used: Bark. Decoction: Boil 1 tsp bark powder in 2 cups water until reduced to half. Strain and drink. Very effective for diarrhea.",
    "diseases": [
      "Diarrhea",
      "Dysentery"
    ],
    "bodySystems": [
      "Digestive"
    ],
    "preparation": "Bark decoction\nDecoction: Boil 1 tsp bark powder in 2 cups water until reduced to half. Strain and drink. Very effective for diarrhea.",
    "dosage": "Powder: 3–5 g/day\nPowder: 1-2g, 2-3 times daily. For acute diarrhea: Every 4-6 hours. Reduce frequency as symptoms improve.",
    "safety": "Specific for diarrhea\nContraindications: Not recommended for long-term use. Use only for acute diarrhea. Discontinue if constipation occurs.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 26,
    "name": "Chandana",
    "latinName": "Santalum album",
    "description": "Parts Used: Heartwood. Paste: Mix powder with rose water or milk. Apply externally. Powder: Can be taken with water or milk.",
    "diseases": [
      "Burning sensation",
      "Pitta disorders"
    ],
    "bodySystems": [
      "Skin",
      "Cooling"
    ],
    "preparation": "Paste, Powder\nPaste: Mix powder with rose water or milk. Apply externally. Powder: Can be taken with water or milk.",
    "dosage": "Powder: 1–3 g/day\nPowder: 500mg-1g, 2 times daily. External paste: Apply as needed. For Pitta: Best taken in summer.",
    "safety": "Very cooling; balance in cold climates\nContraindications: Not recommended in Vata disorders or cold climates. May increase coldness. Use with warming herbs in winter.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 27,
    "name": "Mustaka",
    "latinName": "Cyperus rotundus",
    "description": "Parts Used: Tuber. Decoction: Boil 1 tsp powder in 2 cups water. Strain and drink. Powder: Can be taken with honey or water.",
    "diseases": [
      "Diarrhea",
      "Fever"
    ],
    "bodySystems": [
      "Digestive"
    ],
    "preparation": "Powder, Decoction\nDecoction: Boil 1 tsp powder in 2 cups water. Strain and drink. Powder: Can be taken with honey or water.",
    "dosage": "Powder: 3–5 g/day\nPowder: 1-2g, 2-3 times daily. For fever: Take with honey. For diarrhea: Take with buttermilk.",
    "safety": "Drying effect\nContraindications: May cause excessive dryness. Not recommended in dehydration conditions. Use with hydrating herbs.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 28,
    "name": "Sariva",
    "latinName": "Hemidesmus indicus",
    "description": "Parts Used: Root. Decoction: Boil 1 tsp powder in 2 cups water. Strain and drink. Powder: Can be taken with milk or water.",
    "diseases": [
      "Skin diseases",
      "Syphilis"
    ],
    "bodySystems": [
      "Blood Purification",
      "Skin"
    ],
    "preparation": "Powder, Decoction\nDecoction: Boil 1 tsp powder in 2 cups water. Strain and drink. Powder: Can be taken with milk or water.",
    "dosage": "Powder: 3–6 g/day\nPowder: 1-2g, 2-3 times daily. For skin: Both internal and external use. Long-term use beneficial.",
    "safety": "Cooling effect\nContraindications: Generally safe. No known serious contraindications. Use standard precautions during pregnancy.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 29,
    "name": "Bhumyamalaki",
    "latinName": "Phyllanthus niruri",
    "description": "Parts Used: Whole plant. Juice: Extract from fresh plant. Powder: Can be taken with water. Both forms effective for liver disorders.",
    "diseases": [
      "Hepatitis",
      "Jaundice"
    ],
    "bodySystems": [
      "Liver"
    ],
    "preparation": "Juice, Powder\nJuice: Extract from fresh plant. Powder: Can be taken with water. Both forms effective for liver disorders.",
    "dosage": "Juice: 5–10 ml/day\nJuice: 5-10ml, 2 times daily. Powder: 1-2g, 2 times daily. For liver: Take for 4-8 weeks.",
    "safety": "Specific for liver disorders\nContraindications: Generally safe. May interact with diabetes medications. Monitor blood sugar levels.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 30,
    "name": "Danti",
    "latinName": "Baliospermum montanum",
    "description": "Parts Used: Root. Only professionally processed form should be used. Never use raw root. Mix with other herbs to reduce potency.",
    "diseases": [
      "Constipation",
      "Tumors"
    ],
    "bodySystems": [
      "Digestive"
    ],
    "preparation": "Processed root powder\nOnly professionally processed form should be used. Never use raw root. Mix with other herbs to reduce potency.",
    "dosage": "125–500 mg/day\nProcessed powder: 125-250mg, once daily. Never exceed 500mg. Use only for short periods.",
    "safety": "Strong purgative; use under supervision\nContraindications: Not recommended during pregnancy. Very strong purgative - use only under professional supervision. May cause dehydration.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 31,
    "name": "Eranda",
    "latinName": "Ricinus communis",
    "description": "Parts Used: Root, Oil. Oil: For external massage only. Pills: Professionally prepared. Root: Decoction under guidance.",
    "diseases": [
      "Arthritis",
      "Sciatica"
    ],
    "bodySystems": [
      "Muscular",
      "Nervous"
    ],
    "preparation": "Oil application, Pills\nOil: For external massage only. Pills: Professionally prepared. Root: Decoction under guidance.",
    "dosage": "Oil: 5–15 drops orally\nOil: 5-10 drops with warm milk at bedtime. External: Massage affected areas. Root: Only under supervision.",
    "safety": "Seeds are toxic; use processed oil only\nContraindications: Seeds are highly toxic - never consume raw. Use only professionally processed oil. Not recommended during pregnancy.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 32,
    "name": "Gudmar",
    "latinName": "Gymnema sylvestre",
    "description": "Parts Used: Leaves. Powder: Can be taken with water. Best taken before meals. Capsules: Standardized extracts available.",
    "diseases": [
      "Diabetes",
      "Obesity"
    ],
    "bodySystems": [
      "Metabolic"
    ],
    "preparation": "Powder, Capsules\nPowder: Can be taken with water. Best taken before meals. Capsules: Standardized extracts available.",
    "dosage": "Powder: 2–4 g/day\nPowder: 1-2g, 2 times daily before meals. Extract: 500mg twice daily. For diabetes: Monitor blood sugar levels.",
    "safety": "May reduce sugar cravings\nContraindications: May significantly lower blood sugar. Monitor closely if taking diabetes medications. Not recommended during pregnancy.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 33,
    "name": "Kalmegh",
    "latinName": "Andrographis paniculata",
    "description": "Parts Used: Whole plant. Juice: Extract from fresh plant. Very bitter. Powder: Can be taken with honey. Capsules available.",
    "diseases": [
      "Fever",
      "Liver disorders"
    ],
    "bodySystems": [
      "Immune",
      "Liver"
    ],
    "preparation": "Juice, Powder\nJuice: Extract from fresh plant. Very bitter. Powder: Can be taken with honey. Capsules available.",
    "dosage": "Powder: 1–3 g/day\nPowder: 500mg-1g, 2-3 times daily. Extract: 300-500mg twice daily. For fever: Take at first signs.",
    "safety": "Very bitter; best in capsule form\nContraindications: Not recommended during pregnancy. Very bitter - may cause nausea. May interact with blood thinners.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 34,
    "name": "Mulethi",
    "latinName": "Glycyrrhiza glabra",
    "description": "Parts Used: Root. Decoction: Boil 1 tsp in 2 cups water. Strain and drink. For throat: Gargle with decoction. Chew small pieces.",
    "diseases": [
      "Cough",
      "Sore throat"
    ],
    "bodySystems": [
      "Respiratory"
    ],
    "preparation": "Powder, Decoction\nDecoction: Boil 1 tsp in 2 cups water. Strain and drink. For throat: Gargle with decoction. Chew small pieces.",
    "dosage": "Powder: 3–5 g/day\nPowder: 1-2g, 2-3 times daily. For cough: Mix with honey. Maximum 4-6 weeks continuous use.",
    "safety": "Avoid in hypertension\nContraindications: Not recommended for people with high blood pressure, heart conditions, or kidney disease. Avoid during pregnancy. May interact with corticosteroids.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 35,
    "name": "Nagarmotha",
    "latinName": "Cyperus scariosus",
    "description": "Parts Used: Tuber. Decoction: Boil 1 tsp in 2 cups water. Strain and drink. Powder: Can be taken with buttermilk or water.",
    "diseases": [
      "Diarrhea",
      "Dysentery"
    ],
    "bodySystems": [
      "Digestive"
    ],
    "preparation": "Powder, Decoction\nDecoction: Boil 1 tsp in 2 cups water. Strain and drink. Powder: Can be taken with buttermilk or water.",
    "dosage": "Powder: 3–5 g/day\nPowder: 1-2g, 2-3 times daily. For diarrhea: Take with yogurt or buttermilk.",
    "safety": "Astringent effect\nContraindications: May cause constipation in excess. Not recommended during pregnancy. Use with caution in Vata disorders.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 36,
    "name": "Pashanbheda",
    "latinName": "Bergenia ligulata",
    "description": "Parts Used: Root. Decoction: Boil 1 tsp in 2 cups water until reduced to half. Strain and drink. Increase water intake.",
    "diseases": [
      "Kidney stones",
      "UTI"
    ],
    "bodySystems": [
      "Urinary"
    ],
    "preparation": "Powder, Decoction\nDecoction: Boil 1 tsp in 2 cups water until reduced to half. Strain and drink. Increase water intake.",
    "dosage": "Powder: 3–6 g/day\nPowder: 1-2g, 2-3 times daily. For stones: Take with plenty of water. Use for 4-8 weeks.",
    "safety": "Diuretic effect\nContraindications: Not recommended during pregnancy. May interact with diuretic medications. Ensure adequate hydration.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 37,
    "name": "Pippalimula",
    "latinName": "Piper longum (root)",
    "description": "Parts Used: Root. Decoction: Boil 1/2 tsp in 2 cups water. Strain and drink. Often combined with honey and ginger.",
    "diseases": [
      "Chronic cough",
      "Asthma"
    ],
    "bodySystems": [
      "Respiratory"
    ],
    "preparation": "Powder, Decoction\nDecoction: Boil 1/2 tsp in 2 cups water. Strain and drink. Often combined with honey and ginger.",
    "dosage": "Powder: 1–3 g/day\nPowder: 500mg-1g, 2 times daily. For chronic cough: Take with honey. Long-term use beneficial.",
    "safety": "Heating effect\nContraindications: Not recommended during pregnancy. May increase Pitta. Use with cooling herbs in Pitta constitution.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 38,
    "name": "Rasna",
    "latinName": "Pluchea lanceolata",
    "description": "Parts Used: Leaves. Powder: Can be taken with warm water or milk. Oil: For external massage. Often combined with other herbs.",
    "diseases": [
      "Arthritis",
      "Muscle pain"
    ],
    "bodySystems": [
      "Muscular"
    ],
    "preparation": "Powder, Oil\nPowder: Can be taken with warm water or milk. Oil: For external massage. Often combined with other herbs.",
    "dosage": "Powder: 3–5 g/day\nPowder: 1-2g, 2-3 times daily. Oil: External massage twice daily. For arthritis: Both internal and external use.",
    "safety": "Anti-inflammatory\nContraindications: Generally safe. No known serious contraindications. Use standard precautions during pregnancy.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 39,
    "name": "Sarpagandha",
    "latinName": "Rauvolfia serpentina",
    "description": "Parts Used: Root. Only professionally prepared forms should be used. Never self-prescribe. Requires careful dosing.",
    "diseases": [
      "High BP",
      "Insomnia"
    ],
    "bodySystems": [
      "Cardiovascular"
    ],
    "preparation": "Powder, Tablet\nOnly professionally prepared forms should be used. Never self-prescribe. Requires careful dosing.",
    "dosage": "125–500 mg/day\nProfessional preparation only: 125-250mg, 1-2 times daily. Never exceed 500mg. Requires medical supervision.",
    "safety": "Only under supervision\nContraindications: Not for self-medication. Requires professional supervision. Many drug interactions. Not recommended during pregnancy.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 40,
    "name": "Shallaki",
    "latinName": "Boswellia serrata",
    "description": "Parts Used: Resin. Powder: Can be taken with warm water. Capsules: Standardized extracts available. Often combined with other anti-inflammatories.",
    "diseases": [
      "Arthritis",
      "Joint pain"
    ],
    "bodySystems": [
      "Anti-inflammatory"
    ],
    "preparation": "Powder, Capsules\nPowder: Can be taken with warm water. Capsules: Standardized extracts available. Often combined with other anti-inflammatories.",
    "dosage": "300–500 mg 2–3 times/day\nExtract: 300-500mg, 2-3 times daily. Powder: 1-2g, 2-3 times daily. For arthritis: Long-term use beneficial.",
    "safety": "Very safe anti-inflammatory\nContraindications: Generally very safe. Rare cases of stomach discomfort. No known serious contraindications.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 41,
    "name": "Tagara",
    "latinName": "Valeriana wallichii",
    "description": "Parts Used: Root. Decoction: Boil 1 tsp in 2 cups water. Strain and drink before bedtime. Powder: Can be taken with warm milk.",
    "diseases": [
      "Insomnia",
      "Anxiety"
    ],
    "bodySystems": [
      "Nervous"
    ],
    "preparation": "Powder, Decoction\nDecoction: Boil 1 tsp in 2 cups water. Strain and drink before bedtime. Powder: Can be taken with warm milk.",
    "dosage": "1–3 g at bedtime\nPowder: 1-2g at bedtime. Extract: 500mg before sleep. For anxiety: Smaller doses during day.",
    "safety": "Sedative effect\nContraindications: May enhance effects of sedative medications. Not recommended during pregnancy. Use with caution if driving or operating machinery.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 42,
    "name": "Talispatra",
    "latinName": "Abies spectabilis",
    "description": "Parts Used: Leaves. Decoction: Boil 1 tsp in 2 cups water. Strain and drink. Often combined with honey and ginger.",
    "diseases": [
      "Asthma",
      "Bronchitis"
    ],
    "bodySystems": [
      "Respiratory"
    ],
    "preparation": "Powder, Decoction\nDecoction: Boil 1 tsp in 2 cups water. Strain and drink. Often combined with honey and ginger.",
    "dosage": "1–3 g/day\nPowder: 500mg-1g, 2 times daily. For asthma: Take with honey. Long-term use beneficial.",
    "safety": "Expectorant\nContraindications: Not recommended during pregnancy. May interact with respiratory medications. Use with caution in Pitta conditions.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 43,
    "name": "Twak",
    "latinName": "Cinnamomum zeylanicum",
    "description": "Parts Used: Bark. Decoction: Boil 1/2 tsp in 2 cups water. Strain and drink. Powder: Can be added to foods or taken with honey.",
    "diseases": [
      "Indigestion",
      "Cold"
    ],
    "bodySystems": [
      "Digestive"
    ],
    "preparation": "Powder, Decoction\nDecoction: Boil 1/2 tsp in 2 cups water. Strain and drink. Powder: Can be added to foods or taken with honey.",
    "dosage": "1–3 g/day\nPowder: 500mg-1g, 2 times daily. For digestion: Take after meals. For cold: Add to tea.",
    "safety": "Heating effect\nContraindications: Not recommended in high Pitta conditions. May interact with blood thinners. Use in moderation.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 44,
    "name": "Vamsha",
    "latinName": "Bambusa arundinacea",
    "description": "Parts Used: Young shoots. Juice: Extract from young shoots. Powder: Can be taken with honey or water. Often combined with other respiratory herbs.",
    "diseases": [
      "Cough",
      "Bronchitis"
    ],
    "bodySystems": [
      "Respiratory"
    ],
    "preparation": "Juice, Powder\nJuice: Extract from young shoots. Powder: Can be taken with honey or water. Often combined with other respiratory herbs.",
    "dosage": "Juice: 10–20 ml/day\nJuice: 10-20ml, 2 times daily. Powder: 1-2g, 2 times daily. For respiratory: Take with honey.",
    "safety": "Cooling effect\nContraindications: Generally safe. No known serious contraindications. Use standard precautions during pregnancy.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 45,
    "name": "Vasa",
    "latinName": "Adhatoda vasica",
    "description": "Parts Used: Leaves. Juice: Extract from fresh leaves. Powder: Can be taken with honey. Decoction: Boil leaves in water.",
    "diseases": [
      "Asthma",
      "Bronchitis"
    ],
    "bodySystems": [
      "Respiratory"
    ],
    "preparation": "Juice, Powder\nJuice: Extract from fresh leaves. Powder: Can be taken with honey. Decoction: Boil leaves in water.",
    "dosage": "Juice: 5–10 ml/day\nJuice: 5-10ml, 2 times daily. Powder: 1-2g, 2 times daily. For asthma: Take with honey.",
    "safety": "May cause nausea in high doses\nContraindications: Not recommended during pregnancy. May cause nausea in high doses. Use with digestive herbs to reduce side effects.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 46,
    "name": "Vidanga",
    "latinName": "Embelia ribes",
    "description": "Parts Used: Fruit. Powder: Can be taken with honey or warm water. Pills: Professionally prepared. Often combined with other digestive herbs.",
    "diseases": [
      "Worms",
      "Indigestion"
    ],
    "bodySystems": [
      "Digestive"
    ],
    "preparation": "Powder, Pills\nPowder: Can be taken with honey or warm water. Pills: Professionally prepared. Often combined with other digestive herbs.",
    "dosage": "1–3 g/day\nPowder: 1-2g, 2 times daily. For worms: Take for 3-5 days. Repeat after 2 weeks if needed.",
    "safety": "Antiparasitic\nContraindications: Not recommended during pregnancy. For short-term use only. May cause mild digestive discomfort.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 47,
    "name": "Yava",
    "latinName": "Hordeum vulgare",
    "description": "Parts Used: Seeds. Water: Soak 1 tbsp seeds in water overnight. Drink water in morning. Porridge: Cook seeds with water or milk.",
    "diseases": [
      "Obesity",
      "Diabetes"
    ],
    "bodySystems": [
      "Digestive"
    ],
    "preparation": "Water, Porridge\nWater: Soak 1 tbsp seeds in water overnight. Drink water in morning. Porridge: Cook seeds with water or milk.",
    "dosage": "50–100 g/day\nSeeds: 50-100g daily as food. Water: 1 glass daily. For diabetes: Replace regular grains with barley.",
    "safety": "Very safe food-grade\nContraindications: Generally very safe. Rare cases of gluten sensitivity. No known serious contraindications.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 48,
    "name": "Haridra",
    "latinName": "Curcuma longa",
    "description": "Parts Used: Rhizome. Paste: Mix with water or oil. Apply externally. Powder: Can be taken with milk or water. With black pepper for absorption.",
    "diseases": [
      "Arthritis",
      "Wounds"
    ],
    "bodySystems": [
      "Anti-inflammatory"
    ],
    "preparation": "Paste, Powder\nPaste: Mix with water or oil. Apply externally. Powder: Can be taken with milk or water. With black pepper for absorption.",
    "dosage": "1–3 g/day\nPowder: 1-2g, 2 times daily. With black pepper for enhanced absorption. For wounds: Apply paste directly.",
    "safety": "Safe even in high doses\nContraindications: May cause gallbladder contractions. Avoid if you have gallstones. High doses may interact with blood thinners.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 49,
    "name": "Jambu",
    "latinName": "Syzygium cumini",
    "description": "Parts Used: Seeds, Fruit. Seed powder: Dry and powder seeds. Take with water. Fruit: Eat fresh or as juice. Both effective for diabetes.",
    "diseases": [
      "Diabetes",
      "Diarrhea"
    ],
    "bodySystems": [
      "Metabolic"
    ],
    "preparation": "Powder, Juice\nSeed powder: Dry and powder seeds. Take with water. Fruit: Eat fresh or as juice. Both effective for diabetes.",
    "dosage": "Seed powder: 3–6 g/day\nSeed powder: 1-2g, 2-3 times daily. Fruit: 50-100g daily. Juice: 50ml twice daily. For diabetes: Take before meals.",
    "safety": "Astringent effect\nContraindications: May significantly lower blood sugar. Monitor closely if taking diabetes medications. Seeds may cause constipation in excess.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  },
  {
    "id": 50,
    "name": "Kumari",
    "latinName": "Aloe vera",
    "description": "Parts Used: Gel, Latex. Gel: Extract fresh gel from leaves. Apply externally. Juice: Professional preparation only. Latex: Strong purgative - use with caution.",
    "diseases": [
      "Constipation",
      "Burns"
    ],
    "bodySystems": [
      "Digestive",
      "Skin"
    ],
    "preparation": "Gel, Juice\nGel: Extract fresh gel from leaves. Apply externally. Juice: Professional preparation only. Latex: Strong purgative - use with caution.",
    "dosage": "Juice: 10–20 ml/day\nJuice: 10-20ml daily. Gel: External application as needed. Latex: Only under professional guidance.",
    "safety": "Latex is purgative; use gel externally\nContraindications: Not recommended during pregnancy. Latex is strong purgative - avoid self-medication. May interact with diabetes medications.",
    "image": "https://via.placeholder.com/600x400/e2e8f0/475569?text=No+Image+Available"
  }
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const voiceSearchBtn = document.getElementById('voiceSearchBtn');
const themeToggle = document.getElementById('themeToggle');
const filterTabs = document.querySelectorAll('.filter-tab');
const favoritesBtn = document.getElementById('favoritesBtn');
const bodySystemsToggle = document.querySelector('.body-systems-toggle');
const bodySystemsMenu = document.querySelector('.body-systems-menu');
const bodySystemOptions = document.querySelectorAll('.body-system-option');
const resetBtn = document.getElementById('resetBtn');
const resultsGrid = document.getElementById('resultsGrid');
const plantModal = document.getElementById('plantModal');
const closeModal = document.querySelector('.close-modal');
const profileDropdown = document.querySelector('.profile-dropdown');
const profileBtn = document.querySelector('.profile-btn');
const curtain = document.querySelector('.curtain');

// State variables
let currentFilter = 'all';
let currentSystem = 'all';
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let isDarkMode = localStorage.getItem('darkMode') !== 'false'; // Default to true

// Initialize the app
function init() {
  renderPlants();
  setupEventListeners();
  applyTheme();
  updateClearButton();
}

// Set up event listeners
function setupEventListeners() {
  searchInput.addEventListener('input', handleSearch);
  clearSearchBtn.addEventListener('click', clearSearch);
  voiceSearchBtn.addEventListener('click', startVoiceSearch);
  themeToggle.addEventListener('click', toggleTheme);

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      currentFilter = tab.dataset.filter;
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderPlants();
    });
  });

  favoritesBtn.addEventListener('click', toggleFavoritesView);

  bodySystemsToggle.addEventListener('click', () => {
    bodySystemsMenu.classList.toggle('active');
    bodySystemsToggle.classList.toggle('active');
  });

  bodySystemOptions.forEach(option => {
    option.addEventListener('click', () => {
      currentSystem = option.dataset.system;
      bodySystemOptions.forEach(o => o.classList.remove('selected'));
      option.classList.add('selected');
      bodySystemsToggle.textContent = option.textContent;
      bodySystemsMenu.classList.remove('active');
      bodySystemsToggle.classList.remove('active');
      renderPlants();
    });
  });

  resetBtn.addEventListener('click', resetFilters);

  closeModal.addEventListener('click', () => {
    plantModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === plantModal) {
      plantModal.style.display = 'none';
    }

    // Close dropdowns if clicked outside
    if (!profileBtn.contains(e.target)) {
      profileDropdown.classList.remove('active');
    }

    if (!bodySystemsToggle.contains(e.target) && !bodySystemsMenu.contains(e.target)) {
      bodySystemsMenu.classList.remove('active');
      bodySystemsToggle.classList.remove('active');
    }
  });

  profileBtn.addEventListener('click', () => {
    profileDropdown.classList.toggle('active');
  });

  // Header scroll effect
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header-sticky');
    const brand = document.querySelector('.brand');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      brand.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
      brand.classList.remove('scrolled');
    }
  });
}

// Render plants based on current filters
function renderPlants() {
  const searchTerm = searchInput.value.toLowerCase();
  resultsGrid.innerHTML = '';

  let filteredPlants = plants;

  // Apply search filter
  if (searchTerm) {
    if (currentFilter === 'all') {
      filteredPlants = plants.filter(plant =>
        plant.name.toLowerCase().includes(searchTerm) ||
        plant.latinName.toLowerCase().includes(searchTerm) ||
        plant.diseases.some(d => d.toLowerCase().includes(searchTerm))
      );
    } else if (currentFilter === 'disease') {
      filteredPlants = plants.filter(plant =>
        plant.diseases.some(d => d.toLowerCase().includes(searchTerm))
      );
    }
  }

  // Apply body system filter
  if (currentSystem !== 'all') {
    filteredPlants = filteredPlants.filter(plant =>
      plant.bodySystems.includes(currentSystem)
    );
  }

  // Show message if no plants match
  if (filteredPlants.length === 0) {
    resultsGrid.innerHTML = `
      <div class="placeholder">
        <i class="fas fa-seedling"></i>
        <h3>No plants found</h3>
        <p>Try adjusting your search or filters</p>
      </div>
    `;
    return;
  }

  // Render plant cards
  filteredPlants.forEach(plant => {
    const isFavorite = favorites.includes(plant.id);
    const card = document.createElement('div');
    card.className = 'plant-card';
    card.innerHTML = `
      <div class="card-image" style="background-image: url('${plant.image}')">
        <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-id="${plant.id}">
          <i class="fas fa-heart"></i>
        </button>
      </div>
      <div class="card-body">
        <h3>${plant.name}</h3>
        <p class="latin-name">${plant.latinName}</p>
        <div class="card-diseases">
          ${plant.diseases.slice(0, 3).map(disease =>
      `<span class="disease-tag">${disease}</span>`
    ).join('')}
          ${plant.diseases.length > 3 ? `<span class="disease-tag">+${plant.diseases.length - 3} more</span>` : ''}
        </div>
      </div>
      <div class="card-footer">
        <span>${plant.bodySystems.join(', ')}</span>
        <a href="#" class="view-details" data-id="${plant.id}">
          View Details <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    `;
    resultsGrid.appendChild(card);

    // Add event listeners to the new card
    const favoriteBtn = card.querySelector('.favorite-btn');
    const viewDetailsBtn = card.querySelector('.view-details');

    favoriteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavorite(plant.id);
    });

    viewDetailsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showPlantDetails(plant.id);
    });

    card.addEventListener('click', () => {
      showPlantDetails(plant.id);
    });
  });
}

// Handle search input
function handleSearch() {
  updateClearButton();
  renderPlants();
}

// Update clear button visibility
function updateClearButton() {
  if (searchInput.value) {
    clearSearchBtn.classList.add('visible');
  } else {
    clearSearchBtn.classList.remove('visible');
  }
}

// Clear search input
function clearSearch() {
  searchInput.value = '';
  updateClearButton();
  renderPlants();
}

// Start voice search
function startVoiceSearch() {
  if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      voiceSearchBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>';
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      searchInput.value = transcript;
      updateClearButton();
      renderPlants();
    };

    recognition.onerror = () => {
      voiceSearchBtn.innerHTML = '<i class="fas fa-microphone"></i>';
      alert('Voice recognition failed. Please try again.');
    };

    recognition.onend = () => {
      voiceSearchBtn.innerHTML = '<i class="fas fa-microphone"></i>';
    };

    recognition.start();
  } else {
    alert('Voice search is not supported in your browser.');
  }
}

// Toggle theme
function toggleTheme() {
  isDarkMode = !isDarkMode;
  localStorage.setItem('darkMode', isDarkMode);

  // Show curtain for smooth transition
  curtain.classList.add('animate');
  curtain.classList.add(isDarkMode ? 'dark' : 'light');

  setTimeout(() => {
    applyTheme();

    setTimeout(() => {
      curtain.classList.remove('animate');
      curtain.classList.remove('dark', 'light');
    }, 600);
  }, 50);
}

// Apply theme
function applyTheme() {
  if (isDarkMode) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    document.documentElement.removeAttribute('data-theme');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
}

// Toggle favorite
function toggleFavorite(plantId) {
  if (favorites.includes(plantId)) {
    favorites = favorites.filter(id => id !== plantId);
  } else {
    favorites.push(plantId);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
  renderPlants();
}

// Toggle favorites view
function toggleFavoritesView() {
  if (favoritesBtn.classList.contains('active')) {
    favoritesBtn.classList.remove('active');
    renderPlants();
  } else {
    favoritesBtn.classList.add('active');
    showOnlyFavorites();
  }
}

// Show only favorites
function showOnlyFavorites() {
  if (favorites.length === 0) {
    resultsGrid.innerHTML = `
      <div class="placeholder">
        <i class="fas fa-heart"></i>
        <h3>No favorites yet</h3>
        <p>Click the heart icon on any plant to add it to favorites</p>
      </div>
    `;
    return;
  }

  const filteredPlants = plants.filter(plant => favorites.includes(plant.id));
  resultsGrid.innerHTML = '';

  filteredPlants.forEach(plant => {
    const card = document.createElement('div');
    card.className = 'plant-card';
    card.innerHTML = `
      <div class="card-image" style="background-image: url('${plant.image}')">
        <button class="favorite-btn active" data-id="${plant.id}">
          <i class="fas fa-heart"></i>
        </button>
      </div>
      <div class="card-body">
        <h3>${plant.name}</h3>
        <p class="latin-name">${plant.latinName}</p>
        <div class="card-diseases">
          ${plant.diseases.slice(0, 3).map(disease =>
      `<span class="disease-tag">${disease}</span>`
    ).join('')}
          ${plant.diseases.length > 3 ? `<span class="disease-tag">+${plant.diseases.length - 3} more</span>` : ''}
        </div>
      </div>
      <div class="card-footer">
        <span>${plant.bodySystems.join(', ')}</span>
        <a href="#" class="view-details" data-id="${plant.id}">
          View Details <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    `;
    resultsGrid.appendChild(card);

    const favoriteBtn = card.querySelector('.favorite-btn');
    const viewDetailsBtn = card.querySelector('.view-details');

    favoriteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavorite(plant.id);
    });

    viewDetailsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showPlantDetails(plant.id);
    });

    card.addEventListener('click', () => {
      showPlantDetails(plant.id);
    });
  });
}

// Reset all filters
function resetFilters() {
  searchInput.value = '';
  currentFilter = 'all';
  currentSystem = 'all';
  favoritesBtn.classList.remove('active');

  filterTabs.forEach(tab => {
    tab.classList.remove('active');
    if (tab.dataset.filter === 'all') {
      tab.classList.add('active');
    }
  });

  bodySystemOptions.forEach(option => {
    option.classList.remove('selected');
    if (option.dataset.system === 'all') {
      option.classList.add('selected');
    }
  });

  bodySystemsToggle.textContent = 'All Body Systems';
  updateClearButton();
  renderPlants();
}

// Show plant details in modal
function showPlantDetails(plantId) {
  const plant = plants.find(p => p.id === plantId);
  if (!plant) return;

  document.getElementById('modalTitle').textContent = plant.name;
  document.getElementById('modalLatinName').textContent = plant.latinName;
  document.getElementById('modalDescription').textContent = plant.description;
  document.getElementById('modalPreparation').textContent = plant.preparation;
  document.getElementById('modalDosage').textContent = plant.dosage;
  document.getElementById('modalSafety').textContent = plant.safety;

  const modalImage = document.getElementById('modalImage');
  modalImage.style.backgroundImage = `url('${plant.image}')`;

  const diseasesList = document.getElementById('modalDiseases');
  diseasesList.innerHTML = '';
  plant.diseases.forEach(disease => {
    const li = document.createElement('li');
    li.textContent = disease;
    diseasesList.appendChild(li);
  });

  plantModal.style.display = 'block';
}

// Initialize the app
init();

// Enhanced Chatbot functionality
const chatbotButton = document.getElementById('chatbotButton');
const chatbotWindow = document.getElementById('chatbotWindow');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotMessages = document.getElementById('chatbotMessages');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotSend = document.getElementById('chatbotSend');

// Toggle chatbot window
chatbotButton.addEventListener('click', () => {
  chatbotWindow.classList.toggle('active');
});

chatbotClose.addEventListener('click', () => {
  chatbotWindow.classList.remove('active');
});

// Send message function
function sendMessage() {
  const message = chatbotInput.value.trim();
  if (message === '') return;

  // Add user message to chat
  addMessage(message, 'user');
  chatbotInput.value = '';

  // Process message and generate response
  setTimeout(() => {
    generateResponse(message);
  }, 500);
}

// Add message to chat
function addMessage(text, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
  messageElement.textContent = text;
  chatbotMessages.appendChild(messageElement);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Show typing indicator
function showTypingIndicator() {
  const typingElement = document.createElement('div');
  typingElement.classList.add('typing-indicator');
  typingElement.id = 'typingIndicator';
  typingElement.innerHTML = `
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
  `;
  chatbotMessages.appendChild(typingElement);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Hide typing indicator
function hideTypingIndicator() {
  const typingIndicator = document.getElementById('typingIndicator');
  if (typingIndicator) {
    typingIndicator.remove();
  }
}

// Find plants by name or latin name
function findPlantsByKeyword(keyword) {
  return plants.filter(plant =>
    plant.name.toLowerCase().includes(keyword) ||
    plant.latinName.toLowerCase().includes(keyword)
  );
}

// Find plants that treat a specific condition
function findPlantsForCondition(condition) {
  return plants.filter(plant =>
    plant.diseases.some(disease =>
      disease.toLowerCase().includes(condition)
    )
  );
}

// Find plants for a body system
function findPlantsForBodySystem(system) {
  return plants.filter(plant =>
    plant.bodySystems.some(bodySystem =>
      bodySystem.toLowerCase().includes(system)
    )
  );
}

// Get all unique body systems from plants
function getAllBodySystems() {
  const allSystems = new Set();
  plants.forEach(plant => {
    plant.bodySystems.forEach(system => allSystems.add(system));
  });
  return Array.from(allSystems);
}

// Get all unique diseases from plants
function getAllDiseases() {
  const allDiseases = new Set();
  plants.forEach(plant => {
    plant.diseases.forEach(disease => allDiseases.add(disease));
  });
  return Array.from(allDiseases);
}

// Generate response based on user input
function generateResponse(userInput) {
  showTypingIndicator();

  setTimeout(() => {
    hideTypingIndicator();

    const input = userInput.toLowerCase();
    let response = '';

    // Check for greetings
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      response = "Hello! I'm AyurBot, your Ayurvedic assistant. I can help you find information about plants, their uses, and which conditions they treat. How can I help you today?";
    }
    // Check for farewell
    else if (input.includes('bye') || input.includes('goodbye') || input.includes('see you')) {
      response = "Goodbye! Feel free to return if you have more questions about Ayurvedic plants.";
    }
    // Check for thanks
    else if (input.includes('thank') || input.includes('thanks')) {
      response = "You're welcome! Is there anything else you'd like to know about Ayurvedic plants?";
    }
    // Check for help
    else if (input.includes('help') || input.includes('what can you do')) {
      response = "I can help you find information about Ayurvedic plants and their uses. You can ask me about:\n- Specific plants (e.g., 'Tell me about Ashwagandha')\n- Conditions (e.g., 'What helps with stress?')\n- Body systems (e.g., 'Plants for digestive system')\n- List all available plants\n- List all body systems\n- List all conditions treated";
    }
    // List all plants
    else if (input.includes('list all plants') || input.includes('all plants') || input.includes('what plants do you have')) {
      const plantNames = plants.map(plant => plant.name).join(', ');
      response = `We have information about these Ayurvedic plants: ${plantNames}. Would you like to know more about any specific plant?`;
    }
    // List all body systems
    else if (input.includes('list all body systems') || input.includes('all body systems') || input.includes('what body systems')) {
      const bodySystems = getAllBodySystems().join(', ');
      response = `The body systems covered in our plant database are: ${bodySystems}. You can ask about plants for any of these systems.`;
    }
    // List all diseases/conditions
    else if (input.includes('list all conditions') || input.includes('all conditions') || input.includes('what conditions')) {
      const diseases = getAllDiseases().join(', ');
      response = `Our plants can help with these conditions: ${diseases}. You can ask which plants help with any specific condition.`;
    }
    // Check for plant information
    else if (input.includes('plant') || input.includes('herb') || input.includes('about')) {
      const foundPlants = plants.filter(plant =>
        input.includes(plant.name.toLowerCase()) || input.includes(plant.latinName.toLowerCase())
      );

      if (foundPlants.length > 0) {
        const p = foundPlants[0];
        response = `**${p.name} (${p.latinName})**\n\n**About:** ${p.description}\n\n**Treated Conditions:** ${p.diseases.join(', ')}\n\n**Preparation & Usage:** ${p.preparation}\n\n**Dosage:** ${p.dosage}\n\n**Safety Info:** ${p.safety}`;
        if (foundPlants.length > 1) {
          response += `\n\nI also found info on ${foundPlants.slice(1).map(x => x.name).join(', ')}.`;
        }
      } else {
        response = "I can tell you about various Ayurvedic plants. Which one are you interested in? You can ask about Ashwagandha, Turmeric, Tulsi, etc.";
      }
    }
    // Check for disease information
    else if (input.includes('disease') || input.includes('condition') || input.includes('help with') || input.includes('treat') || input.includes('for')) {
      const allDiseases = getAllDiseases();
      let mentionedDisease = allDiseases.find(d => input.includes(d.toLowerCase()));

      if (mentionedDisease) {
        const plantsForDisease = findPlantsForCondition(mentionedDisease.toLowerCase());
        if (plantsForDisease.length > 0) {
          response = `For **${mentionedDisease}**, Ayurveda recommends:\n\n` + plantsForDisease.map(p => `- **${p.name}**: ${p.description.substring(0, 80)}...`).join('\n') + `\n\nAsk me about any of these plants for preparation, dosage, and safety instructions!`;
        } else {
          response = "I couldn't find plants specifically for that condition in my current database.";
        }
      } else {
        const bodySystems = getAllBodySystems();
        let mentionedSystem = bodySystems.find(s => input.includes(s.toLowerCase()));

        if (mentionedSystem) {
          const plantsForSystem = findPlantsForBodySystem(mentionedSystem.toLowerCase());
          if (plantsForSystem.length > 0) {
            response = `For the **${mentionedSystem}**, Ayurveda recommends:\n\n` + plantsForSystem.map(p => `- **${p.name}**`).join('\n') + `\n\nWould you like more details about any of these?`;
          } else {
            response = "I don't have information on that specific body system.";
          }
        } else {
          response = "What specific condition or body system are you interested in? For example, 'What plants help with diabetes?'";
        }
      }
    }
    // Default response - search generically
    else {
      const foundPlants = plants.filter(plant =>
        input.includes(plant.name.toLowerCase()) || input.includes(plant.latinName.toLowerCase())
      );

      if (foundPlants.length > 0) {
        const p = foundPlants[0];
        response = `**${p.name} (${p.latinName})**\n\n**About:** ${p.description}\n\n**Treated Conditions:** ${p.diseases.join(', ')}\n\n**Preparation:** ${p.preparation}\n\n**Dosage:** ${p.dosage}\n\n**Safety:** ${p.safety}`;
      } else {
        const allDiseases = getAllDiseases();
        const foundDiseases = allDiseases.filter(d => input.includes(d.toLowerCase()));

        if (foundDiseases.length > 0) {
          const plantsForDisease = findPlantsForCondition(foundDiseases[0].toLowerCase());
          response = `For **${foundDiseases[0]}**, Ayurveda recommends:\n` + plantsForDisease.map(p => `- ${p.name}`).join('\n') + `\n\nAsk me about any of these for full details including dosage and preparation.`;
        } else {
          response = "I'm here to help you learn about Ayurvedic plants! Try asking 'Tell me about Ashwagandha' or 'What helps with stress?'";
        }
      }
    }

    addMessage(response, 'bot');
  }, 1000 + Math.random() * 1000); // Random delay to simulate thinking
}

// Event listeners for sending messages
chatbotSend.addEventListener('click', sendMessage);

chatbotInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

// Initialize the chatbot with a welcome message after a short delay
setTimeout(() => {
  addMessage("Need help finding information about Ayurvedic plants? I'm here to assist you! Try asking about a specific plant or condition.", 'bot');
}, 1500);

// Logout functionality
function handleLogout() {
  // Clear user data from localStorage if needed
  localStorage.removeItem('userToken'); // Example - adjust based on your auth implementation
  localStorage.removeItem('userData'); // Example - adjust based on your auth implementation

  // Redirect to login page
  window.location.href = 'Log-Reg.html'; // Change to your actual login page URL
}

// Add event listener to logout button
document.addEventListener('DOMContentLoaded', function () {
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', handleLogout);
  }
});