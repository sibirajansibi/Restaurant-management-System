import React from 'react';
import Button from '../components/Button';

const AboutUsPage = () => {
  const containerStyle = {
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
  };

  const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, #a5f3d0 0%, #89cff0 50%, #ffb6c1 100%)',
    backgroundSize: '400% 400%',
    animation: 'gradient 15s ease infinite',
    zIndex: -1,
  };

  const contentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '80px 20px',
    position: 'relative',
    zIndex: 1,
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '50px',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '15px',
    color: '#333',
  };

  const subtitleStyle = {
    fontSize: '1.2rem',
    color: '#555',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6',
  };

  const sectionStyle = {
    marginBottom: '80px',
  };

  const sectionTitleStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '30px',
    color: '#333',
    position: 'relative',
    display: 'inline-block',
  };

  const cardStyle = {
    padding: '40px',
    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.05), -10px -10px 30px rgba(255, 255, 255, 0.8)',
    marginBottom: '40px',
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    color: '#555',
    lineHeight: '1.8',
    marginBottom: '20px',
  };

  const teamSectionStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '30px',
    margin: '40px 0',
  };

  const teamMemberStyle = {
    padding: '30px',
    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    boxShadow: '8px 8px 20px rgba(0, 0, 0, 0.05), -8px -8px 20px rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const teamMemberHoverStyle = {
    transform: 'translateY(-10px)',
    boxShadow: '12px 12px 30px rgba(0, 0, 0, 0.08), -12px -12px 30px rgba(255, 255, 255, 0.9)',
  };

  const [hoveredMember, setHoveredMember] = React.useState(null);

  const imageStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    margin: '0 auto 20px',
    border: '5px solid rgba(255, 255, 255, 0.7)',
    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.1)',
  };

  const memberNameStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '10px',
    color: '#333',
  };

  const memberRoleStyle = {
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '15px',
  };

  const memberBioStyle = {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.6',
  };

  const timelineStyle = {
    position: 'relative',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px 0',
  };

  const timelineLineStyle = {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '50%',
    width: '4px',
    background: 'linear-gradient(to bottom, #a5f3d0, #89cff0, #ffb6c1)',
    transform: 'translateX(-50%)',
    borderRadius: '4px',
  };

  const timelineItemStyle = {
    position: 'relative',
    margin: '40px 0',
    width: '50%',
    paddingRight: '40px',
  };

  const timelineItemRightStyle = {
    left: '50%',
    paddingRight: '0',
    paddingLeft: '40px',
  };

  const timelineContentStyle = {
    padding: '30px',
    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    boxShadow: '8px 8px 20px rgba(0, 0, 0, 0.05), -8px -8px 20px rgba(255, 255, 255, 0.8)',
    position: 'relative',
  };

  const timelineDotStyle = {
    position: 'absolute',
    top: '20px',
    right: '-8px',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #a5f3d0, #89cff0)',
    boxShadow: '0 0 10px rgba(137, 207, 240, 0.5)',
  };

  const timelineDotRightStyle = {
    right: 'auto',
    left: '-8px',
  };

  const timelineYearStyle = {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: '#333',
    marginBottom: '10px',
  };

  const timelineTitleStyle = {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '10px',
  };

  const timelineTextStyle = {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.6',
  };

  const teamMembers = [
    {
      name: 'Chef LEO',
      role: 'Executive Chef',
      image: 'https://randomuser.me/api/cartoons/women/65.jpg',
      bio: 'With over 15 years of culinary experience across Europe and Asia, Chef Maria brings a unique fusion of flavors to our restaurant.'
    },
    {
      name: 'David Billa',
      role: 'Restaurant Manager',
      image: 'https://randomuser.me/api/cartoons/men/22.jpg',
      bio: 'David ensures that every aspect of your dining experience exceeds expectations, from service to ambiance.'
    },
   
  ];

  const historyTimeline = [
    {
      year: '2010',
      title: 'The Beginning',
      text: 'Our restaurant was founded with a simple mission: to create memorable dining experiences through exceptional food and service.',
      isRight: false
    },
    {
      year: '2013',
      title: 'First Recognition',
      text: 'We received our first culinary award, recognizing our commitment to quality and innovation in the local food scene.',
      isRight: true
    },
    {
      year: '2016',
      title: 'Expansion',
      text: 'Due to growing popularity, we expanded our dining space and introduced our signature tasting menu that continues to evolve seasonally.',
      isRight: false
    },
    {
      year: '2020',
      title: 'Adapting & Innovating',
      text: 'We embraced new challenges by enhancing our takeout offerings and creating special at-home dining experiences for our guests.',
      isRight: true
    },
    {
      year: '2023',
      title: 'Today',
      text: 'We continue to push culinary boundaries while staying true to our roots, serving the community with passion and creativity.',
      isRight: false
    }
  ];

  return (
    <div style={containerStyle}>
      <div style={backgroundStyle}></div>
      
      <div style={contentStyle}>
        <header style={headerStyle}>
          <h1 style={titleStyle}>About Us</h1>
          <p style={subtitleStyle}>
            Discover the story, people, and passion behind our restaurant and what makes our dining experience truly special.
          </p>
        </header>

        <section style={sectionStyle}>
          <div style={cardStyle}>
            <h2 style={sectionTitleStyle}>
              Our Story
              <div style={{
                position: 'absolute',
                bottom: '-10px',
                left: '0',
                width: '60px',
                height: '4px',
                background: 'linear-gradient(90deg, #a5f3d0, #89cff0, #ffb6c1)',
                borderRadius: '10px'
              }}></div>
            </h2>
            <p style={paragraphStyle}>
              Founded in 2010, our restaurant began as a small family-owned establishment with a passion for creating exceptional dining experiences. What started as a modest café has evolved into a beloved culinary destination in the heart of the city.
            </p>
            <p style={paragraphStyle}>
              Our journey has been guided by a simple philosophy: to serve food that not only satisfies hunger but creates lasting memories. We believe in the power of a well-prepared meal to bring people together and celebrate life's moments, both big and small.
            </p>
            <p style={paragraphStyle}>
              Over the years, we've remained committed to sourcing the finest ingredients, supporting local producers, and crafting dishes that honor traditional techniques while embracing innovation. Our menu evolves with the seasons, ensuring that each visit offers something new to discover.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>
            Meet Our Team
            <div style={{
              position: 'absolute',
              bottom: '-10px',
              left: '0',
              width: '60px',
              height: '4px',
              background: 'linear-gradient(90deg, #a5f3d0, #89cff0, #ffb6c1)',
              borderRadius: '10px'
            }}></div>
          </h2>
          
          <div style={teamSectionStyle}>
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                style={{
                  ...teamMemberStyle, 
                  ...(hoveredMember === index ? teamMemberHoverStyle : {})
                }}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <img src={member.image} alt={member.name} style={imageStyle} />
                <h3 style={memberNameStyle}>{member.name}</h3>
                <p style={memberRoleStyle}>{member.role}</p>
                <p style={memberBioStyle}>{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>
            Our Journey
            <div style={{
              position: 'absolute',
              bottom: '-10px',
              left: '0',
              width: '60px',
              height: '4px',
              background: 'linear-gradient(90deg, #a5f3d0, #89cff0, #ffb6c1)',
              borderRadius: '10px'
            }}></div>
          </h2>
          
          <div style={timelineStyle}>
            <div style={timelineLineStyle}></div>
            
            {historyTimeline.map((item, index) => (
              <div 
                key={index} 
                style={{
                  ...timelineItemStyle, 
                  ...(item.isRight ? timelineItemRightStyle : {})
                }}
              >
                <div style={timelineContentStyle}>
                  <div 
                    style={{
                      ...timelineDotStyle, 
                      ...(item.isRight ? timelineDotRightStyle : {})
                    }}
                  ></div>
                  <div style={timelineYearStyle}>{item.year}</div>
                  <h3 style={timelineTitleStyle}>{item.title}</h3>
                  <p style={timelineTextStyle}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div style={{
          textAlign: 'center',
          margin: '60px 0',
        }}>
          <Button 
            variant="primary" 
            size="large" 
            onClick={() => window.location.href = '/contact'}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
