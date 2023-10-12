import allison from './../images/allison.png';
import andrea from './../images/andrea.png';
import ariel from './../images/ariel.png';
import britney from './../images/britney.png';
import claire from './../images/claire.png';
import coco from './../images/coco.png';
import crystal from './../images/crystal.png';
import donna from './../images/donna.png';
import doreen from './../images/doreen.png';
import haley from './../images/haley.png';
import haruka from './../images/haruka.png';
import julia from './../images/julia.png';
import kristy from './../images/kristy.png';
import marina from './../images/marina.png';
import melanie from './../images/melanie.png';
import nika from './../images/nika.png';
import rachel from './../images/rachel.png';

// pronouns
const PRONOUN_STRINGS = {
    SHEHER: "she/her/hers",
    OTHER: "other"
};

const POSITION_STRINGS = {
    EXEC: "Executive Team",
    CAMPUS: "Campus Ambassador",
    OTHER: "Other"
};

const LOCATION_STRINGS = {
    VANCOUVER: "Vancouver, Canada",
    TOKYO: "Tokyo, Japan",
    HEBEI: "Hebei, China",
    NANJING: "Nanjing, China",
    TEMECULA: "Temecula (CA), United States",
    RICHMOND: "Richmond (BC), Canada",
    TORONTO: "Toronto, Canada"

};

// 
export const bioData = [
    {
        name: "Allison",
        src: allison,
        role: "VP Technology",
        email: "vpt@girlsinsteam.org",
        pronouns: PRONOUN_STRINGS.SHEHER,
        position: POSITION_STRINGS.EXEC,
        location: LOCATION_STRINGS.VANCOUVER,
        emojis: "👩🏻‍💻🦮🐕‍🦺👟🌱",
        desc: "Allison is currently a Software Engineer at Microsoft, where she finds excitement in her day-to-day work, hackathon projects, and mentorship events at the Downtown Vancouver offices. She recently completed her Bachelor of Science at the University of British Columbia, as a Computer Science major. Having been a Combined Major in Science student prior to transitioning to Computer Science in her third year, Allison strongly values the intersection of multiple disciplines with Computer Science and the tech industry as a whole. During her time as a student, Allison contributed avidly to the local tech community as Co-President of nwPlus and organized over eight large-scale in-person and virtual collegiate hackathons. These events garnered participation from thousands of students in the Greater Vancouver Area and beyond, aiming to provide an inclusive and innovative space for all interested students to learn more about a career in tech.",
        quote: "The main attraction of Girls in STEAM, for me, is the mission to empower minority groups (mainly young women*) to seriously consider the value of interdisciplinary applications in fields of higher education. I'm excited to equip our participants with skills, information, and mentorship so that they may seize opportunities in both STEM and Arts fields and continue to consciously apply each discipline focus to the other.",
    },
    {
        name: "Andrea",
        src: andrea,
        role: "VP Engagement, High School",
        email: "vpehs@girlsinsteam.org",
        pronouns: PRONOUN_STRINGS.SHEHER,
        position: POSITION_STRINGS.EXEC,
        location: LOCATION_STRINGS.TEMECULA,
        emojis: "🍝📚🐶🧘🏻‍♀️",
        desc: "Andrea is a recent graduate of the University of Cambridge with an MPhil in Critical Approaches to Children's Literature. She has a background in Education Technology and project management, having previously worked for companies such as Newsela and Chegg. Since finishing her undergraduate degree at UCLA, she has strived to support education in diverse ways. In addition to working in EdTech and for education non-profit organizations, she is also an alumna of the Fulbright program, during which she taught high school English in southern Italy.",
        quote: "I hope to develop educational resources and events that will empower young women and provide them with the tools they need to explore STEAM fields and careers.",
    },
    {
        name: "Ariel",
        src: ariel,
        role: "President",
        email: "president@girlsinsteam.org",
        pronouns: PRONOUN_STRINGS.SHEHER,
        position: POSITION_STRINGS.EXEC,
        location: LOCATION_STRINGS.VANCOUVER,
        emojis: "💃🏻🏂🏻🏌🏻‍♀️🎹😴",
        desc: "Ariel has an MPhil in Education from the University of Cambridge and a BA in Visual Arts & Computer Science from the University of British Columbia. Currently studying at Harvard Graduate School of Education, Ariel is specializing in Education Leadership, Organizations, & Entrepreneurship. As a woman in STEAM, Ariel helped run the biggest female & gender minority hackathon in Canada in 2020, gathering 280+ students over the 24-hour event. She has also served as the President of UBC Sororities, leading a collegiate community of 800+ women. A snowboard racer in her teens and a frequent traveller in her 20s, Ariel loves to diversify her experiences and has also modelled for the 2019 Victoria’s Secret PINK advertisement campaign on #GRLPWR. As this non-profit “stemmed” from her Master's thesis in access & education, Ariel aims to create a more inclusive community for minority groups in STEAM through educational programming and networking opportunities.",
        quote: "I founded Girls in STEAM with hopes to support access to STEAM education for individuals who are generally considered minorities in STEAM fields. I aim to facilitate an inclusive community and I welcome more to learn & grow alongside our team.",
    },
    {
        name: "Britney",
        src: britney,
        role: "Web Developer",
        email: "britney@girlsinsteam.org",
        pronouns: PRONOUN_STRINGS.SHEHER,
        position: POSITION_STRINGS.EXEC,
        location: LOCATION_STRINGS.RICHMOND,
        emojis: "🤩🥏💻🎮🐶",
        desc: "Britney is in her 2nd year at UBC studying Computer Science - Integrated Sciences. She is passionate about programming and about computational theory. Britney is a transfer student into Computer Sciences from Kinesiology. She hopes to create more opportunities for those who want to gain more experience in CS. She enjoys gaming, watching Netflix, and playing with her dog Hachiko in her spare time. ",
        quote: "As someone who found technology really intimidating, I hope to create a more warm and welcoming community for others who wish to venture into technology!",
    },
    {
        name: "Claire",
        src: claire,
        role: "VP Finance",
        email: "vpf@girlsinsteam.org",
        pronouns: PRONOUN_STRINGS.SHEHER,
        position: POSITION_STRINGS.EXEC,
        location: LOCATION_STRINGS.HEBEI,
        emojis: "🗺🍜🍲🥘😋",
        desc: "Claire has a degree from the University of British Columbia, specializing in genetics and food, nutrition, and health. She is an educational consultant at IWE Study, a boutique consulting firm that provides bilingual education strategic advising, based in Vancouver, BC. With a passion for science-teaching, Claire hopes to help students develop an interest in learning. She strives to assist students in achieving academic excellence and community involvement. In her spare time, Claire dedicates her time to volunteering for local nonprofit organizations. She likes reading and travelling and also is a food enthusiast. Having tried 1000+ restaurants worldwide, Claire looks forward to her next adventure.",
        quote: "I believe that information is critical for decision-making. By providing more relative information and female role models from similar social, economic, and ethnic backgrounds, I hope that more and more girls will be more motivated and confident to pursue a career in the STEAM domain.”",
    },
    {
        name: "Coco",
        src: coco,
        role: "VP Programming",
        email: "vpp@girlsinsteam.org",
        pronouns: PRONOUN_STRINGS.SHEHER,
        position: POSITION_STRINGS.EXEC,
        location: LOCATION_STRINGS.NANJING,
        emojis: "🌍🎤🍽📷🎯",
        desc: "Coco has a MSEd in Learning Sciences & Technologies from the University of Pennsylvania and a BS in Hospitality Administration from Cornell University. Founder of YMCC Education Consultancy, Coco advises local and international students on private school and college admissions. She possesses experience in relationship building, program management and event planning. In her free time, she enjoys trying different cuisines, attending concerts, and traveling to new destinations.",
        quote: "I have been blessed with many opportunities as I navigate my own academic and professional paths and I’ve realized that not everyone has the same access to resources. Through panels and workshops, I hope to create a close-knit community where girls interested in STEAM fields can learn and build on their skills.",
    },
    {
        name: "Crystal",
        src: crystal,
        role: "Web Developer",
        email: "crystal@girlsinsteam.org",
        pronouns: PRONOUN_STRINGS.SHEHER,
        position: POSITION_STRINGS.EXEC,
        location: LOCATION_STRINGS.VANCOUVER,
        emojis: "💖🍥🐼🌺✨",
        desc: "Crystal is a driven and multi-talented individual who is pursuing a Bachelor of Science degree in Computer Science at the University of British Columbia. She is currently on a co-op work term at UBC IT Web Services, and is set to work at BGC Engineering in the upcoming term. In addition to her academic pursuits, Crystal is also a passionate musician and has been teaching piano for several years. As a leader, Crystal has held positions of responsibility as the Director of Finance and Director of Administration in her sorority Alpha Omicron Pi and as the Community Engagement Director of Amplify, an NPO that aims to empower youth in the local community. In her free time, Crystal enjoys playing the guitar, video games, reading literary fiction, and doing vinyl crafts.",
        quote: "The combination of my passion for music and my understanding of technology has led me to appreciate the role that technology plays in creating and enhancing musical experiences. This has driven my curiosity about the many ways in which technology and the arts intersect and how these fields can be combined to create new and innovative solutions.",
    },
    {
        name: "Donna",
        src: donna,
        role: "Graphic Designer",
        email: "donna@girlsinsteam.org",
        pronouns: PRONOUN_STRINGS.SHEHER,
        position: POSITION_STRINGS.EXEC,
        location: LOCATION_STRINGS.RICHMOND,
        emojis: "🙉🎨🎧🐕👩🏻‍💻",
        desc: "Donna is a first-year student currently studying business and computer science. She is passionate about UI/UX designing and Web Development. She hopes to reach out to girls who enjoy technology-related fields. Outside of school, she enjoys drawing, watching k-dramas and going to the gym. Her goal is to inspire more girls to pursue their tech dreams and take bold steps forward, driving change for a more equitable future.",
        quote: "Girls deserve the opportunity to explore STEAM fields, not just for personal growth and development, but also to make meaningful contributions to society. Through my involvement in Girls in STEAM, I have found the chance to collaborate with talented, passionate girls with endless inspiration and encouragement.",
    },
    {
        name: "Doreen",
        src: doreen,
        role: "VP Content",
        email: "vpc@girlsinsteam.org",
        pronouns: PRONOUN_STRINGS.SHEHER,
        position: POSITION_STRINGS.EXEC,
        location: LOCATION_STRINGS.VANCOUVER,
        emojis: "🍷🐾👠",
        desc: "Doreen is a business journalist based in New York City, primarily covering technology news surrounding cryptocurrency and blockchain developments. Previously, she produced a night-time newscast for Disney's ABC News and spent a year interning at the United Nations, which exposed her to how diverse backgrounds come together to contribute to a mission-driven cause. She is an honours graduate of New York University's Arthur L. Carter Journalism Institute, where she focused on broadcast journalism with a double major in Political Science.",
        quote: "Being a woman in STEM with an arts background made me realize how much work there is ahead of us. I hope to grow a platform that paves the way for girls who strive to thrive in STEAM fields.",
    },
    {
        name: "Haley",
        src: haley,
        role: "Graphic Designer",
        email: "haley@girlsinsteam.org",
        pronouns: PRONOUN_STRINGS.SHEHER,
        position: POSITION_STRINGS.EXEC,
        location: LOCATION_STRINGS.VANCOUVER,
        emojis: "🍵🏀🎧🎹🎥",
        desc: "Haley is a second-year student at the UBC Sauder School of Business, intending to pursue a double-specialization in Business Technology Management and Marketing. Outside of the classroom, Haley has had experience as a research intern for Leading Learners, an educational technology company that promotes accessibility in education by providing free student resources on an all-in-one digital platform. She has also worked as a volunteer researcher for the Vancouver affiliate of UNITE HERE!, a labor union in Canada and the United States that advocates for marginalized groups in the hospitality industry.",
        quote: "I recognize from my past experiences that I'm drawn to organizations and communities whose values align with mine. I am thankful to be a part of Girls in STEAM's advocacy for inclusiveness in the tech industry.",
    },
    {
        name: "Haruka",
        src: haruka,
        role: "VP Internal",
        email: "vpi@girlsinsteam.org",
        pronouns: PRONOUN_STRINGS.SHEHER,
        position: POSITION_STRINGS.EXEC,
        location: LOCATION_STRINGS.TOKYO,
        emojis: "🏌🏽‍♀️🏊🏼‍♀️🎿🏝️✈️",
        desc: "Born and raised in Tokyo, Japan, Haruka was continually exposed to diverse cultures and perspectives throughout her time attending international schools. Sparked by her curiosity to gain independence and new experiences, she moved to Canada in 2015 to complete her BA and BEd at the University of British Columbia. During her time at university, she took on various roles in student organizations that led her to realize her passion for leadership and community building. Haruka currently works at an elementary school teacher as an educator, where she inspires her students on a daily basis. In her free time, Haruka enjoys taking part in various athletic activities, such as golf, volleyball, soccer, swimming, and skiing. She also loves to travel, especially to places with beautiful blue oceans.",
        quote: "Starting from a young age, I hope to encourage more women to explore STEAM by sharing my personal experiences and providing people with educational tools to help create a foundation of knowledge that they can use in the future.",
    },
    {
        name: "Julia",
        src: julia,
        role: "Writer",
        email: "julia@girlsinsteam.org",
        pronouns: PRONOUN_STRINGS.SHEHER,
        position: POSITION_STRINGS.EXEC,
        location: LOCATION_STRINGS.TORONTO,
        emojis: "🌹👩‍💻📚💫💕",
        desc: "Julia is an undergraduate student in Mathematics and Physics at the University of Toronto. In the near future, she intends to pursue a doctoral degree in Physics, Applied Mathematics or Quantitative Finance, with the aim of establishing her career in the latter. Wishing to improve scientific literacy amongst the general public, she has written articles for a broad range of organizations, including the Varsity and the Centre for Inquiry of Canada. ",
        quote: "I would wish to facilitate and to encourage other women of similar interests to pursue their strengths and passions, whatever obstacles they might face along the way.",
    },
    {
        name: "Kristy",
        src: kristy,
        role: "VP Design",
        email: "vpd@girlsinsteam.org",
        pronouns: PRONOUN_STRINGS.SHEHER,
        position: POSITION_STRINGS.EXEC,
        location: LOCATION_STRINGS.VANCOUVER,
        emojis: "🌷💻🍵",
        desc: "Kristy is a UX Design student from Vancouver, passionate about digital storytelling and curating virtual experiences from a place of empathy and care. She holds a Bachelor of Arts degree in Asian Area Studies, focusing on Southeast Asian Contemporary Culture, Society, and Media from the University of British Columbia. As a 2nd-gen Chinese Canadian, she's also very interested in the history and experiences of immigrant families, leading her to also pursue a minor in Asian Canadian Migration Studies at UBC. Outside of school and work, Kristy loves travelling, cafe-hopping, watching k-dramas, and content creating for TikTok (104K followers) and Youtube (7.5K subscribers) ! ",
        quote: "I hope that the community we have created around STEAM will help empower the younger generations interested in exploring this path to reach for the stars when it comes to their personal and professional development! Especially for those who may be more shy and introverted (just like me!), I want them to know that they have a support system here and amazing mentors to help them reach their fullest potential in whichever parts of STEAM they would like to pursue.",
    },
    {
        name: "Marina",
        src: marina,
        role: "Web Developer",
        email: "marina@girlsinsteam.org",
        pronouns: PRONOUN_STRINGS.SHEHER,
        position: POSITION_STRINGS.EXEC,
        location: LOCATION_STRINGS.VANCOUVER,
        emojis: "🎹🎨🏖🥏🍜",
        desc: "Marina is a grade 12 student in Lord Byng Secondary School hoping to study Computer Science in post-secondary. Enrolled in Lord Byng’s mini arts program with a specialization in visual arts, Marina loves to express her creativity through all types of art forms. As a woman in STEAM, Marina became passionate about programming during the pandemic lockdown after stepping outside of her comfort zone in exploring a foreign digital space. Marina worked as a coding instructor during the summer, and eventually part-time now, at Under The GUI Coding Academy where she facilitates games and teaches children how to code their own mini-programs and debug in Python.",
        quote: "As a girl in STEAM, I hope to share my knowledge in arts and technology with others to provide an inclusive community that fosters learning and growth for those interested in the STEAM field.",
    },
    {
        name: "Melanie",
        src: melanie,
        role: "Web Developer",
        email: "melanie@girlsinsteam.org",
        pronouns: PRONOUN_STRINGS.SHEHER,
        position: POSITION_STRINGS.EXEC,
        location: LOCATION_STRINGS.VANCOUVER,
        emojis: "👩‍💻🖼️🖌️🏞️🏊‍♀️",
        desc: "Melanie is a second-year BSc Computer Science student at the University of British Columbia with a passion for multimedia design, full-stack development and healthcare. Having previously studied microbiology and immunology at UBC for a year, Melanie has gained an immense appreciation for the diversity within STEM and the boundaries it aims to push. During her time at UBC, Melanie has volunteered with BC-based organizations such as the RY Foundation that guide youth on their journey to pursuing a post-secondary education. Outside of school, Melanie works as a high-school tutor and lifeguard for the City of Richmond. She enjoys playing the piano, hiking and creating digital art in her spare time.",
        quote: "My interest in STEAM has followed me for as long as I can remember. Growing up, I saw the lack of diversity in many of the fields I was interested in, and never considered a career in technology until I attended UBC. Through Girls in STEAM, I hope to inspire youth of all backgrounds to see the beauty, diversity and innovation that lies within STEAM, and that it is never too late to pursue your passions.",
    },
    {
        name: "Nika",
        src: nika,
        role: "VP Marketing & Graphic Designer",
        email: "nika@girlsinsteam.org",
        pronouns: PRONOUN_STRINGS.SHEHER,
        position: POSITION_STRINGS.EXEC,
        location: LOCATION_STRINGS.VANCOUVER,
        emojis: "🧠☕️🎨👩🏻‍💻🎧",
        desc: "Nika is a third-year psychology student at the University of British Columbia with a strong interest in pursuing UX design post-graduation. Having had a passion for art and creativity since childhood, she enjoys using her artistic abilities in order to support organizations through web and graphic design work. Nika has previously done marketing and graphic design work for several clubs, organizations, and app startups, including Girl Up, SDC, and the SDG Student Hub at UBC. She also works as a teacher at an Oxford Learning Centre where she supports students ranging from elementary to high school in furthering their education beyond the classroom.",
        quote: "I believe the inclusion of arts & design in STEAM is so important, especially in a society where it has become so devalued despite being such a crucial aspect of technology and user experience. Girls in STEAM’s mission to support access to STEAM education for women, gender-diverse people, and the LGBTQ+ community is one that aligns with many of my passions, and I’m glad I can contribute my skills towards supporting this amazing team!",
    },
    {
        name: "Rachel",
        src: rachel,
        role: "VP External & Graphic Designer",
        email: "rachel@girlsinsteam.org",
        pronouns: PRONOUN_STRINGS.SHEHER,
        position: POSITION_STRINGS.EXEC,
        location: LOCATION_STRINGS.VANCOUVER,
        emojis: "🐷😊🙉🍵",
        desc: "Rachel, a UBC student studying Business and Computer Science, is passionate about both technology and closing the gender gap in STEAM fields. She has experience in data analysis with a Vancouver-based startup called Sonical.ly as well as entrepreneurship@UBC. Due to the lack of STEAM opportunities in her high school, Rachel is committed to helping students discover the diverse range of fields in the industry. Her goal is to provide students with early exposure to various topics to spark interests and open up career paths.",
        quote: "Being someone who was uncertain about their career path and reached out to others for advice, I aspire to motivate more women to jump into the unknown, discover their passions, and gain a deeper understanding of themselves.",
    }
];
