import { GetServerSideProps } from "next"

export default function LOL(props: unknown) {
  return <pre>SSR {JSON.stringify(props, null, 4)}</pre>
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      versions: process.versions,
      data: new Date().toISOString()
    }
  }
}
