export const schoolProfile = {
  name: 'Trinity Christian School Nsoatre',
  shortName: 'Trinity Christian School',
  tagline: 'Christ-centred learning for every child',
  addressLine: 'Behind Adwinsa Hotel',
  locality: 'Nsoatre',
  region: 'Bono Region',
  country: 'Ghana',
  fullAddress: 'Behind Adwinsa Hotel, Nsoatre, Bono Region, Ghana',
  coordinates: '7.411,-2.4499722',
  phonePrimary: '+233 24 799 5835',
  phoneSecondary: '+233 24 929 8640',
  email: 'trinitychristianschoolnsoatre@gmail.com',
}

export const schoolCoordinates = schoolProfile.coordinates

export const schoolMapEmbedUrl = `https://www.google.com/maps?q=${schoolCoordinates}&t=k&z=18&output=embed`

export const schoolDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${schoolCoordinates}`
