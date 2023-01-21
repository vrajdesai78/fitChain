import Head from 'next/head'
import Title from '@/components/title'
import Layout from '@/components/layout'

const Wellness = () => {
  return (
    <>
    <Head>
      <title>Wellness</title>
      <meta name="description" content="LogChain - Wellness" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <>
        <Title title="Wellness" />
        <div className="px-5">
        </div>
      </>
    </Layout>
  </>
  )
}

export default Wellness