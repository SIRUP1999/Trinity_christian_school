const galleryImages = [
  {
    src: '/images/WhatsApp Image 2026-10-12 at 5.55.14 PM-enhance-all-these-images-very-clear-for-me.jpg',
    alt: 'Trinity pupils gather together in their bright classroom',
    category: 'Classroom learning',
  },
  {
    src: '/images/WhatsApp Image 2026-10-12 at 5.5s5.15 PM-enhance-all-these-images-very-clear-for-me.jpg',
    alt: 'A welcoming classroom where pupils learn side by side',
    category: 'Classroom learning',
  },
  {
    src: '/images/WhatsApp Image 2026-10-12 at 5.5s5.15s PM-enhance-all-these-images-very-clear-for-me.jpg',
    alt: 'Pupils focus on their work during a classroom lesson',
    category: 'Classroom learning',
  },
  {
    src: '/images/WhatsApp Image 2026-10-12 at 5.ssss55.18 PM-enhance-all-these-images-very-clear-for-me.jpg',
    alt: 'A pupil works thoughtfully through a classroom exercise',
    category: 'Classroom learning',
  },
  {
    src: '/images/WhatsApp Image 2026-10-12 at 5ss.55.14 PM-enhance-all-these-images-very-clear-for-me.jpg',
    alt: 'Growing in confidence through focused classroom learning',
    category: 'Classroom learning',
  },
  {
    src: '/images/WhatsApp Image 2026-10-12 at 6.45.5sssss7 PM-enhance-all-these-images-very-clear-for-me.jpg',
    alt: 'Young learners share a moment together in class',
    category: 'Classroom community',
  },
  {
    src: '/images/WhatsApp Image 2026-10-1ss2 at 5.55.18 PM-enhance-all-these-images-very-clear-for-me.jpg',
    alt: 'A lively classroom filled with curious, confident learners',
    category: 'Classroom learning',
  },
  {
    src: '/images/WhatsApp Image 2026-1sss0-12 at 5.55.18 PM-enhance-all-these-images-very-clear-for-me.jpg',
    alt: 'Every learner finding their place in the classroom',
    category: 'Classroom learning',
  },
  {
    src: '/images/School_premises.jpeg',
    alt: 'School premises',
    category: 'Campus',
  },
  {
    src: '/images/School_grounds.jpeg',
    alt: 'School grounds',
    category: 'Campus',
  },
  {
    src: '/images/Conducive_environment.jpeg',
    alt: 'A conducive learning environment',
    category: 'School community',
  },
  {
    src: '/images/School_proprietor_and _wife.jpeg',
    alt: 'The school proprietor and his wife',
    category: 'School community',
    objectPosition: 'center top',
  },
  {
    src: '/images/Lovely_image_of_proprietor_and_wife.jpeg',
    alt: 'The proprietor and his wife at school',
    category: 'School community',
    objectPosition: 'center top',
  },
  {
    src: '/images/School_proprietor_and_students.jpeg',
    alt: 'The school proprietor with students',
    category: 'School community',
  },
  {
    src: '/images/Modern_ICT_Lab.jpeg',
    alt: 'Modern ICT lab',
    category: 'Learning facilities',
  },
  {
    src: '/images/Modern_ICT_labolatory.jpeg',
    alt: 'Modern ICT laboratory',
    category: 'Learning facilities',
  },
  {
    src: '/images/Science_labolatory.jpeg',
    alt: 'Science laboratory',
    category: 'Learning facilities',
  },
  {
    src: '/images/School_bus_1.jpeg',
    alt: 'Trinity Christian School bus',
    category: 'School transport',
  },
  {
    src: '/images/Field_under_construction.jpeg',
    alt: 'School field under construction',
    category: 'Campus development',
  },
  {
    src: '/new_Images/image_20261010_22225532.jpg',
    alt: 'Young learners enjoying a colourful early-learning classroom',
    category: 'Early learning',
  },
  {
    src: '/new_Images/image_20261011_063822.webp',
    alt: 'Pupils sharing their books as they learn side by side',
    category: 'Classroom learning',
  },
  {
    src: '/new_Images/image_20261011_062828.webp',
    alt: 'Learners enjoying playtime together in the school playground',
    category: 'Play and recreation',
  },
  {
    src: '/new_Images/image_20261010_222111125528.jpg',
    alt: 'Pupils getting hands-on with computers in the ICT lab',
    category: 'ICT and technology',
  },
  {
    src: '/new_Images/image_20261010_225222512_2.jpg',
    alt: 'The school buses ready for the day',
    category: 'School transport',
  },
  {
    src: '/new_Images/image_20261010_225512.jpg',
    alt: 'A look at the school buildings from the entrance',
    category: 'Campus',
  },
  {
    src: '/new_Images/image_20261010_225521.jpg',
    alt: 'A pupil settling in for class',
    category: 'Classroom learning',
  },
  {
    src: '/new_Images/image_20261010_225521_1.webp',
    alt: 'Learning beyond books: online visuals bring new ideas to life',
    category: 'ICT and technology',
  },
  {
    src: '/new_Images/image_20261010_2322225524.jpg',
    alt: 'Colourful wall art brightens the early-learning room',
    category: 'Early learning',
  },
  {
    src: '/new_Images/image_202610102212_225523.jpg',
    alt: 'Learning together in the school computer lab',
    category: 'ICT and technology',
  },
  {
    src: '/new_Images/image_20261011_061808.webp',
    alt: 'A cheerful place for little ones to learn together',
    category: 'Early learning',
  },
  {
    src: '/new_Images/image_20261011_061808_1.webp',
    alt: 'A shaded play area in the school grounds',
    category: 'Play and recreation',
  },
  {
    src: '/new_Images/image_20261011_062024.webp',
    alt: 'A table in the early-learning classroom',
    category: 'Early learning',
  },
  {
    src: '/new_Images/image_20261011_062026.webp',
    alt: 'Classwork keeps pupils busy in the classroom',
    category: 'Classroom learning',
  },
  {
    src: '/new_Images/image_20261011_062026_1.webp',
    alt: 'Pupils take their places for a lesson',
    category: 'Classroom learning',
  },
  {
    src: '/new_Images/image_20261011_062028.webp',
    alt: 'Bright classroom displays make learning inviting',
    category: 'Learning spaces',
  },
  {
    src: '/new_Images/image_20261011_062814.webp',
    alt: 'A covered courtyard gives pupils space to play',
    category: 'Play and recreation',
  },
  {
    src: '/new_Images/image_20261011_062858.webp',
    alt: 'Pupils learning together around the table',
    category: 'Classroom learning',
  },
  {
    src: '/new_Images/image_20261011_063805.webp',
    alt: 'Reading together in the classroom',
    category: 'Classroom learning',
  },
  {
    src: '/new_Images/image_20261011_063815.webp',
    alt: 'A pupil at her desk in class',
    category: 'Classroom learning',
  },
]

export default galleryImages
