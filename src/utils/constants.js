export const LAMBDA_ENDPOINT = 'https://kvz60gz535.execute-api.us-east-1.amazonaws.com/prod/distance'
export const IS_PROD = process.env.NODE_ENV === 'production'
export const META = {
  common: {
    image: '/images/Shiva_Reddy.jpeg',
  },
  index: {
    title: 'Shiva Reddy',
    description: 'Shiva Reddy personal Portfolio '
  },
  profile: {
    title: 'Shiva Reddy | Profile',
    description: 'Over the last 8+ years, I have been working with small- and medium-size companies.'
  },
  works: {
    title: 'Shiva Reddy | Works',
    description: 'A selection of the work carried out over 8+ years of work. Among which: Websites, Web applications, coordinated images and more.'
  }
}
