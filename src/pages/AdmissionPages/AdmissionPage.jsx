import React from 'react'
import AdmissionOverview from '../../components/admission/AdmissionOverview'
import AdmissionHero from '../../components/admission/AdmissionHero'
import AdmissionNavigation from '../../components/admission/AdmissionNavigat'
import AdmissionRegistration from '../../components/admission/AdmissionRegistration'

const AdmissionPage = () => {
  return (
    <div>
      <AdmissionHero />
      <AdmissionNavigation />
      <AdmissionOverview />
      <AdmissionRegistration />
    </div>
  )
}

export default AdmissionPage