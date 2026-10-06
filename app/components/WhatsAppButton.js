import { FaWhatsapp } from 'react-icons/fa'
import { createSchoolWhatsAppUrl } from '../data/contactLinks'

export default function WhatsAppButton() {
  return (
    <a
      href={createSchoolWhatsAppUrl('Hello Trinity Christian School, I would like to make an enquiry.')}
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Message Trinity Christian School on WhatsApp'
      className='fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25d366] px-4 py-3 font-semibold text-white shadow-lg transition hover:bg-[#1fb85a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128c46] sm:bottom-7 sm:right-7'
    >
      <FaWhatsapp aria-hidden='true' size={23} />
      <span className='hidden sm:inline'>Chat on WhatsApp</span>
    </a>
  )
}
