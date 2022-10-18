import './index.css'
const ListItem = ({title, location, workingHours, tags, company}) => {
  return (
      <li className="list-element SafetyWing">
          <img className="list-img safety-wing-img" src="/companiesLogo/SafetyWing.png" alt="company logo"/>
          <div className="job-info">
              <a href="#">
                  <h4 className="job-name">
                      {title} at {company}
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
                  {company}
              </h5>
          </div>
      </li>
  )
}
export default ListItem