import React, { ReactElement } from 'react';
import type { NextPage } from 'next';
import { HeadingXXLarge } from 'baseui/typography';
import Layout from '../components/layout';
import Section from '../components/atoms/section';
import FindPositionSection from '../content/find-position.section';
import CategoriesSection from '../content/categories.section';
// import CustomerSection from '../content/customer.section';


const Home: NextPage = function () {
  return (
    <>
      <FindPositionSection />
      <CategoriesSection />
      <Section id="skills" style={{ minHeight: '100vh', padding: '120px 0' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          marginBottom: '80px'
        }}>
          {/* Left Column - Heading */}
          <h2 style={{
            fontSize: '48px',
            fontWeight: 700,
            lineHeight: '1.2',
            margin: 0
          }}>
            Get the skills you need for a job that is in demand<span style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              backgroundColor: '#97c680',
              marginLeft: '8px',
              verticalAlign: 'middle'
            }}></span>
          </h2>
          
          {/* Right Column - Description */}
          <p style={{
            fontSize: '20px',
            lineHeight: '1.6',
            color: '#333',
            margin: 0,
            paddingTop: '10px'
          }}>
            The modern labor market dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          {/* Left Column - Skills List */}
          <div>

            {/* Skills List */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '40px',
              position: 'relative',
              paddingLeft: '40px'
            }}>
              {/* Dotted line connecting icon centers */}
              <div style={{
                position: 'absolute',
                left: '80px', // Align with icon centers
                top: '20px',
                bottom: '20px',
                width: '1px',
                background: 'repeating-linear-gradient(to bottom, #97c680, #97c680 3px, transparent 3px, transparent 6px)',
                zIndex: 1
              }}></div>
              {[
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  ),
                  title: 'Leadership',
                  description: 'Fully committed to the success company.'
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  ),
                  title: 'Responsibility',
                  description: 'Employees will always be my top priority.'
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  ),
                  title: 'Flexibility',
                  description: 'The ability to switch is an important skill.'
                }
              ].map((skill, index) => (
                <div key={index} style={{
                  display: 'flex',
                  gap: '20px',
                  position: 'relative',
                  paddingLeft: '20px'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '1px solid #97c680',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: '#97c680',
                    padding: '8px',
                    position: 'relative',
                    zIndex: 2,
                    backgroundColor: 'white',
                    marginLeft: '40px'
                  }}>
                    {skill.icon}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: 600,
                      margin: '0 0 8px 0'
                    }}>
                      {skill.title}
                    </h3>
                    <p style={{
                      margin: 0,
                      color: '#666',
                      lineHeight: '1.6'
                    }}>
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div style={{
            backgroundColor: '#f9f9f9',
            borderRadius: '12px',
            padding: '60px 40px',
            position: 'relative',
            height: 'fit-content',
            marginTop:'-90px'
          }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 600,
              marginBottom: '20px'
            }}>
              What we do
            </h3>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#555',
              marginBottom: '40px'
            }}>
              We help ambitious professionals like you build in-demand skills and land your dream job.
            </p>
            
            <div style={{
              display: 'flex',
              gap: '30px',
              marginTop: '40px',
              paddingTop: '40px',
              borderTop: '1px solid #eee'
            }}>
              <div>
                <div style={{
                  fontSize: '36px',
                  fontWeight: 700,
                  color: '#97c680',
                  lineHeight: '1'
                }}>
                  5+
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#777',
                  marginTop: '8px'
                }}>
                  Years of Experience
                </div>
              </div>
              <div>
                <div style={{
                  fontSize: '36px',
                  fontWeight: 700,
                  color: '#97c680',
                  lineHeight: '1'
                }}>
                  50+
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#777',
                  marginTop: '8px'
                }}>
                  Types of Courses
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
    
      
      {/* <CustomerSection /> */}
    </>
  );
};

// @ts-ignore
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  );
};

export default Home;
