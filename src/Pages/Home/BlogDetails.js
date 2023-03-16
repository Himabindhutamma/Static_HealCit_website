import React from "react";
import {Link} from 'react-router-dom'
import { Box, Divider, TextField } from "@mui/material";
import { Grid } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ForumIcon from '@mui/icons-material/Forum';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import { connect } from "react-redux";

const LatestPost=[
  {
    image:'https://thumbs.dreamstime.com/b/smiling-female-doctor-holding-medical-records-lab-coat-her-office-clipboard-looking-camera-56673035.jpg',heading:'Healcit – Making your clinic painless visit?',date:'4 Dec 2019'
  },
  {
    image:'https://thumbs.dreamstime.com/b/smiling-female-doctor-holding-medical-records-lab-coat-her-office-clipboard-looking-camera-56673035.jpg',heading:'What are the benefits of Online Doctor Booking?',date:'3 Dec 2019'
  },
  {
    image:'https://thumbs.dreamstime.com/b/smiling-female-doctor-holding-medical-records-lab-coat-her-office-clipboard-looking-camera-56673035.jpg',heading:'Benefits of consulting with an Online Doctor',date:'3 Dec 2019'
  },
  {
    image:'https://thumbs.dreamstime.com/b/smiling-female-doctor-holding-medical-records-lab-coat-her-office-clipboard-looking-camera-56673035.jpg',heading:'5 Great reasons to use an Online Doctor',date:'2 Dec 2019'
  },
  {
    image:'https://thumbs.dreamstime.com/b/smiling-female-doctor-holding-medical-records-lab-coat-her-office-clipboard-looking-camera-56673035.jpg',heading:'Online Doctor Appointment Scheduling',date:'1 Dec 2019'
  },
]
const BlogCategories=[
  {head:'Cardiology',para:'(69)'},
  {head:'Health Care',para:'(27)'},
  {head:'Nutritions',para:'(41)'},
  {head:'Health Tips',para:'(16)'},
  {head:'Medical Research',para:'(07)'},
  {head:'Health Treatment',para:'(55)'},
]
const BlogTags=[
  {label:'Chindren'},{label:'Disease'},{label:'Appointment'},{label:'Booking'},{label:'Kids'},{label:'Health'},{label:'Family'},{label:'Tips'},{label:'Schedule'},{label:'Treatment'},{label:'Dr'},{label:'Clinic'},{label:'Online'},{label:'Health Care'},{label:'Consulting'},{label:'Doctors'},{label:'Neurology'},{label:'Dentists'},{label:'Specialist'},
]

const BlogDetails = (userId) => {
  console.log(userId)
  return (
    <>
<Grid container spacing={0}>
  <Grid item xs={12} md={8} lg={8} >
    <Box className="blog-para">
    <img src='https://thumbs.dreamstime.com/b/doctor-stethoscope-hand-hospital-background-gown-94227568.jpg'/>
    <h1>Healcit – Making your clinic painless visit?</h1>
    <div className="blog-details">
      <h4 className="blog-icons" >Dr. Darren Elder</h4>
      <h4 className="blog-icons" ><CalendarMonthIcon/>4 Dec 2019</h4>
      <h4 className="blog-icons"> <ForumIcon/>12 Comments</h4>
      <h4 className="blog-icons" > <LocalOfferIcon/> Health Tips</h4>
    </div>
    <div style={{lineHeight:'30.5px',fontSize:'20px'}}>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    </p>
    <p>
    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
    </p>
    </div>
  
    </Box>
    <Box className="blog-para">
      <h4>Share the post</h4>
      <Divider orientation="row"/>
    <span>
      <FacebookIcon/>
      <InstagramIcon/>
      <LinkedInIcon/>
      <YouTubeIcon/>
    </span>
    </Box>
    <Box className="blog-para">
      <h4>About Author</h4>
      <Divider orientation="row"/>
      <h4 style={{paddingTop:'15px'}}>Dr. Darren Elder</h4>
      <p style={{lineHeight:'30.5px',fontSize:'20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
    </Box>
  </Grid>
  <Grid item xs={12} md={4} lg={4}>
<Box className="blog-para">
<TextField 
fullWidth
placeholder="Search..."
/>
</Box>
<Box className="blog-para">
  <h4>Latest Posts</h4>
  <Divider orientation="row"/>
{LatestPost.map((i,j)=>{
  return(
    <>
    <div style={{display:'flex',paddingTop:'15px'}}>
      <img style={{height:'85px',paddingRight:'15px'}} src='https://thumbs.dreamstime.com/b/smiling-female-doctor-holding-medical-records-lab-coat-her-office-clipboard-looking-camera-56673035.jpg'/>
      <span>
      <a> <Link to='#'>  <h4>{i.heading} </h4> </Link> </a>
  <p>{i.date}</p>
      </span>
     
</div>
    </>
  )
})}

</Box>
<Box className="blog-para">
<h4>Blog Categories</h4>
  <Divider orientation="row"/>
{BlogCategories.map((i,j)=>{
  return(
    <>
    <div style={{display:'flex',justifyContent:'space-between',paddingTop:'15px'}}>
    <a> <h4>{i.head} </h4> </a>
    <p style={{display:'flex',alignItems:'center',fontSize:'20px',marginBottom:'0px'}}>{i.para}</p>
  </div>
    </>
  )
})}
  
</Box>
<Box className="blog-para">
<h4>Tags</h4>
  <Divider orientation="row"/>
  <div>
    {BlogTags.map((i,j)=>{
      return(
        <>
        <div style={{paddingRight:'15px',display:'inline-block'}} >
    <Link to='#'>
      <h4 style={{border:'1px solid lightgray',marginTop:'15px',padding:'5px'}}>{i.label}</h4>
    </Link>
  </div>
        </>
      )
    })}
    
  

  </div>
  </Box>
  </Grid>

</Grid>
    </>
  );
};

const mapStateToProps=(state)=>{
  console.log(state);
  return{
    userId:state.User.userId_users
  }
}
export default connect(mapStateToProps)(BlogDetails);
