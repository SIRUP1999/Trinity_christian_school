const schoolWhatsAppNumber = '233247995835'

export function createSchoolWhatsAppUrl(message) {
  return `https://wa.me/${schoolWhatsAppNumber}?text=${encodeURIComponent(message)}`
}
