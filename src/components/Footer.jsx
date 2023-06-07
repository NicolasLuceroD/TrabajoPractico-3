import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import 'mdb-react-ui-kit/dist/css/mdb.min.css';
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import "../Css/Footer.css"
  
  
  
  const Footer = () => {
    return (
  
      
      <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
      <MDBContainer className='pt-4'>
        <section className='mb-4'>
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            href='https://www.facebook.com/'
            role='button'
            target='_blank'
          >
            <MDBIcon fab className='fab fa-facebook-f' />
          </MDBBtn>
          
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            href='https://twitter.com/?lang=es'
            role='button'
            target='_blank'
          >
            <MDBIcon fab className='fa-twitter' />
          </MDBBtn>
  
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"          
            href='https://www.instagram.com/nicolucerodelllanos/?next=%2F'
            role='button'
            target='_blank'
          >
            <MDBIcon fab className='fa-instagram' />
          </MDBBtn>
  
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            href='https://www.linkedin.com/in/nicolas-lucero-9b87b2236/'
            role='button'
            target='_blank'
          >
            <MDBIcon fab className='fa-linkedin' />
          </MDBBtn>
  
          <MDBBtn
            rippleColor="darker"
            color='link'
            floating
            size="lg"  
            href='https://github.com/NicolasLuceroD'
            role='button'
            target='_blank'
          >
            <MDBIcon fab className='fa-github' />
          </MDBBtn>
        </section>
      </MDBContainer>
  
      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        © 2023 Copyright:  Del Llanos DEV
      
      </div>
    </MDBFooter>
    
    )
  }
  
  export default Footer;