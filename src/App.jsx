
import Card from './components/Card'

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full-time",
    tag2: "Fresher",
    pay: "$45/hr",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "10 weeks ago",
    post: "UI/UX Designer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "3 days ago",
    post: "DevOps Intern",
    tag1: "Internship",
    tag2: "Fresher",
    pay: "$30/hr",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "1 week ago",
    post: "Data Analyst",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Machine Learning Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "Nvidia",
    datePosted: "6 days ago",
    post: "React Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$48/hr",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "8 weeks ago",
    post: "Embedded Systems Engineer",
    tag1: "Full-time",
    tag2: "Fresher",
    pay: "$40/hr",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/spotify.com",
    companyName: "Spotify",
    datePosted: "1 day ago",
    post: "Cybersecurity Analyst",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$52/hr",
    location: "Stockholm, Sweden"
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    companyName: "Uber",
    datePosted: "5 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "San Francisco, USA"
  }
];

  
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
     
        return <div key = {idx}>
          <Card company={elem.companyName} brand={elem.brandLogo} date={elem.datePosted} role={elem.post} time={elem.tag1} level={elem.tag2} salary={elem.pay} loc={elem.location}/>
        </div>
      })}
    </div>
  )
}

export default App