// import * as React from 'react';
// import styled from 'styled-components';
// import { useStyletron } from 'baseui';
// import { HeadingXLarge, HeadingMedium } from 'baseui/typography';
// import { Button, KIND, SHAPE, SIZE, ButtonProps } from 'baseui/button';
// import { ArrowLeft, ArrowRight } from 'baseui/icon';
// import Section from '../components/atoms/section';

// declare module 'styled-components' {
//   interface DefaultTheme {
//     // Add your theme types here if needed
//   }
// }

// type NavigationButtonProps = Omit<ButtonProps, 'onClick' | 'children'> & {
//   onClick: () => void;
//   children: React.ReactNode;
// };

// interface CustomerImageProps {
//   $src: string;
//   $alt?: string;
// }

// interface Testimonial {
//   id: number;
//   name: string;
//   role: string;
//   text: string;
//   image: string;
// }

// // Styled Components
// const StyledButton = styled(Button)<{ $kind?: string }>`
//   background-color: white;
//   border: 1px solid #E5E7EB;
//   margin: 0 8px;
//   &:hover {
//     background-color: #F9FAFB;
//   }
// `;

// const NavigationButton: React.FC<NavigationButtonProps> = ({
//   onClick,
//   children,
//   kind = KIND.secondary,
//   shape = SHAPE.circle,
//   size = SIZE.compact,
//   ...rest
// }) => {
//   return (
//     <StyledButton
//       kind={kind}
//       shape={shape}
//       size={size}
//       onClick={onClick}
//       $kind={kind}
//       {...rest}
//     >
//       {children}
//     </StyledButton>
//   );
// };

// const TestimonialCard = styled.div`
//   padding: 24px;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   background: #fff;
//   min-width: 300px;
//   flex-shrink: 0;
// `;

// const StyledImage = styled.img`
//   width: 48px;
//   height: 48px;
//   border-radius: 50%;
//   object-fit: cover;
//   border: 2px solid #fff;
// `;

// const CustomerImage: React.FC<CustomerImageProps> = ({ $src, $alt = '' }) => (
//   <StyledImage src={$src} alt={$alt} />
// );

// const TestimonialText = styled.p`
//   font-size: 16px;
//   line-height: 1.6;
//   color: #333;
//   margin-bottom: 16px;
// `;

// const CustomerInfo = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 12px;
// `;

// const CustomerName = styled.h3`
//   font-size: 16px;
//   font-weight: 600;
//   color: #111827;
//   margin: 0;
// `;

// const CustomerRole = styled.p`
//   font-size: 14px;
//   color: #6B7280;
//   margin: 0;
// `;

// // Main Component
// const CustomerSection = () => {
//   const [css] = useStyletron();
//   const scrollContainerRef = React.useRef<HTMLDivElement>(null);
//   const sliderRef = React.useRef<HTMLDivElement>(null);

//   const testimonials: Testimonial[] = [
//     {
//       id: 1,
//       name: 'John Doe',
//       role: 'CEO',
//       text: 'This is a great product that has helped our business grow tremendously.',
//       image: '/images/customer1.jpg',
//     },
//     {
//       id: 2,
//       name: 'Jane Smith',
//       role: 'CTO',
//       text: 'The customer service is exceptional and always goes above and beyond.',
//       image: '/images/customer2.jpg',
//     },
//     {
//       id: 3,
//       name: 'Bob Johnson',
//       role: 'Developer',
//       text: 'The documentation is clear and the API is easy to work with.',
//       image: '/images/customer3.jpg',
//     },
//   ];

//   const scrollToCard = React.useCallback((direction: 'prev' | 'next') => {
//     if (!scrollContainerRef.current || !sliderRef.current) return;

//     const containerWidth = scrollContainerRef.current.offsetWidth;
//     const currentScroll = scrollContainerRef.current.scrollLeft;
//     const firstChild = sliderRef.current.children[0] as HTMLElement;
//     const cardWidth = firstChild.offsetWidth + 16; // Include gap

//     if (direction === 'prev') {
//       scrollContainerRef.current.scrollLeft = Math.max(0, currentScroll - cardWidth);
//     } else {
//       scrollContainerRef.current.scrollLeft = Math.min(
//         sliderRef.current.scrollWidth - containerWidth,
//         currentScroll + cardWidth
//       );
//     }
//   }, []);

//   const prevTestimonial = React.useCallback(() => scrollToCard('prev'), [scrollToCard]);
//   const nextTestimonial = React.useCallback(() => scrollToCard('next'), [scrollToCard]);

//   return (
//     <Section 
//       id="customer"
//       style={{ backgroundColor: '#fff' }}
//       paddingTop={['80px']}
//       paddingBottom={['80px']}
//     >
//       <div className={css({
//         maxWidth: '1200px',
//         margin: '0 auto',
//         padding: '0 24px',
//       })}>
//         <div className={css({
//           textAlign: 'center',
//           marginBottom: '35px',
//         })}>
//           <HeadingXLarge 
//             $style={{
//               marginBottom: 0,
//               fontWeight: 700,
//               fontFamily: 'Inter, sans-serif',
//             }}
//           >
//             What our customers say
//             <span className={css({ 
//               color: '#10B981',
//               fontWeight: 700,
//             })}>.</span>
//           </HeadingXLarge>
//           <HeadingMedium 
//             $style={{ 
//               marginBottom: 0, 
//               color: '#6B7280' 
//             }}
//           >
//             What our customers are saying
//           </HeadingMedium>
//         </div>

//         <div 
//           ref={scrollContainerRef}
//           className={css({
//             position: 'relative',
//             overflowX: 'auto',
//             overflowY: 'hidden',
//             padding: '16px 0',
//             margin: '0 -24px',
//             scrollBehavior: 'smooth',
//             '&::-webkit-scrollbar': {
//               display: 'none',
//             },
//             msOverflowStyle: 'none',
//             scrollbarWidth: 'none',
//           })}
//         >
//           <div 
//             ref={sliderRef}
//             className={css({
//               display: 'flex',
//               transition: 'transform 0.5s ease-out',
//               padding: '16px 24px',
//               gap: '16px',
//               width: 'fit-content',
//             })}
//           >
//             {testimonials.map((testimonial) => (
//               <TestimonialCard key={testimonial.id}>
//                 <TestimonialText>"{testimonial.text}"</TestimonialText>
//                 <CustomerInfo>
//                   <CustomerImage $src={testimonial.image} $alt={testimonial.name} />
//                   <div>
//                     <CustomerName>{testimonial.name}</CustomerName>
//                     <CustomerRole>{testimonial.role}</CustomerRole>
//                   </div>
//                 </CustomerInfo>
//               </TestimonialCard>
//             ))}
//           </div>
//         </div>

//         <div className={css({
//           display: 'flex',
//           justifyContent: 'center',
//           gap: '16px',
//           marginTop: '32px',
//         })}>
//           <NavigationButton 
//             kind={KIND.secondary}
//             shape={SHAPE.circle}
//             size={SIZE.compact}
//             onClick={prevTestimonial}
//           >
//             <ArrowLeft size={24} />
//           </NavigationButton>
//           <NavigationButton 
//             kind={KIND.secondary}
//             shape={SHAPE.circle}
//             size={SIZE.compact}
//             onClick={nextTestimonial}
//           >
//             <ArrowRight size={24} />
//           </NavigationButton>
//         </div>
//       </div>
//     </Section>
//   );
// };

// export default CustomerSection;
