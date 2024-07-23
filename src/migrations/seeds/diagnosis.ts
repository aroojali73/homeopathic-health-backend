import { ConditionDiagnosis } from '../../repositories';

export const DiagnosisData: ConditionDiagnosis[] = [
    {
        Condition: 'Abdomen',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Stone like feeling within your abdomen?',
                Medication: ['Bryonia'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Flatulence feeling in the upper part of your body?',
                Medication: ['Carbo Veg'],
                Dosage: '30',
            },
            {
                Key: 3,
                Question: 'Flatulence feeling in the middle part of your body?',
                Medication: ['Lycopodium'],
                Dosage: '30',
            },
            {
                Key: 4,
                Question: 'Flatulence feeling throughout your body?',
                Medication: ['China'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Abscesses',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Piercing pain?',
                Medication: ['Hepar Sulf'],
                Dosage: '200',
            },
            {
                Key: 2,
                Question: 'Abscesses within your mouth?',
                Medication: ['Merc. Sol'],
                Dosage: '30',
            },
            {
                Key: 3,
                Question: 'Deep rooted abscesses?',
                Medication: ['Silicea'],
                Dosage: '200',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Acidity',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Due to stress?',
                Medication: ['Argentum Nit'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Sour taste within your mouth?',
                Medication: ['Carbo Veg'],
                Dosage: '30',
            },
            {
                Key: 3,
                Question: 'Severe heartburn which gets worse from cold food/drinks?',
                Medication: ['Natrum Phos'],
                Dosage: '200',
            },
            {
                Key: 4,
                Question: 'Persistence of Severe heartburn with Lycopodium which gets worse from cold food/drinks?',
                Medication: ['Natrum Phos'],
                Dosage: '200',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Adenoids',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Obstructions of nostrils/ Enlarged tonsils?',
                Medication: ['Agraphis Nut'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Subject to colds?',
                Medication: ['Calcarea Iod'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Acne',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Pustules?',
                Medication: ['Hepar Sulf'],
                Dosage: '200',
            },
            {
                Key: 2,
                Question: 'With Scarring?',
                Medication: ['Kali Bromatum Silicea'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Allergies',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Dust/Dust Mites?',
                Medication: ['Sulphur'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Sun/Heat?',
                Medication: ['Golonine'],
                Dosage: '30',
            },
            {
                Key: 3,
                Question: 'Hair Dye?',
                Medication: ['Belladona / Rhus. Tox'],
                Dosage: '30',
            },
            {
                Key: 4,
                Question: 'Petroleum Products?',
                Medication: ['Petroleum'],
                Dosage: '30',
            },
            {
                Key: 5,
                Question: 'Milk/Milk Products?',
                Medication: ['Lac Defloratum'],
                Dosage: '30',
            },
            {
                Key: 6,
                Question: 'Eggs/Egg Products?',
                Medication: ['Calcarea Carb'],
                Dosage: '30',
            },
            {
                Key: 7,
                Question: '(Spring) Sneezing, Runny Nose, Eyes?',
                Medication: ['Euphrasia, Sabadilla, Lachesis'],
                Dosage: '30',
            },
            {
                Key: 8,
                Question: '(Autumn) Sneezing, Runny Nose, Eyes?',
                Medication: ['Allum Cepa'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Angina Pectoris',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Severe pain in the region of heart, radiating to left shoulder?',
                Medication: ['Arnica'],
                Dosage: '200',
            },
            {
                Key: 2,
                Question: 'Acute pain with feeling of constriction?',
                Medication: ['Cactus M.T.'],
                Dosage: 'Cx1',
            },
            {
                Key: 3,
                Question: 'Pulse feeble and rapid?',
                Medication: ['Latrodectus Mac.'],
                Dosage: '30',
            },
            {
                Key: 4,
                Question: 'Whole left side sore; violent palpitation?',
                Medication: ['Spigelia'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Anti Biotic',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Combination serves as Homeo Antibiotic',
                Medication: ['Sulfar', 'Pyroginium'],
                Dosage: '200',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Apathe',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Painful blisters in the mouth?',
                Medication: ['Borax'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Blisters with foul breath?',
                Medication: ['Merc. Sol.'],
                Dosage: '30',
            },
            {
                Key: 3,
                Question: 'Blisters or wounds in mouth?',
                Medication: ['Nitric Acid', 'Kali Mur'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Arthritis',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Continuous pain by walking, joints inflamed, red, hot, stiffness?',
                Medication: ['Arnica'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Painful, temporary relief on movement?',
                Medication: ['Rhus Tox'],
                Dosage: '200',
            },
            {
                Key: 3,
                Question: 'Chronic, paralytic affliction?',
                Medication: ['Causticum'],
                Dosage: '30',
            },
            {
                Key: 4,
                Question: 'Shooting pain in knee?',
                Medication: ['Sticta'],
                Dosage: '30',
            },
            {
                Key: 5,
                Question: 'Swelling of Knee; painful when flexed?',
                Medication: ['Cocculus'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Asthma',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Sudden violent attack?',
                Medication: ['Aconite'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Severe wheezing, incessant cough?',
                Medication: ['Ipecac', 'Kali Phos', 'Carbo Veg', 'Arsenic - Alb'],
                Dosage: '30',
            },
            {
                Key: 3,
                Question: 'With tenacious mucus?',
                Medication: ['Anti. Tart.'],
                Dosage: '30',
            },
            {
                Key: 4,
                Question: 'Feeling of severe suffocation?',
                Medication: ['Hydrocynic Acid', 'Hydrophobinum'],
                Dosage: '200',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Backache',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Backache with stiffness, pain in the neck, worse on movement?',
                Medication: ['Amica', 'Bryonia'],
                Dosage: '200',
            },
            {
                Key: 2,
                Question: 'Caused by exposure, temporary relief with movement?',
                Medication: ['Rhus Tox'],
                Dosage: '200',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Bad Breath',
        Diagnosis: [
            {
                Key: 1,
                Question: '',
                Medication: ['Merc. Sol.'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Bed Wetting',
        Diagnosis: [
            {
                Key: 1,
                Question: 'During first sleep?',
                Medication: ['Sepia', 'Causticum'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Bites',
        Diagnosis: [
            {
                Key: 1,
                Question: 'By Mad Dogs?',
                Medication: ['Hydrophobinum', 'Stramonium'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'By snakes, scorpions?',
                Medication: ['Arnica', 'Ledum'],
                Dosage: '30',
            },
            {
                Key: 3,
                Question: 'Insects bites or bee stings?',
                Medication: ['Apis'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Bleeding - External',
        Diagnosis: [
            {
                Key: 1,
                Question: 'First remedy when bleeding is on account of injury?',
                Medication: ['Arnica', 'Calendula ointment'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Bleeding - Internal',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Bleeding of dark, clotted blood?',
                Medication: ['Hamamelis'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Bright red blood from any orifice?',
                Medication: ['Millefolium'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Bleeding - Gums',
        Diagnosis: [
            {
                Key: 1,
                Question: 'After tooth extraction?',
                Medication: ['Arnica'],
                Dosage: '200',
            },
            {
                Key: 2,
                Question: 'Gums spongy, swollen and bleeding?',
                Medication: ['Merc. Sol.'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Bleeding - Nose',
        Diagnosis: [
            {
                Key: 1,
                Question: '',
                Medication: ['Millefolium camphor'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Bladder',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Painful or burning?',
                Medication: ['Canthris'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Blisters',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Caused by insect bite?',
                Medication: ['Apis'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Caused by sunburn, fire, scalding liquids, excessive walking?',
                Medication: ['Canthris', 'M.T.'],
                Dosage: 'Cx2',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'B.P. High',
        Diagnosis: [
            {
                Key: 1,
                Question: 'With violent headache and double vision?',
                Medication: ['Aur. Met'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Surging of blood to head and heart, confusion, dizziness, breathlessness?',
                Medication: ['Glonine', 'Belladonna', 'Crategus Q'],
                Dosage: '200',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'B. P. Low',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Low Pulse rate, feeble heart muscle?',
                Medication: ['Caffine'],
                Dosage: '200',
            },
            {
                Key: 2,
                Question: 'Due to continuous sickness and weak digestion?',
                Medication: ['Carbo Veg'],
                Dosage: '200',
            },
            {
                Key: 3,
                Question: 'Due to exhaustive discharges from any part of the body?',
                Medication: ['China'],
                Dosage: '200',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Boils',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Much redness and heat?',
                Medication: ['Belladonna'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Intolerably painful and hot pustules?',
                Medication: ['Hepar Sulf'],
                Dosage: '30',
            },
            {
                Key: 3,
                Question: 'Boil has become cold?',
                Medication: ['Silicea'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Bone Injuries',
        Diagnosis: [
            {
                Key: 1,
                Question: "Fracture's healing is slow?",
                Medication: ['Calcarea Phos Symphytom'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Expedites the healing of fractures?',
                Medication: ['Ruta Gray.'],
                Dosage: '30',
            },
            {
                Key: 3,
                Question: 'Pain in fractured bone?',
                Medication: ['Ruta Grav.'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },

    {
        Condition: 'Bronchitis',
        Diagnosis: [
            {
                Key: 1,
                Question: 'With rattling mucus?',
                Medication: ['Anti. Tart.'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Dry hacking cough?',
                Medication: ['Bryonia'],
                Dosage: '30',
            },
            {
                Key: 3,
                Question: 'Bronchitis of infants?',
                Medication: ['Ipecac'],
                Dosage: '30',
            },
            {
                Key: 4,
                Question: 'With green sputum?',
                Medication: ['Pulsatilla'],
                Dosage: '30',
            },
            {
                Key: 5,
                Question: 'With loss of voice or hoarseness?',
                Medication: ['Phosphorus'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Burns',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Big blisters?',
                Medication: ['Canthris'],
                Dosage: '200',
            },
            {
                Key: 2,
                Question: 'Complete Cure',
                Medication: ['Causticum'],
                Dosage: '200',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Carbuncle',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Extremely painful',
                Medication: ['Hepar Sulf', 'Silicea'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Catarrh',
        Diagnosis: [
            {
                Key: 1,
                Question: 'With thick yellow-green discharge',
                Medication: ['Calc. Flour', 'Nat. Sulf', 'Pulsatilla'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Colds with watering eyes',
                Medication: ['Euphrasia'],
                Dosage: '30',
            },
            {
                Key: 3,
                Question: 'With stringy discharge',
                Medication: ['Kali Bich.'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Chicken Pox',
        Diagnosis: [
            {
                Key: 1,
                Question: 'At the onset of symptoms',
                Medication: ['Rhus Tox'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Chilblains',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Itchy, swollen, painful',
                Medication: ['Apis Mel.'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Burning worse in the heat of bed',
                Medication: ['Pulsatilla'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Cholera',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Yellow, green offensive stools?',
                Medication: ['Podophyllum'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'White and thin motions, cold sweats on face?',
                Medication: ['Ver. Album'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Colic',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Colic with acidity and ulcers',
                Medication: ['Carbo Veg.'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Agonizing cutting pain in abdomen',
                Medication: ['Colocynthis'],
                Dosage: '30',
            },
            {
                Key: 3,
                Question: 'Colic during Cholera',
                Medication: ['Ver. - Alb.'],
                Dosage: '30',
            },
            {
                Key: 4,
                Question: 'Severe colic',
                Medication: ['Kurchi', 'Colocyntis', 'Nux. Vom', 'Dioscorea'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Collapse',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Flatulence',
                Medication: ['Arg. Nit'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'First aid',
                Medication: ['Carbo Veg'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Concentration',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Can not concentrate mind while reading?',
                Medication: ['Apis Mel.'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Conjunctivitis',
        Diagnosis: [
            {
                Key: 1,
                Question: 'With swollen, red and granular lids?',
                Medication: ['Belladonna', 'Apis Mel.'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Acute granular and profuse discharge?',
                Medication: ['Arg. Nit.'],
                Dosage: '30',
            },
            {
                Key: 3,
                Question: 'Discharge from eyes, sticky mucus?',
                Medication: ['Euphrasia'],
                Dosage: '30',
            },
            {
                Key: 4,
                Question: 'Green mucus?',
                Medication: ['Pulsatilla'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Constipation',
        Diagnosis: [
            {
                Key: 1,
                Question: 'No desire, intestinal tract dry?',
                Medication: ['Alumina'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Dry stool, hard as if burnt?',
                Medication: ['Bryonia'],
                Dosage: '30',
            },
            {
                Key: 3,
                Question: 'Obstinate constipation, inside full?',
                Medication: ['Lycopodium'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Cough',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Dry, violent on exposure to cold?',
                Medication: ['Aconite'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Dry Cough?',
                Medication: ['Ipecac', 'Bryonia', 'Arsenic Alb'],
                Dosage: '30',
            },
            {
                Key: 3,
                Question: 'With nausea, wheezing?',
                Medication: ['Ipecac'],
                Dosage: '30',
            },
            {
                Key: 4,
                Question: 'With ripe yellow mucus?',
                Medication: ['Pulsatilla', 'Nat. Sulf'],
                Dosage: '30',
            },
            {
                Key: 5,
                Question: 'Stingy mucus, pain in ears on coughing?',
                Medication: ['Kali Bic.'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Coronary Thrombosis',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Tightness and constriction in chest?',
                Medication: ['Arnica'],
                Dosage: '200',
            },
            {
                Key: 2,
                Question: 'Feeling of numbness in the left arm?',
                Medication: ['Lachesis'],
                Dosage: '200',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Cramp',
        Diagnosis: [
            {
                Key: 1,
                Question: 'In calf muscles?',
                Medication: ['Ars. Alb.'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'In fingers, legs, and toes?',
                Medication: ['Cup. Met.'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Croup',
        Diagnosis: [
            {
                Key: 1,
                Question: 'With spasmodic cough?',
                Medication: ['Calc. Flour.'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Occurs after midnight?',
                Medication: ['Hep. Sulf.', 'Ars. Alb'],
                Dosage: '30',
            },
            {
                Key: 3,
                Question: 'Brought on by fright?',
                Medication: ['Ignatia'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Cuts',
        Diagnosis: [
            {
                Key: 1,
                Question: 'By sharp instruments?',
                Medication: ['Staphysagaria'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Cystitis',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Stinging pain when passing water?',
                Medication: ['Apis Mel.'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'With high temperature?',
                Medication: ['Belladonna'],
                Dosage: '30',
            },
            {
                Key: 3,
                Question: 'Frequent passing of water with burning?',
                Medication: ['Canthris'],
                Dosage: '30',
            },
            {
                Key: 4,
                Question: 'Pink deposits in urine?',
                Medication: ['Lycopodium'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Dandruff',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Dry scales?',
                Medication: ['Graphites', 'Thuja'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Moist dandruff?',
                Medication: ['Sepia'],
                Dosage: '30',
            },
            {
                Key: 3,
                Question: 'Loss of hair due to dandruff?',
                Medication: ['Carb. Sulf'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Depression',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Confused and despondent?',
                Medication: ['Cimicifuga'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Due to bereavement?',
                Medication: ['Ignatia'],
                Dosage: '30',
            },
            {
                Key: 3,
                Question: 'Easily depressed woman?',
                Medication: ['Sepia'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Diarrhea',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Yellow or green stools, painless?',
                Medication: ['Podophyllum'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Watery, lack of control?',
                Medication: ['Aloe', 'Croton Tig.'],
                Dosage: '30',
            },
            {
                Key: 3,
                Question: 'White watery stools, uncontrollable?',
                Medication: ['Veratrum Alb.'],
                Dosage: '30',
            },
            {
                Key: 4,
                Question: 'Due to dentition of children?',
                Medication: ['Chamomilla'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Dysentery',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Watery with mucus, pain in rectum after stool?',
                Medication: ['Aloe', 'Ipecac'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Amoebic dysentery?',
                Medication: ['Іресас'],
                Dosage: '30',
            },
            {
                Key: 3,
                Question: 'Violent attack of blood dysentery, painful?',
                Medication: ['Merc. Corr.'],
                Dosage: '30',
            },
            {
                Key: 4,
                Question: 'Mucous dysentery?',
                Medication: ['Merc. Sol.'],
                Dosage: '30',
            },
            {
                Key: 5,
                Question: 'Pain in thighs and legs?',
                Medication: ['Rhus Tox'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Earache',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Due to exposure to dry cold wind?',
                Medication: ['Aconite'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Due to sinusitis?',
                Medication: ['Kali Bic.'],
                Dosage: '30',
            },
            {
                Key: 3,
                Question: 'Pain in eustachian tubes due to influenza?',
                Medication: ['Allium Cepa'],
                Dosage: '30',
            },
            {
                Key: 4,
                Question: 'With discharge from ears?',
                Medication: ['Graphites'],
                Dosage: '30',
            },
            {
                Key: 5,
                Question: 'With formation of pus?',
                Medication: ['Hepar Sulf.'],
                Dosage: '30',
            },
            {
                Key: 6,
                Question: 'Pain with discharge of green mucus?',
                Medication: ['Pulsatilla'],
                Dosage: '30',
            },
            {
                Key: 7,
                Question: 'Worse at night?',
                Medication: ['Merc. Sol.'],
                Dosage: '30',
            },
            {
                Key: 8,
                Question: 'Pain during flights or while landing?',
                Medication: ['Borax', 'Cocculus'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Eructation',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Sour, putrid with acidity?',
                Medication: ['Carbo Veg.'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Foul and tasting of food?',
                Medication: ['Anti. Crud.'],
                Dosage: '30',
            },
            {
                Key: 3,
                Question: 'Due to rich food, fruit, vegetable?',
                Medication: ['Pulsatilla'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Exposure',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Fever due to exposure to dry cold weather?',
                Medication: ['Aconite'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'High feverish state?',
                Medication: ['Belladonna'],
                Dosage: '30',
            },
            {
                Key: 3,
                Question: 'Due to exposure to wet air?',
                Medication: ['Dulcamara'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Eczema',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Weeping, oozing sticky fluid?',
                Medication: ['Graphites'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Sensitive to touch?',
                Medication: ['Hepar Sulf.'],
                Dosage: '30',
            },
            {
                Key: 3,
                Question: 'At the border of the hair?',
                Medication: ['Nat. Mur.'],
                Dosage: '30',
            },
            {
                Key: 4,
                Question: 'Itching results in burning?',
                Medication: ['Sulfur'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Exhaustion',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Due to physical work?',
                Medication: ['Arnica'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Due to sickness and diarrhea?',
                Medication: ['Ars. Album'],
                Dosage: '30',
            },
            {
                Key: 3,
                Question: 'Due to mental work?',
                Medication: ['Kali Phos.'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Eyes',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Inflamed, watering, unable to bear light?',
                Medication: ['Euphrasia'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Eye lids swollen?',
                Medication: ['Apis Mel.'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Fainting',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Flatulence',
                Medication: ['Arg. Nit'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'First aid',
                Medication: ['Carbo Veg'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Fat, Overweight',
        Diagnosis: [
            {
                Key: 1,
                Question: 'With excessive appetite?',
                Medication: ['Calc. Carb'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'With unhealthy skin?',
                Medication: ['Graphites'],
                Dosage: '30',
            },
            {
                Key: 3,
                Question: 'Shy and emotional?',
                Medication: ['Pulsatilla'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Fear',
        Diagnosis: [
            {
                Key: 1,
                Question: 'From darkness, thunder?',
                Medication: ['Phosphorus'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'From frightening incidents?',
                Medication: ['Aconite'],
                Dosage: '1M',
            },
            {
                Key: 3,
                Question: 'From impending misfortunes?',
                Medication: ['Ferrum Phos.'],
                Dosage: '30',
            },
            {
                Key: 4,
                Question: 'From exam, audience, crowd?',
                Medication: ['Arg. Nit. and Aethusa'],
                Dosage: '200',
            },
            {
                Key: 5,
                Question: 'From failure, examination?',
                Medication: ['Gelsemium'],
                Dosage: '30',
            },
            {
                Key: 6,
                Question: 'From public speaking?',
                Medication: ['Lycopodium'],
                Dosage: '30',
            },
            {
                Key: 7,
                Question: 'From failure in exam?',
                Medication: ['Kali Phos', 'Silicea'],
                Dosage: '6X',
            },
            {
                Key: 8,
                Question: 'From going to school?',
                Medication: ['Phosphorus', 'Aconite'],
                Dosage: '30',
            },
            {
                Key: 9,
                Question: 'From being alone?',
                Medication: ['Phosphorus'],
                Dosage: '30',
            },
            {
                Key: 10,
                Question: 'From death or accident?',
                Medication: ['Lachesis'],
                Dosage: '1M',
            },
            {
                Key: 11,
                Question: 'Ill effects of fear and shock?',
                Medication: ['Aconite'],
                Dosage: '1M',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Fever',
        Diagnosis: [
            {
                Key: 1,
                Question: 'On account of dry cold air?',
                Medication: ['Aconite'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'With severe running nose, restlessness?',
                Medication: ['Arsenic Alb.'],
                Dosage: '30',
            },
            {
                Key: 3,
                Question: 'Due to red and swollen tonsils?',
                Medication: ['Belladonna'],
                Dosage: '30',
            },
            {
                Key: 4,
                Question: 'With pus in tonsils?',
                Medication: ['Hepar Sulf.'],
                Dosage: '30',
            },
            {
                Key: 5,
                Question: 'With bronchitis?',
                Medication: ['Bryonia'],
                Dosage: '30',
            },
            {
                Key: 6,
                Question: 'With body pain and nose partially blocked?',
                Medication: ['Gelsemium'],
                Dosage: '30',
            },
            {
                Key: 7,
                Question: 'Due to exposure to sunlight and heat?',
                Medication: ['Glonine'],
                Dosage: '30',
            },
            {
                Key: 8,
                Question: 'Intermittent fevers, malarial state?',
                Medication: ['Natrum Mur'],
                Dosage: '30',
            },
            {
                Key: 9,
                Question: 'Malarial fever, pain in the body?',
                Medication: ['Aconite', 'Rhus Tox', 'Arnica', 'Bryonia'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Fissures - Anal',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Sensation of splinters in anus, constriction, tenderness, burning, oozing?',
                Medication: ['Nitric Acid'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Severe burning after stools?',
                Medication: ['Ratanhia'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Fits',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Convulsions, due to cerebral congestion?',
                Medication: ['Belladonna'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Severe convulsions, limbs contorted?',
                Medication: ['Cicuta'],
                Dosage: '200',
            },
            {
                Key: 3,
                Question: 'With Cramps due to epilepsy, cholera?',
                Medication: ['Cuprum Met'],
                Dosage: '30',
            },
            {
                Key: 4,
                Question: 'Fits in menses or in labor pain?',
                Medication: ['Hyoscyamus'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Flatulence',
        Diagnosis: [
            {
                Key: 1,
                Question: 'From eating sweet and fatty food?',
                Medication: ['Argent. Nit.'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Large amount of wind due to acidity?',
                Medication: ['Carbo Veg.'],
                Dosage: '30',
            },
            {
                Key: 3,
                Question: 'Central region around navel bloated?',
                Medication: ['China'],
                Dosage: '30',
            },
            {
                Key: 4,
                Question: 'Gas pressure downward?',
                Medication: ['Lycopodium'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Flu and Cold',
        Diagnosis: [
            {
                Key: 1,
                Question: 'First cure when feeling starts:',
                Medication: ['Aconite'],
                Dosage: '1M',
            },
            {
                Key: 2,
                Question: 'Limbs feel ice cold and feeling of flu?',
                Medication: ['Camphor'],
                Dosage: '30',
            },
            {
                Key: 3,
                Question: 'Symptoms persisting?',
                Medication: ['Influenzinum', 'Baccilinium', 'Nat. Mur'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Food Poisoning',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Unbearable pain, burning, black and bloody diarrhea',
                Medication: ['Arsenic Alb.'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Offensive vomiting persisting?',
                Medication: ['Sulfur', 'Pyrogenium'],
                Dosage: '200',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Fracture',
        Diagnosis: [
            {
                Key: 1,
                Question: 'General cure for fractures:',
                Medication: ['Calc. Phos', 'Symphytum'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Bone injuries?',
                Medication: ['Ruta'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Gout',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Acute gout with fever?',
                Medication: ['Urtica Urens'],
                Dosage: 'Cx3',
            },
            {
                Key: 2,
                Question: 'Severe gout with swelling of lymphoid glands?',
                Medication: ['Sepia'],
                Dosage: '30',
            },
            {
                Key: 3,
                Question: 'Nails are crippled?',
                Medication: ['Graphites', 'Silicea'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Gums',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Swollen Gums?',
                Medication: ['Apis Mel.'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Ulcers?',
                Medication: ['Merc. Sol.'],
                Dosage: '30',
            },
            {
                Key: 3,
                Question: 'Gum boils?',
                Medication: ['Calc. Flour'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Gall Bladder',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Stones?',
                Medication: ['Kali Bich', 'Lycopodium', 'Cholestrinum', 'Nat. Sulf'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Biliary Colic?',
                Medication: ['Mag. Phos', 'Colocynth', 'Dioscorea'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Haemorrhoids',
        Diagnosis: [
            { Key: 1, Question: 'Protruding like grapes with intense itching?', Medication: ['Aloe'], Dosage: '30' },
            { Key: 2, Question: 'Painful, inflamed, red, swollen?', Medication: ['Belladonna'], Dosage: '30' },
            { Key: 3, Question: 'Oozing dark blood?', Medication: ['Hamamelis'], Dosage: '30' },
            { Key: 4, Question: 'Oozing red blood?', Medication: ['Millefolium'], Dosage: '30' },
            { Key: 5, Question: 'Bleeding piles with anal fissures?', Medication: ['Nitric Acid'], Dosage: '30' },
            { Key: 6, Question: 'Blind piles with itching?', Medication: ['Nux Vom'], Dosage: '30' },
            { Key: 7, Question: 'Burning, sensitive piles?', Medication: ['Hypericum'], Dosage: '30' },
            { Key: 8, Question: 'With prolapse of rectum?', Medication: ['Ruta grav'], Dosage: '30' },
            { Key: 9, Question: 'For chronic piles?', Medication: ['Alumina'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Hay Fever',
        Diagnosis: [
            { Key: 1, Question: 'Burning watering eyes?', Medication: ['Euphrasia'], Dosage: '30' },
            { Key: 2, Question: 'Due to pollen?', Medication: ['Bacillinum or Bryonia'], Dosage: '200' },
            { Key: 3, Question: 'Much sneezing?', Medication: ['Sabadilla'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Headache',
        Diagnosis: [
            { Key: 1, Question: 'Sudden on exposure to dry cold air?', Medication: ['Aconite'], Dosage: '200' },
            { Key: 2, Question: 'From overeating?', Medication: ['Antimonium Crud'], Dosage: '200' },
            { Key: 3, Question: 'Due to rich food?', Medication: ['Pulstilla'], Dosage: '200' },
            { Key: 4, Question: 'Flushed face and throbbing pain?', Medication: ['Belladonna'], Dosage: '200' },
            { Key: 5, Question: 'Frontal headache, worse on motion?', Medication: ['Bryonia'], Dosage: '200' },
            { Key: 6, Question: 'Due to tension, base of head painful?', Medication: ['Gelsemium'], Dosage: '200' },
            { Key: 7, Question: 'Due to sunstroke, exposure to sun, heat?', Medication: ['Glonine'], Dosage: '200' },
            { Key: 8, Question: 'Due to congestion and sinus?', Medication: ['Kali Bic.'], Dosage: '200' },
            {
                Key: 9,
                Question:
                    'Chronic headache from dawn to dusk, menstrual disorder, coming periodically, student headache?',
                Medication: ['Nat. Mur'],
                Dosage: '200',
            },
            { Key: 10, Question: 'Due to eye strain?', Medication: ['Ruta'], Dosage: '200' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Heartburn',
        Diagnosis: [
            { Key: 1, Question: 'Due to acidity?', Medication: ['Carbo Veg or Argentum Nit'], Dosage: '30' },
            { Key: 2, Question: 'With stomach pain?', Medication: ['Calc. Phos'], Dosage: '30' },
            { Key: 3, Question: 'With acute burning sensation?', Medication: ['Phosphorus'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Heart Tonic',
        Diagnosis: [
            {
                Key: 1,
                Question: 'For keeping the heart stronger',
                Medication: ['Arnica', 'Lach', 'Led'],
                Dosage: '200',
            },
            { Key: 2, Question: '', Medication: ['Crategus Q'], Dosage: 'Cx4' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Herpes',
        Diagnosis: [
            { Key: 1, Question: 'Shingles?', Medication: ['Rhus Tox'], Dosage: '30' },
            { Key: 2, Question: 'Of the lips?', Medication: ['Natrum Mur.'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Hiccup/Hiccough',
        Diagnosis: [
            { Key: 1, Question: 'General', Medication: ['Nux. Vom.'], Dosage: '30' },
            { Key: 2, Question: 'With Acidity?', Medication: ['Lycopodium', 'Nux Mosch'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Hot Flashes',
        Diagnosis: [
            { Key: 1, Question: 'Especially of the face?', Medication: ['Graphites'], Dosage: '30' },
            { Key: 2, Question: 'With sweating?', Medication: ['Sepia'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: "Housemaid's Knee",
        Diagnosis: [{ Key: 1, Question: 'With inflammation?', Medication: ['Nat. Mur.'], Dosage: '30' }],
        SchemaVersion: 1,
    },
    {
        Condition: 'Indigestion',
        Diagnosis: [
            { Key: 1, Question: 'Accompanied by much flatulence?', Medication: ['Carbo Veg'], Dosage: '30' },
            { Key: 2, Question: 'From overeating?', Medication: ['Nux Vom'], Dosage: '30' },
            { Key: 3, Question: 'Due to food poisoning?', Medication: ['Antimonium Crud'], Dosage: '200' },
            {
                Key: 4,
                Question: 'With pressure in the lower parts of the abdomen?',
                Medication: ['Lycopodium'],
                Dosage: '200',
            },
            { Key: 5, Question: 'Due to rich food and fruits?', Medication: ['Pulsatilla'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Inflammation - Gums',
        Diagnosis: [
            { Key: 1, Question: 'Tooth extraction?', Medication: ['Arnica'], Dosage: '30' },
            { Key: 2, Question: 'Spongy, Swollen, and Bleeding?', Medication: ['Merc. Sol.'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Influenza',
        Diagnosis: [
            { Key: 1, Question: 'General', Medication: ['Influenzinum'], Dosage: '200' },
            { Key: 2, Question: 'Profuse runny nose?', Medication: ['Arsenicum Album'], Dosage: '200' },
            { Key: 3, Question: 'Bronchial Cough?', Medication: ['Bryonia'], Dosage: '30' },
            { Key: 4, Question: 'Severe pain within bones?', Medication: ['Eupatorium Perfoliatum'], Dosage: '200' },
            {
                Key: 5,
                Question: 'Congestion at the base of the head and body pain?',
                Medication: ['Gelsemium'],
                Dosage: '200',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Injuries',
        Diagnosis: [
            { Key: 1, Question: 'Cure for Injury', Medication: ['Arnica'], Dosage: '30' },
            { Key: 2, Question: 'Head Injury?', Medication: ['Natrum Sulph'], Dosage: '30' },
            { Key: 3, Question: 'Avoid tetanus?', Medication: ['Ledum'], Dosage: '30' },
            {
                Key: 4,
                Question: 'Parts which are rich in nerves (finger nails, spine)?',
                Medication: ['Hypericum'],
                Dosage: '30',
            },
            { Key: 5, Question: 'Bone Injury?', Medication: ['Ruta'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Insomnia',
        Diagnosis: [
            { Key: 1, Question: 'Overtiredness?', Medication: ['Arnica'], Dosage: '30' },
            { Key: 2, Question: 'Sleep Jerks?', Medication: ['Belladonna', 'Hypericum'], Dosage: '30' },
            { Key: 3, Question: 'Head sweats?', Medication: ['Cale Carb'], Dosage: '30' },
            { Key: 4, Question: 'Frequent yawning?', Medication: ['Ignatia'], Dosage: '30' },
            { Key: 5, Question: 'Hot Limbs?', Medication: ['Sulphur'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Itching Eyes',
        Diagnosis: [
            { Key: 1, Question: 'Intolerable itching with burning?', Medication: ['Ambrosia'], Dosage: '200' },
            {
                Key: 2,
                Question: 'Severe itching within inner angles of the eye?',
                Medication: ['Zincum Met'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Itching Body',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Unbearable at night when undressing?',
                Medication: ['Tuberculinum, Nat Sulph or Staphisagria'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Joints',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Stiffness in small joints, fingers, toes, ankles, etc.?',
                Medication: ['Caulophyllum', 'Cimicifuga', 'Sepia or Pulsatilla'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Jaundice',
        Diagnosis: [
            { Key: 1, Question: 'Infantile', Medication: ['Chamomilla'], Dosage: '30' },
            { Key: 2, Question: 'Due to gall-bladder obstruction?', Medication: ['Chelidonium'], Dosage: '30' },
            { Key: 3, Question: 'Conjunction Yellow?', Medication: ['Natrum Sulph'], Dosage: '30' },
            { Key: 4, Question: 'Jerking/Trembling?', Medication: ['Agaricus Mus'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Knee - Housemaids',
        Diagnosis: [
            { Key: 1, Question: 'With Inflammation?', Medication: ['Natrum Mur'], Dosage: '30' },
            { Key: 2, Question: 'Rheumatic pains, better with motion?', Medication: ['Rhus Tox'], Dosage: '30' },
            { Key: 3, Question: 'Worse with motion?', Medication: ['Bryonia'], Dosage: '30' },
            { Key: 4, Question: 'Arthritis', Medication: ['Gnaphalium', 'Stronitca'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Laryngitis',
        Diagnosis: [
            { Key: 1, Question: 'With Barking/tickling cough?', Medication: ['Drosera'], Dosage: '30' },
            { Key: 2, Question: 'Dry cough/Loss of voice?', Medication: ['Phosphorus'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Ligaments (Painful)',
        Diagnosis: [{ Key: 1, Question: 'From over exertion?', Medication: ['Arnica', 'Rhus Tox'], Dosage: '30' }],
        SchemaVersion: 1,
    },
    {
        Condition: 'Lumbago',
        Diagnosis: [
            { Key: 1, Question: 'Deep seated?', Medication: ['Cal Fluor'], Dosage: '30' },
            { Key: 2, Question: 'Great Restlessness?', Medication: ['Rhus Tox'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Menstrual Pain',
        Diagnosis: [
            { Key: 1, Question: 'With painful breasts?', Medication: ['Pulsatilla'], Dosage: '30' },
            { Key: 2, Question: 'Tender breasts?', Medication: ['Cal Carb'], Dosage: '30' },
            { Key: 3, Question: 'With depression?', Medication: ['Lycopodium'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Menstrual Problems',
        Diagnosis: [
            { Key: 1, Question: 'Irregular Periods?', Medication: ['Cimicifuga'], Dosage: '30' },
            { Key: 2, Question: 'Irregular back pain?', Medication: ['Sepia'], Dosage: '30' },
            { Key: 3, Question: 'Menstrual Colic?', Medication: ['Mag. Phos'], Dosage: '30' },
            { Key: 4, Question: 'Delayed periods?', Medication: ['Pulsatilla'], Dosage: '30' },
            { Key: 5, Question: 'Too early and painful periods?', Medication: ['China'], Dosage: '30' },
            { Key: 6, Question: 'Non-stop periods?', Medication: ['Carbo Veg'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Motion Sickness',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Nausea experienced within car, rail, sea, air etc…',
                Medication: ['Cocculus'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Mouth (Taste)',
        Diagnosis: [
            { Key: 1, Question: 'Strong metallic taste?', Medication: ['Cup. Met'], Dosage: '30' },
            { Key: 2, Question: 'Bad taste due to Ulcer?', Medication: ['Merc. Sol'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Muscular Pain',
        Diagnosis: [
            { Key: 1, Question: 'Motion pain?', Medication: ['Bryonia'], Dosage: '200' },
            { Key: 2, Question: 'Pain temporarily relieved by motion?', Medication: ['Rhus Tox'], Dosage: '200' },
            { Key: 3, Question: 'Pain after prolonged exercise?', Medication: ['Arnica'], Dosage: '200' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Nausea',
        Diagnosis: [
            { Key: 1, Question: 'Travelling by car, rail, sea, air etc?', Medication: ['Cocculus'], Dosage: '200' },
            {
                Key: 2,
                Question: 'Due to vomit of bile, brown black substance and burning pain?',
                Medication: ['Ars Alb'],
                Dosage: '30',
            },
            { Key: 3, Question: 'Constant nausea and sickness?', Medication: ['Ipecac'], Dosage: '30' },
            {
                Key: 4,
                Question: 'Due to acidity, weak digestion, or pregnancy?',
                Medication: ['Carbo Veg'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Neuralgia',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Pain disappears at night and returns during the day?',
                Medication: ['Cimicifuga'],
                Dosage: '30',
            },
            { Key: 2, Question: 'With flushed, hot and throbbing face?', Medication: ['Belladonna'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Operation',
        Diagnosis: [
            { Key: 1, Question: 'Healing (Before and After)?', Medication: ['Arnica'], Dosage: '1M' },
            { Key: 2, Question: 'Reduce tendency to adhesions?', Medication: ['Calc Fluor'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Overweight',
        Diagnosis: [
            { Key: 1, Question: 'With enlarged glands?', Medication: ['Calc Carb'], Dosage: '30' },
            { Key: 2, Question: 'With a tendency of skin ailments?', Medication: ['Graphites'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Periods',
        Diagnosis: [
            { Key: 1, Question: 'Irregular Periods?', Medication: ['Cimicifuga'], Dosage: '30' },
            { Key: 2, Question: 'Irregular back pain?', Medication: ['Sepia'], Dosage: '30' },
            { Key: 3, Question: 'Menstrual Colic?', Medication: ['Mag. Phos'], Dosage: '30' },
            { Key: 4, Question: 'Delayed periods?', Medication: ['Pulsatilla'], Dosage: '30' },
            { Key: 5, Question: 'Too early and painful periods?', Medication: ['China'], Dosage: '30' },
            { Key: 6, Question: 'Non-stop periods?', Medication: ['Carbo Veg'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Piles',
        Diagnosis: [
            { Key: 1, Question: 'Protruding like grapes with intense itching?', Medication: ['Aloe'], Dosage: '30' },
            { Key: 2, Question: 'Painful, inflamed, red, swollen?', Medication: ['Belladonna'], Dosage: '30' },
            { Key: 3, Question: 'Oozing dark blood?', Medication: ['Hamamelis'], Dosage: '30' },
            { Key: 4, Question: 'Oozing red blood?', Medication: ['Millefolium'], Dosage: '30' },
            { Key: 5, Question: 'Bleeding piles with anal fissures?', Medication: ['Nitric Acid'], Dosage: '30' },
            { Key: 6, Question: 'Blind piles with itching?', Medication: ['Nux Vom'], Dosage: '30' },
            { Key: 7, Question: 'Burning, sensitive piles?', Medication: ['Hypericum'], Dosage: '30' },
            { Key: 8, Question: 'With prolapse of rectum?', Medication: ['Ruta grav'], Dosage: '30' },
            { Key: 9, Question: 'For chronic piles?', Medication: ['Alumina'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Pneumonia',
        Diagnosis: [
            { Key: 1, Question: 'Acute and sudden high fever with dry cough?', Medication: ['Aconite'], Dosage: '30' },
            { Key: 2, Question: 'Difficult rattling Mucus', Medication: ['Antimonium Tart'], Dosage: '200' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Prostate',
        Diagnosis: [
            { Key: 1, Question: 'Hesitation in passing water?', Medication: ['Sulfur'], Dosage: '30' },
            { Key: 2, Question: 'With burning and hesitation?', Medication: ['Cantharis'], Dosage: '30' },
            { Key: 3, Question: 'Frequent urination?', Medication: ['Staphysagria'], Dosage: '30' },
            { Key: 4, Question: 'Frequent micturition with pain?', Medication: ['Thuja'], Dosage: '200' },
            {
                Key: 5,
                Question: 'Senile hypertrophy of prostate gland?',
                Medication: ['Ferrum Picricum'],
                Dosage: '30',
            },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Pyorrhoea',
        Diagnosis: [
            { Key: 1, Question: 'Bleeding and retracted gums?', Medication: ['Carbo Veg'], Dosage: '30' },
            { Key: 2, Question: 'Gums spongy, pus, foul smell?', Medication: ['Merc. Sol'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Rheumatism',
        Diagnosis: [
            { Key: 1, Question: 'Back and Neck?', Medication: ['Cimicifuga'], Dosage: '30' },
            { Key: 2, Question: 'Back and Limbs?', Medication: ['Apis Mel'], Dosage: '30' },
            { Key: 3, Question: 'Greatly aggravated by movement?', Medication: ['Bryonia'], Dosage: '30' },
            {
                Key: 4,
                Question: 'Worse in the beginning and improves by movement?',
                Medication: ['Rhus Tox'],
                Dosage: '30',
            },
            { Key: 5, Question: 'With pain in tendons and muscles?', Medication: ['Ruta Grav'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Scalds',
        Diagnosis: [{ Key: 1, Question: 'General', Medication: ['Cantharis'], Dosage: '30' }],
        SchemaVersion: 1,
    },
    {
        Condition: 'Sciatica',
        Diagnosis: [
            { Key: 1, Question: 'Worse in cold/damp weather?', Medication: ['Rhus Tox'], Dosage: '30' },
            {
                Key: 2,
                Question: 'Left side, tearing better pressure and heat?',
                Medication: ['Colocynthis'],
                Dosage: '30',
            },
            { Key: 3, Question: 'Intense pain, numbness?', Medication: ['Gnaphalium'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Shock',
        Diagnosis: [
            { Key: 1, Question: 'After accident?', Medication: ['Aconite'], Dosage: '30' },
            { Key: 2, Question: 'Reduction of prolonged effect?', Medication: ['Arnica'], Dosage: '200' },
            { Key: 3, Question: 'Surgical Shock?', Medication: ['Vert Album'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Sinus',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Chronic frontal sinus, stringy discharge, pain in ears, early morning sneezing?',
                Medication: ['Kali Bich'],
                Dosage: '30',
            },
            {
                Key: 2,
                Question: 'Tearing pain in head, from root of nose to forehead?',
                Medication: ['Nat Mur'],
                Dosage: '30',
            },
            {
                Key: 3,
                Question: 'Pain from back of the head and settles over the eyes?',
                Medication: ['Silicea'],
                Dosage: '30',
            },
            { Key: 4, Question: 'Old cold with smell lose, ripe mucus?', Medication: ['Pulsatilla'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Sneezing',
        Diagnosis: [
            { Key: 1, Question: 'Acute attack on exposure?', Medication: ['Aconite'], Dosage: '30' },
            { Key: 2, Question: 'With burning, excoriating discharge?', Medication: ['Ars Alb'], Dosage: '200' },
            { Key: 3, Question: 'Cold sensation with pain, feverish?', Medication: ['Gelsemium'], Dosage: '200' },
            { Key: 4, Question: 'With sinus?', Medication: ['Kali Bich'], Dosage: '200' },
            { Key: 5, Question: 'Violent sneezing in the morning?', Medication: ['Lachesis'], Dosage: '30' },
            { Key: 6, Question: 'Constant sneezing?', Medication: ['Iris Vers'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Sprains',
        Diagnosis: [
            { Key: 1, Question: 'Accompanied by swelling?', Medication: ['Arnica'], Dosage: '30' },
            { Key: 2, Question: 'Sprain of joints and tendons?', Medication: ['Rhus Tox'], Dosage: '30' },
            { Key: 3, Question: 'Sprain of wrist or ankles?', Medication: ['Ruta Grav'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Swelling',
        Diagnosis: [
            { Key: 1, Question: 'Due to insect bites, puffed skin?', Medication: ['Apis Mel'], Dosage: '30' },
            { Key: 2, Question: 'Swelling due to injury?', Medication: ['Arnica'], Dosage: '200' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Styes',
        Diagnosis: [
            { Key: 1, Question: 'Recurring styes?', Medication: ['Staphysagria'], Dosage: '200' },
            { Key: 2, Question: 'Painful?', Medication: ['Pulsatilla'], Dosage: '30' },
            {
                Key: 3,
                Question: 'Feeling of sand in the eyes, dry, hot, red?',
                Medication: ['Aconite', 'Belladonna'],
                Dosage: '30',
            },
            { Key: 4, Question: 'With swollen eyelids?', Medication: ['Apis'], Dosage: '200' },
            { Key: 5, Question: 'With severe pain?', Medication: ['Hepar Sulf'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Synovitis',
        Diagnosis: [
            { Key: 1, Question: 'Due to sprains?', Medication: ['Ruta Grav'], Dosage: '30' },
            { Key: 2, Question: 'Due to overexertion?', Medication: ['Arnica', 'Rhus Tox'], Dosage: '30' },
            { Key: 3, Question: 'Due to rheumatism?', Medication: ['Ruta Grav'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Throat (Sore)',
        Diagnosis: [
            { Key: 1, Question: 'Due to dry, cold winds?', Medication: ['Aconite'], Dosage: '30' },
            { Key: 2, Question: 'Dry and burning?', Medication: ['Arsenic Alb'], Dosage: '30' },
            { Key: 3, Question: 'With excess of saliva?', Medication: ['Merc Sol'], Dosage: '30' },
            { Key: 4, Question: 'Throat: red and hot?', Medication: ['Belladonna'], Dosage: '30' },
            { Key: 5, Question: 'Inflammation of throat?', Medication: ['Lachesis'], Dosage: '30' },
            { Key: 6, Question: 'Rough, scraping feeling?', Medication: ['Nux Vom'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Thrush (Mouth)',
        Diagnosis: [
            { Key: 1, Question: 'With much saliva?', Medication: ['Merc Sol'], Dosage: '30' },
            { Key: 2, Question: 'Are lips affected?', Medication: ['Natrum Mur'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Tinnitus',
        Diagnosis: [
            { Key: 1, Question: 'Sensitive to least noise?', Medication: ['Cimicifuga'], Dosage: '30' },
            { Key: 2, Question: 'With vertigo and nausea?', Medication: ['Carbo Veg'], Dosage: '30' },
            { Key: 3, Question: 'Catarrh making it worse?', Medication: ['Pulsatilla'], Dosage: '30' },
            { Key: 4, Question: 'Is the noise worse at night?', Medication: ['Sulphur'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Tiredness',
        Diagnosis: [
            { Key: 1, Question: 'Due to physical exertion?', Medication: ['Arnica', 'Bryonia'], Dosage: '200' },
            { Key: 2, Question: 'After sickness and diarrhea?', Medication: ['Arsenic Alb'], Dosage: '30' },
            { Key: 3, Question: 'After mental exhaustion?', Medication: ['Kali Phos'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Tonsillitis',
        Diagnosis: [
            { Key: 1, Question: 'Swollen tonsils and prone to colds?', Medication: ['Baryta Carb'], Dosage: '30' },
            { Key: 2, Question: 'Swollen tonsils, especially right?', Medication: ['Phytolacca'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Toothache',
        Diagnosis: [
            { Key: 1, Question: 'Tooth dark, decayed?', Medication: ['Kreosotum', 'Staphysagria'], Dosage: '30' },
            { Key: 2, Question: 'Tooth loose, tender gums?', Medication: ['Merc Sol'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Urinary Problems',
        Diagnosis: [
            {
                Key: 1,
                Question: 'Scalding urine, cutting pain during and after urination?',
                Medication: ['Cantharis'],
                Dosage: '30',
            },
            { Key: 2, Question: 'Blood in urine with tender bladder?', Medication: ['Merc Cor'], Dosage: '30' },
            { Key: 3, Question: 'Frequent urination?', Medication: ['Gelsemium'], Dosage: '200' },
            { Key: 4, Question: 'Due to diabetes?', Medication: ['Natrum Sulf'], Dosage: '200' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Urticaria',
        Diagnosis: [
            { Key: 1, Question: 'With burning and stinging?', Medication: ['Apis Mel'], Dosage: '30' },
            { Key: 2, Question: 'After strenuous exercise?', Medication: ['Natrum Mur'], Dosage: '30' },
            { Key: 3, Question: 'Due to indigestion?', Medication: ['Nux Vom'], Dosage: '1M' },
            { Key: 4, Question: 'Due to liver problems?', Medication: ['Nat Sulf'], Dosage: '200' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Varicose Veins',
        Diagnosis: [
            { Key: 1, Question: 'During pregnancy?', Medication: ['Aesculus Hip'], Dosage: '30' },
            { Key: 2, Question: 'General Cure', Medication: ['Hamamelis'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Vertigo',
        Diagnosis: [
            { Key: 1, Question: 'Due to head injury?', Medication: ['Arnica', 'Nat Sulf', 'Calc Sulf'], Dosage: '30' },
            { Key: 2, Question: 'With buzzing in the ears?', Medication: ['Arg. Nit'], Dosage: '30' },
            {
                Key: 3,
                Question: 'Due to problems of eardrum fluids, imbalance?',
                Medication: ['Iris Vers'],
                Dosage: '30',
            },
            { Key: 4, Question: 'Worse when turning in bed?', Medication: ['Belladonna'], Dosage: '30' },
            { Key: 5, Question: 'Worse when looking up?', Medication: ['Calc Carb'], Dosage: '30' },
            { Key: 6, Question: 'With trembling?', Medication: ['Gelsemium'], Dosage: '30' },
            { Key: 7, Question: 'With headache?', Medication: ['Natrum Mur'], Dosage: '30' },
            { Key: 8, Question: 'With nausea?', Medication: ['Nux Vom'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Vomiting',
        Diagnosis: [
            {
                Key: 1,
                Question: 'With diarrhea?',
                Medication: ['Croton Tig', 'Ipecac', 'Carbo Veg', 'Baptisia'],
                Dosage: '30',
            },
            { Key: 2, Question: 'During pregnancy?', Medication: ['Pipli', 'Cocculus', 'Arsenic'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Warts',
        Diagnosis: [{ Key: 1, Question: 'General', Medication: ['Thuja', 'Nit. Aci'], Dosage: '30' }],
        SchemaVersion: 1,
    },
    {
        Condition: 'Wheezing',
        Diagnosis: [
            { Key: 1, Question: 'Asthma/Bronchitis?', Medication: ['Ipecac'], Dosage: '30' },
            { Key: 2, Question: 'With rattling mucus?', Medication: ['Anti-Tart'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
    {
        Condition: 'Whooping Cough',
        Diagnosis: [{ Key: 1, Question: 'Hard, barking cough?', Medication: ['Drosera'], Dosage: '30' }],
        SchemaVersion: 1,
    },
    {
        Condition: 'Worms',
        Diagnosis: [
            { Key: 1, Question: 'Irritable temper, grinding of teeth?', Medication: ['Cina', 'Stannum'], Dosage: '30' },
            { Key: 2, Question: 'Child refers pain to the navel?', Medication: ['Spigelia'], Dosage: '30' },
            { Key: 3, Question: 'Tape worm?', Medication: ['Cuprum Met'], Dosage: '30' },
        ],
        SchemaVersion: 1,
    },
];
