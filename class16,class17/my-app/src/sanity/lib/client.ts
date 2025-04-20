import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token: "skRWInbbtumkzSCqa98a65DQSJEjVE62SrBrFPHBWBJdesdzrkUgvMXyrDIQNS8Kf1NbKpnY1I2l46r0MzsUAY6mrZbvSXgiM0EhhqExXoQkYS7mxQ7qx8JpFzmazOer3VB0UXvJp0VoN84lHUHtenCYbCvuLtfwK3kF48eWPmkSB4gdkvCx",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
