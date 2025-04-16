import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, CardActionArea, Chip, Container } from '@mui/material';
import Layout from '../components/Layout';
import Section from '../components/Section';
import { Link as RouterLink } from 'react-router-dom';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: 'Brittany Estates Construction Update - Spring 2023',
    excerpt: 'Get the latest news on construction progress at Brittany Estates, including completed homes, infrastructure developments, and upcoming phases.',
    imageUrl: 'https://images.unsplash.com/photo-1626885930974-c58da8acf3ca?ixlib=rb-4.0.3',
    date: 'May 15, 2023',
    category: 'Construction Updates',
    readTime: '4 min read'
  },
  {
    id: 2,
    title: 'Interior Design Trends for Luxury Homes in 2023',
    excerpt: 'Explore the latest interior design trends for luxury homes and get inspiration for customizing your Brittany Estates residence.',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3',
    date: 'April 28, 2023',
    category: 'Design Inspiration',
    readTime: '6 min read'
  },
  {
    id: 3,
    title: 'Exploring Northport: Local Attractions and Activities',
    excerpt: 'Discover the wealth of attractions, restaurants, and activities in and around Northport that make it such a desirable location.',
    imageUrl: 'https://images.unsplash.com/photo-1575368310565-e8563c1ee8e1?ixlib=rb-4.0.3',
    date: 'April 10, 2023',
    category: 'Community',
    readTime: '5 min read'
  },
  {
    id: 4,
    title: 'Sustainable Building Practices at Brittany Estates',
    excerpt: 'Learn about the eco-friendly and sustainable building practices we implement at Brittany Estates to create healthier, more efficient homes.',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3',
    date: 'March 22, 2023',
    category: 'Sustainability',
    readTime: '7 min read'
  },
  {
    id: 5,
    title: 'The Benefits of Custom Home Building',
    excerpt: 'Explore the advantages of building a custom home versus purchasing a pre-built property, and how Brittany Estates offers the best of both worlds.',
    imageUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3',
    date: 'March 8, 2023',
    category: 'Home Building',
    readTime: '5 min read'
  },
  {
    id: 6,
    title: 'Long Island Real Estate Market: 2023 Forecast',
    excerpt: 'Get insights into the current Long Island real estate market trends and forecasts for the year ahead.',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3',
    date: 'February 15, 2023',
    category: 'Market Trends',
    readTime: '8 min read'
  },
];

const BlogPage: React.FC = () => {
  return (
    <Layout>
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontFamily: '"Playfair Display", serif' }}
          >
            Brittany Estates Blog
          </Typography>
          <Typography variant="h6">
            News, updates, and insights about our community and luxury home building
          </Typography>
        </Container>
      </Box>

      <Section
        title="Latest Articles"
        subtitle="Stay informed with the latest news and information about Brittany Estates"
      >
        <Box sx={{ flexGrow: 1, mb: 6 }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {blogPosts.map((post) => (
              <Box key={post.id} sx={{ width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.333% - 16px)' } }}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardActionArea component={RouterLink} to={`/blog/${post.id}`}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={post.imageUrl}
                      alt={post.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Chip 
                          label={post.category} 
                          size="small" 
                          color="primary" 
                          sx={{ 
                            fontWeight: 'medium', 
                            borderRadius: '4px',
                            backgroundColor: 'rgba(43, 74, 56, 0.1)',
                            color: 'primary.main', 
                          }} 
                        />
                        <Typography variant="caption" color="text.secondary">
                          {post.date}
                        </Typography>
                      </Box>
                      
                      <Typography 
                        variant="h6" 
                        component="h3" 
                        gutterBottom 
                        sx={{ fontWeight: 'bold', lineHeight: 1.3 }}
                      >
                        {post.title}
                      </Typography>
                      
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {post.excerpt}
                      </Typography>
                      
                      <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="caption" color="text.secondary">
                          {post.readTime}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          color="primary" 
                          sx={{ fontWeight: 'medium' }}
                        >
                          Read More
                        </Typography>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            textAlign: 'center',
            p: 4,
            bgcolor: 'rgba(43, 74, 56, 0.05)',
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif' }}>
            Subscribe to Our Newsletter
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stay up-to-date with the latest news, events, and updates from Brittany Estates.
            <br />Contact us to sign up for our monthly newsletter.
          </Typography>
        </Box>
      </Section>
    </Layout>
  );
};

export default BlogPage; 