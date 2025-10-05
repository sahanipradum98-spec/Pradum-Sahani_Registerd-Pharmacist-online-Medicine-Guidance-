/* medicines.js
   Defines window-level `medicinesDB` used by index.html search.
   Each key is a short id (lowercase) and each value is an object:
   { displayName, salt, dose, uses, company, mrp, img }
*/

var medicinesDB = {
  /* Analgesics / Antipyretics */
  "crocin": { displayName:"Crocin Advance 500mg", salt:"Paracetamol", dose:"500 mg", uses:"Fever, pain relief", company:"GSK", mrp:"₹40 (strip)", img:"https://www.netmeds.com/images/product-v1/600x600/835003/crocin_advance_500mg_tablet_15s_0.jpg" },
  "dolo": { displayName:"Dolo 650", salt:"Paracetamol", dose:"650 mg", uses:"Fever, headache, body pain", company:"Micro Labs", mrp:"₹30 (strip)", img:"https://www.netmeds.com/images/product-v1/600x600/821887/dolo_650mg_tablet_15s_0.jpg" },
  "paracetamol": { displayName:"Paracetamol 500 mg", salt:"Paracetamol", dose:"500 mg", uses:"Fever, pain", company:"Cadila", mrp:"₹20 (strip)", img:"https://via.placeholder.com/200x120?text=Paracetamol" },

  /* Antibiotics */
  "augmentin": { displayName:"Augmentin 625", salt:"Amoxicillin + Clavulanic Acid", dose:"625 mg", uses:"Bacterial infections", company:"GSK", mrp:"₹180 (strip)", img:"https://www.netmeds.com/images/product-v1/600x600/104435/augmentin_625mg_tablet_10s_0.jpg" },
  "azithral": { displayName:"Azithral 500", salt:"Azithromycin", dose:"500 mg", uses:"Respiratory & skin infections", company:"Cipla", mrp:"₹120 (strip)", img:"https://www.netmeds.com/images/product-v1/600x600/359459/azithral_500mg_tablet_5s_0.jpg" },
  "amoxicillin": { displayName:"Amoxicillin 500 mg", salt:"Amoxicillin", dose:"500 mg", uses:"Bacterial infections", company:"Generic", mrp:"₹60 (strip)", img:"https://via.placeholder.com/200x120?text=Amoxicillin" },

  /* GI / PPI */
  "pantoprazole": { displayName:"Pantoprazole 40 mg", salt:"Pantoprazole", dose:"40 mg", uses:"GERD, acidity", company:"Sun Pharma", mrp:"₹45 (strip)", img:"https://via.placeholder.com/200x120?text=Pantoprazole" },
  "omeprazole": { displayName:"Omeprazole 20 mg", salt:"Omeprazole", dose:"20 mg", uses:"Gastric acid, ulcers", company:"Ranbaxy", mrp:"₹25 (strip)", img:"https://via.placeholder.com/200x120?text=Omeprazole" },

  /* Diabetes */
  "metformin": { displayName:"Metformin 500 mg", salt:"Metformin HCl", dose:"500 mg", uses:"Type 2 Diabetes", company:"Lupin", mrp:"₹50 (strip)", img:"https://via.placeholder.com/200x120?text=Metformin" },
  "glimepiride": { displayName:"Glimar 4 (Glimepiride)", salt:"Glimepiride", dose:"4 mg", uses:"Type 2 Diabetes", company:"Glenmark", mrp:"₹40 (strip)", img:"https://via.placeholder.com/200x120?text=Glimepiride" },
  "sitagliptin": { displayName:"Sitagliptin 100 mg", salt:"Sitagliptin", dose:"100 mg", uses:"Type 2 Diabetes", company:"Merck", mrp:"₹120 (strip)", img:"https://via.placeholder.com/200x120?text=Sitagliptin" },

  /* Cardiac / Cholesterol */
  "atorvastatin": { displayName:"Atorvastatin 10 mg", salt:"Atorvastatin", dose:"10 mg", uses:"Cholesterol lowering", company:"Pfizer", mrp:"₹60 (strip)", img:"https://via.placeholder.com/200x120?text=Atorvastatin" },
  "rosuvastatin": { displayName:"Rosuvastatin 10 mg", salt:"Rosuvastatin", dose:"10 mg", uses:"Cholesterol lowering", company:"Cipla", mrp:"₹80 (strip)", img:"https://via.placeholder.com/200x120?text=Rosuvastatin" },
  "ecosprin": { displayName:"Ecosprin 75", salt:"Aspirin", dose:"75 mg", uses:"Blood thinner, cardio protection", company:"Bayer", mrp:"₹20 (strip)", img:"https://via.placeholder.com/200x120?text=Ecosprin" },

  /* Hypertension */
  "losartan": { displayName:"Losartan 50 mg", salt:"Losartan", dose:"50 mg", uses:"High blood pressure", company:"Torrent", mrp:"₹55 (strip)", img:"https://via.placeholder.com/200x120?text=Losartan" },
  "amlodipine": { displayName:"Amlodipine 5 mg", salt:"Amlodipine", dose:"5 mg", uses:"High blood pressure", company:"Pfizer", mrp:"₹40 (strip)", img:"https://via.placeholder.com/200x120?text=Amlodipine" },

  /* Respiratory */
  "salbutamol": { displayName:"Salbutamol Inhaler 100 mcg", salt:"Salbutamol", dose:"100 mcg", uses:"Relief in asthma, wheezing", company:"Cipla", mrp:"₹120 (inhaler)", img:"https://via.placeholder.com/200x120?text=Salbutamol" },
  "montelukast": { displayName:"Montelukast 10 mg", salt:"Montelukast", dose:"10 mg", uses:"Asthma, allergy", company:"Generic", mrp:"₹35 (strip)", img:"https://via.placeholder.com/200x120?text=Montelukast" },

  /* Thyroid */
  "levothyroxine": { displayName:"Levothyroxine 50 mcg", salt:"Levothyroxine", dose:"50 mcg", uses:"Hypothyroidism", company:"Generic", mrp:"₹40 (strip)", img:"https://via.placeholder.com/200x120?text=Levothyroxine" },

  /* GI / antiemetic */
  "domperidone": { displayName:"Domperidone 10 mg", salt:"Domperidone", dose:"10 mg", uses:"Nausea, vomiting", company:"Torrent", mrp:"₹35 (strip)", img:"https://via.placeholder.com/200x120?text=Domperidone" },

  /* Pain/Inflammation */
  "ibuprofen": { displayName:"Ibuprofen 400 mg", salt:"Ibuprofen", dose:"400 mg", uses:"Pain, inflammation", company:"Abbott", mrp:"₹45 (strip)", img:"https://via.placeholder.com/200x120?text=Ibuprofen" },
  "diclofenac": { displayName:"Diclofenac 50 mg", salt:"Diclofenac", dose:"50 mg", uses:"Pain, inflammation", company:"Novartis", mrp:"₹30 (strip)", img:"https://via.placeholder.com/200x120?text=Diclofenac" },

  /* Antifungal / Topical */
  "clotrimazole": { displayName:"Clotrimazole Cream 1%", salt:"Clotrimazole", dose:"1%", uses:"Topical fungal infections", company:"Generic", mrp:"₹60 (tube)", img:"https://via.placeholder.com/200x120?text=Clotrimazole" },

  /* Vitamins & Supplements */
  "vitamin_d3": { displayName:"Vitamin D3 60k", salt:"Cholecalciferol", dose:"60,000 IU", uses:"Vitamin D deficiency", company:"Zydus", mrp:"₹80 (1 vial)", img:"https://via.placeholder.com/200x120?text=VitD3" },
  "iron_supplement": { displayName:"Iron + Folic Acid", salt:"Ferrous sulphate", dose:"100 mg", uses:"Anaemia", company:"Generic", mrp:"₹50 (strip)", img:"https://via.placeholder.com/200x120?text=Iron" },

  /* Misc commonly used */
  "loperamide": { displayName:"Loperamide 2 mg", salt:"Loperamide", dose:"2 mg", uses:"Diarrhea control", company:"Generic", mrp:"₹30 (strip)", img:"https://via.placeholder.com/200x120?text=Loperamide" },
  "paracetamol_syrup": { displayName:"Paracetamol Syrup 125 mg/5ml", salt:"Paracetamol", dose:"125 mg/5ml", uses:"Pediatric fever & pain", company:"GSK", mrp:"₹45 (100 ml)", img:"https://via.placeholder.com/200x120?text=Paracetamol+Syrup" },

  /* Add more entries following the same format */
  "ciprofloxacin": { displayName:"Ciprofloxacin 500 mg", salt:"Ciprofloxacin", dose:"500 mg", uses:"Bacterial infections", company:"Cipla", mrp:"₹70 (strip)", img:"https://via.placeholder.com/200x120?text=Ciprofloxacin" },
  "clopidogrel": { displayName:"Clopidogrel 75 mg", salt:"Clopidogrel", dose:"75 mg", uses:"Prevents blood clots", company:"Cipla", mrp:"₹150 (strip)", img:"https://via.placeholder.com/200x120?text=Clopidogrel" },
  "ranitidine": { displayName:"Ranitidine 150 mg", salt:"Ranitidine", dose:"150 mg", uses:"Acidity & heartburn", company:"Zydus", mrp:"₹25 (strip)", img:"https://via.placeholder.com/200x120?text=Ranitidine" },
  "omeprazole_capsule": { displayName:"Omeprazole Capsule 20 mg", salt:"Omeprazole", dose:"20 mg", uses:"GERD", company:"Ranbaxy", mrp:"₹30 (strip)", img:"https://via.placeholder.com/200x120?text=Omeprazole+Cap" },
  "saline_drops": { displayName:"Saline Nasal Drops", salt:"Sodium Chloride", dose:"0.9%", uses:"Nasal hydration", company:"Generic", mrp:"₹60 (bottle)", img:"https://via.placeholder.com/200x120?text=Saline" },
  "azithromycin_250": { displayName:"Azithromycin 250 mg", salt:"Azithromycin", dose:"250 mg", uses:"Infections", company:"Zydus", mrp:"₹90 (strip)", img:"https://via.placeholder.com/200x120?text=Azithromycin+250" }
};

/* Export for compatibility (some environments) */
if(typeof window !== 'undefined') window.medicinesDB = medicinesDB;
