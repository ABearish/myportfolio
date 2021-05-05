import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'vk4hf25f',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: true
});