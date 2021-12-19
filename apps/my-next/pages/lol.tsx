import { GetStaticProps } from "next"

export default function LOL(props: unknown) {
  return <pre>LOL {JSON.stringify(props, null, 4)}</pre>
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    revalidate: 10,
    props: {
      versions: process.versions,
      data: new Date().toISOString()
    }
  }
}
