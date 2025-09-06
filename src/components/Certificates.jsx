import React from 'react'
import './Certificates.css'

const Certificates = () => {
  return (
    <div className='myCertificates'>
      <div className="certificate">
        <div className="role"><h2 className='certificate_desc'>Career Essentials in Data Analysis</h2>
        <h2 className='pb-5'>by Microsoft and LinkedIn</h2>
        <p>Learnt the role of a data analyst and how it differs from a data scientist. Understood the techniques for cleaning and preprocessing data</p></div>
        <div className="preview">
          <img src="DataAnalysisCertificate.jpg" alt="" />
        </div>
      </div>
      <div className="certificate">
        <div className="role"><h2 className='certificate_desc'>Data Scientist</h2>
        <h2 className='pb-5'>by Acmegrad</h2>
        <p>Learnt cleaning and preprocessing of data, statistical analysis and visualizations using pandas, NumPy and Matplotlib. Implementation of various machine learning models  </p></div>
        <div className="preview">
          <img src="AGI24080175_Internship Completion (1).jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Certificates


