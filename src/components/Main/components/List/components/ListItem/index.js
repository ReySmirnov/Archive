import './index.css'

const ListItem = ({id, title, location, workingHours, tags, company, companyData}) => {
  return (
      <li className="list-element SafetyWing">
          <img className="list-img safety-wing-img" src="/companiesLogo/SafetyWing.png" alt="company logo"/>
          <div className="job-info">
              <a href={`/job/${id}`}>
                  <h4 className="job-name">
                      {title} at {companyData.title}
                  </h4>
              </a>
              <div className="job-tags">
                  <div className="tag">
                      <a href="#"> {location} </a>
                      <a href="#"> {workingHours} </a>
                      {tags.map(tag => <a href="#"> {tag} </a>)}
                  </div>
              </div>
          </div>
          <div className="company-name">
              <h5>
                  <a href={`/company/${companyData.id}`}>
                  {companyData.title}
                  </a>
              </h5>
          </div>
      </li>
  )
}
export default ListItem