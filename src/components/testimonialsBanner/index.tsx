// import React from "react";
// import BannerDivider from "../../atomic-elements/bannerDivider";
// import GradientText from "../../atomic-elements/gradientText";
// import { Box, Grid, Typography } from "@mui/material";
// import StyledPagination from "../../atomic-elements/pagenation";

// const TESTIMONIALS_DATA = [
//   {
//     id: 1,
//     name: "Terry Wolvert",
//     position: "CEO",
//     company: "Digitalrep, LLC, USA",
//     content:
//       "“Arus and Elan have been invaluable software developers and partners who never miss deadlines. The entire Arus group seamlessly integrated with our internal development staff to deliver best-in-class solutions. The Arus partnership has delivered invaluable solutions on time and to the highest standard.”",
//   },
//   {
//     id: 2,
//     name: "Terry Wolvert",
//     position: "CEO",
//     company: "Digitalrep, LLC, USA",
//     content:
//       "“Arus and Elan have been invaluable software developers and partners who never miss deadlines. The entire Arus group seamlessly integrated with our internal development staff to deliver best-in-class solutions. The Arus partnership has delivered invaluable solutions on time and to the highest standard.”",
//   },
//   {
//     id: 3,
//     name: "Terry Wolvert",
//     position: "CEO",
//     company: "Digitalrep, LLC, USA",
//     content:
//       "“Arus and Elan have been invaluable software developers and partners who never miss deadlines. The entire Arus group seamlessly integrated with our internal development staff to deliver best-in-class solutions. The Arus partnership has delivered invaluable solutions on time and to the highest standard.”",
//   },
//   {
//     id: 4,
//     name: "Terry Wolvert",
//     position: "CEO",
//     company: "Digitalrep, LLC, USA",
//     content:
//       "“Arus and Elan have been invaluable software developers and partners who never miss deadlines. The entire Arus group seamlessly integrated with our internal development staff to deliver best-in-class solutions. The Arus partnership has delivered invaluable solutions on time and to the highest standard.”",
//   },
//   {
//     id: 5,
//     name: "Terry Wolvert",
//     position: "CEO",
//     company: "Digitalrep, LLC, USA",
//     content:
//       "“Arus and Elan have been invaluable software developers and partners who never miss deadlines. The entire Arus group seamlessly integrated with our internal development staff to deliver best-in-class solutions. The Arus partnership has delivered invaluable solutions on time and to the highest standard.”",
//   },
//   {
//     id: 6,
//     name: "Terry Wolvert",
//     position: "CEO",
//     company: "Digitalrep, LLC, USA",
//     content:
//       "“Arus and Elan have been invaluable software developers and partners who never miss deadlines. The entire Arus group seamlessly integrated with our internal development staff to deliver best-in-class solutions. The Arus partnership has delivered invaluable solutions on time and to the highest standard.”",
//   },
// ];

// // Common styles
// const textStyles = {
//   name: {
//     color: "#000",
//     fontSize: "12px",
//     fontStyle: "normal",
//     fontWeight: 600,
//     lineHeight: "20px",
//     letterSpacing: "0.2px",
//   },
//   position: {
//     mb: "4px",
//     background: "linear-gradient(180deg, #FFD12B 0%, #D78E28 100%)",
//     backgroundClip: "text",
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent",
//     fontSize: "12px",
//     fontStyle: "normal",
//     fontWeight: 600,
//     lineHeight: "20px",
//     letterSpacing: "0.2px",
//   },
//   content: {
//     maxWidth: "304px",
//     color: "#000",
//     fontSize: "12px",
//     fontStyle: "normal",
//     fontWeight: 400,
//     lineHeight: "20px",
//     letterSpacing: "0.2px",
//   },
//   company: {
//     color: "#000",
//     fontSize: "12px",
//     fontStyle: "normal",
//     fontWeight: 400,
//     lineHeight: "20px",
//     letterSpacing: "0.2px",
//   },
// };

// // Star rating component
// const StarRating: React.FC = () => (
//   <Box>
//     {[1, 2, 3, 4, 5].map((key) => (
//       <svg
//         key={key}
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//       >
//         <path
//           d="M9.15323 5.408C10.4202 3.136 11.0532 2 12.0002 2C12.9472 2 13.5802 3.136 14.8472 5.408L15.1752 5.996C15.5352 6.642 15.7152 6.965 15.9952 7.178C16.2752 7.391 16.6252 7.47 17.3252 7.628L17.9612 7.772C20.4212 8.329 21.6502 8.607 21.9432 9.548C22.2352 10.488 21.3972 11.469 19.7202 13.43L19.2862 13.937C18.8102 14.494 18.5712 14.773 18.4642 15.117C18.3572 15.462 18.3932 15.834 18.4652 16.577L18.5312 17.254C18.7842 19.871 18.9112 21.179 18.1452 21.76C17.3792 22.341 16.2272 21.811 13.9252 20.751L13.3282 20.477C12.6742 20.175 12.3472 20.025 12.0002 20.025C11.6532 20.025 11.3262 20.175 10.6722 20.477L10.0762 20.751C7.77323 21.811 6.62123 22.341 5.85624 21.761C5.08924 21.179 5.21623 19.871 5.46923 17.254L5.53523 16.578C5.60723 15.834 5.64323 15.462 5.53523 15.118C5.42923 14.773 5.19024 14.494 4.71424 13.938L4.28024 13.43C2.60324 11.47 1.76523 10.489 2.05723 9.548C2.34923 8.607 3.58024 8.328 6.04024 7.772L6.67624 7.628C7.37524 7.47 7.72424 7.391 8.00524 7.178C8.28624 6.965 8.46523 6.642 8.82523 5.996L9.15323 5.408Z"
//           fill="#FFCD17"
//         />
//       </svg>
//     ))}
//   </Box>
// );

// // Company badge component
// const CompanyBadge: React.FC<{ company: string }> = ({ company }) => (
//   <Box
//     className="companyBadge"
//     sx={{
//       display: "flex",
//       width: "166px",
//       padding: "10px",
//       justifyContent: "center",
//       alignItems: "center",
//       gap: "10px",
//       borderRadius: "20px",
//       background: "#F9F2D9",
//     }}
//   >
//     <Typography sx={textStyles.company}>{company}</Typography>
//   </Box>
// );

// // Testimonial card component
// const TestimonialCard: React.FC<{
//   name: string;
//   position: string;
//   content: string;
//   company: string;
// }> = ({ name, position, content, company }) => (
//   <Item>
//     <Box>
//       <Typography sx={textStyles.name}>{name}</Typography>
//       <Typography sx={textStyles.position}>{position}</Typography>
//       <Typography sx={textStyles.content}>{content}</Typography>

//       <Box
//         className="starRatingBox"
//         mt={1}
//         gap={"10px"}
//         display={"flex"}
//         justifyContent={"space-between"}
//         alignItems={"center"}
//       >
//         <StarRating />
//         <CompanyBadge company={company} />
//       </Box>
//     </Box>
//   </Item>
// );

// // Main component
// const TestimonialsBanner: React.FC = () => {
//   return (
//     <Box>
//       <BannerDivider label="Testimonials" />
//       <center>
//         <Box mb={1}>
//           <GradientText labels={["Try", "Trust", "Tell"]} />
//         </Box>
//       </center>

//       <Box width={"100%"} maxWidth={"1400px"} mx={"auto"} mt={"26px"}>
//         <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
//           {TESTIMONIALS_DATA.map((testimonial) => (
//             <Grid key={testimonial.id} size={{ xs: 12, sm: 12, xl: 4 }}>
//               <TestimonialCard
//                 name={testimonial.name}
//                 position={testimonial.position}
//                 content={testimonial.content}
//                 company={testimonial.company}
//               />
//             </Grid>
//           ))}
//         </Grid>
//         <Box mt={3}>
//           <StyledPagination />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default TestimonialsBanner;

// // Item wrapper component
// function Item({ children }: { children: React.ReactNode }) {
//   return (
//     <Box
//       sx={{
//         paddingY: "28px",
//         paddingX: "48px",
//         width: "100%",
//         height: "100%",
//         flexShrink: 0,
//         padding: "26px 48px",
//         borderRadius: "25px",
//         border: "1px solid #A8AFB0",
//         background: "#FFF",
//         boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25) inset",
//         transition: "all 0.3s ease-in-out",
//         "&:hover": {
//           background: "#fffbed",
//           boxShadow: "0 6px 10px rgba(0, 0, 0, 0.25)",

//           "& .starRatingBox": {
//             justifyContent: "start !important",
//           },
//           "& .starRatingBox .companyBadge": {
//             background: "#fdce3a",
//           },
//         },
//       }}
//     >
//       {children}
//     </Box>
//   );
// }

import React from "react";
import BannerDivider from "../../atomic-elements/bannerDivider";
import GradientText from "../../atomic-elements/gradientText";
import { Box, Container, Grid, Typography } from "@mui/material";
import StyledPagination from "../../atomic-elements/pagenation";

const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Terry Wolvert",
    position: "CEO",
    company: "Digitalrep, LLC, USA",
    content:
      "“Arus and Elan have been invaluable software developers and partners who never miss deadlines. The entire Arus group seamlessly integrated with our internal development staff to deliver best-in-class solutions. The Arus partnership has delivered invaluable solutions on time and to the highest standard.”",
  },
  {
    id: 2,
    name: "Terry Wolvert",
    position: "CEO",
    company: "Digitalrep, LLC, USA",
    content:
      "“Arus and Elan have been invaluable software developers and partners who never miss deadlines. The entire Arus group seamlessly integrated with our internal development staff to deliver best-in-class solutions. The Arus partnership has delivered invaluable solutions on time and to the highest standard.”",
  },
  {
    id: 3,
    name: "Terry Wolvert",
    position: "CEO",
    company: "Digitalrep, LLC, USA",
    content:
      "“Arus and Elan have been invaluable software developers and partners who never miss deadlines. The entire Arus group seamlessly integrated with our internal development staff to deliver best-in-class solutions. The Arus partnership has delivered invaluable solutions on time and to the highest standard.”",
  },
  {
    id: 4,
    name: "Terry Wolvert",
    position: "CEO",
    company: "Digitalrep, LLC, USA",
    content:
      "“Arus and Elan have been invaluable software developers and partners who never miss deadlines. The entire Arus group seamlessly integrated with our internal development staff to deliver best-in-class solutions. The Arus partnership has delivered invaluable solutions on time and to the highest standard.”",
  },
  {
    id: 5,
    name: "Terry Wolvert",
    position: "CEO",
    company: "Digitalrep, LLC, USA",
    content:
      "“Arus and Elan have been invaluable software developers and partners who never miss deadlines. The entire Arus group seamlessly integrated with our internal development staff to deliver best-in-class solutions. The Arus partnership has delivered invaluable solutions on time and to the highest standard.”",
  },
  {
    id: 6,
    name: "Terry Wolvert",
    position: "CEO",
    company: "Digitalrep, LLC, USA",
    content:
      "“Arus and Elan have been invaluable software developers and partners who never miss deadlines. The entire Arus group seamlessly integrated with our internal development staff to deliver best-in-class solutions. The Arus partnership has delivered invaluable solutions on time and to the highest standard.”",
  },
];

// Common styles
const textStyles = {
  name: {
    color: "#000",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "20px",
    letterSpacing: "0.2px",
  },
  position: {
    mb: "4px",
    background: "linear-gradient(180deg, #FFD12B 0%, #D78E28 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "20px",
    letterSpacing: "0.2px",
  },
  content: {
    maxWidth: "304px",
    color: "#000",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "20px",
    letterSpacing: "0.2px",
  },
  company: {
    color: "#000",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "20px",
    letterSpacing: "0.2px",
  },
};

// Star rating component
const StarRating: React.FC = () => (
  <Box sx={{ display: "flex" }}>
    {[1, 2, 3, 4, 5].map((key) => (
      <svg
        key={key}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M9.15323 5.408C10.4202 3.136 11.0532 2 12.0002 2C12.9472 2 13.5802 3.136 14.8472 5.408L15.1752 5.996C15.5352 6.642 15.7152 6.965 15.9952 7.178C16.2752 7.391 16.6252 7.47 17.3252 7.628L17.9612 7.772C20.4212 8.329 21.6502 8.607 21.9432 9.548C22.2352 10.488 21.3972 11.469 19.7202 13.43L19.2862 13.937C18.8102 14.494 18.5712 14.773 18.4642 15.117C18.3572 15.462 18.3932 15.834 18.4652 16.577L18.5312 17.254C18.7842 19.871 18.9112 21.179 18.1452 21.76C17.3792 22.341 16.2272 21.811 13.9252 20.751L13.3282 20.477C12.6742 20.175 12.3472 20.025 12.0002 20.025C11.6532 20.025 11.3262 20.175 10.6722 20.477L10.0762 20.751C7.77323 21.811 6.62123 22.341 5.85624 21.761C5.08924 21.179 5.21623 19.871 5.46923 17.254L5.53523 16.578C5.60723 15.834 5.64323 15.462 5.53523 15.118C5.42923 14.773 5.19024 14.494 4.71424 13.938L4.28024 13.43C2.60324 11.47 1.76523 10.489 2.05723 9.548C2.34923 8.607 3.58024 8.328 6.04024 7.772L6.67624 7.628C7.37524 7.47 7.72424 7.391 8.00524 7.178C8.28624 6.965 8.46523 6.642 8.82523 5.996L9.15323 5.408Z"
          fill="#FFCD17"
        />
      </svg>
    ))}
  </Box>
);

// Company badge component
const CompanyBadge: React.FC<{ company: string }> = ({ company }) => (
  <Box
    className="companyBadge"
    sx={{
      display: "flex",
      width: "166px",
      padding: "10px",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      borderRadius: "20px",
      background: "#F9F2D9",
      transition: "all 0.3s ease-in-out",
    }}
  >
    <Typography sx={textStyles.company}>{company}</Typography>
  </Box>
);

// Testimonial card component
const TestimonialCard: React.FC<{
  name: string;
  position: string;
  content: string;
  company: string;
}> = ({ name, position, content, company }) => (
  <Item>
    <Box>
      <Typography sx={textStyles.name}>{name}</Typography>
      <Typography sx={textStyles.position}>{position}</Typography>
      <Typography sx={textStyles.content}>{content}</Typography>

      <Box
        className="starRatingBox"
        mt={1}
        gap={"10px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{
          transition: "all 0.3s ease-in-out",
        }}
      >
        <StarRating />
        <CompanyBadge company={company} />
      </Box>
    </Box>
  </Item>
);

// Main component
const TestimonialsBanner: React.FC = () => {
  return (
    <Box>
      <BannerDivider label="Testimonials" />
      <center>
        <Box mb={1}>
          <GradientText labels={["Try", "Trust", "Tell"]} />
        </Box>
      </center>
      <Container maxWidth="xl">
        <Box width={"100%"} maxWidth={"100%"} mx={"auto"} mt={"26px"}>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
          >
            {TESTIMONIALS_DATA.map((testimonial) => (
              <Grid key={testimonial.id} size={{ xs: 12, sm: 12, xl: 4 }}>
                <TestimonialCard
                  name={testimonial.name}
                  position={testimonial.position}
                  content={testimonial.content}
                  company={testimonial.company}
                />
              </Grid>
            ))}
          </Grid>
          <Box mt={3}>
            <StyledPagination />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsBanner;

// Item wrapper component
function Item({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        paddingY: "28px",
        paddingX: "48px",
        width: "100%",
        height: "100%",
        flexShrink: 0,
        padding: "26px 48px",
        borderRadius: "25px",
        border: "1px solid #A8AFB0",
        background: "#FFF",
        boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25) inset",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          background: "#fffbed",
          boxShadow: "0 6px 10px rgba(0, 0, 0, 0.25)",
          transform: "translateY(-2px)",

          // "& .starRatingBox": {
          //   justifyContent: "flex-start !important",
          // },
          "& .companyBadge": {
            background: "#fdce3a",
          },
        },
      }}
    >
      {children}
    </Box>
  );
}
